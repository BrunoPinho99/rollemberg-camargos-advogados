import crypto from "node:crypto";

export const BOOKING_TIMEZONE = "America/Sao_Paulo";
export const SLOT_DURATION_MINUTES = 30;

// Horários comerciais padrão do escritório (Segunda a Sexta, Horário de Brasília)
export const DEFAULT_BUSINESS_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
];

// Antecedência mínima de 45 minutos para agendamentos no mesmo dia
const MIN_ADVANCE_MS = 45 * 60 * 1000;

export class SlotUnavailableError extends Error {
  constructor(message = "Este horário acabou de ser preenchido. Escolha outro horário.") {
    super(message);
    this.name = "SlotUnavailableError";
  }
}

export function isGoogleCalendarConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_CLIENT_ID?.trim() &&
      process.env.GOOGLE_CLIENT_SECRET?.trim() &&
      process.env.GOOGLE_REFRESH_TOKEN?.trim()
  );
}

export function getCalendarId(): string {
  return process.env.GOOGLE_CALENDAR_ID?.trim() || "primary";
}

export async function getGoogleAccessToken(): Promise<string> {
  const clientId = process.env.GOOGLE_CLIENT_ID?.trim();
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET?.trim();
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN?.trim();

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Credenciais OAuth2 do Google Calendar não configuradas.");
  }

  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
    grant_type: "refresh_token",
  });

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Falha ao autenticar no Google OAuth2: ${errorText}`);
  }

  const data = (await response.json()) as { access_token?: string };
  if (!data.access_token) {
    throw new Error("Token de acesso não retornado pelo Google OAuth2.");
  }

  return data.access_token;
}

export function isValidDateString(dateStr: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return false;
  const [y, m, d] = dateStr.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d, 12, 0, 0));
  return (
    dt.getUTCFullYear() === y &&
    dt.getUTCMonth() === m - 1 &&
    dt.getUTCDate() === d
  );
}

export function isValidTimeString(timeStr: string): boolean {
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(timeStr);
}

export function isWeekendDate(dateStr: string): boolean {
  const [y, m, d] = dateStr.split("-").map(Number);
  const day = new Date(Date.UTC(y, m - 1, d, 12, 0, 0)).getUTCDay();
  return day === 0 || day === 6;
}

/**
 * Converte data (YYYY-MM-DD) e hora (HH:mm) em timestamps ISO-8601 no fuso de Brasília (-03:00).
 */
export function buildSlotIsoRange(
  dateStr: string,
  timeStr: string,
  durationMinutes = SLOT_DURATION_MINUTES
): { startIso: string; endIso: string; startMs: number; endMs: number } {
  const startIso = `${dateStr}T${timeStr}:00-03:00`;
  const startMs = new Date(startIso).getTime();
  const endMs = startMs + durationMinutes * 60 * 1000;

  // Converter endMs de volta para string ISO em UTC-3 (-03:00)
  const spOffsetMs = -3 * 60 * 60 * 1000;
  const endLocal = new Date(endMs + spOffsetMs);
  const yyyy = endLocal.getUTCFullYear();
  const mm = String(endLocal.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(endLocal.getUTCDate()).padStart(2, "0");
  const hh = String(endLocal.getUTCHours()).padStart(2, "0");
  const min = String(endLocal.getUTCMinutes()).padStart(2, "0");
  const endIso = `${yyyy}-${mm}-${dd}T${hh}:${min}:00-03:00`;

  return { startIso, endIso, startMs, endMs };
}

interface BusyInterval {
  start: string;
  end: string;
}

async function fetchBusyIntervals(
  accessToken: string,
  calendarId: string,
  timeMin: string,
  timeMax: string
): Promise<BusyInterval[]> {
  const response = await fetch("https://www.googleapis.com/calendar/v3/freeBusy", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      timeMin,
      timeMax,
      timeZone: BOOKING_TIMEZONE,
      items: [{ id: calendarId }],
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Erro ao consultar disponibilidade no Google Calendar: ${errText}`);
  }

  const data = (await response.json()) as {
    calendars?: Record<string, { busy?: BusyInterval[]; errors?: unknown[] }>;
  };

  return data.calendars?.[calendarId]?.busy ?? [];
}

export async function getAvailableSlotsForDate(dateStr: string): Promise<{
  slots: string[];
  configured: boolean;
}> {
  if (!isValidDateString(dateStr) || isWeekendDate(dateStr)) {
    return { slots: [], configured: isGoogleCalendarConfigured() };
  }

  const nowThreshold = Date.now() + MIN_ADVANCE_MS;

  // Filtra horários que já passaram no dia de hoje
  const candidateSlots = DEFAULT_BUSINESS_SLOTS.filter((timeStr) => {
    const { startMs } = buildSlotIsoRange(dateStr, timeStr);
    return startMs > nowThreshold;
  });

  if (candidateSlots.length === 0) {
    return { slots: [], configured: isGoogleCalendarConfigured() };
  }

  if (!isGoogleCalendarConfigured()) {
    return { slots: candidateSlots, configured: false };
  }

  const accessToken = await getGoogleAccessToken();
  const calendarId = getCalendarId();
  const timeMin = `${dateStr}T00:00:00-03:00`;
  const timeMax = `${dateStr}T23:59:59-03:00`;

  const busyIntervals = await fetchBusyIntervals(
    accessToken,
    calendarId,
    timeMin,
    timeMax
  );

  const parsedBusy = busyIntervals.map((b) => ({
    startMs: new Date(b.start).getTime(),
    endMs: new Date(b.end).getTime(),
  }));

  const freeSlots = candidateSlots.filter((timeStr) => {
    const { startMs, endMs } = buildSlotIsoRange(dateStr, timeStr);
    return !parsedBusy.some(
      (busy) => startMs < busy.endMs && endMs > busy.startMs
    );
  });

  return { slots: freeSlots, configured: true };
}

