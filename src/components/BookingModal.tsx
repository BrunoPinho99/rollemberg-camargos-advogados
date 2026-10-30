"use client";

import { useEffect, useState, useMemo, FormEvent } from "react";
import {
  X,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  Video,
  Copy,
  Check,
  ArrowRight,
  ArrowLeft,
  Loader2,
  ExternalLink,
} from "lucide-react";
import { useMotion } from "./MotionProvider";
import { SiteCopy } from "@/content/siteCopy";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  copy: SiteCopy;
}

type BookingStep = "lead" | "calendar" | "confirmed";

interface BookingConfirmation {
  configured: boolean;
  meetLink: string | null;
  calendarEventUrl: string | null;
  date: string;
  time: string;
  startIso: string;
  endIso: string;
}

const MONTH_NAMES_PT = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const WEEKDAY_SHORT_PT = ["D", "S", "T", "Q", "Q", "S", "S"];

const WEEKDAY_FULL_PT = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

function formatWhatsAppMask(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function toYMD(year: number, monthIndex: number, day: number): string {
  const mm = String(monthIndex + 1).padStart(2, "0");
  const dd = String(day).padStart(2, "0");
  return `${year}-${mm}-${dd}`;
}

function getTodayInSaoPaulo(): {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  ymd: string;
} {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const get = (type: string) =>
    Number(parts.find((p) => p.type === type)?.value ?? 0);

  const year = get("year");
  const month = get("month") - 1;
  const day = get("day");
  const hour = get("hour");
  const minute = get("minute");

  return {
    year,
    month,
    day,
    hour,
    minute,
    ymd: toYMD(year, month, day),
  };
}

function getInitialBusinessDate(): {
  ymd: string;
  year: number;
  month: number;
} {
  const sp = getTodayInSaoPaulo();
  const cursor = new Date(Date.UTC(sp.year, sp.month, sp.day, 12, 0, 0));

  // Se já passou das 16:45 em Brasília, sugere o próximo dia útil
  if (sp.hour > 16 || (sp.hour === 16 && sp.minute >= 45)) {
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }

  while (cursor.getUTCDay() === 0 || cursor.getUTCDay() === 6) {
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }

  const y = cursor.getUTCFullYear();
  const m = cursor.getUTCMonth();
  const d = cursor.getUTCDate();
  return { ymd: toYMD(y, m, d), year: y, month: m };
}

function formatDateLongPt(ymd: string): string {
  const [y, m, d] = ymd.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d, 12, 0, 0));
  const weekday = WEEKDAY_FULL_PT[dt.getUTCDay()];
  const monthName = MONTH_NAMES_PT[m - 1].toLowerCase();
  return `${weekday}, ${d} de ${monthName}`;
}

function addThirtyMinutesLabel(timeStr: string): string {
  const [h, m] = timeStr.split(":").map(Number);
  const total = h * 60 + m + 30;
  const endH = String(Math.floor(total / 60) % 24).padStart(2, "0");
  const endM = String(total % 60).padStart(2, "0");
  return `${endH}:${endM}`;
}

