"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { SiteCopy, copyVersionB } from "@/content/siteCopy";
import { WHATSAPP_DIRECT_URL } from "@/lib/whatsapp";

interface HeaderProps {
  copy?: SiteCopy;
  onOpenBooking?: () => void;
}

export default function Header({ copy = copyVersionB }: HeaderProps) {
  const [isPastHero, setIsPastHero] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    let isPast = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const next = window.scrollY > 400;
          if (next !== isPast) {
            isPast = next;
            setIsPastHero(next);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="siteHeader"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 sm:px-10 md:px-14 ${
        isPastHero
          ? "bg-[#2E3C44]/95 backdrop-blur-md border-b border-[#2E3C44] py-4 shadow-lg shadow-black/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="relative flex items-center transition-opacity hover:opacity-85 py-1"
          aria-label="Rollemberg & Camargos Advogados - Início"
        >
          {/* Logo clara sobre fundo escuro (#2E3C44 e Hero) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-rollemberg.png"
            alt="Rollemberg & Camargos Advogados"
            className="h-11 sm:h-12 w-auto object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] transition-opacity duration-300 opacity-100"
          />
        </a>

        {/* Desktop Navigation Menu & Action Button (Estilo Attest Framer) */}
        <div className="hidden md:flex items-center gap-7">
          <nav className="flex items-center gap-7 text-[15px] font-medium tracking-tight">
            {copy.nav.items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors duration-300 ${
                  isPastHero
                    ? "text-white/85 hover:text-white"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_DIRECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill px-5 py-2.5 rounded-full bg-white text-[#101010] font-medium text-sm shadow-[0_2px_12px_rgba(0,0,0,0.18)] hover:bg-[#f2efe9] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer select-none"
          >
            {copy.nav.cta || "Vamos conversar?"}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 focus:outline-none transition-colors duration-300 cursor-pointer text-white"
          aria-label="Abrir menu de navegação"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 mx-2 rounded-2xl bg-[#2E3C44] border border-white/10 p-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-4 text-base font-medium text-white">
            {copy.nav.items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/10 text-white/90 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_DIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full py-3.5 rounded-full bg-white text-[#101010] font-medium text-sm shadow-md hover:bg-[#f2efe9] transition-all cursor-pointer text-center block"
            >
              {copy.nav.cta || "Vamos conversar?"}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
