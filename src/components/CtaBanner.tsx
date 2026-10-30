"use client";

import { useEffect, useRef } from "react";
import { SiteCopy } from "@/content/siteCopy";
import { WHATSAPP_DIRECT_URL } from "@/lib/whatsapp";

interface CtaBannerProps {
  copy: SiteCopy;
  onOpenBooking?: () => void;
}

export default function CtaBanner({}: CtaBannerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Carrega e toca o vídeo somente quando o usuário se aproxima da seção
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "250px", threshold: 0.05 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta-banner" className="py-16 sm:py-24 bg-[#fcfbf7]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Card Flutuante com Bordas Arredondadas e Vídeo em Loop (Inspirado em attest.framer.media) */}
        <div className="relative w-full rounded-3xl sm:rounded-[36px] overflow-hidden min-h-[460px] sm:min-h-[520px] md:min-h-[580px] flex flex-col items-center justify-center text-center p-8 sm:p-14 shadow-2xl reveal">
          {/* Vídeo de Fundo em Loop da Reunião com Iluminação Quente */}
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            preload="none"
            poster="/cta-conversation-poster.jpg"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          >
            <source src="/cta-conversation.mp4" type="video/mp4" />
          </video>

          {/* Overlay suave e cinematográfico mantendo o vídeo bem claro */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/25 pointer-events-none" />

          {/* Conteúdo Centralizado */}
          <div className="relative z-10 max-w-3xl flex flex-col items-center">
            {/* Badge de Destaque Frosted */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 sm:mb-8 shadow-sm reveal delay-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-white/95">
                Fale Conosco
              </span>
            </div>

            {/* Título Principal de Alto Impacto (Fiel ao Attest Framer) */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-normal tracking-[-0.03em] leading-[1.1] text-white mb-6 sm:mb-8 font-serif drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)] reveal delay-200">
              Comece com uma conversa,
              <br />
              não com um contrato.
            </h2>

            {/* Subtítulo Discreto */}
            <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed max-w-xl mb-8 sm:mb-10 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] reveal delay-300">
              Conte o momento atual da sua operação e descubra, sem formalismos, como estruturar seus contratos, proteger sua marca e crescer com segurança.
            </p>

            {/* Botão Pill de Conversão */}
            <div className="reveal delay-400">
              <a
                href={WHATSAPP_DIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-white text-[#101010] font-medium text-sm sm:text-base shadow-[0_6px_28px_rgba(255,255,255,0.22)] hover:bg-[#f2efe9] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>Agendar uma conversa conosco</span>
                <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
