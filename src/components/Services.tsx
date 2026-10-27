import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      number: "001",
      title: "Legal Advisory",
      description:
        "Clear legal guidance and professional advisory for individuals, families, and businesses.",
      image: "https://framerusercontent.com/images/Unj4zrUK7oJ6Ma2mUvFNpF17P1U.png",
      alt: "Legal Advisory consultation",
    },
    {
      number: "002",
      title: "Notarial Services",
      description:
        "Certified document verification, powers of attorney, and official legal authentication services.",
      image: "https://framerusercontent.com/images/9TGdyV5TPmEmHtmnA4gxULCrIL0.png",
      alt: "Notarial certification and documents",
    },
    {
      number: "003",
      title: "Dispute Resolution",
      description:
        "Legal support for property matters, civil disputes, ownership rights, and documentation.",
      image: "https://framerusercontent.com/images/5c2WmHLzjnU1fC8Mp9z1mGaVgjE.png",
      alt: "Dispute negotiation and resolution",
    },
    {
      number: "004",
      title: "Legal Documentation",
      description:
        "Professionally prepared agreements and legal documents designed to protect your interests.",
      image: "https://framerusercontent.com/images/M5oBh2KSjcSMsrrhFyIradzlA.png",
      alt: "Contract architecture and legal documentation",
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#fcfbf7] border-b border-[#e8e6df]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Header da Seção de Serviços */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 gap-6 reveal">
          <div>
            <span className="text-[12px] font-semibold tracking-wider uppercase text-[#6e6d69] block mb-4">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-[1.08] max-w-2xl text-[#101010]">
              Legal and notary services
              <br className="hidden sm:inline" /> for modern legal matters.
            </h2>
          </div>
          <div>
            <a
              href="#contact"
              className="arrow-link text-[#101010] text-base sm:text-lg font-medium"
            >
              <span>Need legal guidance? Contact us</span>
              <ArrowUpRight className="w-4 h-4 inline-block" />
            </a>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-[#e8e6df]" />

        {/* Lista de Serviços com Imagem, Número e Conteúdo */}
        <div className="divide-y divide-[#e8e6df]">
          {services.map((service, index) => (
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
                <span className="text-3xl sm:text-4xl font-normal text-[#101010] tracking-tighter">
                  {service.number}
                </span>
              </div>
              <div className="lg:col-span-6 space-y-3">
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight uppercase text-[#101010]">
                  {service.title}
                </h3>
                <p className="text-base sm:text-lg text-[#6e6d69] font-normal leading-relaxed max-w-lg">
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
