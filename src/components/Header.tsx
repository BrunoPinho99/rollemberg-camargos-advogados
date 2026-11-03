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

  // Trava o scroll do body quando o menu mobile estiver aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        id="siteHeader"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-10 md:px-14 ${
          isPastHero
            ? "bg-[#2E3C44]/95 backdrop-blur-md border-b border-[#2E3C44] py-3.5 sm:py-4 shadow-lg shadow-black/10"
            : "bg-transparent py-4 sm:py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="relative flex items-center transition-opacity hover:opacity-85 py-1 min-h-[44px]"
            aria-label="Rollemberg & Camargos Advogados - Início"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-rollemberg.webp"
              alt="Rollemberg & Camargos Advogados"
              width={851}
              height={313}
              className="h-9 sm:h-12 w-auto object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] transition-opacity duration-300 opacity-100"
            />
          </a>

          {/* Desktop Navigation Menu & Action Button (Estilo Attest Framer) */}
          <div className="hidden md:flex items-center gap-7">
            <nav className="flex items-center gap-7 text-[15px] font-medium tracking-tight">
              {copy.nav.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`transition-colors duration-300 py-1 ${
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

          {/* Mobile Menu Button com área de toque mínima de 44px */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-black/20 backdrop-blur-sm border border-white/10 text-white focus:outline-none transition-all cursor-pointer active:scale-95"
            aria-label="Abrir menu de navegação"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer em tela cheia com backdrop blur e toque aprimorado */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex flex-col justify-between p-6 animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          {/* Header do Menu Aberto */}
          <div className="flex items-center justify-between pt-2">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Rollemberg & Camargos Advogados"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-rollemberg.webp"
                alt="Rollemberg & Camargos Advogados"
                width={851}
                height={313}
                className="h-9 w-auto object-contain"
              />
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/10 text-white border border-white/15 cursor-pointer"
              aria-label="Fechar menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links de navegação com altura tátil de 48px */}
          <nav
            className="flex flex-col space-y-2 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {copy.nav.items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[52px] flex items-center px-4 rounded-xl text-lg font-medium text-white/90 hover:text-white hover:bg-white/10 active:bg-white/15 transition-colors border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Botão de Ação CTA no rodapé do menu mobile */}
          <div className="pb-4" onClick={(e) => e.stopPropagation()}>
            <a
              href={WHATSAPP_DIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-pill w-full min-h-[50px] flex items-center justify-center py-3.5 px-6 rounded-full bg-white text-[#101010] font-medium text-base shadow-lg hover:bg-[#f2efe9] active:scale-95 transition-all text-center"
            >
              <span>{copy.nav.cta || "Vamos conversar?"}</span>
              <span className="ml-1 text-xs">↗</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
