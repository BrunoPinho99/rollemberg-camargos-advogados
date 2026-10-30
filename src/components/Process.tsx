"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  MotionValue,
} from "framer-motion";
import { ArrowUpRight, Clock, Sparkles } from "lucide-react";
import { SiteCopy } from "@/content/siteCopy";

interface ProcessProps {
  copy: SiteCopy;
  onOpenBooking: () => void;
}

// Metadados enriquecidos para cada uma das 4 etapas
const stepMetadata = [
  {
    stepNumber: "01",
    phase: "DIAGNÓSTICO",
    timeframe: "24h a 48h",
    deliverables: [
      "Auditoria minuciosa dos contratos em vigor",
      "Mapeamento de vulnerabilidades fiscais e legais",
      "Diagnóstico societário, fiscal e de repasses",
    ],
  },
  {
    stepNumber: "02",
    phase: "ESTRUTURA",
    timeframe: "3 a 5 dias úteis",
    deliverables: [
      "Minutas contratuais blindadas e sob medida",
      "Cláusulas anti-aliciamento juridicamente válidas",
      "Regras seguras de split e comissionamento",
    ],
  },
  {
    stepNumber: "03",
    phase: "EXECUÇÃO",
    timeframe: "Implementação imediata",
    deliverables: [
      "Coleta de assinaturas digitais com validade legal",
      "Protocolo prioritário de marca no INPI",
      "Adequação de termos de uso e políticas de dados",
    ],
  },
  {
    stepNumber: "04",
    phase: "PROTEÇÃO",
    timeframe: "Acompanhamento contínuo",
    deliverables: [
      "Resposta prioritária em até 24h para urgências",
      "Notificações extrajudiciais e defesa de contas",
      "Assessoria jurídica contínua e estratégica",
    ],
  },
];

// Subcomponente de cada Card com animação Slide & Stack com física de Framer Motion
interface StepCardProps {
  index: number;
  isActive: boolean;
  smoothProgress: MotionValue<number>;
  step: {
    step: string;
    title: string;
    description: string;
  };
  metadata: (typeof stepMetadata)[0];
}

