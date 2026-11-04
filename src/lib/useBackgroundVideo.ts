"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Autoplay robusto para vídeos de background (iOS Safari / Android Chrome / desktop).
 * - Define muted/defaultMuted/playsInline ANTES de chamar play().
 * - Evita chamadas concorrentes a play().
 * - Retoma em pageshow (BFCache), visibilitychange e eventos de carregamento.
 * - Não depende de interação do usuário.
 */
export function useBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playingRef = useRef(false);
  const pendingRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const prepare = useCallback((video: HTMLVideoElement) => {
    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;
    video.playsInline = true;
    video.autoplay = true;
    video.loop = true;
    video.controls = false;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "true");
    video.setAttribute("autoplay", "");
    video.removeAttribute("controls");
  }, []);

  const tryPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video || pendingRef.current) return;
    if (document.visibilityState === "hidden") return;
    prepare(video);
    if (!video.paused && !video.ended) return;

    // Se ainda não há dados, força o carregamento (evita bloqueio por lazy-load)
    if (video.readyState === 0) video.load();

    pendingRef.current = true;
    const p = video.play();
    if (p && typeof p.then === "function") {
      p.then(() => {
        pendingRef.current = false;
      }).catch(() => {
        // Bloqueado (ex.: Modo Pouca Energia). Será retentado nos eventos de retomada.
        pendingRef.current = false;
      });
    } else {
      pendingRef.current = false;
    }
  }, [prepare]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    prepare(video);

    const onPlaying = () => {
      playingRef.current = true;
      setIsPlaying(true);
    };
    const onPause = () => {
      playingRef.current = false;
    };
    const onPageShow = () => tryPlay();
    const onVisibility = () => {
      if (document.visibilityState === "visible") tryPlay();
    };

    video.addEventListener("playing", onPlaying);
    video.addEventListener("pause", onPause);
    video.addEventListener("loadedmetadata", tryPlay);
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    window.addEventListener("pageshow", onPageShow);
    document.addEventListener("visibilitychange", onVisibility);

    tryPlay();

    return () => {
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("loadedmetadata", tryPlay);
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      window.removeEventListener("pageshow", onPageShow);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [prepare, tryPlay]);

  return { videoRef, isPlaying };
}
