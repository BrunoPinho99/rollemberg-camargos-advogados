export default function Marquee() {
  const logos = [
    { name: "Superior Space®", font: "font-serif font-bold" },
    { name: "Strobe™", font: "font-bold", prefix: "● " },
    { name: "Sophia", font: "font-light tracking-wider", prefix: "✦ " },
    { name: "Harbor™", font: "font-medium", prefix: "ꕤ " },
    { name: "Human.IN", font: "font-mono" },
    { name: "Monolith™", font: "font-black tracking-tighter uppercase" },
  ];

  return (
    <section className="border-b border-[#e8e6df] py-10 bg-[#fcfbf7] overflow-hidden select-none reveal">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14 mb-4">
        <span className="text-[11px] font-semibold tracking-wider uppercase text-[#6e6d69]">
          Trusted by industry leaders
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
