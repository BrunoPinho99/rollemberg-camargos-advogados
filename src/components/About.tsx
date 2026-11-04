"use client";

import { useEffect, useRef, useMemo } from "react";
import { SiteCopy } from "@/content/siteCopy";

interface AboutProps {
  copy: SiteCopy;
}

export default function About({ copy }: AboutProps) {
  const containerRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const spotlightLeftRef = useRef<HTMLDivElement>(null);
  const spotlightRightRef = useRef<HTMLDivElement>(null);
  const charsRef = useRef<HTMLSpanElement[]>([]);
  const lastFilledCountRef = useRef(-1);

  const paragraphText = copy.about.paragraph;

  // Monta a estrutura de palavras e caracteres estaticamente uma única vez
  const { renderedParagraph, totalChars } = useMemo(() => {
    const words = paragraphText.split(" ");
    let charIndex = 0;

    const rendered = words.map((word, wordIdx) => {
      const chars = word.split("");
      return (
        <span key={`pw-${wordIdx}`} className="inline-block whitespace-nowrap">
          {chars.map((char, charIdx) => {
            const index = charIndex++;
            return (
              <span
                key={`pc-${charIdx}`}
                ref={(el) => {
                  if (el) charsRef.current[index] = el;
                }}
                data-filled="false"
                style={{
                  color: "rgba(16, 16, 16, 0.20)",
                  fontWeight: 400,
                }}
              >
                {char}
              </span>
            );
          })}
          {/* Espaço entre as palavras */}
          {(() => {
            charIndex++;
            return wordIdx < words.length - 1 ? (
              <span className="inline-block">&nbsp;</span>
            ) : null;
          })()}
        </span>
      );
    });

    return { renderedParagraph: rendered, totalChars: paragraphText.length };
  }, [paragraphText]);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const totalPinDistance = rect.height - window.innerHeight;

      if (totalPinDistance <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalPinDistance, 0), 1);

      // Quantidade exata de caracteres que devem estar preenchidos
      const targetFilledCount = Math.round(progress * (totalChars - 1));

      // Atualização direta e hiper rápida no DOM sem acionar re-render do React
      if (targetFilledCount !== lastFilledCountRef.current) {
        const start = Math.min(
          lastFilledCountRef.current === -1 ? 0 : lastFilledCountRef.current,
          targetFilledCount
        );
        const end = Math.max(
          lastFilledCountRef.current === -1 ? totalChars : lastFilledCountRef.current,
          targetFilledCount
        );

        for (let i = start; i <= end && i < totalChars; i++) {
          const charEl = charsRef.current[i];
          if (!charEl) continue;

          const isFilled = i <= targetFilledCount;
          const currentFilled = charEl.dataset.filled === "true";

          if (isFilled !== currentFilled) {
            charEl.dataset.filled = isFilled ? "true" : "false";
            charEl.style.color = isFilled ? "#101010" : "rgba(16, 16, 16, 0.20)";
            charEl.style.fontWeight = isFilled ? "500" : "400";
          }
        }
        lastFilledCountRef.current = targetFilledCount;
      }

      // Parallax por GPU via translate3d direto
      if (labelRef.current) {
        const labelTranslateY = (progress - 0.5) * -35;
        labelRef.current.style.transform = `translate3d(0, ${labelTranslateY.toFixed(2)}px, 0)`;
      }

      const spotlightOpacity = (0.15 + progress * 0.45).toFixed(3);
      if (spotlightLeftRef.current) {
        spotlightLeftRef.current.style.opacity = spotlightOpacity;
      }
      if (spotlightRightRef.current) {
        spotlightRightRef.current.style.opacity = spotlightOpacity;
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [totalChars]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative bg-[#fcfbf7] border-b border-[#e8e6df] h-[175vh] md:h-[260vh]"
    >
      {/* Container Sticky: Trava centralizado no viewport com scrub e parallax tanto no mobile quanto no desktop */}
      <div className="sticky top-0 h-[100svh] w-full flex flex-col justify-center overflow-hidden select-none">
        {/* Parallax Camada 2: Iluminação lateral reativa */}
        <div
          ref={spotlightLeftRef}
          className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-64 bg-gradient-to-r from-[#2E3C44]/[0.08] via-transparent to-transparent z-0 opacity-15 will-change-[opacity]"
        />
        <div
          ref={spotlightRightRef}
          className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-64 bg-gradient-to-l from-[#2E3C44]/[0.08] via-transparent to-transparent z-0 opacity-15 will-change-[opacity]"
        />

        {/* Conteúdo Principal */}
        <div className="max-w-[1400px] w-full mx-auto px-5 sm:px-10 md:px-14 relative z-10 py-6 sm:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-16 items-start">
            {/* Coluna Esquerda: Tag / Label com Parallax suave */}
            <div
              ref={labelRef}
              className="lg:col-span-3 space-y-2 sm:space-y-4 will-change-transform"
            >
              <div className="reveal">
                <span className="text-[12px] font-semibold tracking-wider uppercase text-[#6e6d69] block">
                  {copy.about.label}
                </span>
                <span className="text-[11px] font-mono tracking-wider uppercase text-[#101010]/60 block mt-1">
                  {copy.brand.name} {copy.brand.tagline}
                </span>
              </div>
            </div>

            {/* Coluna Direita: Declaração Editorial com Título de Alto Impacto e Parágrafo com Scrub de Letras */}
            <div className="lg:col-span-9 max-w-4xl">
              {/* Título Principal */}
              <h2 className="text-2xl sm:text-4xl md:text-[54px] font-medium tracking-tight leading-[1.18] text-[#101010] reveal delay-100">
                <span>{copy.about.headlineHighlight} </span>
                <span>{copy.about.headlineMuted}</span>
              </h2>

              {/* Parágrafo Descritivo com Preenchimento Letra por Letra e Scrub contínuo */}
              <div className="mt-6 sm:mt-12 max-w-3xl reveal delay-200">
                <p className="text-base sm:text-xl md:text-2xl font-normal leading-relaxed flex flex-wrap">
                  {renderedParagraph}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
