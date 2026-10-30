"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, Phone, ShieldCheck, Clock, MessageCircle, Copy, Check, Globe } from "lucide-react";
import { SiteCopy } from "@/content/siteCopy";

interface ContactProps {
  copy: SiteCopy;
  onOpenBooking: () => void;
}

export default function Contact({ copy, onOpenBooking }: ContactProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(copy.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const cleanPhone = copy.contact.phone.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica%20com%20a%20Rollemberg%20%26%20Camargos%20Advogados.`;

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-36 bg-[#0b0e11] text-white overflow-hidden border-t border-white/10"
    >
      {/* Luzes e Gradientes Ambientes Sutis (Estética Luxo / Monolito Escuro) */}
      <div className="pointer-events-none absolute -top-40 left-1/4 w-[650px] h-[450px] bg-[#2E3C44]/35 rounded-full blur-[140px] opacity-70" />
      <div className="pointer-events-none absolute -bottom-32 right-10 w-[550px] h-[400px] bg-emerald-500/[0.06] rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
          
          {/* Coluna Esquerda: Proposta de Valor e Ações Principais */}
          <div className="lg:col-span-6 space-y-9">
            {/* Badge de Disponibilidade Ativa */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-white/90">
                Atendimento Digital Ativo • Brasil & Exterior
              </span>
            </div>

            {/* Título de Alto Impacto */}
            <div className="space-y-4">
              <span className="text-[12px] font-semibold tracking-widest uppercase text-[#9ea7ad] block">
                {copy.contact.label}
              </span>
              <h2 className="text-4xl sm:text-6xl md:text-[64px] font-normal tracking-[-0.03em] leading-[1.04] text-white">
                {copy.contact.title}
              </h2>
            </div>

            {/* Descrição Editorial */}
            <p className="text-lg sm:text-xl text-white/70 font-normal leading-relaxed max-w-xl">
              {copy.contact.description}
            </p>

            {/* Grupo de Ações Primárias (Agendar + WhatsApp Direto) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-[#0b0e11] font-medium text-base shadow-[0_4px_24px_rgba(255,255,255,0.15)] hover:bg-[#f2efe9] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>{copy.contact.cta}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/12 text-white/90 hover:text-white font-medium text-sm transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>

            {/* Garantias de Sigilo e Ética */}
            <div className="pt-2 flex items-center gap-3 text-xs text-white/50 font-mono tracking-wide">
              <ShieldCheck className="w-4 h-4 text-emerald-400/80 shrink-0" />
              <span>Sigilo profissional absoluto • Resposta prioritária para negócios digitais</span>
            </div>
          </div>

          {/* Coluna Direita: Cards Modernos Glassmorphic com Informações e Navegação */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Card 1: Contato Direto & E-mail */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.035] border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#9ea7ad] flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-white/70" />
                  {copy.contact.talkToUsLabel}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title="Copiar e-mail"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-3">
                <a
                  href={`mailto:${copy.contact.email}`}
                  className="text-xl sm:text-2xl font-normal text-white hover:text-emerald-300 transition-colors block break-all tracking-tight"
                >
                  {copy.contact.email}
                </a>

                <div className="pt-2 flex items-center gap-3 border-t border-white/10">
                  <Phone className="w-4 h-4 text-white/50" />
                  <a
                    href={`tel:${cleanPhone}`}
                    className="text-base font-mono text-white/80 hover:text-white transition-colors"
                  >
                    {copy.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Grid com Card 2 (Atendimento) e Card 3 (Horário) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Card 2: Atendimento e Abrangência */}
              <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#9ea7ad] flex items-center gap-2 mb-3">
                  <Globe className="w-3.5 h-3.5 text-white/70" />
                  {copy.contact.addressLabel}
                </span>
                <h4 className="text-base sm:text-lg font-medium text-white mb-1.5">
                  {copy.contact.addressLines[0]}
                </h4>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  {copy.contact.addressLines[1]}
                </p>
              </div>

              {/* Card 3: Horário de Funcionamento */}
              <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#9ea7ad] flex items-center gap-2 mb-3">
                  <Clock className="w-3.5 h-3.5 text-white/70" />
                  {copy.contact.hoursLabel}
                </span>
                <h4 className="text-base sm:text-lg font-medium text-white mb-1.5">
                  {copy.contact.hoursLines[0]}
                </h4>
                <p className="text-xs sm:text-sm text-white/60 font-mono">
                  {copy.contact.hoursLines[1]}
                </p>
              </div>
            </div>

            {/* Card 4: Navegação Rápida com Micro-interações */}
            <div className="p-6 rounded-2xl bg-white/[0.035] border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#9ea7ad] block mb-3">
                {copy.contact.navLabel}
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {copy.nav.items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.08] text-white/75 hover:text-white transition-all text-sm font-medium"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
