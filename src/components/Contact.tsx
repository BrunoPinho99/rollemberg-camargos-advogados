import { ArrowUpRight } from "lucide-react";

interface ContactProps {
  onOpenBooking: () => void;
}

export default function Contact({ onOpenBooking }: ContactProps) {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Insights", href: "#insights" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <section id="contact" className="py-24 sm:py-36 bg-[#fcfbf7] border-b border-[#e8e6df]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Coluna Esquerda: Chamada e CTA Principal */}
          <div className="lg:col-span-6 space-y-8 reveal">
            <span className="text-[12px] font-semibold tracking-wider uppercase text-[#6e6d69] block">
              CONTACT
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight leading-[1.05] text-[#101010]">
              Legal support for
              <br />
              secure decisions.
            </h2>
            <p className="text-lg sm:text-xl text-[#6e6d69] font-normal leading-relaxed max-w-lg">
              KAFKA offers legal consulting for businesses and individuals on
              contracts, compliance, and real estate.
            </p>
            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="btn-pill px-7 py-3.5 rounded-full bg-[#101010] text-white text-base font-medium shadow-md cursor-pointer"
              >
                Schedule an Appointment
              </button>
            </div>
          </div>

          {/* Coluna Direita: Informações e Navegação */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:pl-10 reveal delay-100">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6e6d69] block">
                TALK TO US
              </span>
              <a
                href="mailto:hey@kafkalegal.pl"
                className="text-lg sm:text-xl font-medium text-[#101010] hover:underline block"
              >
                hey@kafkalegal.pl
              </a>
              <a
                href="tel:+45121231289"
                className="text-base text-[#6e6d69] hover:text-[#101010] block font-mono"
              >
                +45 121 231 289
              </a>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6e6d69] block">
                ADDRESS
              </span>
              <p className="text-lg sm:text-xl font-medium text-[#101010]">
                ul. Św Jacka 21
                <br />
                <span className="text-[#6e6d69] font-normal text-base">
                  38-102 Warszawa
                </span>
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6e6d69] block">
                WORKING HOURS
              </span>
              <p className="text-base sm:text-lg font-medium text-[#101010]">
                Monday — Friday
                <br />
                <span className="text-[#6e6d69] font-normal">09:00 — 18:00 CET</span>
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6e6d69] block mb-2">
                NAVIGATION
              </span>
              <ul className="space-y-1 divide-y divide-[#e8e6df]">
                {navItems.map((item) => (
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
