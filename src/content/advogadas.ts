export interface AdvogadaPerfil {
  slug: string;
  nomeCompleto: string;
  tratamento: string;
  cargo: string;
  oab: string;
  seccional: string;
  foto: string;
  resumoBiografico: string;
  formacaoAcademica: string[];
  areasDeAtuacaoEspecializada: string[];
  posicionamento: string;
}

export const ADVOGADAS_EQUIPE: AdvogadaPerfil[] = [
  {
    slug: "marcela-rollemberg",
    nomeCompleto: "Marcela Silveira Rollemberg",
    tratamento: "Dra. Marcela Rollemberg",
    cargo: "Sócia-Fundadora",
    oab: "OAB/DF 69.733",
    seccional: "Distrito Federal (OAB/DF)",
    foto: "/equipe-rollemberg-camargos.jpg",
    resumoBiografico:
      "Advogada inscrita na Ordem dos Advogados do Brasil, Seccional do Distrito Federal (OAB/DF nº 69.733). Sócia-fundadora da Rollemberg & Camargos Advogados Associados. Atua estrategicamente em direito societário, governança corporativa, acordos de sócios e estruturação jurídica para empresas em crescimento, startups e operações digitais em todo o Brasil.",
    formacaoAcademica: [
      "Bacharel em Direito pelo Centro Universitário de Brasília (UniCEUB).",
      "Especialização em Direito Empresarial e Societário.",
      "Capacitação contínua em estruturação de contratos complexos e governança corporativa.",
    ],
    areasDeAtuacaoEspecializada: [
      "Direito Societário e Acordos de Sócios",
      "Governança Corporativa e Reestruturação de Quotas",
      "Contratos Comerciais Estratégicos B2B",
      "Assessoria Jurídica Consultiva para Startups e Empresas de Tecnologia",
    ],
    posicionamento:
      "Comprometida com a desburocratização jurídica e a tradução do direito para termos práticos que impulsionam decisões comerciais ágeis e seguras.",
  },
  {
    slug: "fabyana-camargos",
    nomeCompleto: "Fabyana Trindade Camargos",
    tratamento: "Dra. Fabyana Camargos",
    cargo: "Sócia-Fundadora",
    oab: "OAB/DF 72.885",
    seccional: "Distrito Federal (OAB/DF)",
    foto: "/equipe-rollemberg-camargos.jpg",
    resumoBiografico:
      "Advogada inscrita na Ordem dos Advogados do Brasil, Seccional do Distrito Federal (OAB/DF nº 72.885). Sócia-fundadora da Rollemberg & Camargos Advogados Associados. Especializada em proteção de ativos de propriedade intelectual no INPI, direito digital, adequação à LGPD, contratos comerciais e consultoria preventiva para mitigação de passivos.",
    formacaoAcademica: [
      "Bacharel em Direito em Brasília/DF.",
      "Especialização em Propriedade Intelectual, Marcas e Inovação.",
      "Capacitação em Proteção de Dados Pessoais (LGPD) e Direito Digital aplicado a negócios de tecnologia.",
    ],
    areasDeAtuacaoEspecializada: [
      "Registro de Marcas e Propriedade Intelectual (INPI)",
      "Direito Digital, Plataformas e E-commerce",
      "Adequação e Governança em Privacidade (LGPD - Lei 13.709/2018)",
      "Consultoria Preventiva e Resolução Estratégica de Conflitos Comerciais",
    ],
    posicionamento:
      "Foco na proteção patrimonial de marcas, blindagem de negócios digitais e construção de relações comerciais equilibradas e sustentáveis.",
  },
];
