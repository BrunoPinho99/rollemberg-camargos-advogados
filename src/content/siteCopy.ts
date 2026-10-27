export type VersionType = "A" | "B";

export interface SiteCopy {
  versionId: VersionType;
  versionName: string;
  brand: {
    name: string;
    tagline: string;
  };
  nav: {
    items: { label: string; href: string }[];
    cta: string;
  };
  hero: {
    headline: {
      line1: string;
      line2: string;
      line3?: string;
    };
    subtext: string;
    secondaryCta: string;
    scrollIndicator: string;
    badge: string;
    socialProof: string;
  };
  about: {
    label: string;
    sublabel: string;
    headlineHighlight: string;
    headlineMuted: string;
    paragraph: string;
  };
  services: {
    label: string;
    title: string;
    contactLink: string;
    items: {
      number: string;
      title: string;
      description: string;
      image: string;
      alt: string;
    }[];
  };
  expertise: {
    label: string;
    title: string;
    metrics: {
      stat: string;
      label: string;
      description: string;
    }[];
  };
  process: {
    label: string;
    title: string;
    cta: string;
    steps: {
      step: string;
      title: string;
      description: string;
    }[];
  };
  insights: {
    label: string;
    title: string;
    cases: {
      title: string;
      tags: string;
      year: string;
      image: string;
      alt: string;
      align: "left" | "right";
    }[];
  };
  testimonial: {
    label: string;
    quote: string;
    author: string;
    role: string;
    badge: string;
  };
  faq: {
    label: string;
    title: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  contact: {
    label: string;
    title: string;
    description: string;
    cta: string;
    talkToUsLabel: string;
    email: string;
    phone: string;
    addressLabel: string;
    addressLines: string[];
    hoursLabel: string;
    hoursLines: string[];
    navLabel: string;
    termsLabel: string;
    backToTopLabel: string;
  };
  modal: {
    title: string;
    subtitle: string;
    serviceOptions: string[];
    submitButton: string;
  };
}

export const copyVersionA: SiteCopy = {
  versionId: "A",
  versionName: "Versão A: Agências de Live e TikTok",
  brand: {
    name: "FABYANA",
    tagline: "ASSESSORIA JURÍDICA",
  },
  nav: {
    items: [
      { label: "Início", href: "#home" },
      { label: "Sobre", href: "#about" },
      { label: "Serviços", href: "#services" },
      { label: "Casos", href: "#insights" },
      { label: "Contacto", href: "#contact" },
    ],
    cta: "Agendar Consulta",
  },
  hero: {
    headline: {
      line1: "Proteção jurídica para",
      line2: "agências de Live.",
    },
    subtext:
      "Ajudamos agências de TikTok e criadores a escalar as suas operações com contratos blindados, compliance e segurança nos repasses.",
    secondaryCta: "Os nossos serviços",
    scrollIndicator: "DESLIZE PARA EXPLORAR",
    badge: "FABYANA™ / ASSESSORIA JURÍDICA",
    socialProof: "A ESCOLHA DE GRANDES AGÊNCIAS",
  },
  about: {
    label: "SOBRE NÓS",
    sublabel: "FABYANA ASSESSORIA JURÍDICA",
    headlineHighlight: "Soluções jurídicas diretas para",
    headlineMuted: "agências de criadores e talentos.",
    paragraph:
      "Transformamos a insegurança das redes sociais em operações seguras através de contratos fortes e atuação rápida.",
  },
  services: {
    label: "OS NOSSOS SERVIÇOS",
    title: "Assessoria jurídica para agências digitais.",
    contactLink: "Precisa de orientação? Fale connosco ↗",
    items: [
      {
        number: "001",
        title: "CONTRATOS DE AGENCIAMENTO",
        description:
          "Regras claras de exclusividade, percentagens de repasse e cláusulas de rescisão seguras para proteger a agência.",
        image: "https://framerusercontent.com/images/Unj4zrUK7oJ6Ma2mUvFNpF17P1U.png",
        alt: "Contratos de agenciamento de talentos e criadores",
      },
      {
        number: "002",
        title: "COMPLIANCE DE PLATAFORMA",
        description:
          "Prevenção ativa contra banimentos de contas, bloqueios de lives e retenção de fundos junto das plataformas.",
        image: "https://framerusercontent.com/images/9TGdyV5TPmEmHtmnA4gxULCrIL0.png",
        alt: "Compliance e desregulamentação em plataformas digitais",
      },
      {
        number: "003",
        title: "RESOLUÇÃO DE CONFLITOS",
        description:
          "Atuação rápida em quebras de exclusividade, aliciamento de criadores por concorrentes e disputas de repasses.",
        image: "https://framerusercontent.com/images/5c2WmHLzjnU1fC8Mp9z1mGaVgjE.png",
        alt: "Resolução de disputas e litígios contratuais",
      },
      {
        number: "004",
        title: "DOCUMENTAÇÃO E IMAGEM",
        description:
          "Licenciamento de direitos de imagem, termos de confidencialidade e notificações extrajudiciais contra uso indevido.",
        image: "https://framerusercontent.com/images/M5oBh2KSjcSMsrrhFyIradzlA.png",
        alt: "Licenciamento de direitos de imagem e proteção de marca",
      },
    ],
  },
  expertise: {
    label: "ESPECIALIZAÇÃO JURÍDICA",
    title: "Suporte jurídico com clareza e precisão.",
    metrics: [
      {
        stat: "100%",
        label: "FOCO DIGITAL",
        description:
          "Orientação dedicada às regras de negócios digitais, direitos de imagem e contratos de agenciamento.",
      },
      {
        stat: "+150",
        label: "CONTRATOS BLINDADOS",
        description:
          "Estruturação jurídica completa para proteger a relação entre agências, influenciadores e plataformas.",
      },
      {
        stat: "24h",
        label: "RESPOSTA RÁPIDA",
        description:
          "Agilidade na emissão de notificações, análise de riscos e resolução de bloqueios operacionais.",
      },
      {
        stat: "98%",
        label: "CLIENTES SATISFEITOS",
        description:
          "Construído com base na confiança, disponibilidade rápida, sigilo e proteção real da operação.",
      },
    ],
  },
  process: {
    label: "COMO TRABALHAMOS",
    title: "Segurança jurídica sem burocracia.",
    cta: "Agendar consulta",
    steps: [
      {
        step: "01 / DIAGNÓSTICO",
        title: "Análise da Operação",
        description:
          "Avaliamos o modelo da agência, os acordos atuais com criadores e onde estão os riscos financeiros e de perda de talentos.",
      },
      {
        step: "02 / ESTRUTURA",
        title: "Desenho dos Contratos",
        description:
          "Criamos um pacote jurídico sob medida para garantir exclusividade, metas claras e segurança nos pagamentos.",
      },
      {
        step: "03 / EXECUÇÃO",
        title: "Implementação Rápida",
        description:
          "Aplicamos os novos contratos com assinaturas digitais, atualizamos regras internas e assumimos negociações diretas.",
      },
      {
        step: "04 / PROTEÇÃO",
        title: "Suporte Contínuo",
        description:
          "Acompanhamento constante para entrada de novos criadores na agência e defesa rápida contra imprevistos.",
      },
    ],
  },
  insights: {
    label: "CASOS E ARTIGOS",
    title: "Resultados reais no mercado de criadores.",
    cases: [
      {
        title: "PROTEÇÃO CONTRA QUEBRA DE EXCLUSIVIDADE",
        tags: "Gestão de Conflitos e Retenção",
        year: "2024",
        image: "https://framerusercontent.com/images/wsGNlyuOkIdU6Vf8VoUlYjuvmC4.png",
        alt: "Proteção contra quebra de exclusividade em agências de criadores",
        align: "left",
      },
      {
        title: "COMPLIANCE E LIBERAÇÃO DE REPASSES",
        tags: "Operação Internacional",
        year: "2024",
        image: "https://framerusercontent.com/images/nmXZOsPpIlQjIHmg5uwOA5NJcI.png",
        alt: "Compliance e desbloqueio de repasses em plataformas de live",
        align: "right",
      },
      {
        title: "AUDITORIA E ESTRUTURAÇÃO DE CONTRATOS",
        tags: "Agência de Criadores",
        year: "2025",
        image: "https://framerusercontent.com/images/uKY0y11Igx9LzVoeZBuszZASoU.png",
        alt: "Auditoria e estruturação contratual para talentos digitais",
        align: "left",
      },
    ],
  },
  testimonial: {
    label: "VISÃO DO CLIENTE",
    quote:
      "A Fabyana trouxe a segurança e a agilidade que a nossa agência precisava para crescer no TikTok. Hoje temos contratos claros que impedem a perda de criadores e protegem o nosso caixa.",
    author: "Nome do Cliente",
    role: "Diretor, Agência Parceira",
    badge: "ASSESSORIA MENSAL",
  },
  faq: {
    label: "PERGUNTAS FREQUENTES",
    title: "Tudo o que precisa de saber sobre a nossa atuação.",
    items: [
      {
        q: "Em que áreas jurídicas o escritório é especializado?",
        a: "Atuamos exclusivamente no ecossistema digital, com foco em direito contratual para criadores, compliance de plataformas (especialmente TikTok e lives), gestão de direitos de imagem e propriedade intelectual.",
      },
      {
        q: "Como funciona a consulta jurídica inicial?",
        a: "É uma reunião estratégica direta de 45 minutos onde diagnosticamos os contratos atuais da sua agência, identificamos brechas de retenção e desenhamos um plano de ação imediato para blindar sua operação.",
      },
      {
        q: "Como posso evitar que criadores quebrem o contrato com a agência?",
        a: "Através de cláusulas de exclusividade robustas, multas rescisórias proporcionais e juridicamente válidas, além de regras claras de repasses que desestimulam o aliciamento por agências concorrentes.",
      },
      {
        q: "Vocês atuam apenas com contratos avulsos ou fazem acompanhamento mensal?",
        a: "Trabalhamos com os dois formatos: pacotes pontuais para elaboração de contratos personalizados ou assessoria jurídica mensal contínua (retainer) com resposta prioritária em até 24h para demandas do dia a dia.",
      },
      {
        q: "Fazem elaboração e revisão dos contratos que já uso hoje?",
        a: "Sim. Realizamos uma auditoria minuciosa de todos os contratos em vigor na sua agência, eliminando cláusulas frágeis e adaptando os termos às exigências reais das plataformas e da legislação vigente.",
      },
    ],
  },
  contact: {
    label: "CONTACTO",
    title: "Suporte jurídico para decisões seguras.",
    description:
      "A Fabyana oferece consultoria jurídica para agências e empresas digitais em contratos, compliance e proteção de ativos.",
    cta: "Agendar uma Reunião +",
    talkToUsLabel: "FALE CONNOSCO",
    email: "contacto@fabyanaadvocacia.com",
    phone: "+55 (11) 98765-4321",
    addressLabel: "ATENDIMENTO",
    addressLines: ["Atendimento Digital Especializado", "Brasil & Operações Internacionais"],
    hoursLabel: "HORÁRIO DE ATENDIMENTO",
    hoursLines: ["Segunda — Sexta", "09:00 — 18:00 BRT"],
    navLabel: "NAVEGAÇÃO",
    termsLabel: "Termos e Política de Privacidade",
    backToTopLabel: "Voltar ao topo ↑",
  },
  modal: {
    title: "Agendar Consulta Estratégica",
    subtitle:
      "Preencha os dados abaixo para agendarmos uma sessão de diagnóstico da sua agência de Live e TikTok.",
    serviceOptions: [
      "Contratos de Agenciamento e Exclusividade",
      "Compliance de Plataforma e Desbloqueio de Fundos",
      "Resolução de Quebra de Contrato e Conflitos",
      "Direito de Imagem e Notificações Extrajudiciais",
      "Assessoria Mensal Contínua",
    ],
    submitButton: "Solicitar Agendamento",
  },
};

export const copyVersionB: SiteCopy = {
  versionId: "B",
  versionName: "Versão B: Negócios Digitais (Mercado Amplo)",
  brand: {
    name: "FABYANA",
    tagline: "ASSESSORIA JURÍDICA",
  },
  nav: {
    items: [
      { label: "Início", href: "#home" },
      { label: "Sobre", href: "#about" },
      { label: "Serviços", href: "#services" },
      { label: "Casos", href: "#insights" },
      { label: "Contacto", href: "#contact" },
    ],
    cta: "Blindar Negócio",
  },
  hero: {
    headline: {
      line1: "Proteção jurídica para",
      line2: "negócios digitais.",
    },
    subtext:
      "Ajudamos infoprodutores, empresas de tecnologia e agências a escalar na internet com contratos seguros, marcas registadas e operação dentro da lei.",
    secondaryCta: "Os nossos serviços",
    scrollIndicator: "DESLIZE PARA EXPLORAR",
    badge: "FABYANA™ / ASSESSORIA JURÍDICA",
    socialProof: "A ESCOLHA DE EMPRESAS DIGITAIS",
  },
  about: {
    label: "SOBRE NÓS",
    sublabel: "FABYANA ASSESSORIA JURÍDICA",
    headlineHighlight: "Soluções jurídicas diretas para",
    headlineMuted: "quem vende e escala na internet.",
    paragraph:
      "Eliminamos os riscos legais do seu crescimento digital com contratos claros, proteção de ativos e atendimento ágil.",
  },
  services: {
    label: "OS NOSSOS SERVIÇOS",
    title: "Assessoria jurídica para empresas digitais.",
    contactLink: "Precisa de orientação? Fale connosco ↗",
    items: [
      {
        number: "001",
        title: "CONTRATOS DE PARCERIA",
        description:
          "Definição segura de divisão de lucros (split), deveres e direitos em coproduções, sociedades e prestação de serviços.",
        image: "https://framerusercontent.com/images/Unj4zrUK7oJ6Ma2mUvFNpF17P1U.png",
        alt: "Contratos de parceria, coprodução e split societário",
      },
      {
        number: "002",
        title: "REGISTO DE MARCA E ATIVOS",
        description:
          "Proteção oficial do nome da sua empresa, software ou produto digital contra cópias e concorrência desleal.",
        image: "https://framerusercontent.com/images/9TGdyV5TPmEmHtmnA4gxULCrIL0.png",
        alt: "Registo de marca no INPI e proteção de ativos intelectuais",
      },
      {
        number: "003",
        title: "COMBATE À PIRATARIA",
        description:
          "Ações rápidas e notificações para derrubar conteúdos vazados, plágios e vendas ilegais dos seus produtos.",
        image: "https://framerusercontent.com/images/5c2WmHLzjnU1fC8Mp9z1mGaVgjE.png",
        alt: "Combate à pirataria, plágio e remoção de conteúdo",
      },
      {
        number: "004",
        title: "TERMOS DE USO E PRIVACIDADE",
        description:
          "Elaboração de contratos para clientes, políticas de reembolso, termos de plataformas e adequação à lei de dados.",
        image: "https://framerusercontent.com/images/M5oBh2KSjcSMsrrhFyIradzlA.png",
        alt: "Termos de uso, políticas de reembolso e conformidade LGPD",
      },
    ],
  },
  expertise: {
    label: "ESPECIALIZAÇÃO JURÍDICA",
    title: "Suporte jurídico com clareza e precisão.",
    metrics: [
      {
        stat: "100%",
        label: "FOCO DIGITAL",
        description:
          "Orientação dedicada a negócios online, infoprodutos, softwares e prestadores de serviços digitais.",
      },
      {
        stat: "+200",
        label: "OPERAÇÕES BLINDADAS",
        description:
          "Assistência direta em contratos, sociedades, lançamentos e estruturação segura de empresas.",
      },
      {
        stat: "24h",
        label: "RESPOSTA RÁPIDA",
        description:
          "Agilidade na análise de contratos urgentes, notificações extrajudiciais e defesa do seu negócio.",
      },
      {
        stat: "98%",
        label: "CLIENTES SATISFEITOS",
        description:
          "Construído com base na confiança, disponibilidade rápida, sigilo em lançamentos e excelência jurídica.",
      },
    ],
  },
  process: {
    label: "COMO TRABALHAMOS",
    title: "Segurança jurídica sem burocracia.",
    cta: "Agendar consulta",
    steps: [
      {
        step: "01 / DIAGNÓSTICO",
        title: "Análise do Negócio",
        description:
          "Avaliamos a estrutura da sua operação, os contratos atuais e onde estão as vulnerabilidades fiscais e legais.",
      },
      {
        step: "02 / ESTRUTURA",
        title: "Plano de Blindagem",
        description:
          "Desenhamos a estratégia jurídica ideal para proteger os seus produtos, marcas e acordos com parceiros.",
      },
      {
        step: "03 / EXECUÇÃO",
        title: "Implementação Rápida",
        description:
          "Entregamos os contratos prontos, iniciamos registos de marca e adequamos os termos da sua plataforma.",
      },
      {
        step: "04 / PROTEÇÃO",
        title: "Suporte Contínuo",
        description:
          "Acompanhamento preventivo para novos lançamentos, contratações de equipa e resolução ágil de conflitos.",
      },
    ],
  },
  insights: {
    label: "CASOS E ARTIGOS",
    title: "Resultados reais no mercado digital.",
    cases: [
      {
        title: "COMBATE À PIRATARIA E REMOÇÃO DE CONTEÚDO",
        tags: "Propriedade Intelectual",
        year: "2024",
        image: "https://framerusercontent.com/images/wsGNlyuOkIdU6Vf8VoUlYjuvmC4.png",
        alt: "Combate à pirataria e takedown de cursos piratas",
        align: "left",
      },
      {
        title: "ADEQUAÇÃO DE TERMOS DE USO E CONTRATOS B2B",
        tags: "Plataforma de Software",
        year: "2024",
        image: "https://framerusercontent.com/images/nmXZOsPpIlQjIHmg5uwOA5NJcI.png",
        alt: "Adequação de termos de uso para plataformas SaaS",
        align: "right",
      },
      {
        title: "ESTRUTURAÇÃO DE SOCIEDADE E COPRODUÇÃO",
        tags: "Lançamento Digital",
        year: "2025",
        image: "https://framerusercontent.com/images/uKY0y11Igx9LzVoeZBuszZASoU.png",
        alt: "Contrato de coprodução e divisão de faturamento",
        align: "left",
      },
    ],
  },
  testimonial: {
    label: "VISÃO DO CLIENTE",
    quote:
      "A Fabyana resolveu toda a estrutura jurídica dos nossos lançamentos e contratos com parceiros. Hoje escalamos as vendas com a tranquilidade de ter a marca e o caixa protegidos.",
    author: "Nome do Cliente",
    role: "Fundador, Empresa Digital",
    badge: "ASSESSORIA EMPRESARIAL",
  },
  faq: {
    label: "PERGUNTAS FREQUENTES",
    title: "Tudo o que precisa de saber sobre a nossa atuação.",
    items: [
      {
        q: "Em que tipos de negócios digitais o escritório é especializado?",
        a: "Atuamos fortemente com infoprodutores, agências de lançamentos, empresas de software (SaaS), e-commerces e prestadores de serviços digitais que escalam vendas na internet.",
      },
      {
        q: "Como funciona a consulta jurídica inicial?",
        a: "Realizamos um raio-x completo de 45 minutos para avaliar a sua estrutura societária, termos de uso, contratos de prestadores e principais pontos de vulnerabilidade antes do próximo ciclo de crescimento.",
      },
      {
        q: "O que fazer se copiarem o meu produto ou usarem a minha marca?",
        a: "Agimos de imediato com notificações extrajudiciais diretas e solicitações de takedown junto a gateways de pagamento, plataformas de infoprodutos e redes sociais para derrubar as cópias e estancar prejuízos.",
      },
      {
        q: "Como funciona o contrato de parceria ou coprodução segura?",
        a: "Estruturamos a divisão exata de percentuais de faturamento (split), responsabilidade sobre custos operacionais e de tráfego, propriedade intelectual dos materiais e regras transparentes de rescisão e não-concorrência.",
      },
      {
        q: "Fazem elaboração e revisão dos contratos que já uso hoje?",
        a: "Sim. Revisamos todos os seus contratos atuais com coprodutores, afiliados, prestadores de tráfego/design e termos de uso da sua plataforma, blindando eventuais brechas jurídicas e riscos trabalhistas.",
      },
    ],
  },
  contact: {
    label: "CONTACTO",
    title: "Suporte jurídica para decisões seguras.",
    description:
      "A Fabyana oferece consultoria jurídica para empresas digitais e empreendedores em contratos, marcas e segurança operacional.",
    cta: "Agendar uma Reunião +",
    talkToUsLabel: "FALE CONNOSCO",
    email: "contacto@fabyanaadvocacia.com",
    phone: "+55 (11) 98765-4321",
    addressLabel: "ATENDIMENTO",
    addressLines: ["Assessoria Jurídica Digital", "Atendimento para Todo o Brasil & Exterior"],
    hoursLabel: "HORÁRIO DE ATENDIMENTO",
    hoursLines: ["Segunda — Sexta", "09:00 — 18:00 BRT"],
    navLabel: "NAVEGAÇÃO",
    termsLabel: "Termos e Política de Privacidade",
    backToTopLabel: "Voltar ao topo ↑",
  },
  modal: {
    title: "Blindar Meu Negócio Digital",
    subtitle:
      "Preencha os dados abaixo para agendarmos uma sessão de diagnóstico jurídico do seu infoproduto ou empresa de tecnologia.",
    serviceOptions: [
      "Contrato de Coprodução e Divisão de Lucros",
      "Registo de Marca e Proteção de Software",
      "Combate à Pirataria e Remoção de Conteúdo",
      "Termos de Uso e Adequação LGPD",
      "Assessoria Mensal para Lançamentos",
    ],
    submitButton: "Solicitar Diagnóstico",
  },
};
