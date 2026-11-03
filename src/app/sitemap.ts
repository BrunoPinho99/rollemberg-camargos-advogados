import { MetadataRoute } from "next";
import { AREAS_DE_ATUACAO } from "@/content/areasDeAtuacao";
import { ADVOGADAS_EQUIPE } from "@/content/advogadas";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rollembergecamargos.adv.br";
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  const areaPages: MetadataRoute.Sitemap = AREAS_DE_ATUACAO.map((area) => ({
    url: `${baseUrl}/atuacao/${area.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const advogadaPages: MetadataRoute.Sitemap = ADVOGADAS_EQUIPE.map((adv) => ({
    url: `${baseUrl}/advogadas/${adv.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...areaPages, ...advogadaPages];
}
