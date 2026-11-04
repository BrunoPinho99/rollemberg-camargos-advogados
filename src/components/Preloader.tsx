"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Bloqueia scroll temporariamente durante a animação de entrada
    document.body.style.overflow = "hidden";

    // Simulação suave e dinâmica de progresso
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 20) + 15;
        return Math.min(100, prev + increment);
      });
    }, 90);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Inicia a transição de saída suave
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
        document.body.style.overflow = "";
      }, 500);

      // Desmonta o preloader após o fade-out
      const finishTimer = setTimeout(() => {
        setIsFinished(true);
        document.body.style.overflow = "";
      }, 1200);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(finishTimer);
        document.body.style.overflow = "";
      };
    }
  }, [progress]);

  if (isFinished) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080808] text-white select-none transition-opacity duration-700 ease-in-out border-0 outline-none shadow-none ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div
        className={`flex flex-col items-center justify-center transition-all duration-700 ease-in-out border-0 outline-none shadow-none bg-transparent ${
          isExiting ? "scale-[1.02] opacity-0" : "scale-100 opacity-100"
        }`}
      >
        {/* Monograma RC Branco — canal alfa limpo, sem moldura, sem bordas, sem sombras retangulares */}
        <div className="relative w-16 h-24 sm:w-20 sm:h-28 mb-5 animate-pulse-subtle bg-transparent border-0 outline-none shadow-none flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/rc-monogram-v2.webp?v=5"
            alt="Rollemberg & Camargos"
            width={445}
            height={659}
            className="w-full h-full object-contain bg-transparent border-0 outline-none shadow-none select-none"
          />
        </div>

        {/* Nome do escritório */}
        <div className="text-center mb-7 border-0 outline-none shadow-none">
          <h2 className="text-xs sm:text-[13px] font-medium tracking-[0.28em] uppercase text-white/95">
            ROLLEMBERG & CAMARGOS
          </h2>
          <p className="text-[10px] sm:text-[11px] font-light tracking-[0.4em] uppercase text-white/50 mt-1">
            ADVOGADOS
          </p>
        </div>

        {/* Barra de progresso minimalista */}
        <div className="w-32 sm:w-40 h-[1.5px] bg-white/10 rounded-full overflow-hidden relative border-0 outline-none shadow-none">
          <div
            className="h-full bg-white transition-all duration-150 ease-out rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
