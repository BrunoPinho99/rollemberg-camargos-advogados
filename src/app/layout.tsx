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

export const metadata: Metadata = {
  title: "Rollemberg & Camargos Advogados — Advocacia Estratégica para Negócios em Expansão",
  description:
    "Segurança jurídica clara e sem burocracia para quem constrói e escala negócios. Estrutura societária, contratos sob medida, registro de marcas e proteção operacional.",
  openGraph: {
    title: "Rollemberg & Camargos Advogados — Advocacia Estratégica para Negócios em Expansão",
    description:
      "Da primeira sociedade aos grandes contratos: estrutura jurídica clara, ágil e pensada para proteger cada etapa do seu crescimento.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`h-full antialiased ${schibstedGrotesk.variable}`}>
      <body className="min-h-full flex flex-col bg-[#fcfbf7] text-[#101010] selection:bg-[#101010] selection:text-[#fcfbf7]">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
