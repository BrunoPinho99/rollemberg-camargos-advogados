import { SiteCopy } from "@/content/siteCopy";

interface HeroProps {
  copy: SiteCopy;
}

export default function Hero({ copy }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-[#101010] text-white"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="hero-video-zoom-out absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Subtle overlays: keep the footage visible, guarantee text legibility */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/10 to-transparent" />
      </div>

      {/* Top spacing to offset fixed header */}
      <div className="pt-[clamp(110px,22vh,176px)]" />

      {/* Display Headline — bottom left */}
      <div
        id="heroHeadline"
        className="relative z-10 mt-auto max-w-[1400px] w-full mx-auto px-6 sm:px-10 md:px-14 pt-10 pb-[clamp(32px,7vh,80px)] hero-animate-title"
      >
        <h1 className="text-[clamp(42px,min(6vw,10vh),84px)] font-normal tracking-[-0.03em] leading-[1.04] text-white">
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
    </section>
  );
}
