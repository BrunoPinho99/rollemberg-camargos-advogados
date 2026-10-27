import Image from "next/image";
import { SiteCopy } from "@/content/siteCopy";

interface ExpertiseProps {
  copy: SiteCopy;
}

export default function Expertise({ copy }: ExpertiseProps) {
  return (
    <section className="py-24 sm:py-32 bg-[#fcfbf7] border-b border-[#e8e6df]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Coluna Esquerda: Texto Editorial e Métricas */}
          <div className="lg:col-span-6 space-y-12 reveal">
            <div>
              <span className="text-[12px] font-semibold tracking-wider uppercase text-[#6e6d69] block mb-4">
                {copy.expertise.label}
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-[1.08] text-[#101010]">
                {copy.expertise.title}
              </h2>
            </div>

            <div className="space-y-10">
              {copy.expertise.metrics.map((item, idx) => (
                <div key={item.label}>
                  {idx > 0 && <div className="border-t border-[#e8e6df] mb-10" />}
                  <div className="space-y-3">
                    <span className="text-6xl sm:text-7xl font-bold tracking-tight text-[#101010] block">
                      {item.stat}
                    </span>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#101010]/75">
                      {item.label}
                    </h3>
                    <p className="text-base sm:text-lg text-[#6e6d69] leading-relaxed max-w-lg">
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
                  alt="Assessoria jurídica especializada para criadores e negócios digitais"
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
