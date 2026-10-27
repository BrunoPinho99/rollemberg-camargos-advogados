import { ArrowUpRight } from "lucide-react";
import { SiteCopy } from "@/content/siteCopy";

interface ContactProps {
  copy: SiteCopy;
  onOpenBooking: () => void;
}

export default function Contact({ copy, onOpenBooking }: ContactProps) {
  return (
    <section id="contact" className="py-24 sm:py-36 bg-[#fcfbf7] border-b border-[#e8e6df]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Coluna Esquerda: Chamada e CTA Principal */}
          <div className="lg:col-span-6 space-y-8 reveal">
            <span className="text-[12px] font-semibold tracking-wider uppercase text-[#6e6d69] block">
              {copy.contact.label}
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight leading-[1.05] text-[#101010]">
              {copy.contact.title}
            </h2>
            <p className="text-lg sm:text-xl text-[#6e6d69] font-normal leading-relaxed max-w-lg">
              {copy.contact.description}
            </p>
            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="btn-pill px-7 py-3.5 rounded-full bg-[#101010] text-white text-base font-medium shadow-md cursor-pointer hover:bg-[#101010]/90 transition-all"
              >
                {copy.contact.cta}
              </button>
            </div>
          </div>

          {/* Coluna Direita: Informações e Navegação */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:pl-10 reveal delay-100">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6e6d69] block">
                {copy.contact.talkToUsLabel}
              </span>
              <a
                href={`mailto:${copy.contact.email}`}
                className="text-lg sm:text-xl font-medium text-[#101010] hover:underline block break-all"
              >
                {copy.contact.email}
              </a>
              <a
                href={`tel:${copy.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="text-base text-[#6e6d69] hover:text-[#101010] block font-mono"
              >
                {copy.contact.phone}
              </a>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6e6d69] block">
                {copy.contact.addressLabel}
              </span>
              <p className="text-lg sm:text-xl font-medium text-[#101010]">
                {copy.contact.addressLines[0]}
                <br />
                <span className="text-[#6e6d69] font-normal text-base">
                  {copy.contact.addressLines[1]}
                </span>
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6e6d69] block">
                {copy.contact.hoursLabel}
              </span>
              <p className="text-base sm:text-lg font-medium text-[#101010]">
                {copy.contact.hoursLines[0]}
                <br />
                <span className="text-[#6e6d69] font-normal">
                  {copy.contact.hoursLines[1]}
                </span>
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6e6d69] block mb-2">
                {copy.contact.navLabel}
              </span>
              <ul className="space-y-1 divide-y divide-[#e8e6df]">
                {copy.nav.items.map((item) => (
                  <li key={item.label} className="first:pt-0 pt-1">
                    <a
                      href={item.href}
                      className="py-2.5 flex items-center justify-between text-[#101010]/70 hover:text-[#101010] transition-colors"
                    >
                      <span className="text-base font-medium">{item.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
