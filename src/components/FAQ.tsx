"use client";

import { useState } from "react";
import { SiteCopy } from "@/content/siteCopy";

interface FAQProps {
  copy: SiteCopy;
}

export default function FAQ({ copy }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#fcfbf7] border-b border-[#e8e6df]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Coluna Esquerda: Título da Seção */}
          <div className="lg:col-span-5 reveal">
            <span className="text-[12px] font-semibold tracking-wider uppercase text-[#6e6d69] block mb-4">
              {copy.faq.label}
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#101010]">
              {copy.faq.title}
            </h2>
          </div>

          {/* Coluna Direita: Acordeão Interativo */}
          <div className="lg:col-span-7 divide-y divide-[#e8e6df] border-t border-b border-[#e8e6df]">
            {copy.faq.items.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.q}
                  className={`faq-item py-6 sm:py-7 reveal ${isOpen ? "active" : ""}`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="faq-toggle w-full flex items-center justify-between text-left font-semibold text-lg sm:text-xl text-[#101010] group focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-icon text-2xl font-light text-[#101010] ml-4 select-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? "max-h-96 opacity-100 pt-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-base text-[#6e6d69] font-normal leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
