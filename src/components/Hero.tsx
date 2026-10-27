import { ArrowUpRight } from "lucide-react";
import { SiteCopy } from "@/content/siteCopy";

interface HeroProps {
  copy: SiteCopy;
}

export default function Hero({ copy }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#101010] text-white"
    >
      {/* Ambient Radial Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[550px] bg-gradient-to-b from-white/[0.04] via-white/[0.015] to-transparent blur-3xl opacity-70" />
        <div className="absolute inset-0 bg-[#101010]" />
      </div>

      {/* Top spacing to offset fixed header */}
      <div className="pt-28" />

      {/* Hero Subtext & Link */}
      <div
        id="heroSubtext"
        className="relative z-10 max-w-[1400px] w-full mx-auto px-6 sm:px-10 md:px-14 flex justify-end hero-animate-sub"
      >
        <div className="max-w-md sm:max-w-xl text-right sm:text-left">
          <p className="text-lg sm:text-xl md:text-[22px] font-normal leading-[1.38] tracking-tight text-white/90">
            {copy.hero.subtext}
          </p>
          <div className="mt-4 sm:mt-5">
            <a
              href="#services"
              className="arrow-link text-white text-sm sm:text-base font-medium inline-flex items-center gap-1.5 hover:underline"
            >
              <span>{copy.hero.secondaryCta}</span>
              <ArrowUpRight className="w-4 h-4 inline-block" />
            </a>
          </div>
        </div>
      </div>

      {/* Giant Display Headline */}
      <div
        id="heroHeadline"
        className="relative z-10 max-w-[1400px] w-full mx-auto px-6 sm:px-10 md:px-14 pb-12 sm:pb-16 hero-animate-title"
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[96px] font-bold tracking-tight leading-[1.02] max-w-5xl text-white">
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

        {/* Scroll Indicator */}
        <div
          id="heroScrollIndicator"
          className="mt-12 sm:mt-16 flex items-center justify-between text-white/40 text-xs font-medium tracking-wider uppercase border-t border-white/10 pt-6 transition-opacity duration-300"
        >
          <span className="flex items-center gap-2 text-white/70">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {copy.hero.scrollIndicator}
          </span>
          <span className="font-mono text-white/40 hidden sm:inline tracking-wider">
            {copy.hero.badge}
          </span>
        </div>
      </div>
    </section>
  );
}
