import { ArrowUpRight } from "lucide-react";

export default function Hero() {
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
        <div className="max-w-md sm:max-w-lg text-right sm:text-left">
          <p className="text-lg sm:text-xl md:text-[22px] font-normal leading-[1.35] tracking-tight text-white/90">
            We help companies, entrepreneurs, and private clients navigate legal
            complexity with confidence.
          </p>
          <div className="mt-4 sm:mt-5">
            <a
              href="#services"
              className="arrow-link text-white text-sm sm:text-base font-medium"
            >
              <span>Our services</span>
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
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[104px] font-bold tracking-tight leading-[0.98] max-w-5xl text-white">
          Where legal
          <br />
          clarity meets
          <br />
          confidence.
        </h1>

        {/* Scroll Indicator */}
        <div
          id="heroScrollIndicator"
          className="mt-12 sm:mt-16 flex items-center justify-between text-white/40 text-xs font-medium tracking-wider uppercase border-t border-white/10 pt-6 transition-opacity duration-300"
        >
          <span className="flex items-center gap-2 text-white/70">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Scroll to explore
          </span>
          <span className="font-mono text-white/40 hidden sm:inline">
            KAFKA™ / LEGAL ADVISORY
          </span>
        </div>
      </div>
    </section>
  );
}