function toGoogleCalendarUtcStamp(isoStr: string): string {
  const d = new Date(isoStr);
  return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

export default function BookingModal({
  isOpen,
  onClose,
  copy,
}: BookingModalProps) {
  const { lenis } = useMotion();

  const initialDate = useMemo(() => getInitialBusinessDate(), []);
  const todaySp = useMemo(() => getTodayInSaoPaulo(), []);

  const [step, setStep] = useState<BookingStep>("lead");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [leadError, setLeadError] = useState<string | null>(null);

  const [viewYear, setViewYear] = useState(initialDate.year);
  const [viewMonth, setViewMonth] = useState(initialDate.month);
  const [selectedDate, setSelectedDate] = useState(initialDate.ymd);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [slotsRefreshKey, setSlotsRefreshKey] = useState(0);

  const [isBooking, setIsBooking] = useState(false);
  const [bookingError, setBookingError] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<BookingConfirmation | null>(
    null
  );
  const [copiedMeet, setCopiedMeet] = useState(false);
  const [isLocalhost, setIsLocalhost] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLocalhost(
        window.location.hostname === "localhost" ||
          window.location.hostname === "127.0.0.1"
      );
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "unset";
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = "unset";
    };
  }, [isOpen, lenis]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && !isBooking) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isBooking, onClose]);

  // Busca horários disponíveis no backend (Google Calendar FreeBusy) ao trocar de data no Passo 2
  useEffect(() => {
    if (!isOpen || step !== "calendar" || !selectedDate) return;

    const controller = new AbortController();
    setIsLoadingSlots(true);
    setSelectedTime(null);
    setBookingError(null);

    fetch(`/api/booking/availability?date=${selectedDate}`, {
      signal: controller.signal,
      cache: "no-store",
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("Falha ao carregar horários");
        return res.json() as Promise<{ slots?: string[] }>;
      })
      .then((data) => {
        setAvailableSlots(data.slots ?? []);
      })
      .catch((err: unknown) => {
        if (err instanceof Error && err.name === "AbortError") return;
        setAvailableSlots([]);
        setBookingError(
          "Não foi possível consultar a agenda neste momento. Tente selecionar outra data."
        );
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setIsLoadingSlots(false);
        }
      });

    return () => controller.abort();
  }, [isOpen, step, selectedDate, slotsRefreshKey]);

  const calendarDays = useMemo(() => {
    const firstDayWeekday = new Date(
      Date.UTC(viewYear, viewMonth, 1, 12, 0, 0)
    ).getUTCDay();
    const totalDays = new Date(
      Date.UTC(viewYear, viewMonth + 1, 0, 12, 0, 0)
    ).getUTCDate();

    const cells: Array<{
      day: number;
      ymd: string;
      disabled: boolean;
      isToday: boolean;
    } | null> = [];

    for (let i = 0; i < firstDayWeekday; i++) {
      cells.push(null);
    }

    for (let day = 1; day <= totalDays; day++) {
      const ymd = toYMD(viewYear, viewMonth, day);
      const weekday = new Date(
        Date.UTC(viewYear, viewMonth, day, 12, 0, 0)
      ).getUTCDay();
      const isWeekend = weekday === 0 || weekday === 6;
      const isPast = ymd < todaySp.ymd;

      cells.push({
        day,
        ymd,
        disabled: isWeekend || isPast,
        isToday: ymd === todaySp.ymd,
      });
    }

    return cells;
  }, [viewYear, viewMonth, todaySp.ymd]);

  const canGoPrevMonth =
    viewYear > todaySp.year ||
    (viewYear === todaySp.year && viewMonth > todaySp.month);

  if (!isOpen) return null;

  const handleCloseModal = () => {
    if (isBooking) return;
    onClose();
    setTimeout(() => {
      setStep("lead");
      setLeadError(null);
      setBookingError(null);
      setSelectedTime(null);
      setConfirmation(null);
      setCopiedMeet(false);
    }, 250);
  };

  const handleLeadSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const digits = whatsapp.replace(/\D/g, "");

    if (trimmedName.length < 3) {
      setLeadError("Por favor, informe seu nome completo.");
      return;
    }

    if (digits.length < 10) {
      setLeadError("Informe um número de WhatsApp válido com DDD.");
      return;
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setLeadError("Informe um e-mail válido ou deixe o campo em branco.");
      return;
    }

    setLeadError(null);

    // Captura imediata do lead no Passo 1 (não bloqueia a transição)
    fetch("/api/booking/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: trimmedName,
        whatsapp,
        email: email.trim() || undefined,
      }),
    }).catch(() => {});

    setStep("calendar");
  };

  const handlePrevMonth = () => {
    if (!canGoPrevMonth) return;
    if (viewMonth === 0) {
      setViewYear((y) => y - 1);
      setViewMonth(11);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewYear((y) => y + 1);
      setViewMonth(0);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const handleConfirmBooking = async () => {
    if (!selectedDate || !selectedTime || isBooking) return;

    setIsBooking(true);
    setBookingError(null);

    try {
      const res = await fetch("/api/booking/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          whatsapp,
          email: email.trim() || undefined,
          date: selectedDate,
          time: selectedTime,
        }),
      });

      const data = (await res.json()) as {
        ok?: boolean;
        error?: string;
        configured?: boolean;
        meetLink?: string | null;
        calendarEventUrl?: string | null;
        startIso?: string;
        endIso?: string;
      };

      if (!res.ok || !data.ok) {
        if (res.status === 409) {
          setSlotsRefreshKey((k) => k + 1);
        }
        setBookingError(
          data.error || "Não foi possível agendar este horário. Tente outro."
        );
        return;
      }

      setConfirmation({
        configured: Boolean(data.configured),
        meetLink: data.meetLink ?? null,
        calendarEventUrl: data.calendarEventUrl ?? null,
        date: selectedDate,
        time: selectedTime,
        startIso: data.startIso ?? `${selectedDate}T${selectedTime}:00-03:00`,
        endIso:
          data.endIso ??
          `${selectedDate}T${addThirtyMinutesLabel(selectedTime)}:00-03:00`,
      });
      setStep("confirmed");
    } catch {
      setBookingError(
        "Erro de conexão ao confirmar a reunião. Verifique sua internet e tente novamente."
      );
    } finally {
      setIsBooking(false);
    }
  };

  const handleCopyMeetLink = () => {
    if (!confirmation?.meetLink) return;
    navigator.clipboard.writeText(confirmation.meetLink);
    setCopiedMeet(true);
    setTimeout(() => setCopiedMeet(false), 2200);
  };

  // Links úteis para a tela de confirmação (WhatsApp do escritório + Salvar na própria Google Agenda)
  const firmPhoneDigits = copy.contact.phone.replace(/\D/g, "");
  const whatsappConfirmationUrl = confirmation
    ? (() => {
        const lines = [
          `Olá! Acabei de agendar nossa conversa diagnóstica pelo site da ${copy.brand.name} Advogados.`,
          "",
          `• Nome: ${name.trim()}`,
          `• WhatsApp: ${whatsapp}`,
          `• Data: ${formatDateLongPt(confirmation.date)}`,
          `• Horário: ${confirmation.time} às ${addThirtyMinutesLabel(confirmation.time)} (BRT)`,
          ...(confirmation.meetLink
            ? [`• Sala Google Meet: ${confirmation.meetLink}`]
            : []),
        ];
        return `https://wa.me/${firmPhoneDigits}?text=${encodeURIComponent(
          lines.join("\n")
        )}`;
      })()
    : "#";

  const addToUserGoogleCalendarUrl = confirmation
    ? (() => {
        const dates = `${toGoogleCalendarUtcStamp(
          confirmation.startIso
        )}/${toGoogleCalendarUtcStamp(confirmation.endIso)}`;
        const details = confirmation.meetLink
          ? `Conversa diagnóstica com Rollemberg & Camargos Advogados.\n\nLink da reunião no Google Meet: ${confirmation.meetLink}`
          : "Conversa diagnóstica com Rollemberg & Camargos Advogados.";
        const url = new URL("https://calendar.google.com/calendar/render");
        url.searchParams.set("action", "TEMPLATE");
        url.searchParams.set(
          "text",
          "Reunião — Rollemberg & Camargos Advogados"
        );
        url.searchParams.set("dates", dates);
        url.searchParams.set("details", details);
        if (confirmation.meetLink) {
          url.searchParams.set("location", confirmation.meetLink);
        }
        return url.toString();
      })()
    : "#";

  return (
    <div
      onClick={handleCloseModal}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-md animate-fade-in"
    >
      <div
        data-lenis-prevent
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full ${
          step === "calendar" ? "max-w-2xl" : "max-w-lg"
        } max-h-[92svh] overflow-y-auto rounded-2xl bg-[#fcfbf7] border border-[#e8e6df] p-6 sm:p-8 shadow-2xl transition-all duration-300`}
      >
        {/* Cabeçalho do Modal */}
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#e8e6df]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#6e6d69]">
                {copy.brand.name} {copy.brand.tagline}
              </span>
              {step !== "confirmed" && (
                <>
                  <span className="text-[#101010]/20">•</span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#2E3C44] font-semibold">
                    {step === "lead" ? "Passo 1 de 2" : "Passo 2 de 2"}
                  </span>
                </>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#101010]">
              {step === "lead" && "Vamos conversar sobre o seu negócio"}
              {step === "calendar" && "Escolha o melhor dia e horário"}
              {step === "confirmed" && "Reunião agendada com sucesso"}
            </h3>
          </div>

          <button
            onClick={handleCloseModal}
            disabled={isBooking}
            className="p-2 -mr-1 text-[#6e6d69] hover:text-[#101010] rounded-full hover:bg-neutral-200/60 transition-colors cursor-pointer disabled:opacity-40"
            aria-label="Fechar janela de agendamento"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* PASSO 1: CAPTURA DE NOME COMPLETO + WHATSAPP */}
        {step === "lead" && (
          <form onSubmit={handleLeadSubmit} className="mt-6 space-y-4">
            <p className="text-sm text-[#6e6d69] leading-relaxed">
              Informe seu nome e WhatsApp para liberarmos a agenda e gerarmos
              automaticamente sua sala de reunião no{" "}
              <strong className="font-medium text-[#101010]">Google Meet</strong>.
            </p>

            <div>
              <label
                htmlFor="bookingFullName"
                className="block text-xs font-semibold uppercase tracking-wider text-[#101010] mb-1.5"
              >
                Nome Completo *
              </label>
              <input
                id="bookingFullName"
                type="text"
                required
                autoFocus
                placeholder="Digite seu nome completo"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (leadError) setLeadError(null);
                }}
                className="w-full px-4 py-3.5 rounded-xl border border-[#e8e6df] bg-white text-sm text-[#101010] placeholder:text-[#6e6d69]/60 focus:outline-none focus:border-[#2E3C44] transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="bookingWhatsApp"
                className="block text-xs font-semibold uppercase tracking-wider text-[#101010] mb-1.5"
              >
                WhatsApp com DDD *
              </label>
              <input
                id="bookingWhatsApp"
                type="tel"
                required
                placeholder="(11) 99999-9999"
                value={whatsapp}
                onChange={(e) => {
                  setWhatsapp(formatWhatsAppMask(e.target.value));
                  if (leadError) setLeadError(null);
                }}
                className="w-full px-4 py-3.5 rounded-xl border border-[#e8e6df] bg-white text-sm text-[#101010] placeholder:text-[#6e6d69]/60 focus:outline-none focus:border-[#2E3C44] transition-colors"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="bookingEmail"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#101010]"
                >
                  E-mail para convite na agenda
                </label>
                <span className="text-[11px] text-[#6e6d69]">Opcional</span>
              </div>
              <input
                id="bookingEmail"
                type="email"
                placeholder="seu@email.com (receba o convite automático)"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (leadError) setLeadError(null);
                }}
                className="w-full px-4 py-3 rounded-xl border border-[#e8e6df] bg-white text-sm text-[#101010] placeholder:text-[#6e6d69]/60 focus:outline-none focus:border-[#2E3C44] transition-colors"
              />
            </div>

            {leadError && (
              <div className="px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                {leadError}
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                className="btn-pill w-full py-4 px-6 rounded-xl bg-[#101010] hover:bg-[#2E3C44] text-white font-medium text-sm inline-flex items-center justify-center gap-2.5 transition-all duration-200 shadow-md cursor-pointer"
              >
                <span>Escolher dia e horário</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* PASSO 2: CALENDÁRIO EXCLUSIVO + HORÁRIOS DO GOOGLE CALENDAR */}
        {step === "calendar" && (
          <div className="mt-5 space-y-5">
            {/* Barra de resumo do contato capturado no Passo 1 */}
            <div className="flex flex-wrap items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl bg-white border border-[#e8e6df] text-xs">
              <div className="flex items-center gap-2 text-[#101010] truncate">
                <button
                  type="button"
                  onClick={() => setStep("lead")}
                  disabled={isBooking}
                  className="inline-flex items-center gap-1 text-[#2E3C44] font-semibold hover:underline cursor-pointer shrink-0"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Editar</span>
                </button>
                <span className="text-[#101010]/25">|</span>
                <span className="font-medium truncate">{name.trim()}</span>
                <span className="text-[#6e6d69] shrink-0">· {whatsapp}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#2E3C44]/10 text-[#2E3C44] font-medium text-[11px]">
                <Video className="w-3.5 h-3.5" />
                <span>Google Meet · 30 min</span>
              </div>
            </div>

            {/* Grid Lado a Lado: Calendário Mensal + Horários */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              {/* Coluna Esquerda: Calendário Mensal Nativo */}
              <div className="md:col-span-7 p-4 sm:p-5 rounded-2xl bg-white border border-[#e8e6df]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-[#101010] tracking-tight">
                    {MONTH_NAMES_PT[viewMonth]} {viewYear}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={handlePrevMonth}
                      disabled={!canGoPrevMonth}
                      aria-label="Mês anterior"
                      className="p-1.5 rounded-lg text-[#101010] hover:bg-[#fcfbf7] border border-transparent hover:border-[#e8e6df] disabled:opacity-25 disabled:pointer-events-none transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextMonth}
                      aria-label="Próximo mês"
                      className="p-1.5 rounded-lg text-[#101010] hover:bg-[#fcfbf7] border border-transparent hover:border-[#e8e6df] transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Cabeçalho dos dias da semana */}
                <div className="grid grid-cols-7 gap-1 mb-2 text-center">
                  {WEEKDAY_SHORT_PT.map((label, idx) => (
                    <span
                      key={`wk-${idx}`}
                      className="text-[11px] font-semibold uppercase text-[#6e6d69]/80 py-1"
                    >
                      {label}
                    </span>
                  ))}
                </div>

                {/* Dias do mês */}
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((cell, idx) => {
                    if (!cell) {
                      return <div key={`empty-${idx}`} className="h-9 sm:h-10" />;
                    }

                    const isSelected = cell.ymd === selectedDate;
                    return (
                      <button
                        key={cell.ymd}
                        type="button"
                        disabled={cell.disabled || isBooking}
                        onClick={() => setSelectedDate(cell.ymd)}
                        className={`relative h-9 sm:h-10 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-center ${
                          isSelected
                            ? "bg-[#2E3C44] text-white shadow-sm font-semibold"
                            : cell.disabled
                            ? "text-[#101010]/25 cursor-not-allowed"
                            : "text-[#101010] hover:bg-[#fcfbf7] hover:border hover:border-[#e8e6df] cursor-pointer"
                        }`}
                      >
                        <span>{cell.day}</span>
                        {cell.isToday && !isSelected && (
                          <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[#2E3C44]" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Coluna Direita: Horários Livres */}
              <div className="md:col-span-5 p-4 sm:p-5 rounded-2xl bg-white border border-[#e8e6df] flex flex-col">
                <div className="pb-3 mb-3 border-b border-[#e8e6df]">
                  <span className="block text-xs font-semibold text-[#101010]">
                    {formatDateLongPt(selectedDate)}
                  </span>
                  <span className="text-[11px] text-[#6e6d69] flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3" />
                    Horário de Brasília (BRT)
                  </span>
                </div>

                {isLoadingSlots ? (
                  <div className="flex-1 py-10 flex flex-col items-center justify-center text-center gap-2 text-[#6e6d69]">
                    <Loader2 className="w-5 h-5 animate-spin text-[#2E3C44]" />
                    <span className="text-xs">Verificando agenda...</span>
                  </div>
                ) : availableSlots.length === 0 ? (
                  <div className="flex-1 py-8 flex flex-col items-center justify-center text-center px-2">
                    <p className="text-xs text-[#6e6d69] leading-relaxed">
                      Nenhum horário livre nesta data. Selecione outro dia útil
                      no calendário.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2 max-h-[230px] overflow-y-auto pr-1">
                    {availableSlots.map((slot) => {
                      const active = selectedTime === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          disabled={isBooking}
                          onClick={() => setSelectedTime(slot)}
                          className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-medium border transition-all cursor-pointer ${
                            active
                              ? "bg-[#101010] text-white border-[#101010] shadow-sm"
                              : "bg-[#fcfbf7] text-[#101010] border-[#e8e6df] hover:border-[#2E3C44]"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {bookingError && (
              <div className="px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                {bookingError}
              </div>
            )}

            {/* Botão de Confirmação Final */}
            <button
              type="button"
              disabled={!selectedTime || isBooking}
              onClick={handleConfirmBooking}
              className="btn-pill w-full py-4 px-6 rounded-xl bg-[#101010] hover:bg-[#2E3C44] disabled:bg-[#101010]/25 disabled:cursor-not-allowed text-white font-medium text-sm inline-flex items-center justify-center gap-2.5 transition-all duration-200 shadow-md cursor-pointer"
            >
              {isBooking ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Gerando sala no Google Meet...</span>
                </>
              ) : selectedTime ? (
                <>
                  <Video className="w-4 h-4" />
                  <span>
                    Agendar reunião no Google Meet · {selectedTime}
                  </span>
                </>
              ) : (
                <span>Selecione um horário para continuar</span>
              )}
            </button>
          </div>
        )}

        {/* PASSO 3: TELA DE CONFIRMAÇÃO COM LINK DO GOOGLE MEET + WHATSAPP */}
        {step === "confirmed" && confirmation && (
          <div className="mt-6 space-y-5">
            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80">
              <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-[#101010]">
                  Tudo certo, {name.trim().split(" ")[0]}!
                </h4>
                <p className="text-xs text-[#6e6d69] leading-relaxed">
                  {confirmation.meetLink
                    ? "Sua conversa diagnóstica foi registrada na nossa agenda e sua sala exclusiva do Google Meet já está pronta."
                    : "Seu horário foi reservado com a nossa equipe. Confira os detalhes abaixo."}
                </p>
              </div>
            </div>

            {/* Resumo da Reunião */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#e8e6df] space-y-3 text-sm">
              <div className="flex items-center gap-3 text-[#101010]">
                <Calendar className="w-4 h-4 text-[#2E3C44] shrink-0" />
                <span className="font-medium">
                  {formatDateLongPt(confirmation.date)}
                </span>
              </div>
              <div className="flex items-center gap-3 text-[#101010]">
                <Clock className="w-4 h-4 text-[#2E3C44] shrink-0" />
                <span>
                  {confirmation.time} às{" "}
                  {addThirtyMinutesLabel(confirmation.time)}{" "}
                  <span className="text-[#6e6d69] text-xs">(BRT · 30 min)</span>
                </span>
              </div>
            </div>

            {/* Card Oficial do Google Meet */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#2E3C44] text-white space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-emerald-300" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
                    Sala do Google Meet
                  </span>
                </div>
                {confirmation.meetLink && (
                  <a
                    href={confirmation.meetLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-emerald-300 hover:underline"
                  >
                    <span>Abrir sala</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              {confirmation.meetLink ? (
                <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-black/25 border border-white/15">
                  <span className="text-xs sm:text-sm font-mono truncate text-white/95">
                    {confirmation.meetLink.replace(/^https?:\/\//, "")}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyMeetLink}
                    className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-[#101010] text-xs font-semibold hover:bg-[#f2efe9] transition-colors cursor-pointer"
                  >
                    {copiedMeet ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar link</span>
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <p className="text-xs text-white/85 leading-relaxed">
                  Enviaremos o link de acesso da sala do Google Meet diretamente
                  para o seu WhatsApp ({whatsapp}).
                </p>
              )}
            </div>

            {/* Aviso exclusivo para ambiente local caso ainda não tenha conectado o .env.local */}
            {!confirmation.configured && isLocalhost && (
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                <p className="font-semibold">
                  Modo de pré-visualização (Google OAuth2 pendente)
                </p>
                <p className="text-amber-800/90 leading-relaxed">
                  Para gerar o link oficial do Google Meet automaticamente,
                  preencha <code>GOOGLE_CLIENT_ID</code> e{" "}
                  <code>GOOGLE_CLIENT_SECRET</code> no <code>.env.local</code> e
                  acesse{" "}
                  <a
                    href="/api/google/auth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold"
                  >
                    /api/google/auth
                  </a>
                  .
                </p>
              </div>
            )}

            {/* Botões de Ação Final */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <a
                href={whatsappConfirmationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill py-3.5 px-4 rounded-xl bg-[#101010] hover:bg-[#2E3C44] text-white font-medium text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors text-center shadow-sm"
              >
                <span>Confirmar no WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={addToUserGoogleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-4 rounded-xl bg-white hover:bg-neutral-100 text-[#101010] border border-[#e8e6df] font-medium text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors text-center whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                <span>Adicionar à Agenda</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
