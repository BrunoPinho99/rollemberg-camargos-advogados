import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { SiteCopy } from "@/content/siteCopy";
import { WHATSAPP_DIRECT_URL } from "@/lib/whatsapp";

interface ServicesProps {
  copy: SiteCopy;
  onOpenBooking?: () => void;
}

export default function Services({ copy }: ServicesProps) {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#fcfbf7] border-b border-[#e8e6df]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Header da Seção de Serviços */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 gap-6">
          <div className="reveal">
            <span className="text-[12px] font-semibold tracking-wider uppercase text-[#6e6d69] block mb-4">
              {copy.services.label}
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-[1.08] max-w-2xl text-[#101010]">
              {copy.services.title}
            </h2>
          </div>
          <div className="reveal delay-100">
            <a
              href={WHATSAPP_DIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="arrow-link text-[#101010] text-base sm:text-lg font-medium inline-flex items-center gap-1.5 hover:underline"
            >
              <span>{copy.services.contactLink}</span>
              <ArrowUpRight className="w-4 h-4 inline-block" />
            </a>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-[#e8e6df]" />

        {/* Lista de Serviços com Imagem e Conteúdo (sem números) */}
        <div className="divide-y divide-[#e8e6df]">
          {copy.services.items.map((service, index) => (
            <article
              key={service.number || index}
              className="py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center group"
            >
              <div className="lg:col-span-5 overflow-hidden rounded-xl bg-neutral-200 relative w-full h-[240px] sm:h-[320px] reveal">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="lg:col-span-7 space-y-4 reveal delay-100">
                <h3 className="text-2xl sm:text-3xl md:text-[34px] font-semibold tracking-tight uppercase text-[#101010] leading-tight">
                  {service.title}
                </h3>
                <p className="text-base sm:text-lg md:text-[19px] text-[#6e6d69] font-normal leading-relaxed max-w-xl">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Intermediário Estratégico no Fim dos Serviços */}
        <div className="mt-14 sm:mt-18 pt-10 border-t border-[#e8e6df] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 reveal">
          <div className="space-y-1.5">
            <h4 className="text-xl sm:text-2xl font-medium tracking-tight text-[#101010]">
              Seu negócio cresceu mais rápido que a estrutura jurídica?
            </h4>
            <p className="text-sm sm:text-base text-[#6e6d69]">
              Mapeamos pontos cegos em contratos, sociedade e marca antes que virem obstáculos para o próximo passo.
            </p>
          </div>
          <a
            href={WHATSAPP_DIRECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#101010] text-white font-medium text-sm sm:text-base hover:bg-[#2E3C44] transition-all duration-200 cursor-pointer shadow-md"
          >
            <span>Agendar Diagnóstico do Negócio</span>
            <span className="text-xs">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
