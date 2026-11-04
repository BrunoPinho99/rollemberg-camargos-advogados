import type { Metadata } from "next";
import Script from "next/script";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";
import BFCacheRestorer from "@/components/BFCacheRestorer";
import { copyVersionB } from "@/content/siteCopy";

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-schibsted",
  display: "swap",
});

const siteUrl = "https://www.rollembergecamargos.adv.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rollemberg & Camargos Advogados | Advocacia em Brasília/DF e Todo o Brasil",
  description:
    "Assessoria jurídica estratégica e consultoria especializada. Proteja sua empresa e seus direitos com a Rollemberg & Camargos Advogados. Fale conosco.",
  keywords: [
    "advocacia Brasília",
    "advogado Brasília DF",
    "advocacia empresarial",
    "direito societário",
    "acordo de sócios",
    "contratos comerciais",
    "registro de marca INPI",
    "advogado para startups",
    "assessoria jurídica digital",
    "LGPD empresarial",
    "Rollemberg e Camargos Advogados",
    "Dra Marcela Rollemberg OAB DF",
    "Dra Fabyana Camargos OAB DF",
  ],
  authors: [
    { name: "Rollemberg & Camargos Advogados Associados", url: siteUrl },
    { name: "Marcela Silveira Rollemberg" },
    { name: "Fabyana Trindade Camargos" },
  ],
  creator: "Rollemberg & Camargos Advogados",
  publisher: "Rollemberg & Camargos Advogados",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Rollemberg & Camargos Advogados — Advocacia Estratégica para Negócios",
    description:
      "Sede em Brasília/DF com atendimento digital em todo o Brasil. Segurança jurídica ágil e sem burocracia para empresas em crescimento, marcas e startups.",
    url: siteUrl,
    siteName: "Rollemberg & Camargos Advogados",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: `${siteUrl}/equipe-rollemberg-camargos.webp`,
        width: 1200,
        height: 630,
        alt: "Rollemberg & Camargos Advogados - Brasília/DF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rollemberg & Camargos Advogados",
    description:
      "Sede em Brasília/DF com atendimento em todo o Brasil. Advocacia estratégica para empresas, estruturação societária e marcas no INPI.",
    images: [`${siteUrl}/equipe-rollemberg-camargos.webp`],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico?v=2" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LegalService", "Attorney", "Organization"],
      "@id": `${siteUrl}/#organization`,
      name: "Rollemberg & Camargos Advogados",
      legalName: "Rollemberg & Camargos Advogados Associados",
      url: siteUrl,
      logo: `${siteUrl}/logo-rollemberg.webp`,
      image: `${siteUrl}/equipe-rollemberg-camargos.webp`,
      description:
        "Escritório de advocacia com sede em Brasília/DF e atuação em todo o território nacional. Especializado em direito empresarial, estruturação societária, acordos de sócios, contratos comerciais, registro de marcas no INPI, conformidade LGPD e assessoria continuada para empresas e startups.",
      taxID: "57.567.009/0001-04",
      telephone: "+55-61-99112-6429",
      email: "contato@rollembergcamargos.adv.br",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brasília",
        addressRegion: "DF",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -15.7942,
        longitude: -47.8822,
      },
      areaServed: [
        {
          "@type": "Country",
          name: "Brasil",
        },
        {
          "@type": "State",
          name: "Distrito Federal",
        },
      ],
      founder: [
        {
          "@type": "Person",
          name: "Marcela Silveira Rollemberg",
          jobTitle: "Sócia-Fundadora",
          honorificPrefix: "Dra.",
          description: "Advogada inscrita na OAB/DF nº 69.733, especialista em Direito Societário e Governança Corporativa.",
        },
        {
          "@type": "Person",
          name: "Fabyana Trindade Camargos",
          jobTitle: "Sócia-Fundadora",
          honorificPrefix: "Dra.",
          description: "Advogada inscrita na OAB/DF nº 72.885, especialista em Propriedade Intelectual, Marcas (INPI) e Direito Digital.",
        },
      ],
      member: [
        {
          "@type": "Person",
          name: "Marcela Silveira Rollemberg",
          jobTitle: "Sócia-Fundadora",
        },
        {
          "@type": "Person",
          name: "Fabyana Trindade Camargos",
          jobTitle: "Sócia-Fundadora",
        },
      ],
      knowsAbout: [
        "Direito Empresarial",
        "Direito Societário",
        "Acordo de Sócios e Quotistas",
        "Contratos Comerciais e Negociações B2B",
        "Registro de Marcas e Propriedade Intelectual no INPI",
        "Direito Digital e Negócios na Internet",
        "LGPD (Lei Geral de Proteção de Dados)",
        "Consultoria e Blindagem Trabalhista Empresarial",
        "Assessoria Jurídica Mensal (Retainer)",
        "Assessoria para Startups e Empresas de Tecnologia",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços Jurídicos Especializados",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Direito Empresarial Estratégico",
              url: `${siteUrl}/atuacao/direito-empresarial`,
              description: "Assessoria jurídica preventiva, governança e alinhamento de riscos para negócios em expansão.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Estruturação Societária",
              url: `${siteUrl}/atuacao/estruturacao-societaria`,
              description: "Definição de tipos societários, reorganizações, entrada de investidores e proteção patrimonial.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Acordos de Sócios e Quotistas",
              url: `${siteUrl}/atuacao/acordos-de-socios`,
              description: "Acordos parassociais, cláusulas de tag along, drag along, vesting, impasses e saídas regradas.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Contratos Comerciais e Negociações B2B",
              url: `${siteUrl}/atuacao/contratos-comerciais`,
              description: "Elaboração e revisão de minutas de alto valor, redução de inadimplência e títulos executivos extrajudiciais.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Registro de Marcas e Propriedade Intelectual",
              url: `${siteUrl}/atuacao/registro-de-marcas`,
              description: "Proteção oficial do nome, identidade e tecnologia no INPI com exclusividade nacional.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Direito Digital e Negócios na Internet",
              url: `${siteUrl}/atuacao/direito-digital`,
              description: "Termos de Uso, Políticas de Venda Online, proteção contra fraudes e conformidade para SaaS e e-commerces.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Adequação à LGPD",
              url: `${siteUrl}/atuacao/lgpd`,
              description: "Políticas de privacidade, mapeamento de fluxo de dados e adequação às exigências da ANPD.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Consultoria e Blindagem Trabalhista Empresarial",
              url: `${siteUrl}/atuacao/trabalhista-empresarial`,
              description: "Mitigação preventiva de passivos trabalhistas, contratos PJ com segurança e teletrabalho.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Assessoria Jurídica Mensal (Retainer)",
              url: `${siteUrl}/atuacao/assessoria-juridica-mensal`,
              description: "Suporte consultivo continuado com valor fixo previsível para empresas em tração.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Assessoria para Startups e Tecnologia",
              url: `${siteUrl}/atuacao/startups-tecnologia`,
              description: "Mútuo conversível, vesting, captable, acordos preliminares e rodadas de captação.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Rollemberg & Camargos Advogados",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "pt-BR",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: copyVersionB.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`h-full antialiased ${schibstedGrotesk.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FZ7QH5LK1G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FZ7QH5LK1G');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#fcfbf7] text-[#101010] selection:bg-[#101010] selection:text-[#fcfbf7]">
        <BFCacheRestorer />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
