import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          // Robôs de Busca Tradicionais & Pesquisa por IA
          "Googlebot",
          "Bingbot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot",
          "Claude-Web",
          "ClaudeBot",
          "Google-Extended",
          "Applebot",
          "CCBot",
          "meta-externalagent",
          "Bytespider",
          // Robô de Treinamento Geral da OpenAI (permitido para indexação semântica e citação da marca)
          "GPTBot",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.rollembergecamargos.adv.br/sitemap.xml",
  };
}
