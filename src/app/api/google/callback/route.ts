import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const isAllowed =
    process.env.NODE_ENV !== "production" ||
    process.env.GOOGLE_ENABLE_OAUTH_SETUP === "true";

  if (!isAllowed) {
    return new Response("Not Found", { status: 404 });
  }

  const code = request.nextUrl.searchParams.get("code");
  const error = request.nextUrl.searchParams.get("error");

  if (error || !code) {
    return new Response(
      `Erro na autorização do Google: ${error || "Código ausente."}`,
      { status: 400 }
    );
  }

  const clientId = process.env.GOOGLE_CLIENT_ID?.trim();
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET?.trim();

  if (!clientId || !clientSecret) {
    return new Response(
      "GOOGLE_CLIENT_ID ou GOOGLE_CLIENT_SECRET ausentes no .env.local.",
      { status: 400 }
    );
  }

  const redirectUri = `${request.nextUrl.origin}/api/google/callback`;
  const body = new URLSearchParams({
    code,
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri,
    grant_type: "authorization_code",
  });

  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
    cache: "no-store",
  });

  const tokenData = (await tokenRes.json()) as {
    refresh_token?: string;
    error?: string;
    error_description?: string;
  };

  if (!tokenRes.ok || !tokenData.refresh_token) {
    return new Response(
      `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"/><title>Erro OAuth2</title></head>
      <body style="font-family:system-ui,sans-serif;background:#fcfbf7;color:#101010;padding:48px;max-width:680px;margin:0 auto;line-height:1.6">
        <h1 style="font-size:22px">Não foi possível obter o Refresh Token</h1>
        <pre style="background:#101010;color:#fcfbf7;padding:16px;border-radius:12px;overflow:auto">${JSON.stringify(tokenData, null, 2)}</pre>
        <p>Tente acessar <a href="/api/google/auth">/api/google/auth</a> novamente e confirmar a permissão.</p>
      </body></html>`,
      { status: 400, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }

  return new Response(
    `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"/><title>Google Calendar Conectado</title></head>
    <body style="font-family:system-ui,sans-serif;background:#fcfbf7;color:#101010;padding:48px;max-width:680px;margin:0 auto;line-height:1.6">
      <span style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#6e6d69;font-weight:600">ROLLEMBERG &amp; CAMARGOS ADVOGADOS</span>
      <h1 style="font-size:28px;margin:8px 0 16px">Refresh Token gerado com sucesso</h1>
      <p>Copie a linha abaixo e cole no seu arquivo <code>.env.local</code> (e nas variáveis de ambiente da hospedagem):</p>
      <pre id="tokenBox" style="background:#101010;color:#fcfbf7;padding:18px;border-radius:12px;overflow-x:auto;font-size:13px">GOOGLE_REFRESH_TOKEN="${tokenData.refresh_token}"</pre>
      <button onclick="navigator.clipboard.writeText(document.getElementById('tokenBox').innerText);this.innerText='Copiado ✓'" style="margin-top:8px;padding:12px 24px;border-radius:999px;border:none;background:#2E3C44;color:#fff;font-weight:600;cursor:pointer">Copiar linha para o .env.local</button>
      <p style="margin-top:24px;font-size:14px;color:#6e6d69">Após salvar no <code>.env.local</code>, todas as reuniões agendadas no site criarão automaticamente o evento na agenda e o link oficial do Google Meet.</p>
    </body></html>`,
    { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}

