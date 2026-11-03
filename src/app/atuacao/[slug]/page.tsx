import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Shield, Scale, HelpCircle } from "lucide-react";
import { AREAS_DE_ATUACAO, AreaDeAtuacao } from "@/content/areasDeAtuacao";
import { WHATSAPP_DIRECT_URL } from "@/lib/whatsapp";

const SITE_URL = "https://www.rollembergecamargos.adv.br";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return AREAS_DE_ATUACAO.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = AREAS_DE_ATUACAO.find((item) => item.slug === slug);
  if (!area) return {};

  const pageUrl = `${SITE_URL}/atuacao/${area.slug}`;

  return {
    title: `${area.metaTitle} | Rollemberg & Camargos Advogados`,
    description: area.metaDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: pageUrl,
      siteName: "Rollemberg & Camargos Advogados",
      locale: "pt_BR",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: area.metaTitle,
      description: area.metaDescription,
    },
  };
}

export default async function AreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area: AreaDeAtuacao | undefined = AREAS_DE_ATUACAO.find((item) => item.slug === slug);

  if (!area) {
    notFound();
  }

  const pageUrl = `${SITE_URL}/atuacao/${area.slug}`;

  // JSON-LD estruturado específico para esta área de atuação com FAQPage e Breadcrumbs
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: area.metaTitle,
        description: area.metaDescription,
        isPartOf: {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: SITE_URL,
          name: "Rollemberg & Camargos Advogados",
        },
        breadcrumb: {
          "@id": `${pageUrl}/#breadcrumb`,
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
            name: "Áreas de Atuação",
            item: `${SITE_URL}/#services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: area.title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        name: area.title,
        description: area.summary,
        provider: {
          "@type": ["LegalService", "Attorney", "Organization"],
          "@id": `${SITE_URL}/#organization`,
          name: "Rollemberg & Camargos Advogados Associados",
          telephone: "+55-61-9912-6429",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Brasília",
            addressRegion: "DF",
            addressCountry: "BR",
          },
        },
        areaServed: [
          { "@type": "Country", name: "Brasil" },
          { "@type": "State", name: "Distrito Federal" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        mainEntity: area.perguntasFrequentes.map((faq) => ({
          "@type": "Question",
          name: faq.pergunta,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.resposta,
          },
        })),
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
            <span>Atuação</span>
            <span>/</span>
            <span className="text-[#101010] font-medium">{area.shortTitle}</span>
          </nav>

          {/* Cabeçalho da Página */}
          <header className="space-y-4 pb-10 border-b border-[#e8e6df]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101010]/5 border border-[#101010]/10 text-xs font-mono uppercase tracking-wider text-[#101010]/80">
              <Scale className="w-3.5 h-3.5 text-[#101010]" />
              <span>Especialidade Jurídica</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-[1.12] text-[#101010]">
              {area.h1}
            </h1>

            <p className="text-lg sm:text-xl text-[#6e6d69] leading-relaxed max-w-3xl">
              {area.subtitle}
            </p>
          </header>

          {/* Resumo Editorial */}
          <section className="py-10 space-y-4 border-b border-[#e8e6df]">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#101010]">
              Visão Geral e Abordagem Prática
            </h2>
            <p className="text-base sm:text-lg text-[#333] leading-relaxed">
              {area.summary}
            </p>
          </section>

          {/* Problemas Empresariais Resolvidos */}
          <section className="py-10 space-y-6 border-b border-[#e8e6df]">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#101010] flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-700" />
              <span>Problemas Reais que Resolvemos</span>
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {area.problemasResolvidos.map((problema, idx) => (
                <li
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-[#e8e6df] shadow-sm flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#333] leading-relaxed">
                    {problema}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Benefícios e Aplicação */}
          <section className="py-10 space-y-6 border-b border-[#e8e6df]">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#101010]">
              Benefícios Práticos para a Sua Operação
            </h2>
            <div className="space-y-3">
              {area.beneficiosEAplicacao.map((beneficio, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 text-base text-[#444] leading-relaxed"
                >
                  <span className="w-2 h-2 rounded-full bg-[#101010] mt-2 shrink-0" />
                  <span>{beneficio}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Situações Reais de Aplicação */}
          <section className="py-10 space-y-4 border-b border-[#e8e6df]">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#101010]">
              Quando Contratar esta Assessoria?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {area.situacoesReais.map((situacao, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#101010]/[0.02] border border-[#101010]/10 text-sm text-[#444] leading-relaxed"
                >
                  <span className="font-mono text-xs text-[#101010]/60 block mb-1">
                    0{idx + 1}
                  </span>
                  {situacao}
                </div>
              ))}
            </div>
          </section>

          {/* Base Legal e Fontes Oficiais */}
          <section className="py-10 space-y-4 border-b border-[#e8e6df]">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#101010]">
              Fundamentação Jurídica Oficial
            </h2>
            <p className="text-sm text-[#6e6d69]">
              Nossa atuação segue rigorosamente a legislação brasileira, normas infralegais e a jurisprudência dos Tribunais Superiores:
            </p>
            <div className="space-y-3 pt-2">
              {area.baseLegal.map((base, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-[#e8e6df] text-sm text-[#333]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <span className="font-semibold text-[#101010]">{base.norma}</span>
                    <span className="text-xs font-mono uppercase text-[#6e6d69] bg-[#f2efe9] px-2 py-0.5 rounded">
                      {base.orgao}
                    </span>
                  </div>
                  <p className="text-xs text-[#555] leading-relaxed">{base.descricao}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ da Especialidade */}
          <section className="py-10 space-y-6 border-b border-[#e8e6df]">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#101010] flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#101010]" />
              <span>Perguntas Frequentes sobre {area.title}</span>
            </h2>
            <div className="space-y-4">
              {area.perguntasFrequentes.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-[#e8e6df] space-y-2"
                >
                  <h3 className="font-medium text-base text-[#101010]">
                    {faq.pergunta}
                  </h3>
                  <p className="text-sm sm:text-base text-[#555] leading-relaxed">
                    {faq.resposta}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Links Internos e Serviços Relacionados */}
          <section className="py-10 space-y-4 border-b border-[#e8e6df]">
            <h2 className="text-lg font-semibold tracking-tight text-[#101010]">
              Outras Áreas de Atuação Relacionadas
            </h2>
            <div className="flex flex-wrap gap-2 pt-2">
              {area.servicosRelacionados.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/atuacao/${rel.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#e8e6df] text-xs font-medium text-[#101010] hover:bg-[#101010] hover:text-white transition-all"
                >
                  <span>{rel.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </section>

          {/* CTA para Conversa Direta */}
          <section className="pt-12 text-center space-y-5">
            <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-[#101010]">
              Precisa de apoio em {area.title.toLowerCase()}?
            </h2>
            <p className="text-base text-[#6e6d69] max-w-xl mx-auto">
              Sede em Brasília/DF com atendimento digital em todo o Brasil. Fale diretamente com as advogadas e receba uma orientação inicial clara e sem burocracia.
            </p>
            <div className="pt-2">
              <a
                href={WHATSAPP_DIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#101010] text-white font-medium text-base hover:bg-[#252525] hover:scale-105 active:scale-95 transition-all shadow-lg"
              >
                <span>Falar com as Advogadas no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
