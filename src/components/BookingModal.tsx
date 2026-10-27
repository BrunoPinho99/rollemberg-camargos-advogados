"use client";

import { useEffect, useState, FormEvent } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { useMotion } from "./MotionProvider";
import { SiteCopy } from "@/content/siteCopy";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  copy: SiteCopy;
}

export default function BookingModal({
  isOpen,
  onClose,
  copy,
}: BookingModalProps) {
  const { lenis } = useMotion();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: copy.modal.serviceOptions[0],
    summary: "",
  });

  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "unset";
      setIsSubmitted(false);
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = "unset";
    };
  }, [isOpen, lenis]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: copy.modal.serviceOptions[0],
        summary: "",
      });
    }, 2400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-lg rounded-2xl bg-[#fcfbf7] border border-[#e8e6df] p-6 sm:p-8 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-6 border-b border-[#e8e6df]">
          <div>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#6e6d69] block mb-1">
              {copy.brand.name}™ {copy.brand.tagline}
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-[#101010]">
              {copy.modal.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#6e6d69] hover:text-[#101010] rounded-full hover:bg-neutral-200/50 transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-[#101010]">
              Solicitação Enviada com Sucesso
            </h4>
            <p className="text-sm text-[#6e6d69] max-w-sm mx-auto">
              Obrigado, {formData.name || "Cliente"}. A equipe jurídica da{" "}
              {copy.brand.name} entrará em contato em até 2 horas úteis pelo WhatsApp ou e-mail.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <p className="text-sm text-[#6e6d69] mb-4">
              {copy.modal.subtitle}
            </p>

            <div>
              <label
                htmlFor="modalName"
                className="block text-xs font-semibold uppercase tracking-wider text-[#101010] mb-1.5"
              >
                Nome Completo
              </label>
              <input
                id="modalName"
                type="text"
                required
                placeholder="Ex: Ana Silva ou Razão Social"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-[#e8e6df] bg-white text-sm focus:outline-none focus:border-[#101010] transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="modalEmail"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#101010] mb-1.5"
                >
                  E-mail Profissional
                </label>
                <input
                  id="modalEmail"
                  type="email"
                  required
                  placeholder="seu@dominio.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-[#e8e6df] bg-white text-sm focus:outline-none focus:border-[#101010] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="modalPhone"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#101010] mb-1.5"
                >
                  WhatsApp / Telefone
                </label>
                <input
                  id="modalPhone"
                  type="tel"
                  required
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-[#e8e6df] bg-white text-sm focus:outline-none focus:border-[#101010] transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="modalService"
                className="block text-xs font-semibold uppercase tracking-wider text-[#101010] mb-1.5"
              >
                Necessidade Principal
              </label>
              <select
                id="modalService"
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-[#e8e6df] bg-white text-sm focus:outline-none focus:border-[#101010] transition-colors"
              >
                {copy.modal.serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="modalSummary"
                className="block text-xs font-semibold uppercase tracking-wider text-[#101010] mb-1.5"
              >
                Breve Descrição do Caso (Opcional)
              </label>
              <textarea
                id="modalSummary"
                rows={3}
                placeholder="Conte-nos brevemente o contexto da agência ou empresa..."
                value={formData.summary}
                onChange={(e) =>
                  setFormData({ ...formData, summary: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-[#e8e6df] bg-white text-sm focus:outline-none focus:border-[#101010] transition-colors resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="btn-pill w-full py-4 rounded-xl bg-[#101010] text-white font-medium text-sm hover:bg-[#101010]/90 transition-all shadow-md cursor-pointer"
              >
                {copy.modal.submitButton}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
