"use client";

import { useEffect, useState, FormEvent } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { useMotion } from "./MotionProvider";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const { lenis } = useMotion();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    area: "advisory",
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
        area: "advisory",
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
              KAFKA™ LEGAL CONSULTATION
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-[#101010]">
              Schedule an Appointment
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#6e6d69] hover:text-[#101010] rounded-full hover:bg-neutral-200/50 transition-colors"
            aria-label="Close modal"
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
              Consultation Request Received
            </h4>
            <p className="text-sm text-[#6e6d69] max-w-sm mx-auto">
              Thank you, {formData.name || "Client"}. A senior partner from Kafka™
              will review your case and reach out within 2 business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-left">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6e6d69] mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Alexander Vance"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#e8e6df] text-[#101010] placeholder-[#6e6d69]/60 text-sm focus:outline-none focus:border-[#101010] transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6e6d69] mb-1.5">
                  Corporate Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#e8e6df] text-[#101010] placeholder-[#6e6d69]/60 text-sm focus:outline-none focus:border-[#101010] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6e6d69] mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+45 123 456 789"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#e8e6df] text-[#101010] placeholder-[#6e6d69]/60 text-sm focus:outline-none focus:border-[#101010] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6e6d69] mb-1.5">
                Legal Area of Interest
              </label>
              <select
                value={formData.area}
                onChange={(e) =>
                  setFormData({ ...formData, area: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#e8e6df] text-[#101010] text-sm focus:outline-none focus:border-[#101010] transition-colors cursor-pointer"
              >
                <option value="advisory">001 — Legal Advisory</option>
                <option value="notarial">002 — Notarial Services</option>
                <option value="dispute">003 — Dispute Resolution</option>
                <option value="documentation">004 — Legal Documentation</option>
                <option value="other">General Inquiries / Corporate</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6e6d69] mb-1.5">
                Case Summary (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Briefly outline your situation or business context..."
                value={formData.summary}
                onChange={(e) =>
                  setFormData({ ...formData, summary: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#e8e6df] text-[#101010] placeholder-[#6e6d69]/60 text-sm focus:outline-none focus:border-[#101010] transition-colors"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="btn-pill w-full py-3.5 rounded-full bg-[#101010] text-white font-medium text-sm"
              >
                Confirm Consultation Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
