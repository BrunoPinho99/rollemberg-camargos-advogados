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
    name: "ROLLEMBERG & CAMARGOS",
    tagline: "ADVOGADOS",
  },
  nav: {
    items: [
      { label: "Início", href: "#home" },
      { label: "Sobre", href: "#about" },
      { label: "Serviços", href: "#services" },
      { label: "Contato", href: "#contact" },
    ],
    cta: "Vamos conversar?",
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
    badge: "ROLLEMBERG & CAMARGOS ADVOGADOS",
    socialProof: "A ESCOLHA DE GRANDES AGÊNCIAS",
  },
  about: {
    label: "SOBRE NÓS",
    sublabel: "ROLLEMBERG & CAMARGOS ADVOGADOS",
    headlineHighlight: "Soluções jurídicas diretas para",
    headlineMuted: "agências de criadores e talentos.",
    paragraph:
      "Transformamos a insegurança das redes sociais em operações seguras através de contratos fortes e atuação rápida.",
  },
  services: {
    label: "OS NOSSOS SERVIÇOS",
    title: "Assessoria jurídica para agências digitais.",
    contactLink: "Precisa de orientação? Fale conosco",
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
      "A Rollemberg & Camargos trouxe a segurança e a agilidade que a nossa agência precisava para crescer no digital. Hoje temos contratos claros que impedem a perda de criadores e protegem o nosso caixa.",
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
    label: "CONTATO",
    title: "Segurança jurídica para decisões estratégicas.",
    description:
      "A Rollemberg & Camargos oferece assessoria jurídica para agências e empresas digitais em contratos, compliance e proteção de ativos.",
    cta: "Agendar uma Reunião +",
    talkToUsLabel: "FALE CONOSCO",
    email: "contato@rollembergcamargos.adv.br",
    phone: "+5561991126429",
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
  versionName: "Versão B: Negócios em Construção e Escala",
  brand: {
    name: "ROLLEMBERG & CAMARGOS",
    tagline: "ADVOGADOS",
  },
  nav: {
    items: [
      { label: "Início", href: "#home" },
      { label: "Sobre", href: "#about" },
      { label: "Serviços", href: "#services" },
      { label: "Contato", href: "#contact" },
    ],
    cta: "Vamos conversar?",
  },
  hero: {
    headline: {
      line1: "Segurança jurídica",
      line2: "para quem constrói",
      line3: "e escala negócios.",
    },
    subtext:
      "Da primeira sociedade aos grandes contratos: traduzimos o direito para uma linguagem clara, ágil e pensada para proteger cada etapa do seu crescimento.",
    secondaryCta: "Nossos serviços",
    scrollIndicator: "DESLIZE PARA EXPLORAR",
    badge: "ROLLEMBERG & CAMARGOS ADVOGADOS",
    socialProof: "ESTRUTURA JURÍDICA PARA NEGÓCIOS EM MOVIMENTO",
  },
  about: {
    label: "SOBRE NÓS",
    sublabel: "ROLLEMBERG & CAMARGOS ADVOGADOS",
    headlineHighlight: "Advocacia direta e sem burocracia para",
    headlineMuted: "quem tira ideias do papel e escala operações.",
    paragraph:
      "Substituímos o juridiquês por orientação prática, contratos sob medida e proteção real para você crescer sem deixar brechas pelo caminho.",
  },
  services: {
    label: "NOSSOS SERVIÇOS",
    title: "Estrutura completa para cada fase do negócio.",
    contactLink: "Não sabe por onde começar? Fale conosco",
    items: [
      {
        number: "001",
        title: "SOCIEDADE & PARCERIAS",
        description:
          "Acordos de sócios, entrada de investidores, coproduções e divisão de resultados com regras claras desde o primeiro dia, evitando conflitos quando a operação crescer.",
        image: "/servico-sociedade-parcerias.webp",
        alt: "Estruturação societária, acordo de sócios e parcerias estratégicas",
      },
      {
        number: "002",
        title: "REGISTRO DE MARCA & ATIVOS",
        description:
          "Proteção oficial do nome, identidade visual, produtos e tecnologia no INPI para garantir que tudo o que você está construindo pertença de fato a você.",
        image: "/servico-registro-marcas.webp",
        alt: "Registro de marca no INPI e proteção de ativos intelectuais",
      },
      {
        number: "003",
        title: "BLINDAGEM COMERCIAL & CONFLITOS",
        description:
          "Contratos com clientes, fornecedores e equipe sem modelos genéricos, além de atuação rápida em cobranças, quebras contratuais e notificações extrajudiciais.",
        image: "/servico-blindagem-comercial.webp",
        alt: "Contratos comerciais sob medida e resolução estratégica de conflitos",
      },
      {
        number: "004",
        title: "TERMOS DE USO E PRIVACIDADE",
        description:
          "Políticas claras para vendas online, plataformas, aplicativos e relação com o consumidor, alinhando sua operação à LGPD e prevenindo bloqueios ou passivos.",
        image: "/termos-de-uso-privacidade.webp",
        alt: "Termos de uso, políticas comerciais e conformidade LGPD",
      },
    ],
  },
  expertise: {
    label: "NOSSA ATUAÇÃO",
    title: "Visão de negócio, linguagem clara e resposta ágil.",
    metrics: [
      {
        stat: "100%",
        label: "DIGITAL & SEM FRONTEIRAS",
        description:
          "Atendimento direto, reuniões objetivas e assinatura eletrônica para resolver demandas de onde você estiver, sem deslocamentos ou papelada.",
      },
      {
        stat: "+200",
        label: "OPERAÇÕES ESTRUTURADAS",
        description:
          "Sociedades formalizadas, marcas protegidas e contratos comerciais desenhados para empresas que saíram do zero e ganharam tração.",
      },
      {
        stat: "98%",
        label: "RELAÇÕES DE LONGO PRAZO",
        description:
          "Acompanhamos a empresa desde os primeiros contratos até novas frentes de receita, contratações estratégicas e expansão de mercado.",
      },
    ],
  },
  process: {
    label: "COMO TRABALHAMOS",
    title: "Segurança jurídica sem burocracia.",
    cta: "Vamos conversar?",
    steps: [
      {
        step: "01 / DIAGNÓSTICO",
        title: "Raio-X da Operação",
        description:
          "Entendemos o seu modelo de negócio, como você vende hoje e onde estão os pontos cegos societários, contratuais e de marca.",
      },
      {
        step: "02 / ESTRATÉGIA",
        title: "Plano de Prioridades",
        description:
          "Definimos o que precisa ser protegido imediatamente para destravar vendas e parcerias sem sobrecarregar sua rotina.",
      },
      {
        step: "03 / EXECUÇÃO",
        title: "Entrega Enxuta e Clara",
        description:
          "Elaboramos documentos objetivos, fáceis de assinar e adaptados à realidade comercial da sua empresa.",
      },
      {
        step: "04 / ESCALA",
        title: "Acompanhamento Próximo",
        description:
          "Suporte contínuo para revisar acordos, apoiar contratações e dar segurança a cada novo passo de crescimento.",
      },
    ],
  },
  insights: {
    label: "CASOS E ATUAÇÃO",
    title: "Estrutura real para negócios em crescimento.",
    cases: [
      {
        title: "ACORDO DE SÓCIOS E REESTRUTURAÇÃO DE PARTICIPAÇÕES",
        tags: "Direito Societário",
        year: "2025",
        image: "/caso-acordo-socios.webp",
        alt: "Estruturação societária e acordo de sócios",
        align: "left",
      },
      {
        title: "ADEQUAÇÃO DE TERMOS DE USO E CONTRATOS B2B",
        tags: "Tecnologia & Operações",
        year: "2025",
        image: "/caso-termos-b2b.webp",
        alt: "Adequação de termos de uso e contratos B2B",
        align: "right",
      },
      {
        title: "BLINDAGEM DE MARCA E PARCERIAS COMERCIAIS",
        tags: "Expansão de Marca",
        year: "2025",
        image: "/caso-blindagem-marcas.webp",
        alt: "Proteção de marca e contratos de parceria",
        align: "left",
      },
    ],
  },
  testimonial: {
    label: "VISÃO DE QUEM CONSTRÓI",
    quote:
      "A equipe da Rollemberg & Camargos organizou nossa sociedade, registrou nossa marca e criou contratos que nossos clientes assinam sem travar a venda. Hoje crescemos com a tranquilidade de ter a casa em ordem.",
    author: "Cliente Rollemberg & Camargos",
    role: "Sócio-Fundador",
    badge: "ASSESSORIA EMPRESARIAL",
  },
  faq: {
    label: "DÚVIDAS FREQUENTES",
    title: "Respostas diretas antes do próximo passo.",
    items: [
      {
        q: "Qual é o momento certo de estruturar o jurídico do meu negócio?",
        a: "Antes que o primeiro imprevisto custe caro. Se você já tem faturamento recorrente, vai dividir a operação com um sócio, fechar contratos maiores ou posicionar uma marca própria no mercado, organizar a base agora custa uma fração de corrigir problemas depois.",
      },
      {
        q: "Como funciona a primeira conversa com o escritório?",
        a: "Fazemos uma reunião objetiva de diagnóstico para entender o modelo da sua operação, avaliar como você fecha negócios hoje e apontar o que precisa de proteção imediata — sem termos complicados e com um plano claro de prioridades.",
      },
      {
        q: "Estou iniciando uma sociedade ou parceria. Preciso mesmo formalizar agora?",
        a: "Sim. A maioria dos desgastes societários nasce de combinados verbais feitos quando tudo estava começando. Colocamos no papel a participação de cada parte, responsabilidades, divisão de resultados, propriedade intelectual e regras claras de saída.",
      },
      {
        q: "Ainda uso modelos prontos de contrato com clientes e prestadores. Qual o risco?",
        a: "Modelos genéricos raramente cobrem a realidade da sua entrega, multas por cancelamento, inadimplência, confidencialidade ou riscos trabalhistas. Criamos contratos enxutos, fáceis de ler e assinar, mas que protegem o seu caixa de verdade.",
      },
      {
        q: "Vocês atendem demandas pontuais ou acompanham a empresa no dia a dia?",
        a: "Atuamos nos dois formatos. Podemos resolver uma demanda específica — como registrar sua marca, formalizar sua sociedade ou redigir um contrato estratégico — ou assumir o jurídico mensal para apoiar negociações e decisões contínuas.",
      },
    ],
  },
  contact: {
    label: "CONTATO",
    title: "Segurança jurídica para decisões que movem o negócio.",
    description:
      "A Rollemberg & Camargos Advogados oferece assessoria jurídica direta e estratégica em estrutura societária, contratos, marcas e proteção operacional.",
    cta: "Vamos conversar?",
    talkToUsLabel: "FALE CONOSCO",
    email: "contato@rollembergcamargos.adv.br",
    phone: "+5561991126429",
    addressLabel: "ATENDIMENTO",
    addressLines: ["Advocacia Digital & Estratégica", "Atendimento em Todo o Brasil & Exterior"],
    hoursLabel: "HORÁRIO DE ATENDIMENTO",
    hoursLines: ["Segunda — Sexta", "09:00 — 18:00 BRT"],
    navLabel: "NAVEGAÇÃO",
    termsLabel: "Termos e Política de Privacidade",
    backToTopLabel: "Voltar ao topo ↑",
  },
  modal: {
    title: "Vamos conversar sobre o seu negócio",
    subtitle:
      "Preencha os dados abaixo para agendarmos uma conversa objetiva de diagnóstico e entendermos o momento atual da sua operação.",
    serviceOptions: [
      "Acordo de Sócios e Estruturação Societária",
      "Contratos com Clientes, Parceiros e Equipe",
      "Registro de Marca e Proteção de Ativos",
      "Termos de Uso, Plataformas e LGPD",
      "Assessoria Jurídica Mensal Recorrente",
    ],
    submitButton: "Agendar Conversa",
  },
};
