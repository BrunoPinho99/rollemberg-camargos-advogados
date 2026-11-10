"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

export interface BackgroundVideoProps {
  webmSrc?: string;
  mp4Src?: string;
  posterSrc?: string;
  priority?: boolean;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Componente de Vídeo de Background de Alta Performance:
 * - Zero Peso Visual: Exibe o poster estático imediatamente com prioridade (LCP otimizado).
 * - CDN First: Carrega das variáveis de ambiente NEXT_PUBLIC_BG_VIDEO_WEBM / MP4 com fallback local.
 * - Respeita prefers-reduced-motion e modo de economia de dados (Save-Data).
 * - Fade-in suave (duration-1000) apenas após o buffer estar pronto (onCanPlayThrough + playing).
 * - Blindagem iOS: impede surgimento de botões nativos em Modo Pouca Energia.
 */
export default function BackgroundVideo({
  webmSrc = process.env.NEXT_PUBLIC_BG_VIDEO_WEBM || "/hero-video.webm",
  mp4Src = process.env.NEXT_PUBLIC_BG_VIDEO_MP4 || "/hero-video.mp4",
  posterSrc = process.env.NEXT_PUBLIC_BG_VIDEO_POSTER || "/hero-video-poster.webp",
  priority = true,
  className = "",
  children,
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canPlay, setCanPlay] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [shouldDisableVideo, setShouldDisableVideo] = useState(false);

  // Detecção de prefers-reduced-motion e economia de dados
  useEffect(() => {
    try {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      const hasSaveData =
        Boolean((navigator as unknown as { connection?: { saveData?: boolean } }).connection?.saveData);

      if (mediaQuery.matches || hasSaveData) {
        setShouldDisableVideo(true);
        return;
      }

      const handleChange = (e: MediaQueryListEvent) => {
        setShouldDisableVideo(e.matches);
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } catch {
      // Fallback gracioso para navegadores antigos
    }
  }, []);

  const prepareAndPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video || shouldDisableVideo) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "true");

    if (video.paused) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Autoplay impedido (ex: Low Power Mode no iOS). Mantém invisível exibindo o poster estático.
            setIsPlaying(false);
          });
      }
    }
  }, [shouldDisableVideo]);

  const handleCanPlayThrough = () => {
    setCanPlay(true);
    prepareAndPlay();
  };

  const handlePlaying = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    if (shouldDisableVideo) return;

    prepareAndPlay();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        prepareAndPlay();
      }
    };

    const handlePageShow = () => {
      prepareAndPlay();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pageshow", handlePageShow);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, [prepareAndPlay, shouldDisableVideo]);

  const isExternalPoster =
    posterSrc.startsWith("http://") || posterSrc.startsWith("https://");

  const isVisible = canPlay && isPlaying && !shouldDisableVideo;

  return (
    <div
      className={`absolute inset-0 z-0 overflow-hidden pointer-events-none select-none ${className}`}
    >
      {/* 1. Poster imediato (Zero Peso Visual / LCP Instantâneo) */}
      <Image
        src={posterSrc}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        unoptimized={isExternalPoster}
        className="object-cover pointer-events-none select-none"
        aria-hidden="true"
      />

      {/* 2. Tag <video> com fade-in suave ativado após buffer completo */}
      {!shouldDisableVideo && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          preload="auto"
          poster={posterSrc}
          onCanPlayThrough={handleCanPlayThrough}
          onLoadedData={handleCanPlayThrough}
          onPlaying={handlePlaying}
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none select-none transition-opacity duration-1000 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={webmSrc} type="video/webm" />
          <source src={mp4Src} type="video/mp4" />
        </video>
      )}

      {/* 3. Overlays e camadas filhas opcionais */}
      {children}
    </div>
  );
}
