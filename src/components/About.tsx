"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import { SiteCopy } from "@/content/siteCopy";

interface AboutProps {
  copy: SiteCopy;
}

export default function About({ copy }: AboutProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const totalPinDistance = rect.height - window.innerHeight;

      if (totalPinDistance <= 0) return;

      // O pin ocorre enquanto rect.top <= 0 e rect.bottom >= window.innerHeight.
      // A distância percorrida no scroll com a tela travada é -rect.top.
      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalPinDistance, 0), 1);

      setScrollProgress(progress);
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
  }, []);

  const paragraphText = copy.about.paragraph;

  // Preenchimento letra por letra com precisão milimétrica direta no scroll
  // A última letra só é preenchida exatamente quando o scroll atinge 1.0 (100%),
  // momento exato em que a página é liberada para rolar até a próxima seção.
  const renderedParagraph = useMemo(() => {
    const words = paragraphText.split(" ");
    const totalChars = paragraphText.length;
    let globalCharIndex = 0;

    return words.map((word, wordIdx) => {
      const chars = word.split("");
      return (
        <span key={`pw-${wordIdx}`} className="inline-block whitespace-nowrap">
          {chars.map((char, charIdx) => {
            const index = globalCharIndex++;
            const threshold = index / Math.max(totalChars - 1, 1);
            const isFilled = scrollProgress >= threshold;

            return (
              <span
                key={`pc-${charIdx}`}
                style={{
                  color: isFilled ? "#101010" : "rgba(16, 16, 16, 0.20)",
                  fontWeight: isFilled ? 500 : 400,
                }}
              >
                {char}
              </span>
            );
          })}
          {/* Espaço entre as palavras */}
          {(() => {
            globalCharIndex++;
            return wordIdx < words.length - 1 ? (
              <span className="inline-block">&nbsp;</span>
            ) : null;
          })()}
        </span>
      );
    });
  }, [paragraphText, scrollProgress]);

  // Efeitos de Parallax
  const labelTranslateY = (scrollProgress - 0.5) * -35;
  const spotlightOpacity = 0.15 + scrollProgress * 0.45;

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative bg-[#fcfbf7] border-b border-[#e8e6df]"
      style={{ height: "260vh" }}
    >
      {/* Container Sticky: Trava a tela centralizada no viewport enquanto o usuário rola a página */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden select-none">
        {/* Parallax Camada 2: Iluminação lateral reativa */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-32 sm:w-64 bg-gradient-to-r from-[#2E3C44]/[0.08] via-transparent to-transparent z-0"
          style={{ opacity: spotlightOpacity }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-32 sm:w-64 bg-gradient-to-l from-[#2E3C44]/[0.08] via-transparent to-transparent z-0"
          style={{ opacity: spotlightOpacity }}
        />

        {/* Conteúdo Principal */}
        <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-10 md:px-14 relative z-10 py-8 sm:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Coluna Esquerda: Tag / Label com Parallax suave */}
            <div
              className="lg:col-span-3 space-y-4 will-change-transform"
              style={{
                transform: `translateY(${labelTranslateY}px)`,
              }}
            >
              <div>
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
              <h2 className="text-3xl sm:text-5xl md:text-[54px] font-medium tracking-tight leading-[1.16] text-[#101010]">
                <span>{copy.about.headlineHighlight} </span>
                <span>{copy.about.headlineMuted}</span>
              </h2>

              {/* Parágrafo Descritivo com Preenchimento Letra por Letra */}
              <div className="mt-8 sm:mt-12 max-w-3xl">
                <p className="text-lg sm:text-2xl font-normal leading-relaxed flex flex-wrap">
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
