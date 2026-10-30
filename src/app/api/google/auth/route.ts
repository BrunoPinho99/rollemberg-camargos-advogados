import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const isAllowed =
    process.env.NODE_ENV !== "production" ||
    process.env.GOOGLE_ENABLE_OAUTH_SETUP === "true";

  if (!isAllowed) {
    return new Response("Not Found", { status: 404 });
  }

  const clientId = process.env.GOOGLE_CLIENT_ID?.trim();
  if (!clientId) {
    return new Response(
      `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"/><title>Configuração Google OAuth2</title></head>
      <body style="font-family:system-ui,sans-serif;background:#fcfbf7;color:#101010;padding:48px;max-width:640px;margin:0 auto;line-height:1.6">
        <h1 style="font-size:24px;margin-bottom:12px">Falta configurar o GOOGLE_CLIENT_ID</h1>
        <p>Crie o arquivo <code>.env.local</code> na raiz do projeto (baseado no <code>.env.example</code>) com <code>GOOGLE_CLIENT_ID</code> e <code>GOOGLE_CLIENT_SECRET</code>, reinicie o servidor e acesse esta página novamente.</p>
      </body></html>`,
      { status: 400, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }

  const redirectUri = `${request.nextUrl.origin}/api/google/callback`;
  const authUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  authUrl.searchParams.set("client_id", clientId);
  authUrl.searchParams.set("redirect_uri", redirectUri);
  authUrl.searchParams.set("response_type", "code");
  authUrl.searchParams.set(
    "scope",
    "https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.readonly"
  );
  authUrl.searchParams.set("access_type", "offline");
  authUrl.searchParams.set("prompt", "consent");

  return Response.redirect(authUrl.toString(), 302);
}

