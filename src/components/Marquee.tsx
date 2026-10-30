import { SiteCopy } from "@/content/siteCopy";

interface MarqueeProps {
  copy: SiteCopy;
}

export default function Marquee({ copy }: MarqueeProps) {
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
    <section className="w-full border-b border-[#e8e6df] bg-[#fcfbf7] py-6 sm:py-8 overflow-hidden select-none">
      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        <div className="marquee-track flex items-center justify-between gap-8 sm:gap-10 text-[#101010] hover:pause">
          {/* Loop Group 1 */}
          {legalPractices.map((practice, i) => (
            <a
              key={`prac1-${i}`}
              href="#services"
              className="inline-flex items-center whitespace-nowrap group cursor-pointer transition-opacity hover:opacity-100 opacity-80"
            >
              <span className="text-[13px] sm:text-[14px] font-normal tracking-[0.14em] uppercase text-[#101010]/85 group-hover:text-[#101010] transition-colors">
                {practice}
              </span>
              <span className="mx-6 sm:mx-8 text-xs font-light text-[#101010]/25 select-none">
                /
              </span>
            </a>
          ))}

          {/* Loop Group 2 */}
          {legalPractices.map((practice, i) => (
            <a
              key={`prac2-${i}`}
              href="#services"
              className="inline-flex items-center whitespace-nowrap group cursor-pointer transition-opacity hover:opacity-100 opacity-80"
            >
              <span className="text-[13px] sm:text-[14px] font-normal tracking-[0.14em] uppercase text-[#101010]/85 group-hover:text-[#101010] transition-colors">
                {practice}
              </span>
              <span className="mx-6 sm:mx-8 text-xs font-light text-[#101010]/25 select-none">
                /
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
