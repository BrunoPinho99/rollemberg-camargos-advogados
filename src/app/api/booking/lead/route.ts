import { type NextRequest } from "next/server";
import { notifyLeadWebhook } from "@/lib/googleCalendar";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      name?: string;
      whatsapp?: string;
      email?: string;
    };

    const name = body.name?.trim() ?? "";
    const whatsapp = body.whatsapp?.trim() ?? "";
    const digits = whatsapp.replace(/\D/g, "");

    if (name.length < 2 || digits.length < 10) {
      return Response.json(
        { error: "Informe o nome completo e um número de WhatsApp válido." },
        { status: 400 }
      );
    }

    const waNumber = digits.startsWith("55") ? digits : `55${digits}`;

    await notifyLeadWebhook({
      event: "lead_captured_step1",
      name,
      whatsapp,
      whatsappLink: `https://wa.me/${waNumber}`,
      email: body.email?.trim() || null,
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Requisição inválida." }, { status: 400 });
  }
}

