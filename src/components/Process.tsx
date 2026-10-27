import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ProcessProps {
  onOpenBooking: () => void;
}

export default function Process({ onOpenBooking }: ProcessProps) {
  const steps = [
    {
      step: "01 / DISCOVERY",
      title: "Case Analysis",
      description:
        "We break down your situation in detail, identifying risks, opportunities, and legal priorities.",
    },
    {
      step: "02 / ARCHITECTURE",
      title: "Strategy Design",
      description:
        "We build a tailored legal roadmap that aligns with your business and long-term protection.",
    },
    {
      step: "03 / EXECUTION",
      title: "Action & Implementation",
      description:
        "Direct negotiation, contract formulation, representation, and rigorous follow-through.",
    },
    {
      step: "04 / RESOLUTION",
      title: "Long-term Protection",
      description:
        "Finalizing solutions and structuring preventive governance to keep your operations secure.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#fcfbf7] border-b border-[#e8e6df]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 gap-6 reveal">
          <div>
            <span className="text-[12px] font-semibold tracking-wider uppercase text-[#6e6d69] block mb-3">
              HOW WE WORK
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-[1.08] max-w-xl text-[#101010]">
              Legal clarity built on
              <br />
              strategy and trust.
            </h2>
          </div>
          <div>
            <button
              onClick={onOpenBooking}
              className="arrow-link text-[#101010] text-base sm:text-lg font-medium cursor-pointer"
            >
              <span>Book consultation</span>
              <ArrowUpRight className="w-4 h-4 inline-block" />
            </button>
          </div>
        </div>

        <div className="border-t border-[#e8e6df] pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Imagem do processo */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden bg-neutral-200 shadow-sm reveal relative w-full h-[400px] sm:h-[480px]">
              <Image
                src="https://framerusercontent.com/images/W5j9nq5fKAE7pC3koIiniWE8yP8.png"
                alt="Lawyers analyzing strategy in conference room"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>

            {/* 4 Etapas do Workflow */}
            <div className="lg:col-span-6 space-y-8 divide-y divide-[#e8e6df] reveal delay-100">
              {steps.map((item, idx) => (
                <div key={item.step} className={idx > 0 ? "pt-6" : ""}>
                  <span className="text-xs font-semibold text-[#6e6d69] uppercase tracking-wider block mb-1">
                    {item.step}
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight text-[#101010] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#6e6d69] text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
