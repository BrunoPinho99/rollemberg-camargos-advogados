import Image from "next/image";

export default function Expertise() {
  const stats = [
    {
      stat: "10+",
      label: "SPECIALIZED LAWYERS",
      description:
        "Providing dedicated legal guidance across corporate, commercial, civil, and regulatory law.",
    },
    {
      stat: "450+",
      label: "CORPORATE CASES HANDLED",
      description:
        "Assisting with contracts, negotiations, and legal structuring across complex business matters.",
    },
    {
      stat: "15+",
      label: "YEARS OF EXPERTISE",
      description:
        "Combining legal expertise, business understanding, and modern advisory solutions for every client.",
    },
    {
      stat: "98%",
      label: "CLIENT SATISFACTION",
      description:
        "Built on trust, responsiveness, discretion, and consistent legal excellence across every engagement.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#fcfbf7] border-b border-[#e8e6df]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Coluna Esquerda: Texto Editorial e Métricas */}
          <div className="lg:col-span-6 space-y-12 reveal">
            <div>
              <span className="text-[12px] font-semibold tracking-wider uppercase text-[#6e6d69] block mb-4">
                LEGAL EXPERTISE
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-[1.08] text-[#101010]">
                Professional legal support with clarity and precision.
              </h2>
            </div>

            <div className="space-y-10">
              {stats.map((item, idx) => (
                <div key={item.label}>
                  {idx > 0 && <div className="border-t border-[#e8e6df] mb-10" />}
                  <div className="space-y-3">
                    <span className="text-6xl sm:text-7xl font-bold tracking-tight text-[#101010] block">
                      {item.stat}
                    </span>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-[#101010]/70">
                      {item.label}
                    </h4>
                    <p className="text-base sm:text-lg text-[#6e6d69] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna Direita: Fotografia Editorial Grande Sticky */}
          <div className="lg:col-span-6 reveal delay-200">
            <div className="sticky top-28">
              <div className="rounded-2xl overflow-hidden bg-neutral-200 shadow-sm h-[540px] sm:h-[680px] relative w-full">
                <Image
                  src="https://framerusercontent.com/images/Ju8A5viMRN546D58tj5DGHfN2g.png"
                  alt="Kafka partner consulting with corporate clients"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
