import Image from "next/image";
import { SiteCopy } from "@/content/siteCopy";
import Counter from "./Counter";

interface ExpertiseProps {
  copy: SiteCopy;
}

export default function Expertise({ copy }: ExpertiseProps) {
  return (
    <section id="expertise" className="py-12 sm:py-20 md:py-28 lg:py-32 bg-[#fcfbf7] border-b border-[#e8e6df]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Coluna Esquerda: Texto Editorial e Métricas */}
          <div className="lg:col-span-6 space-y-8 sm:space-y-12">
            <div className="reveal">
              <span className="text-[12px] font-semibold tracking-wider uppercase text-[#6e6d69] block mb-3 sm:mb-4">
                {copy.expertise.label}
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.12] sm:leading-[1.08] text-[#101010]">
                {copy.expertise.title}
              </h2>
            </div>

            <div className="space-y-6 sm:space-y-10">
              {copy.expertise.metrics.map((item, idx) => (
                <div key={item.label} className="reveal">
                  {idx > 0 && <div className="border-t border-[#e8e6df] mb-6 sm:mb-10" />}
                  <div className="space-y-2 sm:space-y-3">
                    <Counter
                      value={item.stat}
                      className="text-5xl sm:text-7xl font-bold tracking-tight text-[#101010] block"
                      duration={1800}
                    />
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
          <div className="lg:col-span-6">
            <div className="sticky top-28">
              <div className="rounded-2xl overflow-hidden bg-neutral-200 shadow-sm h-[360px] sm:h-[500px] lg:h-[720px] relative w-full reveal delay-200">
                <Image
                  src="/equipe-rollemberg-camargos.jpg"
                  alt="Dra. Rollemberg e Dra. Camargos - Sócias fundadoras Rollemberg & Camargos Advogados"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  style={{ objectPosition: "center top" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
