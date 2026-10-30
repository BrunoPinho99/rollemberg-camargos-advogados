"use client";

import { useEffect, useRef } from "react";
import { SiteCopy } from "@/content/siteCopy";
import { WHATSAPP_DIRECT_URL } from "@/lib/whatsapp";

interface HeroProps {
  copy: SiteCopy;
}

export default function Hero({ copy }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Pausa o decodificador de vídeo quando fora do viewport para liberar GPU/bateria
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-[#101010] text-white"
    >
      {/* Background Video que preenche toda a altura da seção */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.webm" type="video/webm" />
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Overlays cinematográficos suaves para garantir máxima legibilidade */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/65 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Espaçamento superior para compensar o cabeçalho fixo */}
      <div className="pt-[clamp(88px,14vh,140px)]" />

      {/* Conteúdo Principal do Hero */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-10 md:px-14 pb-10 sm:pb-16 mt-auto flex flex-col">
        {/* Título de Alto Impacto com clamp fluido */}
        <div id="heroHeadline" className="hero-animate-title max-w-4xl">
          <h1 className="text-[clamp(34px,8vw,78px)] font-normal tracking-[-0.03em] leading-[1.08] text-white">
            {copy.hero.headline.line1}
            <br />
            {copy.hero.headline.line2}
            {copy.hero.headline.line3 && (
              <>
                <br />
                {copy.hero.headline.line3}
              </>
            )}
          </h1>
        </div>

        {/* Linha Descritiva adaptada para telas pequenas e grandes */}
        <div className="mt-5 sm:mt-8 pt-4 sm:pt-5 border-t border-white/15 max-w-2xl hero-animate-sub">
          <p className="text-sm sm:text-lg md:text-[18px] font-normal leading-[1.48] tracking-tight text-white/90">
            {copy.hero.subtext}
          </p>
        </div>
      </div>
    </section>
  );
}
