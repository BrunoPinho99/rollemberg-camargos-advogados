"use client";

import { VersionType } from "@/content/siteCopy";
import { Sparkles } from "lucide-react";

interface ABSwitcherProps {
  currentVersion: VersionType;
  onChangeVersion: (v: VersionType) => void;
}

export default function ABSwitcher({
  currentVersion,
  onChangeVersion,
}: ABSwitcherProps) {
  return (
    <aside
      aria-label="Controle de Versão do Teste A/B"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center bg-[#101010]/95 backdrop-blur-xl border border-white/15 text-white rounded-full p-1.5 shadow-2xl transition-all duration-300 max-w-[94vw] sm:max-w-none hover:border-white/30"
    >
      <div className="flex items-center gap-2 pl-3 pr-2 text-xs font-semibold text-white/60 uppercase tracking-wider select-none hidden sm:flex">
        <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
        <span>Teste A/B:</span>
      </div>

      <div className="flex items-center bg-white/5 rounded-full p-0.5">
        <button
          type="button"
          onClick={() => onChangeVersion("A")}
          className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
            currentVersion === "A"
              ? "bg-white text-[#101010] shadow-sm font-semibold"
              : "text-white/70 hover:text-white"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              currentVersion === "A" ? "bg-emerald-500" : "bg-white/40"
            }`}
          />
          <span>Versão A (TikTok & Lives)</span>
        </button>

        <button
          type="button"
          onClick={() => onChangeVersion("B")}
          className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
            currentVersion === "B"
              ? "bg-white text-[#101010] shadow-sm font-semibold"
              : "text-white/70 hover:text-white"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              currentVersion === "B" ? "bg-emerald-500" : "bg-white/40"
            }`}
          />
          <span>Versão B (Negócios Digitais)</span>
        </button>
      </div>
    </aside>
  );
}
