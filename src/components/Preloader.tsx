"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Bloqueia scroll enquanto estiver carregando
    document.body.style.overflow = "hidden";

    // Simulação suave de progresso de carregamento de alto padrão
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Incremento com variação orgânica
        const increment = Math.floor(Math.random() * 18) + 12;
        return Math.min(100, prev + increment);
      });
    }, 120);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
      document.documentElement.dataset.siteReady = "true";
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Pequeno atraso de 1 segundo para apreciação da marca completa
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
        document.documentElement.dataset.siteReady = "true";
      }, 1000);

      // Finaliza e remove completamente da tela após a transição suave de 1s
      const finishTimer = setTimeout(() => {
        setIsFinished(true);
        document.body.style.overflow = "";
      }, 2100);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(finishTimer);
      };
    }
  }, [progress]);

  if (isFinished) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080808] text-white select-none transition-opacity duration-1000 ease-in-out ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div
        className={`flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${
          isExiting ? "scale-[1.02] opacity-0" : "scale-100 opacity-100"
        }`}
      >
        {/* Monograma RC Branco */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-6 animate-pulse-subtle">
          <Image
            src="/rc-logo-white.webp"
            alt="Rollemberg & Camargos"
            fill
            priority
            className="object-contain drop-shadow-[0_4px_24px_rgba(255,255,255,0.18)]"
          />
        </div>

        {/* Nome do escritório */}
        <div className="text-center mb-8">
          <h2 className="text-xs sm:text-[13px] font-medium tracking-[0.28em] uppercase text-white/95">
            ROLLEMBERG & CAMARGOS
          </h2>
          <p className="text-[10px] sm:text-[11px] font-light tracking-[0.4em] uppercase text-white/50 mt-1">
            ADVOGADOS
          </p>
        </div>

        {/* Barra de progresso minimalista */}
        <div className="w-36 sm:w-44 h-[1.5px] bg-white/10 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-white transition-all duration-200 ease-out rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

