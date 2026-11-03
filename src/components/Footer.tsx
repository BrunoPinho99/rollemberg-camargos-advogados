"use client";

import { useState } from "react";
import { ArrowUp, FileText } from "lucide-react";
import { useMotion } from "./MotionProvider";
import { SiteCopy } from "@/content/siteCopy";
import { WHATSAPP_DIRECT_URL } from "@/lib/whatsapp";

interface FooterProps {
  copy: SiteCopy;
  onOpenBooking?: () => void;
}

export default function Footer({ copy }: FooterProps) {
  const { scrollTo } = useMotion();
  const [showTermsModal, setShowTermsModal] = useState(false);

  const whatsappUrl = WHATSAPP_DIRECT_URL;

  const handleBackToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollTo("#home");
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    scrollTo(href);
  };

  return (
    <>
      <footer
        id="contact"
        className="relative bg-[#080a0c] text-white border-t border-white/10 overflow-hidden font-sans"
      >
        {/* Seção Principal: 2 Colunas no Desktop, Empilhado e Compacto no Mobile */}
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 md:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {/* Coluna 1: Logo Oficial e Descrição Institucional */}
            <div className="lg:col-span-5 py-10 sm:py-14 lg:py-20 lg:pr-14 flex flex-col justify-start space-y-4 sm:space-y-6 items-center text-center lg:items-start lg:text-left">
              <div className="reveal flex justify-center lg:justify-start w-full">
                <a
                  href="#home"
                  onClick={handleBackToTop}
                  className="inline-block transition-opacity hover:opacity-85"
                  aria-label="Rollemberg & Camargos Advogados - Início"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo-rollemberg.webp"
                    alt="Rollemberg & Camargos Advogados"
                    width={851}
                    height={313}
                    className="h-10 sm:h-12 w-auto object-contain mx-auto lg:mx-0"
                  />
                </a>
              </div>

              <p className="text-sm sm:text-[15px] text-white/60 leading-relaxed font-normal max-w-md reveal delay-100 text-center lg:text-left mx-auto lg:mx-0">
                Advocacia estratégica e descomplicada para empresas em construção e escala. Estrutura societária, contratos sob medida, proteção de marcas e segurança operacional.
              </p>

              <div className="hidden lg:block pt-1 text-xs text-white/50 space-y-1 reveal delay-150">
                <p className="font-medium text-white/70">
                  Sede em Brasília/DF • Atendimento em todo o Brasil
                </p>
                <p>CNPJ: 57.567.009/0001-04</p>
                <p className="text-[11px] text-white/40 pt-1">
                  Sócias: Dra. Marcela Rollemberg (OAB/DF 69.733) • Dra. Fabyana Camargos (OAB/DF 72.885)
                </p>
              </div>
            </div>

            {/* Coluna 2: Navegação em 2 Sub-colunas perfeitamente ajustadas para touch */}
            <div className="lg:col-span-7 py-8 sm:py-12 lg:py-20 lg:pl-16 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-1 text-[11px] sm:text-[13px] font-medium tracking-[0.06em] sm:tracking-[0.08em] uppercase reveal delay-200">
                {/* Sub-coluna 1: Navegação Principal */}
                <div className="flex flex-col">
                  <a
                    href="#home"
                    onClick={handleBackToTop}
                    className="min-h-[40px] sm:min-h-[44px] py-1 flex items-center text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Início
                  </a>
                  <a
                    href="#about"
                    onClick={(e) => handleNavClick(e, "#about")}
                    className="min-h-[40px] sm:min-h-[44px] py-1 flex items-center text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Sobre Nós
                  </a>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, "#services")}
                    className="min-h-[40px] sm:min-h-[44px] py-1 flex items-center text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Serviços
                  </a>
                  <a
                    href="#expertise"
                    onClick={(e) => handleNavClick(e, "#expertise")}
                    className="min-h-[40px] sm:min-h-[44px] py-1 flex items-center text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Nossa Atuação
                  </a>
                  <a
                    href="#faq"
                    onClick={(e) => handleNavClick(e, "#faq")}
                    className="min-h-[40px] sm:min-h-[44px] py-1 flex items-center text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Dúvidas / FAQ
                  </a>
                </div>

                {/* Sub-coluna 2: Contato & Políticas */}
                <div className="flex flex-col">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[40px] sm:min-h-[44px] py-1 flex items-center text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Agendar Conversa
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[40px] sm:min-h-[44px] py-1 flex items-center text-white/70 hover:text-white transition-colors duration-200"
                  >
                    WhatsApp
                  </a>
                  <button
                    onClick={() => setShowTermsModal(true)}
                    className="min-h-[40px] sm:min-h-[44px] py-1 flex items-center text-left text-white/70 hover:text-white transition-colors duration-200 uppercase cursor-pointer"
                  >
                    Termos de Uso
                  </button>
                  <button
                    onClick={() => setShowTermsModal(true)}
                    className="min-h-[40px] sm:min-h-[44px] py-1 flex items-center text-left text-white/70 hover:text-white transition-colors duration-200 uppercase cursor-pointer"
                  >
                    Privacidade
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barra Inferior Minimalista de Copyright e CNPJ */}
        <div className="border-t border-white/10">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-10 md:px-14 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/45 reveal">
            <div className="text-center sm:text-left flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span>© {new Date().getFullYear()} {copy.brand.name} Advogados. Todos os direitos reservados.</span>
              <span className="hidden sm:inline text-white/20">•</span>
              <span>Sede em Brasília/DF (Atendimento Nacional)</span>
              <span className="hidden sm:inline text-white/20">•</span>
              <span>CNPJ: 57.567.009/0001-04</span>
              <span className="block sm:hidden text-white/40 text-[11px] pt-0.5">
                Sócias: Dra. Marcela Rollemberg (OAB/DF 69.733) • Dra. Fabyana Camargos (OAB/DF 72.885)
              </span>
            </div>

            <button
              onClick={handleBackToTop}
              className="group min-h-[40px] sm:min-h-[44px] px-2 inline-flex items-center gap-1.5 text-white/55 hover:text-white transition-colors cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </footer>

      {/* Modal de Termos e Privacidade */}
      {showTermsModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowTermsModal(false)}
        >
          <div
            className="relative w-full max-w-lg p-6 sm:p-8 rounded-2xl bg-[#0e1317] border border-white/15 text-white shadow-2xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-white/80" />
                <h3 className="text-lg font-medium tracking-tight">
                  Termos e Política de Privacidade
                </h3>
              </div>
              <button
                onClick={() => setShowTermsModal(false)}
                className="text-white/50 hover:text-white p-1 rounded-md text-sm font-mono cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-white/70 leading-relaxed font-sans max-h-[60vh] overflow-y-auto pr-2">
              <p>
                <strong className="text-white">1. Sigilo e Ética Profissional:</strong> Todas as conversas, modelos de negócio, informações comerciais e orientações jurídicas são tratados sob rigoroso sigilo profissional, em integral observância ao Código de Ética e Disciplina da OAB.
              </p>
              <p>
                <strong className="text-white">2. Proteção de Dados (LGPD):</strong> Os dados de contato fornecidos por meio deste website são utilizados exclusivamente para retorno e agendamento de conversas solicitadas pelo interessado, não sendo compartilhados com terceiros.
              </p>
              <p>
                <strong className="text-white">3. Atendimento e Abrangência:</strong> O atendimento jurídico é realizado prioritariamente em formato digital, com agilidade e validade legal em todo o território brasileiro e para operações com atuação internacional.
              </p>
            </div>

            <div className="pt-2 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setShowTermsModal(false)}
                className="px-5 py-2.5 rounded-full bg-white text-[#0b0e11] font-medium text-xs hover:bg-[#e8e6df] transition-colors cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
