import { SiteCopy } from "@/content/siteCopy";

interface MarqueeProps {
  copy: SiteCopy;
}

export default function Marquee({ copy }: MarqueeProps) {
  // Nomes de referência no mercado de agências/negócios digitais
  const logosA = [
    { name: "CreatorHub®", font: "font-serif font-bold" },
    { name: "LivePeak™", font: "font-bold", prefix: "● " },
    { name: "ByteStudio", font: "font-light tracking-wider", prefix: "✦ " },
    { name: "FlowTalents™", font: "font-medium", prefix: "ꕤ " },
    { name: "ViralForce.io", font: "font-mono" },
    { name: "Nexa Media™", font: "font-black tracking-tighter uppercase" },
  ];

  const logosB = [
    { name: "Infoprodutores BR", font: "font-serif font-bold" },
    { name: "ScaleDigital™", font: "font-bold", prefix: "● " },
    { name: "SaaS Rocket", font: "font-light tracking-wider", prefix: "✦ " },
    { name: "OmniGrowth™", font: "font-medium", prefix: "ꕤ " },
    { name: "LaunchPad.tech", font: "font-mono" },
    { name: "VentureMedia™", font: "font-black tracking-tighter uppercase" },
  ];

  const logos = copy.versionId === "A" ? logosA : logosB;

  return (
    <section className="border-b border-[#e8e6df] py-10 bg-[#fcfbf7] overflow-hidden select-none reveal">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14 mb-4">
        <span className="text-[11px] font-semibold tracking-wider uppercase text-[#6e6d69]">
          {copy.hero.socialProof}
        </span>
      </div>
      <div className="marquee-track flex items-center justify-between gap-16 sm:gap-24 text-[#101010]/75 opacity-70 hover:opacity-100 transition-opacity">
        {/* Loop Group 1 */}
        {logos.map((logo, i) => (
          <span
            key={`l1-${i}`}
            className={`text-xl sm:text-2xl tracking-tight whitespace-nowrap ${logo.font}`}
          >
            {logo.prefix && (
              <span className="text-xs mr-1 opacity-70">{logo.prefix}</span>
            )}
            {logo.name}
          </span>
        ))}

        {/* Loop Group 2 */}
        {logos.map((logo, i) => (
          <span
            key={`l2-${i}`}
            className={`text-xl sm:text-2xl tracking-tight whitespace-nowrap ${logo.font}`}
          >
            {logo.prefix && (
              <span className="text-xs mr-1 opacity-70">{logo.prefix}</span>
            )}
            {logo.name}
          </span>
        ))}
      </div>
    </section>
  );
}
