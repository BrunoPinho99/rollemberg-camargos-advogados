import { type NextRequest } from "next/server";
import {
  SlotUnavailableError,
  createGoogleMeetBooking,
} from "@/lib/googleCalendar";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      name?: string;
      whatsapp?: string;
      email?: string;
      date?: string;
      time?: string;
    };

    const name = body.name?.trim() ?? "";
    const whatsapp = body.whatsapp?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const date = body.date?.trim() ?? "";
    const time = body.time?.trim() ?? "";

    const digits = whatsapp.replace(/\D/g, "");
    if (name.length < 2 || digits.length < 10) {
      return Response.json(
        { error: "Informe seu nome completo e número de WhatsApp válido." },
        { status: 400 }
      );
    }

    if (!date || !time) {
      return Response.json(
        { error: "Selecione uma data e um horário para agendar a reunião." },
        { status: 400 }
      );
    }

    const result = await createGoogleMeetBooking({
      name,
      whatsapp,
      email: email || undefined,
      date,
      time,
    });

    return Response.json({
      ok: true,
      ...result,
    });
  } catch (error) {
    if (error instanceof SlotUnavailableError) {
      return Response.json({ error: error.message }, { status: 409 });
    }

    console.error("[API /booking/schedule] Erro ao agendar reunião:", error);
    return Response.json(
      {
        error:
          "Não foi possível finalizar o agendamento automático agora. Tente novamente em instantes.",
      },
      { status: 500 }
    );
  }
}

