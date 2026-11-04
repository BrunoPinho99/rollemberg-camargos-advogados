import { SiteCopy } from "@/content/siteCopy";

interface MarqueeProps {
  copy: SiteCopy;
}

export default function Marquee({}: MarqueeProps) {
  // Serviços reais e áreas de atuação de escritórios de advocacia de alto padrão
  const legalPractices = [
    "Estruturação Societária & Acordo de Sócios",
    "Contratos Comerciais & Parcerias Estratégicas",
    "Registro de Marcas & Proteção de Ativos",
    "Direito Digital, Tecnologia & LGPD",
    "Blindagem Operacional & Trabalhista Preventiva",
    "Planejamento Tributário para Negócios em Escala",
    "Termos de Uso & Contratos de Prestação de Serviços",
    "Resolução Ágil de Conflitos & Notificações",
    "Assessoria Jurídica Mensal Acompanhada",
  ];

  return (
    <section
      id="marquee"
      className="relative w-full border-b border-[#e8e6df] bg-[#fcfbf7] py-3.5 sm:py-5 md:py-6 overflow-hidden select-none"
      aria-label="Áreas de atuação em destaque"
    >
      {/* Gradientes laterais sutis para entrada e saída ultra-smooth sem cortes secos */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-28 bg-gradient-to-r from-[#fcfbf7] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-28 bg-gradient-to-l from-[#fcfbf7] to-transparent z-10" />

      {/* Marquee Container com loop contínuo e aceleração por GPU */}
      <div className="relative w-full overflow-hidden">
        <div className="marquee-track flex items-center text-[#101010]">
          {/* Loop Group 1 */}
          <div className="flex items-center shrink-0 gap-8 sm:gap-12 pr-8 sm:pr-12">
            {legalPractices.map((practice, i) => (
              <a
                key={`prac1-${i}`}
                href="#services"
                className="inline-flex items-center whitespace-nowrap group cursor-pointer transition-opacity hover:opacity-100 opacity-80 py-1"
              >
                <span className="text-[12px] sm:text-[14px] font-medium tracking-[0.12em] uppercase text-[#101010]/85 group-hover:text-[#101010] transition-colors">
                  {practice}
                </span>
                <span className="ml-8 sm:ml-12 text-xs font-light text-[#101010]/25 select-none">
                  /
                </span>
              </a>
            ))}
          </div>

          {/* Loop Group 2 (Duplicado para loop infinito 100% contínuo) */}
          <div className="flex items-center shrink-0 gap-8 sm:gap-12 pr-8 sm:pr-12" aria-hidden="true">
            {legalPractices.map((practice, i) => (
              <a
                key={`prac2-${i}`}
                href="#services"
                className="inline-flex items-center whitespace-nowrap group cursor-pointer transition-opacity hover:opacity-100 opacity-80 py-1"
                tabIndex={-1}
              >
                <span className="text-[12px] sm:text-[14px] font-medium tracking-[0.12em] uppercase text-[#101010]/85 group-hover:text-[#101010] transition-colors">
                  {practice}
                </span>
                <span className="ml-8 sm:ml-12 text-xs font-light text-[#101010]/25 select-none">
                  /
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
