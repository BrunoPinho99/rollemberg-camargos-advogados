import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { SiteCopy } from "@/content/siteCopy";

interface ServicesProps {
  copy: SiteCopy;
}

export default function Services({ copy }: ServicesProps) {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#fcfbf7] border-b border-[#e8e6df]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Header da Seção de Serviços */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 gap-6 reveal">
          <div>
            <span className="text-[12px] font-semibold tracking-wider uppercase text-[#6e6d69] block mb-4">
              {copy.services.label}
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-[1.08] max-w-2xl text-[#101010]">
              {copy.services.title}
            </h2>
          </div>
          <div>
            <a
              href="#contact"
              className="arrow-link text-[#101010] text-base sm:text-lg font-medium inline-flex items-center gap-1.5 hover:underline"
            >
              <span>{copy.services.contactLink}</span>
              <ArrowUpRight className="w-4 h-4 inline-block" />
            </a>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-[#e8e6df]" />

        {/* Lista de Serviços com Imagem, Número e Conteúdo */}
        <div className="divide-y divide-[#e8e6df]">
          {copy.services.items.map((service, index) => (
            <article
              key={service.number}
              className={`py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group reveal ${
                index % 2 === 1 ? "delay-100" : ""
              }`}
            >
              <div className="lg:col-span-4 overflow-hidden rounded-xl bg-neutral-200 relative w-full h-[240px] sm:h-[280px]">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="lg:col-span-2">
                <span className="text-3xl sm:text-4xl font-normal text-[#101010] tracking-tighter font-mono">
                  {service.number}
                </span>
              </div>
              <div className="lg:col-span-6 space-y-3">
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight uppercase text-[#101010]">
                  {service.title}
                </h3>
                <p className="text-base sm:text-lg text-[#6e6d69] font-normal leading-relaxed max-w-xl">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
