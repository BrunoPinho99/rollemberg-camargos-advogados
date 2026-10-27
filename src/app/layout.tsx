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
  title: "Kafka™ — Where legal clarity meets confidence",
  description:
    "Kafka™ provides clear, strategic legal solutions for businesses, entrepreneurs, and individuals across corporate law, dispute resolution, and regulatory compliance.",
  openGraph: {
    title: "Kafka™ — Where legal clarity meets confidence",
    description:
      "Strategic legal advisory, notarial authentication, and corporate dispute resolution.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full antialiased ${schibstedGrotesk.variable}`}>
      <body className="min-h-full flex flex-col bg-[#fcfbf7] text-[#101010] selection:bg-[#101010] selection:text-[#fcfbf7]">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
