import { type NextRequest } from "next/server";
import {
  BOOKING_TIMEZONE,
  SLOT_DURATION_MINUTES,
  getAvailableSlotsForDate,
  isValidDateString,
} from "@/lib/googleCalendar";

export async function GET(request: NextRequest) {
  const date = request.nextUrl.searchParams.get("date") ?? "";

  if (!isValidDateString(date)) {
    return Response.json(
      { error: "Parâmetro 'date' inválido. Use o formato YYYY-MM-DD." },
      { status: 400 }
    );
  }

  try {
    const { slots, configured } = await getAvailableSlotsForDate(date);
    return Response.json(
      {
        date,
        slots,
        configured,
        timezone: BOOKING_TIMEZONE,
        durationMinutes: SLOT_DURATION_MINUTES,
      },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      }
    );
  } catch (error) {
    console.error("[API /booking/availability] Erro:", error);
    return Response.json(
      { error: "Não foi possível consultar os horários disponíveis no momento." },
      { status: 500 }
    );
  }
}

