"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What legal areas does Kafka specialize in?",
      a: "Kafka provides specialized counsel in corporate governance, mergers & acquisitions, real estate law, commercial contracting, notarial certifications, and dispute resolution for domestic and cross-border operations.",
    },
    {
      q: "How does the initial legal consultation work?",
      a: "Our initial consultation is a confidential 45-minute working session where our senior legal partners examine your objective, evaluate core regulatory risks, and outline a concrete strategic plan.",
    },
    {
      q: "Can I cancel or reschedule my appointment?",
      a: "Yes, we understand that executive schedules shift. Appointments may be canceled or rescheduled up to 12 hours prior to the scheduled consultation with no penalties.",
    },
    {
      q: "Do I need legal insurance to work with you?",
      a: "No, legal insurance is not required. We operate with transparent direct fee models, fixed-scope projects, and monthly retained counsel options tailored to your company's operational rhythm.",
    },
    {
      q: "Do you offer document drafting and review services?",
      a: "Yes. From founding agreements and international distribution contracts to real estate acquisitions and power of attorney certifications, our team prepares documents with meticulous legal precision.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#fcfbf7] border-b border-[#e8e6df]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Coluna Esquerda: Título da Seção */}
          <div className="lg:col-span-5 reveal">
            <span className="text-[12px] font-semibold tracking-wider uppercase text-[#6e6d69] block mb-4">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#101010]">
              Everything you need to know about our legal practice.
            </h2>
          </div>

          {/* Coluna Direita: Acordeão Interativo */}
          <div className="lg:col-span-7 divide-y divide-[#e8e6df] border-t border-b border-[#e8e6df] reveal delay-100">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.q}
                  className={`faq-item py-6 sm:py-7 ${isOpen ? "active" : ""}`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="faq-toggle w-full flex items-center justify-between text-left font-semibold text-lg sm:text-xl text-[#101010] group focus:outline-none cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="faq-icon text-2xl font-light text-[#101010] ml-4 select-none">
                      +
                    </span>
                  </button>
                  <div className="faq-answer">
                    <p className="pt-4 text-base text-[#6e6d69] font-normal leading-relaxed">
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