export interface CreateBookingInput {
  name: string;
  whatsapp: string;
  email?: string;
  date: string;
  time: string;
}

export interface CreateBookingResult {
  configured: boolean;
  meetLink: string | null;
  calendarEventUrl: string | null;
  eventId: string | null;
  startIso: string;
  endIso: string;
}

export async function notifyLeadWebhook(payload: Record<string, unknown>): Promise<void> {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL?.trim();
  if (!webhookUrl) return;

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "rollemberg-camargos-site",
        timestamp: new Date().toISOString(),
        ...payload,
      }),
      cache: "no-store",
    });
  } catch (err) {
    console.error("[LeadWebhook] Falha ao notificar webhook:", err);
  }
}

export async function createGoogleMeetBooking(
  input: CreateBookingInput
): Promise<CreateBookingResult> {
  const { name, whatsapp, email, date, time } = input;

  if (!isValidDateString(date) || isWeekendDate(date)) {
    throw new Error("Data selecionada inválida ou fora de dias úteis.");
  }

  if (!isValidTimeString(time) || !DEFAULT_BUSINESS_SLOTS.includes(time)) {
    throw new Error("Horário selecionado inválido.");
  }

  const { startIso, endIso, startMs, endMs } = buildSlotIsoRange(date, time);
  if (startMs <= Date.now()) {
    throw new SlotUnavailableError("Este horário já passou. Selecione um horário futuro.");
  }

  const cleanDigits = whatsapp.replace(/\D/g, "");
  const waNumber = cleanDigits.startsWith("55") ? cleanDigits : `55${cleanDigits}`;
  const cleanEmail = email?.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ? email.trim()
    : undefined;

  if (!isGoogleCalendarConfigured()) {
    await notifyLeadWebhook({
      event: "meeting_scheduled_preview",
      name,
      whatsapp,
      whatsappLink: `https://wa.me/${waNumber}`,
      email: cleanEmail ?? null,
      date,
      time,
      startIso,
      endIso,
    });

    return {
      configured: false,
      meetLink: null,
      calendarEventUrl: null,
      eventId: null,
      startIso,
      endIso,
    };
  }

  const accessToken = await getGoogleAccessToken();
  const calendarId = getCalendarId();

  // Dupla checagem em tempo real para impedir conflito de agenda
  const busyNow = await fetchBusyIntervals(accessToken, calendarId, startIso, endIso);
  const hasConflict = busyNow.some((b) => {
    const bStart = new Date(b.start).getTime();
    const bEnd = new Date(b.end).getTime();
    return startMs < bEnd && endMs > bStart;
  });

  if (hasConflict) {
    throw new SlotUnavailableError();
  }

  const descriptionLines = [
    "Reunião agendada diretamente pelo site da Rollemberg & Camargos Advogados.",
    "",
    `• Nome completo: ${name}`,
    `• WhatsApp: ${whatsapp} (https://wa.me/${waNumber})`,
    ...(cleanEmail ? [`• E-mail: ${cleanEmail}`] : []),
  ];

  const eventPayload: Record<string, unknown> = {
    summary: `Conversa Diagnóstica — ${name} | Rollemberg & Camargos`,
    description: descriptionLines.join("\n"),
    start: {
      dateTime: startIso,
      timeZone: BOOKING_TIMEZONE,
    },
    end: {
      dateTime: endIso,
      timeZone: BOOKING_TIMEZONE,
    },
    conferenceData: {
      createRequest: {
        requestId: `rc-${crypto.randomUUID()}`,
        conferenceSolutionKey: {
          type: "hangoutsMeet",
        },
      },
    },
    reminders: {
      useDefault: false,
      overrides: [
        { method: "email", minutes: 60 },
        { method: "popup", minutes: 15 },
      ],
    },
  };

  if (cleanEmail) {
    eventPayload.attendees = [{ email: cleanEmail, displayName: name }];
  }

  const sendUpdates = cleanEmail ? "all" : "none";
  const createUrl = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
    calendarId
  )}/events?conferenceDataVersion=1&sendUpdates=${sendUpdates}`;

  const createResponse = await fetch(createUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventPayload),
    cache: "no-store",
  });

  if (!createResponse.ok) {
    const errText = await createResponse.text();
    throw new Error(`Falha ao criar reunião no Google Calendar: ${errText}`);
  }

  const createdEvent = (await createResponse.json()) as {
    id?: string;
    htmlLink?: string;
    hangoutLink?: string;
    conferenceData?: {
      entryPoints?: { entryPointType?: string; uri?: string }[];
    };
  };

  const meetLink =
    createdEvent.hangoutLink ||
    createdEvent.conferenceData?.entryPoints?.find(
      (ep) => ep.entryPointType === "video"
    )?.uri ||
    null;

  await notifyLeadWebhook({
    event: "meeting_scheduled",
    name,
    whatsapp,
    whatsappLink: `https://wa.me/${waNumber}`,
    email: cleanEmail ?? null,
    date,
    time,
    startIso,
    endIso,
    meetLink,
    eventId: createdEvent.id ?? null,
  });

  return {
    configured: true,
    meetLink,
    calendarEventUrl: createdEvent.htmlLink ?? null,
    eventId: createdEvent.id ?? null,
    startIso,
    endIso,
  };
}