function StepCard({ index, isActive, smoothProgress, step, metadata }: StepCardProps) {
  let yTransform: MotionValue<number>;
  let scaleTransform: MotionValue<number>;
  let opacityTransform: MotionValue<number>;
  let blurTransform: MotionValue<string>;

  if (index === 0) {
    // Card 01: Ativo [0, 0.20], recua suavemente em [0.20, 0.26]
    yTransform = useTransform(smoothProgress, [0, 0.20, 0.26], [0, 0, -40]);
    scaleTransform = useTransform(smoothProgress, [0, 0.20, 0.26], [1, 1, 0.94]);
    opacityTransform = useTransform(smoothProgress, [0, 0.20, 0.26], [1, 1, 0]);
    blurTransform = useTransform(
      smoothProgress,
      [0, 0.20, 0.26],
      ["blur(0px)", "blur(0px)", "blur(4px)"]
    );
  } else if (index === 1) {
    // Card 02: Entra em [0.20, 0.26], ativo [0.26, 0.46], recua em [0.46, 0.52]
    yTransform = useTransform(
      smoothProgress,
      [0.20, 0.26, 0.46, 0.52],
      [120, 0, 0, -40]
    );
    scaleTransform = useTransform(
      smoothProgress,
      [0.20, 0.26, 0.46, 0.52],
      [0.95, 1, 1, 0.94]
    );
    opacityTransform = useTransform(
      smoothProgress,
      [0.20, 0.26, 0.46, 0.52],
      [0, 1, 1, 0]
    );
    blurTransform = useTransform(
      smoothProgress,
      [0.20, 0.26, 0.46, 0.52],
      ["blur(4px)", "blur(0px)", "blur(0px)", "blur(4px)"]
    );
  } else if (index === 2) {
    // Card 03: Entra em [0.46, 0.52], ativo [0.52, 0.72], recua em [0.72, 0.78]
    yTransform = useTransform(
      smoothProgress,
      [0.46, 0.52, 0.72, 0.78],
      [120, 0, 0, -40]
    );
    scaleTransform = useTransform(
      smoothProgress,
      [0.46, 0.52, 0.72, 0.78],
      [0.95, 1, 1, 0.94]
    );
    opacityTransform = useTransform(
      smoothProgress,
      [0.46, 0.52, 0.72, 0.78],
      [0, 1, 1, 0]
    );
    blurTransform = useTransform(
      smoothProgress,
      [0.46, 0.52, 0.72, 0.78],
      ["blur(4px)", "blur(0px)", "blur(0px)", "blur(4px)"]
    );
  } else {
    // Card 04: Entra em [0.72, 0.78], permanece ativo até 1.0
    yTransform = useTransform(smoothProgress, [0.72, 0.78, 1.0], [120, 0, 0]);
    scaleTransform = useTransform(
      smoothProgress,
      [0.72, 0.78, 1.0],
      [0.95, 1, 1]
    );
    opacityTransform = useTransform(
      smoothProgress,
      [0.72, 0.78, 1.0],
      [0, 1, 1]
    );
    blurTransform = useTransform(
      smoothProgress,
      [0.72, 0.78, 1.0],
      ["blur(4px)", "blur(0px)", "blur(0px)"]
    );
  }

  // Desativa pointer-events nos cards que não estão visíveis
  const pointerEvents = useTransform(opacityTransform, (val) =>
    val > 0.4 ? "auto" : "none"
  );

  return (
    <motion.div
      style={{
        y: yTransform,
        scale: scaleTransform,
        opacity: opacityTransform,
        filter: blurTransform,
        pointerEvents,
        zIndex: isActive ? 20 : index + 1,
      }}
      className="absolute inset-x-0 w-full bg-white rounded-3xl p-6 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-neutral-200/80 transition-shadow duration-300"
    >
      {/* Header do Card com numeração, badge EM FOCO e tempo estimado */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-wider uppercase text-[#2E3C44]">
            {metadata.stepNumber} / {metadata.phase}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#2E3C44]/10 text-[#2E3C44] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E3C44] animate-ping" />
            EM FOCO
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#6e6d69] bg-[#f4f2ec] px-3 py-1 rounded-full border border-[#e8e6df]">
          <Clock className="w-3.5 h-3.5 text-[#2E3C44]" />
          <span>{metadata.timeframe}</span>
        </div>
      </div>

      {/* Título Principal */}
      <h3 className="text-2xl sm:text-[34px] font-semibold tracking-tight text-[#101010] leading-[1.12]">
        {step.title}
      </h3>

      {/* Descrição */}
      <p className="mt-3 text-base sm:text-[17px] text-[#6e6d69] font-normal leading-relaxed max-w-xl">
        {step.description}
      </p>

      {/* Entregáveis Principais em Pílulas */}
      <div className="mt-6 pt-5 border-t border-[#e8e6df]/80">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#6e6d69] block mb-2.5">
          ENTREGÁVEIS PRINCIPAIS:
        </span>
        <div className="flex flex-wrap gap-2">
          {metadata.deliverables.map((del, dIdx) => (
            <span
              key={dIdx}
              className="text-xs px-3.5 py-1.5 rounded-xl bg-[#fcfbf7] border border-[#e8e6df] text-[#101010] font-medium flex items-center gap-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
            >
              <span className="text-[#2E3C44] font-bold">✓</span>
              {del}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Process({ copy, onOpenBooking }: ProcessProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [percent, setPercent] = useState(0);
  const [activeStep, setActiveStep] = useState(1);

  // 1. Hook useScroll do Framer Motion vinculado à seção de h-[400vh]
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 2. Mola inercial ultra-suave com física idêntica ao Framer
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // 3. Atualização em tempo real do percentual e da etapa ativa
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    setPercent(Math.min(Math.max(Math.round(latest * 100), 0), 100));

    if (latest < 0.23) {
      setActiveStep(1);
    } else if (latest < 0.49) {
      setActiveStep(2);
    } else if (latest < 0.75) {
      setActiveStep(3);
    } else {
      setActiveStep(4);
    }
  });

  // Posição vertical do indicador circular contida entre as extremidades da linha
  const indicatorTop = useTransform(
    smoothProgress,
    [0, 1],
    ["18px", "calc(100% - 18px)"]
  );

  const steps = copy.process.steps;

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative h-[400vh] bg-[#fcfbf7] border-b border-[#e8e6df]"
    >
      {/* Wrapper Sticky que trava a tela durante a rolagem das 4 etapas */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-10 md:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Coluna da Esquerda (5 colunas) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-auto lg:h-[460px] space-y-6 lg:space-y-0">
              {/* Cabeçalho */}
              <div>
                <span className="text-[12px] font-semibold tracking-wider uppercase text-[#6e6d69] block mb-3">
                  {copy.process.label}
                </span>
                <h2 className="text-2xl sm:text-4xl lg:text-[46px] font-normal tracking-tight leading-[1.1] text-[#101010]">
                  {copy.process.title}
                </h2>
                <p className="mt-3.5 text-base sm:text-lg text-[#6e6d69] font-normal leading-relaxed max-w-md">
                  Um método estruturado, ágil e previsível para blindar a sua
                  operação sem entraves burocráticos.
                </p>
              </div>

              {/* Card Inferior: Progresso da Operação */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-[#e8e6df] shadow-sm space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono tracking-widest text-[#2E3C44] uppercase font-semibold flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#2E3C44]" />
                    Progresso da Operação
                  </span>
                  <span className="text-xs font-mono font-bold text-[#101010]">
                    {percent}%
                  </span>
                </div>

                {/* Barra de Progresso Horizontal Sincronizada */}
                <div className="w-full h-2 bg-[#e8e6df] rounded-full overflow-hidden relative">
                  <motion.div
                    style={{ scaleX: smoothProgress, transformOrigin: "left" }}
                    className="h-full bg-[#2E3C44] rounded-full"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-mono text-[#6e6d69]">
                    Etapa 0{activeStep} de 04 — {stepMetadata[activeStep - 1]?.phase}
                  </span>
                  <button
                    onClick={onOpenBooking}
                    className="arrow-link text-xs font-medium text-[#101010] hover:text-[#2E3C44] inline-flex items-center gap-1 cursor-pointer hover:underline"
                  >
                    <span>{copy.process.cta}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Centro: Linha do Tempo Vertical Contínua (1 coluna) */}
            <div className="lg:col-span-1 hidden lg:flex items-center justify-center h-[460px] relative">
              <div className="relative h-[380px] w-8 flex items-center justify-center">
                {/* Linha de fundo cinza claro */}
                <div className="absolute top-0 bottom-0 w-[2px] bg-[#e8e6df] rounded-full left-1/2 -translate-x-1/2" />

                {/* Linha de preenchimento escura sincronizada */}
                <motion.div
                  style={{
                    scaleY: smoothProgress,
                    transformOrigin: "top",
                  }}
                  className="absolute top-0 w-[2.5px] h-full bg-[#2E3C44] rounded-full left-1/2 -translate-x-1/2 shadow-[0_0_8px_rgba(46,60,68,0.3)]"
                />

                {/* Indicador Numérico Circular da Etapa Ativa */}
                <motion.div
                  style={{
                    top: indicatorTop,
                  }}
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#2E3C44] text-white font-mono text-xs font-bold flex items-center justify-center shadow-lg border-2 border-[#fcfbf7] ring-4 ring-[#2E3C44]/20 z-20 pointer-events-none transition-colors duration-200"
                >
                  0{activeStep}
                </motion.div>
              </div>
            </div>

            {/* Coluna da Direita: Área de Transição dos Cards (6 colunas) */}
            <div className="lg:col-span-6 relative h-[440px] sm:h-[480px] flex items-center justify-center">
              {steps.map((step, idx) => (
                <StepCard
                  key={step.step}
                  index={idx}
                  isActive={activeStep === idx + 1}
                  smoothProgress={smoothProgress}
                  step={step}
                  metadata={stepMetadata[idx]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
