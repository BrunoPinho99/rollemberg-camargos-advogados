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
  title: "Fabyana™ — Assessoria Jurídica para Agências e Negócios Digitais",
  description:
    "Proteção jurídica para agências de Live, TikTok e negócios digitais. Contratos blindados, compliance de plataformas, registro de marcas e segurança operacional.",
  openGraph: {
    title: "Fabyana™ — Assessoria Jurídica para Agências e Negócios Digitais",
    description:
      "Ajudamos agências de TikTok, criadores e infoprodutores a escalar operações com segurança jurídica.",
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
