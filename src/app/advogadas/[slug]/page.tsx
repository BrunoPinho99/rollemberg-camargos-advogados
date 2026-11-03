import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Award, GraduationCap, Scale, ShieldCheck } from "lucide-react";
import { ADVOGADAS_EQUIPE, AdvogadaPerfil } from "@/content/advogadas";
import { WHATSAPP_DIRECT_URL } from "@/lib/whatsapp";

const SITE_URL = "https://www.rollembergecamargos.adv.br";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ADVOGADAS_EQUIPE.map((adv) => ({
    slug: adv.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const adv = ADVOGADAS_EQUIPE.find((item) => item.slug === slug);
  if (!adv) return {};

  const pageUrl = `${SITE_URL}/advogadas/${adv.slug}`;

  return {
    title: `${adv.tratamento} | ${adv.cargo} | Rollemberg & Camargos Advogados`,
    description: `${adv.resumoBiografico} Atuação jurídica em Brasília/DF e em todo o Brasil.`,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${adv.tratamento} — Rollemberg & Camargos Advogados`,
      description: adv.resumoBiografico,
      url: pageUrl,
      siteName: "Rollemberg & Camargos Advogados",
      locale: "pt_BR",
      type: "profile",
      images: [
        {
          url: `${SITE_URL}${adv.foto}`,
          width: 1200,
          height: 630,
          alt: `${adv.tratamento} - ${adv.cargo}`,
        },
      ],
    },
  };
}

export default async function AdvogadaPage({ params }: PageProps) {
  const { slug } = await params;
  const adv: AdvogadaPerfil | undefined = ADVOGADAS_EQUIPE.find((item) => item.slug === slug);

  if (!adv) {
    notFound();
  }

  const pageUrl = `${SITE_URL}/advogadas/${adv.slug}`;

  // JSON-LD ProfilePage + Person compatível com Schema.org
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${pageUrl}/#profile`,
        url: pageUrl,
        name: `${adv.tratamento} - Perfil Profissional`,
        isPartOf: {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: SITE_URL,
          name: "Rollemberg & Camargos Advogados",
        },
        mainEntity: {
          "@type": "Person",
          "@id": `${pageUrl}/#person`,
          name: adv.nomeCompleto,
          honorificPrefix: "Dra.",
          jobTitle: adv.cargo,
          worksFor: {
            "@type": ["LegalService", "Attorney", "Organization"],
            "@id": `${SITE_URL}/#organization`,
            name: "Rollemberg & Camargos Advogados Associados",
            url: SITE_URL,
          },
          image: `${SITE_URL}${adv.foto}`,
          description: adv.resumoBiografico,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Brasília",
            addressRegion: "DF",
            addressCountry: "BR",
          },
          knowsAbout: adv.areasDeAtuacaoEspecializada,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Equipe",
            item: `${SITE_URL}/#about`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: adv.tratamento,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen bg-[#fcfbf7] text-[#101010] selection:bg-[#101010] selection:text-[#fcfbf7] pt-24 sm:pt-28 pb-20">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 md:px-12">
          {/* Breadcrumb e Voltar */}
          <nav className="mb-8 flex items-center gap-2 text-xs text-[#6e6d69]">
            <Link
              href="/"
              className="inline-flex items-center gap-1 hover:text-[#101010] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Início</span>
            </Link>
            <span>/</span>
            <span>Advogadas</span>
            <span>/</span>
            <span className="text-[#101010] font-medium">{adv.nomeCompleto}</span>
          </nav>

          {/* Cabeçalho do Perfil Profissional */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10 border-b border-[#e8e6df]">
            <div className="md:col-span-4">
              <div className="rounded-2xl overflow-hidden bg-neutral-200 aspect-[4/5] relative w-full shadow-md border border-[#e8e6df]">
                <Image
                  src={adv.foto}
                  alt={adv.nomeCompleto}
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center top" }}
                  priority
                />
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101010]/5 border border-[#101010]/10 text-xs font-mono uppercase tracking-wider text-[#101010]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>{adv.cargo} • {adv.oab}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#101010]">
                {adv.nomeCompleto}
              </h1>

              <p className="text-sm font-medium uppercase tracking-wider text-[#6e6d69]">
                {adv.seccional} • Rollemberg & Camargos Advogados
              </p>

              <p className="text-base sm:text-lg text-[#333] leading-relaxed pt-2">
                {adv.resumoBiografico}
              </p>

              <blockquote className="p-4 rounded-xl bg-white border border-[#e8e6df] text-sm italic text-[#555] border-l-4 border-l-[#101010]">
                &ldquo;{adv.posicionamento}&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Formação Acadêmica */}
          <section className="py-10 space-y-4 border-b border-[#e8e6df]">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#101010] flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#101010]" />
              <span>Formação Acadêmica e Qualificação</span>
            </h2>
            <ul className="space-y-2.5 pt-1">
              {adv.formacaoAcademica.map((item, idx) => (
                <li
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-[#e8e6df] text-sm sm:text-base text-[#333]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Especialidades de Atuação */}
          <section className="py-10 space-y-4 border-b border-[#e8e6df]">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#101010] flex items-center gap-2">
              <Award className="w-5 h-5 text-[#101010]" />
              <span>Áreas de Foco e Especialidade</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {adv.areasDeAtuacaoEspecializada.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-[#e8e6df] text-sm sm:text-base text-[#333] flex items-center gap-2"
                >
                  <Scale className="w-4 h-4 text-[#101010] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA de Contato */}
          <section className="pt-12 text-center space-y-5">
            <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-[#101010]">
              Agende uma consulta com a {adv.tratamento}
            </h2>
            <p className="text-base text-[#6e6d69] max-w-xl mx-auto">
              Atendimento com hora marcada, presencial em Brasília/DF ou por videoconferência segura para clientes em todo o Brasil.
            </p>
            <div className="pt-2">
              <a
                href={WHATSAPP_DIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#101010] text-white font-medium text-base hover:bg-[#252525] hover:scale-105 active:scale-95 transition-all shadow-lg"
              >
                <span>Falar no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

