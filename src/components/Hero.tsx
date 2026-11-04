"use client";

import { useEffect, useRef, useState } from "react";
import { SiteCopy } from "@/content/siteCopy";
import { WHATSAPP_DIRECT_URL } from "@/lib/whatsapp";

interface HeroProps {
  copy: SiteCopy;
}

export default function Hero({ copy }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Força configurações nativas estritas no elemento DOM para garantir autoplay sem controles
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.controls = false;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "true");
    video.setAttribute("x5-playsinline", "true");

    const forceNoControls = () => {
      if (video.controls) {
        video.controls = false;
      }
    };

    const handlePlaying = () => {
      forceNoControls();
      setIsVideoPlaying(true);
    };

    const playVideo = () => {
      forceNoControls();
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsVideoPlaying(true);
          })
          .catch(() => {
            // Em dispositivos com Modo Pouca Energia (Low Power Mode no iOS), o autoplay inicial é bloqueado pelo SO.
            // O vídeo permanece com opacity-0 (ocultando qualquer botão nativo de play) até o primeiro toque/scroll.
          });
      }
    };

    video.addEventListener("playing", handlePlaying);
    video.addEventListener("play", handlePlaying);
    video.addEventListener("pause", forceNoControls);
    video.addEventListener("timeupdate", forceNoControls);
    video.addEventListener("loadedmetadata", playVideo);
    video.addEventListener("canplay", playVideo);
    video.addEventListener("canplaythrough", playVideo);

    playVideo();

    const onUserInteraction = () => {
      playVideo();
      window.removeEventListener("touchstart", onUserInteraction);
      window.removeEventListener("touchend", onUserInteraction);
      window.removeEventListener("click", onUserInteraction);
      window.removeEventListener("scroll", onUserInteraction);
    };

    window.addEventListener("touchstart", onUserInteraction, { passive: true, once: true });
    window.addEventListener("touchend", onUserInteraction, { passive: true, once: true });
    window.addEventListener("click", onUserInteraction, { passive: true, once: true });
    window.addEventListener("scroll", onUserInteraction, { passive: true, once: true });

    return () => {
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("play", handlePlaying);
      video.removeEventListener("pause", forceNoControls);
      video.removeEventListener("timeupdate", forceNoControls);
      video.removeEventListener("loadedmetadata", playVideo);
      video.removeEventListener("canplay", playVideo);
      video.removeEventListener("canplaythrough", playVideo);
      window.removeEventListener("touchstart", onUserInteraction);
      window.removeEventListener("touchend", onUserInteraction);
      window.removeEventListener("click", onUserInteraction);
      window.removeEventListener("scroll", onUserInteraction);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-[#101010] text-white"
    >
      {/* Background Poster permanente: imagem estática cinematográfica que renderiza imediatamente sem botões */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none select-none"
        style={{ backgroundImage: "url('/hero-video-poster.webp')" }}
      />

      {/* Background Video: só se torna visível (opacity-100) quando estiver efetivamente reproduzindo.
          Se o iOS estiver em Modo Pouca Energia, o vídeo pausado fica invisível (opacity-0),
          impedindo 100% que o sistema operacional injete qualquer botão nativo de play sobre a tela! */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          x5-playsinline="true"
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none select-none transition-opacity duration-700 ease-out ${
            isVideoPlaying ? "opacity-100" : "opacity-0 invisible"
          }`}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/hero-video.webm" type="video/webm" />
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
