"use client";

import { useState } from "react";
import { ArrowUp, FileText } from "lucide-react";
import { useMotion } from "./MotionProvider";
import { SiteCopy } from "@/content/siteCopy";

interface FooterProps {
  copy: SiteCopy;
  onOpenBooking?: () => void;
}

export default function Footer({ copy, onOpenBooking }: FooterProps) {
  const { scrollTo } = useMotion();
  const [showTermsModal, setShowTermsModal] = useState(false);

  const cleanPhone = copy.contact.phone.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20a%20estrutura%20jur%C3%ADdica%20do%20meu%20neg%C3%B3cio%20com%20a%20Rollemberg%20%26%20Camargos%20Advogados.`;

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
        {/* Seção Principal: 2 Colunas Divididas por Linha Vertical */}
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {/* Coluna 1: Logo Oficial e Descrição Institucional */}
            <div className="py-14 lg:py-20 lg:pr-16 flex flex-col justify-between gap-12">
              <div>
                <a
                  href="#home"
                  onClick={handleBackToTop}
                  className="inline-block transition-opacity hover:opacity-85"
                  aria-label="Rollemberg & Camargos Advogados - Início"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo-rollemberg.png"
                    alt="Rollemberg & Camargos Advogados"
                    className="h-12 sm:h-14 w-auto object-contain"
                  />
                </a>
              </div>

              <p className="text-sm sm:text-[15px] text-white/55 leading-relaxed font-normal max-w-md">
                Advocacia estratégica e descomplicada para empresas em construção e escala. Estrutura societária, contratos sob medida, proteção de marcas e segurança operacional.
              </p>
            </div>

            {/* Coluna 2: Navegação em 2 Sub-colunas + Ícones Sociais Circulares */}
            <div className="py-14 lg:py-20 lg:pl-16 flex flex-col justify-between gap-12">
              <div className="grid grid-cols-2 gap-6 text-[12px] sm:text-[13px] font-medium tracking-[0.08em] uppercase">
                {/* Sub-coluna 1 */}
                <div className="flex flex-col space-y-4">
                  <a
                    href="#home"
                    onClick={handleBackToTop}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Início
                  </a>
                  <a
                    href="#about"
                    onClick={(e) => handleNavClick(e, "#about")}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Sobre Nós
                  </a>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, "#services")}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Serviços
                  </a>
                  <a
                    href="#expertise"
                    onClick={(e) => handleNavClick(e, "#expertise")}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Nossa Atuação
                  </a>
                  <a
                    href="#faq"
                    onClick={(e) => handleNavClick(e, "#faq")}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Dúvidas / FAQ
                  </a>
                </div>

                {/* Sub-coluna 2 */}
                <div className="flex flex-col space-y-4">
                  {onOpenBooking && (
                    <button
                      onClick={onOpenBooking}
                      className="text-left text-white/70 hover:text-white transition-colors duration-200 uppercase cursor-pointer"
                    >
                      Agendar Conversa
                    </button>
                  )}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    WhatsApp
                  </a>
                  <button
                    onClick={() => setShowTermsModal(true)}
                    className="text-left text-white/70 hover:text-white transition-colors duration-200 uppercase cursor-pointer"
                  >
                    Termos de Uso
                  </button>
                  <button
                    onClick={() => setShowTermsModal(true)}
                    className="text-left text-white/70 hover:text-white transition-colors duration-200 uppercase cursor-pointer"
                  >
                    Privacidade
                  </button>
                </div>
              </div>

              {/* Botões Sociais Circulares com Borda Fina */}
              <div className="flex items-center gap-3">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/75 hover:text-white hover:border-white/60 hover:bg-white/5 transition-all duration-200 group"
                >
                  <svg className="w-4 h-4 fill-current transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8v-8.37M7.86 6.54a1.64 1.64 0 1 0 0 3.27 1.64 1.64 0 0 0 0-3.27Z" />
                  </svg>
                </a>

                {/* X (Twitter) */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/75 hover:text-white hover:border-white/60 hover:bg-white/5 transition-all duration-200 group"
                >
                  <svg className="w-3.5 h-3.5 fill-current transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/75 hover:text-white hover:border-white/60 hover:bg-white/5 transition-all duration-200 group"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2 transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/75 hover:text-white hover:border-white/60 hover:bg-white/5 transition-all duration-200 group"
                >
                  <svg className="w-4 h-4 fill-current transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Barra Inferior Minimalista de Copyright */}
        <div className="border-t border-white/10">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/45">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} {copy.brand.name} Advogados. Todos os direitos reservados.
            </p>

            <button
              onClick={handleBackToTop}
              className="group inline-flex items-center gap-2 text-white/55 hover:text-white transition-colors cursor-pointer"
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
