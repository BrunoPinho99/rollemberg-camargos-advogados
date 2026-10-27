import { SiteCopy } from "@/content/siteCopy";

interface AboutProps {
  copy: SiteCopy;
}

export default function About({ copy }: AboutProps) {
  return (
    <section id="about" className="py-24 sm:py-36 border-b border-[#e8e6df] bg-[#fcfbf7]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Coluna Esquerda: Tag / Label */}
          <div className="lg:col-span-3 reveal space-y-1">
            <span className="text-[12px] font-semibold tracking-wider uppercase text-[#6e6d69] block">
              {copy.about.label}
            </span>
            <span className="text-[11px] font-mono tracking-wider uppercase text-[#101010]/50 block">
              {copy.about.sublabel}
            </span>
          </div>

          {/* Coluna Direita: Declaração Editorial Dual-Tone */}
          <div className="lg:col-span-9 max-w-4xl reveal delay-100">
            <h2 className="text-3xl sm:text-5xl md:text-[54px] font-medium tracking-tight leading-[1.15]">
              <span className="text-[#101010] font-semibold">
                {copy.about.headlineHighlight}{" "}
              </span>
              <span className="text-[#101010]/45 font-normal">
                {copy.about.headlineMuted}
              </span>
            </h2>
            <p className="mt-8 sm:mt-12 text-lg sm:text-2xl font-normal text-[#6e6d69] leading-relaxed max-w-2xl">
              {copy.about.paragraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
