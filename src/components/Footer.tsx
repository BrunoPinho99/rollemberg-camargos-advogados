"use client";

import { useMotion } from "./MotionProvider";
import { SiteCopy } from "@/content/siteCopy";

interface FooterProps {
  copy: SiteCopy;
}

export default function Footer({ copy }: FooterProps) {
  const { scrollTo } = useMotion();

  const handleBackToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollTo("#home");
  };

  return (
    <footer className="py-12 bg-[#fcfbf7] border-t border-[#e8e6df] text-xs text-[#6e6d69]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p>
            © {new Date().getFullYear()} {copy.brand.name}™ — {copy.brand.tagline}. Todos os direitos reservados.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={`mailto:${copy.contact.email}`}
            className="hover:text-[#101010] transition-colors"
          >
            {copy.contact.email}
          </a>
          <button
            onClick={() =>
              alert(
                "Termos e Política de Privacidade: Todas as consultas e assessoria jurídica são prestadas em total conformidade com o Código de Ética e Disciplina da OAB e normas da LGPD."
              )
            }
            className="hover:text-[#101010] transition-colors cursor-pointer"
          >
            {copy.contact.termsLabel}
          </button>
          <a
            href="#home"
            onClick={handleBackToTop}
            className="hover:text-[#101010] transition-colors flex items-center gap-1 cursor-pointer font-medium"
          >
            <span>{copy.contact.backToTopLabel}</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
