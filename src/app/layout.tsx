import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-schibsted",
  display: "swap",
});

const siteUrl = "https://attest-advocacia.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rollemberg & Camargos Advogados | Advocacia em Brasília/DF e Todo o Brasil",
  description:
    "Escritório de advocacia com sede em Brasília/DF e atendimento em todo o Brasil. Assessoria jurídica empresarial, contratos comerciais, estruturação societária, registro de marcas no INPI e conformidade digital.",
  keywords: [
    "advocacia Brasília",
    "advogado Brasília DF",
    "advocacia empresarial",
    "direito societário",
    "contratos comerciais",
    "registro de marca INPI",
    "advogado para startups",
    "assessoria jurídica digital",
    "Rollemberg e Camargos Advogados",
  ],
  authors: [{ name: "Rollemberg & Camargos Advogados" }],
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
      "Sede em Brasília/DF com atendimento digital em todo o território nacional. Segurança jurídica ágil e sem burocracia para empresas em crescimento.",
    url: siteUrl,
    siteName: "Rollemberg & Camargos Advogados",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rollemberg & Camargos Advogados",
    description: "Sede em Brasília/DF com atendimento em todo o Brasil. Advocacia estratégica para empresas.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LegalService", "Attorney", "Organization"],
      "@id": `${siteUrl}/#organization`,
      name: "Rollemberg & Camargos Advogados",
      legalName: "Rollemberg & Camargos Sociedade de Advogados",
      url: siteUrl,
      logo: `${siteUrl}/logo-rollemberg.png`,
      image: `${siteUrl}/equipe-rollemberg-camargos.jpg`,
      description:
        "Escritório de advocacia com sede em Brasília/DF e atuação em todo o Brasil. Especializado em estruturação societária, contratos comerciais, registro de marcas e proteção de negócios digitais.",
      taxID: "57.567.009/0001-04",
      telephone: "+55-61-9912-6429",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brasília",
        addressRegion: "DF",
        addressCountry: "BR",
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
      knowsAbout: [
        "Direito Societário",
        "Acordo de Sócios",
        "Contratos Empresariais",
        "Registro de Marca no INPI",
        "Direito Digital e LGPD",
        "Assessoria Jurídica Preventiva",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços Jurídicos",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sociedade & Parcerias",
              description: "Acordos de sócios, entrada de investidores e estruturação societária preventiva.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Registro de Marca & Ativos",
              description: "Proteção oficial no INPI, marcas, softwares e ativos de propriedade intelectual.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Blindagem Comercial & Conflitos",
              description: "Contratos sob medida, cobranças e atuação extrajudicial estratégica.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Termos de Uso e Privacidade",
              description: "Políticas comerciais digitais e conformidade integral com a LGPD.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#fcfbf7] text-[#101010] selection:bg-[#101010] selection:text-[#fcfbf7]">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
