export interface AreaDeAtuacao {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  summary: string;
  problemasResolvidos: string[];
  beneficiosEAplicacao: string[];
  situacoesReais: string[];
  baseLegal: { norma: string; descricao: string; orgao: string }[];
  perguntasFrequentes: { pergunta: string; resposta: string }[];
  servicosRelacionados: { slug: string; title: string }[];
}

export const AREAS_DE_ATUACAO: AreaDeAtuacao[] = [
  {
    slug: "direito-empresarial",
    title: "Direito Empresarial",
    shortTitle: "Empresarial",
    metaTitle: "Direito Empresarial em Brasília e Nacional | Rollemberg & Camargos",
    metaDescription:
      "Assessoria em direito empresarial com sede em Brasília/DF e atendimento nacional. Estruturação jurídica preventiva, governança e suporte estratégico para empresas.",
    h1: "Direito Empresarial Estratégico para Empresas em Tração e Escala",
    subtitle:
      "Segurança jurídica orientada ao negócio: da conformidade societária ao alinhamento de fornecedores e parceiros estratégicos.",
    summary:
      "O Direito Empresarial moderno exige agilidade comercial sem abrir mão da blindagem patrimonial e operacional. A Rollemberg & Camargos Advogados atua como parceira jurídica estratégica de empresários, descomplicando rotinas regulatórias, minimizando litígios e garantindo estabilidade nas decisões que movem o negócio.",
    problemasResolvidos: [
      "Insegurança jurídica em negociações comerciais e relações com parceiros estratégicos.",
      "Vulnerabilidade patrimonial dos sócios e administradores frente a passivos operacionais.",
      "Conflitos societários decorrentes de falta de regras prévias de governança e tomada de decisão.",
      "Modelos contratuais desatualizados que criam brechas para inadimplência e litígios custosos.",
      "Falta de suporte jurídico ágil para fechamento rápido de contratos essenciais.",
    ],
    beneficiosEAplicacao: [
      "Tomada de decisão comercial respaldada por pareceres claros e pragmáticos.",
      "Redução drástica do custo e do tempo despendidos em contencioso judicial e administrativo.",
      "Alinhamento dos contratos às reais práticas do mercado e aos interesses financeiros da empresa.",
      "Estrutura societária sólida para suportar rodadas de investimento e auditorias de due diligence.",
    ],
    situacoesReais: [
      "Empresas em expansão que precisam padronizar sua esteira contratual B2B.",
      "Sócios que desejam separar patrimônio pessoal da operação empresarial com base legal.",
      "Organizações que enfrentam renegociações complexas com grandes fornecedores ou clientes corporativos.",
    ],
    baseLegal: [
      {
        norma: "Lei nº 10.406/2002 (Código Civil - Livro II do Direito de Empresa)",
        descricao: "Regulamenta as sociedades personificadas, administração, obrigações de sócios e responsabilidade civil.",
        orgao: "Planalto / Legislação Federal",
      },
      {
        norma: "Lei nº 13.874/2019 (Declaração de Direitos de Liberdade Econômica)",
        descricao: "Estabelece normas de proteção à livre iniciativa, presunção de boa-fé e intervenção mínima do Estado nos contratos civis e empresariais.",
        orgao: "Planalto / Legislação Federal",
      },
    ],
    perguntasFrequentes: [
      {
        pergunta: "Por que uma empresa em crescimento deve investir em assessoria empresarial preventiva?",
        resposta:
          "A advocacia preventiva custa uma fração do valor de uma única demanda judicial mal estruturada. Ela previne passivos, protege o fluxo de caixa contra inadimplência, estabelece regras de governança e transmite credibilidade para investidores, fornecedores e clientes corporativos.",
      },
      {
        pergunta: "A Rollemberg & Camargos atende empresas fora de Brasília/DF?",
        resposta:
          "Sim. Embora nossa sede esteja em Brasília/DF, nosso modelo de atendimento é 100% digital e seguro, com reuniões online, assinatura eletrônica qualificada e acompanhamento processual eletrônico em todos os estados do Brasil.",
      },
    ],
    servicosRelacionados: [
      { slug: "estruturacao-societaria", title: "Estruturação Societária" },
      { slug: "contratos-comerciais", title: "Contratos Comerciais" },
      { slug: "assessoria-juridica-mensal", title: "Assessoria Jurídica Mensal" },
    ],
  },
  {
    slug: "estruturacao-societaria",
    title: "Estruturação Societária",
    shortTitle: "Societário",
    metaTitle: "Estruturação Societária para Empresas e Startups | Rollemberg & Camargos",
    metaDescription:
      "Estruturação societária, escolha de tipo societário, reorganizações e blindagem institucional em Brasília/DF e todo o Brasil. Advogadas especializadas.",
    h1: "Estruturação Societária Inteligente para Crescer sem Riscos",
    subtitle:
      "Definição de tipos societários, governança, entrada de novos sócios e alinhamento patrimonial estratégico.",
    summary:
      "A estrutura societária é a espinha dorsal de qualquer empreendimento. Uma escolha equivocada na constituição da sociedade ou na admissão de um parceiro pode paralisar a empresa, travar decisões cruciais e expor o patrimônio pessoal dos fundadores. Ajudamos a modelar uma estrutura jurídica sólida, flexível e preparada para a escala.",
    problemasResolvidos: [
      "Contratos sociais genéricos fornecidos por modelos padrão que geram litígios insolúveis.",
      "Indefinição de poderes entre sócios administradores e sócios investidores.",
      "Bloqueio de decisões estratégicas por ausência de quóruns qualificados e cláusulas de desempate.",
      "Dificuldade em receber investimentos ou empréstimos por fragilidade na composição do capital social.",
    ],
    beneficiosEAplicacao: [
      "Clareza absoluta sobre direitos patrimoniais, políticos e de voto de cada sócio.",
      "Previsibilidade de governança com regras de exclusão, saída voluntária e sucessão.",
      "Otimização da segurança patrimonial dos administradores contra desconsiderações abusivas.",
      "Prontidão para captação de recursos e negociações com fundos e investidores anjo.",
    ],
    situacoesReais: [
      "Criação de nova empresa com divisão desbalanceada de papéis técnicos e comerciais.",
      "Transformação de sociedade limitada para comportar novos sócios ou investidores estratégicos.",
      "Reorganização societária de grupos familiares ou empresas conjuntas para evitar passivos cruzados.",
    ],
    baseLegal: [
      {
        norma: "Lei nº 10.406/2002 (Código Civil, arts. 997 a 1.087)",
        descricao: "Disciplina a constituição e funcionamento das sociedades simples e limitadas (LTDA).",
        orgao: "Planalto / Legislação Federal",
      },
      {
        norma: "Instruções Normativas do DREI (Departamento Nacional de Registro Empresarial e Integração)",
        descricao: "Regras de registro, arquivamento e alteração de atos societários nas Juntas Comerciais estaduais.",
        orgao: "DREI / Ministério do Desenvolvimento, Indústria, Comércio e Serviços",
      },
    ],
    perguntasFrequentes: [
      {
        pergunta: "Qual é a diferença entre o Contrato Social e o Acordo de Sócios?",
        resposta:
          "O Contrato Social é o documento público arquivado na Junta Comercial com as regras básicas e cadastrais da empresa. O Acordo de Sócios é um instrumento parassocial (privado) que detalha direitos políticos, deveres diários, confidencialidade, não concorrência, vesting e cláusulas de saída com eficácia vinculante entre as partes.",
      },
      {
        pergunta: "Quando devo reestruturar o contrato social da minha empresa?",
        resposta:
          "Sempre que houver alteração nas quotas, entrada de novos sócios, mudanças na governança ou na administração, início de novas linhas de atividade ou quando o faturamento exigir governança mais madura.",
      },
    ],
    servicosRelacionados: [
      { slug: "acordos-de-socios", title: "Acordos de Sócios" },
      { slug: "startups-tecnologia", title: "Assessoria para Startups" },
      { slug: "contratos-comerciais", title: "Contratos Comerciais" },
    ],
  },
  {
    slug: "acordos-de-socios",
    title: "Acordos de Sócios e Quotistas",
    shortTitle: "Acordo de Sócios",
    metaTitle: "Acordo de Sócios e Quotistas | Rollemberg & Camargos Advogados",
    metaDescription:
      "Elaboração e revisão de Acordo de Sócios (parassocial). Cláusulas de saída, tag along, drag along, vesting, não concorrência e resolução de impasses.",
    h1: "Acordo de Sócios: Proteção de Longo Prazo para Relações Societárias",
    subtitle:
      "O documento fundamental para alinhar expectativas, regrar saídas e blindar o futuro da empresa antes que surjam conflitos.",
    summary:
      "A maioria dos desgastes que encerram empresas de alto potencial decorre de desentendimentos entre sócios por combinados verbais. O Acordo de Sócios formaliza com rigor e clareza como o negócio será gerido, como os lucros serão distribuídos, como saídas serão calculadas e como a propriedade intelectual desenvolvida permanece na empresa.",
    problemasResolvidos: [
      "Sócio que abandona a operação diária mas continua retendo participação relevante no capital social.",
      "Divergência na precificação (valuation) das quotas em caso de dissolução parcial ou retirada.",
      "Falta de proteção contra vazamento de informações confidenciais ou concorrência desleal por ex-sócio.",
      "Impasses decisórios (deadlock) que congelam o crescimento da companhia.",
    ],
    beneficiosEAplicacao: [
      "Cláusulas protetivas consolidadas: Drag Along, Tag Along, Shotgun/Buy-Sell e Vesting.",
      "Pactuação formal de confidencialidade (NDA) e não aliciamento/não concorrência (Non-Compete).",
      "Métricas objetivas de apuração de haveres sem recorrer a perícias judiciais morosas.",
      "Paz de espírito para focar no crescimento das vendas com as regras do jogo previamente combinadas.",
    ],
    situacoesReais: [
      "Dois ou mais fundadores iniciando uma operação com papéis desiguais de investimento e dedicação.",
      "Empresa recebendo investimento anjo ou sócio operacional após meses de validação comercial.",
      "Fundadores que necessitam prever a sucessão e impedir que herdeiros assumam a gestão sem qualificação técnica.",
    ],
    baseLegal: [
      {
        norma: "Lei nº 6.404/1976 (Lei das Sociedades por Ações, art. 118 aplicada subsidiariamente às LTDAs)",
        descricao: "Fundamenta a validade e a oponibilidade de acordos de acionistas/quotistas quanto a votos e transferências.",
        orgao: "Planalto / Legislação Federal",
      },
      {
        norma: "Código Civil Brasileiro (arts. 421 e 422)",
        descricao: "Princípios da função social dos contratos, boa-fé objetiva e autonomia privada na estipulação negocial.",
        orgao: "Planalto / Legislação Federal",
      },
    ],
    perguntasFrequentes: [
      {
        pergunta: "O Acordo de Sócios é público na Junta Comercial?",
        resposta:
          "Não. O Acordo de Sócios é um documento de natureza privada mantido entre os signatários e arquivado na sede da empresa para produzir efeitos imediatos perante os sócios e a administração.",
      },
      {
        pergunta: "Posso fazer um Acordo de Sócios para uma Sociedade Limitada (LTDA)?",
        resposta:
          "Sim, com total validade. O art. 1.053 do Código Civil permite a regência supletiva das LTDAs pela Lei das S.A. (art. 118 da Lei 6.404/76), tornando o acordo de quotistas plenamente exequível.",
      },
    ],
    servicosRelacionados: [
      { slug: "estruturacao-societaria", title: "Estruturação Societária" },
      { slug: "startups-tecnologia", title: "Assessoria para Startups" },
      { slug: "direito-empresarial", title: "Direito Empresarial" },
    ],
  },
  {
    slug: "contratos-comerciais",
    title: "Contratos Comerciais e Negociações B2B",
    shortTitle: "Contratos",
    metaTitle: "Contratos Comerciais Sob Medida e Negociação B2B | Rollemberg & Camargos",
    metaDescription:
      "Elaboração e revisão de contratos empresariais, prestação de serviços B2B, acordos de parceria e cláusulas de segurança jurídica sem juridiquês.",
    h1: "Contratos Comerciais Desenhados para Proteger o Caixa e Acelerar Vendas",
    subtitle:
      "Documentos objetivos, fáceis de assinar e juridicamente blindados contra inadimplência, rescisão e responsabilidade civil.",
    summary:
      "Um bom contrato comercial não deve travar negociações; deve garantir que aquilo que foi prometido seja executado, pago e respeitado. Eliminamos minutas genéricas da internet que deixam seu negócio vulnerável e desenhamos instrumentos contratuais pragmáticos que seus clientes e parceiros assinam com confiança.",
    problemasResolvidos: [
      "Inadimplência de clientes e ausência de títulos executivos extrajudiciais válidos para cobrança célere.",
      "Escopos indefinidos gerando retrabalho infinito sem remuneração correspondente (scope creep).",
      "Cláusulas rescisórias ambíguas que geram multas desproporcionais ou perdas financeiras repentinas.",
      "Ausência de limitação de responsabilidade civil proporcional ao valor do negócio.",
    ],
    beneficiosEAplicacao: [
      "Instrumentos estruturados como títulos executivos extrajudiciais com força para cobrança rápida.",
      "Definição milimétrica de SLAs, marcos de entrega, prazos de aceite tácito e pagamentos por etapas.",
      "Proteção de propriedade intelectual e sigilo de metodologia desenvolvida.",
      "Equilíbrio negocial que transmite maturidade técnica e fecha negócios corporativos maiores.",
    ],
    situacoesReais: [
      "Prestadores de serviços e agências com ticket médio alto fechando contratos com grandes marcas.",
      "Fornecedores B2B que precisam padronizar termos e condições gerais para esteira comercial veloz.",
      "Empresas em litígio iminente buscando renegociação ou notificação extrajudicial com respaldo técnico.",
    ],
    baseLegal: [
      {
        norma: "Lei nº 10.406/2002 (Código Civil, arts. 421 a 480)",
        descricao: "Regime geral dos contratos civis e mercantis, formação, extinção, arras e cláusula penal.",
        orgao: "Planalto / Legislação Federal",
      },
      {
        norma: "Lei nº 13.105/2015 (Código de Processo Civil, art. 784, III)",
        descricao: "Define os requisitos para que o documento particular assinado por duas testemunhas ou eletronicamente seja título executivo extrajudicial.",
        orgao: "Planalto / Legislação Federal",
      },
    ],
    perguntasFrequentes: [
      {
        pergunta: "Contratos assinados eletronicamente têm validade jurídica plena no Brasil?",
        resposta:
          "Sim. A Medida Provisória nº 2.200-2/2001 e a Lei nº 14.063/2020 conferem plena validade às assinaturas eletrônicas avançadas e qualificadas, permitindo execução judicial rápida quando observados os parâmetros de integridade e autoria.",
      },
      {
        pergunta: "Qual é o perigo de utilizar modelos gratuitos da internet na minha empresa?",
        resposta:
          "Modelos genéricos geralmente ignoram a legislação específica do seu segmento, não possuem cláusulas de limitação de danos, fixam penalidades inválidas judicialmente e frequentemente não cumprem os requisitos para execução judicial direta.",
      },
    ],
    servicosRelacionados: [
      { slug: "direito-empresarial", title: "Direito Empresarial" },
      { slug: "registro-de-marcas", title: "Registro de Marcas no INPI" },
      { slug: "assessoria-juridica-mensal", title: "Assessoria Jurídica Mensal" },
    ],
  },
  {
    slug: "registro-de-marcas",
    title: "Registro de Marcas e Propriedade Intelectual",
    shortTitle: "Marcas (INPI)",
    metaTitle: "Registro de Marca no INPI | Rollemberg & Camargos Advogados Brasília",
    metaDescription:
      "Proteja o nome, logotipo e tecnologia da sua empresa com registro oficial no INPI. Busca de anterioridade, protocolo, defesas e vigilância contínua.",
    h1: "Registro de Marca no INPI: A Verdadeira Proteção do seu Maior Ativo",
    subtitle:
      "Garanta a exclusividade comercial do seu nome e identidade em todo o território nacional e evite notificações de uso indevido.",
    summary:
      "Investir anos em branding, clientes e tráfego sem registrar a marca no Instituto Nacional da Propriedade Industrial (INPI) é construir um patrimônio sobre terreno alheio. Se outro registrar antes, você pode ser legalmente obrigado a trocar de nome, destruir estoque e pagar indenizações por danos materiais.",
    problemasResolvidos: [
      "Risco iminente de perda da marca por ausência de registro oficial na classe de atuação correta.",
      "Recebimento de notificações extrajudiciais e ameaças de processo por uso indevido de marca concorrente.",
      "Concorrentes copiando o nome, embalagens e identidade visual sem barreiras legais imediatas.",
      "Tentativa de franquear ou vender a operação travada pela falta de titularidade da propriedade intelectual.",
    ],
    beneficiosEAplicacao: [
      "Certificado de Registro de Marca emitido pelo INPI com exclusividade em todo o território nacional.",
      "Direito de notificar e cessar imediatamente o uso indevido por concorrentes diretos.",
      "Possibilidade de monetização via licenciamento, franquias, garantias bancárias e avaliação contábil do ativo.",
      "Monitoramento contínuo da Revista da Propriedade Industrial (RPI) para barrar pedidos colidentes de terceiros.",
    ],
    situacoesReais: [
      "Empresas e marcas digitais que começaram locais e estão ganhando tração em escala nacional.",
      "Criadores de cursos, infoprodutos, marcas de vestuário e produtos físicos com forte investimento em marketing.",
      "Empresas de tecnologia que precisam proteger marcas de software e plataformas SaaS no mercado.",
    ],
    baseLegal: [
      {
        norma: "Lei nº 9.279/1996 (Lei da Propriedade Industrial - LPI)",
        descricao: "Regula direitos e obrigações relativos à propriedade industrial, registro de marcas, patentes e desenhos industriais.",
        orgao: "Planalto / INPI",
      },
      {
        norma: "Resoluções do INPI (Classificação Internacional de Nice)",
        descricao: "Diretrizes e manuais de marcas para exame de registrabilidade e classes de produtos e serviços.",
        orgao: "Instituto Nacional da Propriedade Industrial (INPI)",
      },
    ],
    perguntasFrequentes: [
      {
        pergunta: "Ter o CNPJ registrado na Junta Comercial garante a proteção da marca?",
        resposta:
          "Não. O registro na Junta Comercial protege apenas o Nome Empresarial (razão social) no âmbito do Estado de registro. Apenas o registro concedido pelo INPI confere exclusividade sobre o nome fantasia e o logotipo em todo o Brasil.",
      },
      {
        pergunta: "Quanto tempo dura o processo de registro de marca no INPI?",
        resposta:
          "Em média, de 8 a 14 meses quando não há oposições complexas. No entanto, o protocolo inicial gera prioridade jurídica imediata contra qualquer terceiro que tente registrar a mesma marca posteriormente.",
      },
    ],
    servicosRelacionados: [
      { slug: "startups-tecnologia", title: "Assessoria para Startups" },
      { slug: "contratos-comerciais", title: "Contratos Comerciais" },
      { slug: "direito-digital", title: "Direito Digital" },
    ],
  },
  {
    slug: "direito-digital",
    title: "Direito Digital e Negócios na Internet",
    shortTitle: "Direito Digital",
    metaTitle: "Direito Digital para Plataformas, E-commerce e SaaS | Rollemberg & Camargos",
    metaDescription:
      "Assessoria em direito digital: conformidade para e-commerces, SaaS, aplicativos e plataformas. Proteção contra fraudes, bloqueios e conflitos com usuários.",
    h1: "Direito Digital para Quem Opera, Monetiza e Escala no Ambiente Virtual",
    subtitle:
      "Segurança jurídica para e-commerces, plataformas, infoprodutores, SaaS e criadores de tecnologia.",
    summary:
      "Vender e prestar serviços pela internet demanda regras operacionais claras que respeitem o Marco Civil da Internet, o Código de Defesa do Consumidor nas vendas à distância e a proteção de dados. Construímos instrumentos jurídicos modernos que blindam o modelo de negócio contra estornos abusivos, chargebacks e responsabilizações indevidas.",
    problemasResolvidos: [
      "Insegurança jurídica em modelos de assinatura recorrente e políticas de cancelamento digital.",
      "Suspensão de contas em gateways de pagamento, plataformas e marketplaces por falta de políticas públicas válidas.",
      "Vulnerabilidade frente a litígios de consumidores por regras de frete, prazos de entrega e garantias mal redigidas.",
      "Apropriação indevida de dados e códigos por parceiros e colaboradores terceirizados.",
    ],
    beneficiosEAplicacao: [
      "Termos de Uso transparentes que delimitam com exatidão as obrigações da plataforma e dos usuários.",
      "Políticas de reembolso e cancelamento alinhadas ao direito de arrependimento (art. 49 do CDC).",
      "Redução drástica de disputas em cartões de crédito através de regras claras de entrega de serviço digital.",
      "Estrutura contratual sólida para acordos de revenda, afiliados e coproduções na internet.",
    ],
    situacoesReais: [
      "Plataformas SaaS de assinatura que precisam blindar seus termos de serviço contra abusos de API e scraping.",
      "E-commerces de alto volume que buscam padronizar suas condições de compra, troca e logística reversa.",
      "Infoprodutores e agências de lançamento organizando parcerias de coprodução e divisão automatizada de receitas.",
    ],
    baseLegal: [
      {
        norma: "Lei nº 12.965/2014 (Marco Civil da Internet)",
        descricao: "Estabelece princípios, garantias, direitos e deveres para o uso da internet no Brasil.",
        orgao: "Planalto / Legislação Federal",
      },
      {
        norma: "Decreto nº 7.962/2013 (Decreto do Comércio Eletrônico)",
        descricao: "Regulamenta o CDC para contratação no comércio eletrônico, abrangendo informação clara e direito de arrependimento.",
        orgao: "Planalto / Legislação Federal",
      },
    ],
    perguntasFrequentes: [
      {
        pergunta: "Por que não devo copiar os Termos de Uso de outro site concorrente?",
        resposta:
          "Copiar termos de uso é extremamente perigoso: além de violação de direitos autorais, o modelo do concorrente pode adotar responsabilidades que não se aplicam à sua operação ou omitir salvaguardas essenciais para o seu modelo de monetização, deixando sua empresa desprotegida perante o Judiciário.",
      },
      {
        pergunta: "Como proteger meu software e código proprietário contra cópias?",
        resposta:
          "Combinando proteção de propriedade intelectual (registro de programa de computador no INPI), cláusulas robustas de sigilo e não concorrência com funcionários/terceirizados e Termos de Uso que proíbam explicitamente a engenharia reversa.",
      },
    ],
    servicosRelacionados: [
      { slug: "lgpd", title: "Conformidade LGPD" },
      { slug: "startups-tecnologia", title: "Assessoria para Startups" },
      { slug: "contratos-comerciais", title: "Contratos Comerciais" },
    ],
  },
  {
    slug: "lgpd",
    title: "Adequação à LGPD e Privacidade de Dados",
    shortTitle: "LGPD",
    metaTitle: "Conformidade LGPD para Empresas e Startups | Rollemberg & Camargos",
    metaDescription:
      "Adequação prática à LGPD (Lei 13.709/2018). Mapeamento de dados, políticas de privacidade, termos de consentimento e resposta a incidentes.",
    h1: "Conformidade LGPD Pragmática: Segurança Regulatória sem Travar a Operação",
    subtitle:
      "Políticas de privacidade, mapeamento de fluxo de dados e adequação às exigências da ANPD e de clientes corporativos.",
    summary:
      "A Lei Geral de Proteção de Dados Pessoais (LGPD) deixou de ser um diferencial para se tornar pré-requisito de sobrevivência empresarial. Empresas que não tratam dados com responsabilidade perdem contratos B2B com grandes clientes corporativos, além de ficarem sujeitas a multas da ANPD e danos irreparáveis à reputação.",
    problemasResolvidos: [
      "Exigência de compliance de dados em auditorias e questionários de segurança de grandes clientes corporativos.",
      "Uso de políticas de privacidade obsoletas que não correspondem à real coleta de dados do site ou aplicativo.",
      "Compartilhamento indevido de cadastros com fornecedores sem cláusulas contratuais de proteção (Data Processing Agreements).",
      "Insegurança sobre as bases legais adequadas para disparos de marketing e prospecção de leads.",
    ],
    beneficiosEAplicacao: [
      "Elaboração de Políticas de Privacidade e Termos de Consentimento alinhados às diretrizes da ANPD.",
      "Adequação de contratos com operadores, colaboradores e parceiros que manipulam dados do negócio.",
      "Estruturação de canal direto para atendimento aos direitos dos titulares de dados (art. 18 da LGPD).",
      "Vantagem competitiva em concorrências comerciais por comprovar maturidade de governança de dados.",
    ],
    situacoesReais: [
      "Startups e empresas B2B disputando contas corporativas que exigem compliance documental da LGPD.",
      "Empresas de saúde, educação ou finanças que lidam com dados pessoais sensíveis e bases volumosas.",
      "Negócios digitais estruturando rotinas de e-mail marketing, tráfego pago e automação de CRM.",
    ],
    baseLegal: [
      {
        norma: "Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais - LGPD)",
        descricao: "Dispõe sobre o tratamento de dados pessoais em meios físicos e digitais, princípios, direitos dos titulares e penalidades.",
        orgao: "Planalto / ANPD",
      },
      {
        norma: "Resoluções e Guias Orientativos da ANPD (Autoridade Nacional de Proteção de Dados)",
        descricao: "Regulamentação sobre aplicação de sanções, agentes de tratamento de pequeno porte e segurança da informação.",
        orgao: "ANPD (Presidência da República)",
      },
    ],
    perguntasFrequentes: [
      {
        pergunta: "Pequenas e médias empresas também são obrigadas a se adequar à LGPD?",
        resposta:
          "Sim. A LGPD se aplica a qualquer pessoa física ou jurídica que realize tratamento de dados com fins econômicos, independentemente do porte. A ANPD possui regras facilitadas para agentes de pequeno porte, mas a comprovação de boas práticas e segurança continua sendo obrigatória.",
      },
      {
        pergunta: "O que acontece se minha empresa ignorar a adequação à LGPD?",
        resposta:
          "Além de multas administrativas aplicadas pela ANPD (que podem alcançar 2% do faturamento), a empresa corre sério risco de sofrer bloqueios no uso da base de dados, ações indenizatórias individuais ou coletivas no Procon e rescisão de contratos com parceiros corporativos.",
      },
    ],
    servicosRelacionados: [
      { slug: "direito-digital", title: "Direito Digital" },
      { slug: "contratos-comerciais", title: "Contratos Comerciais" },
      { slug: "assessoria-juridica-mensal", title: "Assessoria Jurídica Mensal" },
    ],
  },
  {
    slug: "trabalhista-empresarial",
    title: "Blindagem e Consultoria Trabalhista Empresarial",
    shortTitle: "Trabalhista",
    metaTitle: "Consultoria e Blindagem Trabalhista Empresarial | Rollemberg & Camargos",
    metaDescription:
      "Assessoria jurídica trabalhista preventiva para empresas. Contratos PJ, prestação de serviços, teletrabalho, comissões e mitigação de passivos.",
    h1: "Blindagem Trabalhista Preventiva: Reduza Riscos e Proteja a Sua Folha",
    subtitle:
      "Estruturação de contratações, contratos de prestadores de serviços, compliance com a CLT e prevenção de litígios.",
    summary:
      "O passivo trabalhista é um dos fatores que mais destrói a rentabilidade e o valor de mercado de empresas no Brasil. Nossa atuação é focada exclusivamente na ótica patronal preventiva: adequamos modelos de contratação, revisamos rotinas operacionais e evitamos os erros comuns que alimentam reclamações trabalhistas futuras.",
    problemasResolvidos: [
      "Uso arriscado de contratos PJ sem o devido distanciamento dos requisitos de subordinação e habitualidade da CLT.",
      "Indefinição jurídica nas rotinas de teletrabalho (home office), controle de jornada e reembolso de despesas.",
      "Fragilidade em políticas de remuneração variável, premiações, bonificações e comissões de equipe.",
      "Reclamatórias trabalhistas repetitivas sobre horas extras, equiparação salarial ou desvio de função.",
    ],
    beneficiosEAplicacao: [
      "Contratos de trabalho e aditivos customizados à real rotina de cada função da empresa.",
      "Contratos de prestação de serviços civis e terceirizações robustos e respaldados pela Lei da Terceirização.",
      "Regulamento interno da empresa claro quanto ao uso de ferramentas de trabalho, sigilo e postura profissional.",
      "Segurança jurídica para os fundadores dormirem tranquilos quanto à conformidade da equipe.",
    ],
    situacoesReais: [
      "Empresas em fase de expansão de quadro que contratam mesclando profissionais CLT, terceirizados e parceiros PJ.",
      "Negócios de tecnologia com equipes remotas distribuídas por diversos estados do território nacional.",
      "Empresas que receberam notificações do Ministério do Trabalho ou desejam realizar auditoria preventiva de rotinas.",
    ],
    baseLegal: [
      {
        norma: "Decreto-Lei nº 5.452/1943 (Consolidação das Leis do Trabalho - CLT, atualizada pela Lei nº 13.467/2017)",
        descricao: "Regulamenta relações individuais e coletivas de trabalho, teletrabalho, terceirização e remuneração.",
        orgao: "Planalto / Legislação Federal",
      },
      {
        norma: "Lei nº 13.429/2017 (Lei da Terceirização)",
        descricao: "Autoriza a terceirização em quaisquer atividades da empresa contratante com parâmetros de segurança jurídica.",
        orgao: "Planalto / Legislação Federal",
      },
    ],
    perguntasFrequentes: [
      {
        pergunta: "Posso contratar colaboradores como PJ na minha empresa?",
        resposta:
          "A contratação de pessoas jurídicas é válida pela legislação brasileira, mas exige cautela técnica para que não coexistam os requisitos clássicos do vínculo de emprego CLT (habitualidade, subordinação jurídica, onerosidade e pessoalidade). O contrato precisa refletir autonomia real e ausência de poder disciplinar direto.",
      },
      {
        pergunta: "Como o teletrabalho / home office deve ser formalizado?",
        resposta:
          "A legislação trabalhista exige previsão expressa no contrato de trabalho sobre a modalidade de teletrabalho, as disposições relativas à aquisição e manutenção dos equipamentos e a infraestrutura necessária, além das instruções sobre saúde e ergonomia.",
      },
    ],
    servicosRelacionados: [
      { slug: "direito-empresarial", title: "Direito Empresarial" },
      { slug: "contratos-comerciais", title: "Contratos Comerciais" },
      { slug: "assessoria-juridica-mensal", title: "Assessoria Jurídica Mensal" },
    ],
  },
  {
    slug: "assessoria-juridica-mensal",
    title: "Assessoria Jurídica Mensal (Retainer)",
    shortTitle: "Assessoria Mensal",
    metaTitle: "Assessoria Jurídica Mensal para Empresas | Rollemberg & Camargos",
    metaDescription:
      "Assessoria jurídica mensal continuada (retainer) em Brasília/DF e todo o Brasil. Suporte direto, revisão de contratos e segurança para tomada de decisões.",
    h1: "Assessoria Jurídica Mensal: Um Departamento Jurídico Dedicado ao Seu Negócio",
    subtitle:
      "Acompanhamento contínuo, resposta ágil e previsibilidade orçamentária para a sua empresa crescer respaldada.",
    summary:
      "Grandes empresas contam com departamentos jurídicos internos; empresas em expansão contam com a assessoria mensal da Rollemberg & Camargos Advogados. Por um investimento fixo e previsível, sua empresa tem acesso direto a advogadas que conhecem a fundo a operação, revisam documentos com agilidade e apoiam negociações estratégicas.",
    problemasResolvidos: [
      "Incerteza financeira gerada pela contratação de advogados por demandas pontuais avulsas e caras.",
      "Demora para obter respostas sobre dúvidas jurídicas cotidianas, atrasando decisões comerciais urgentes.",
      "Falta de um parceiro jurídico que conheça o histórico da empresa e os sócios para dar orientações personalizadas.",
      "Contratos assinados sem revisão prévia por pressa da equipe de vendas ou compras.",
    ],
    beneficiosEAplicacao: [
      "Canal de comunicação ágil e direto com as advogadas para tirar dúvidas do dia a dia da operação.",
      "Revisão e elaboração contínua de contratos comerciais com clientes, fornecedores e parceiros.",
      "Previsibilidade orçamentária sem surpresas financeiras no final do mês.",
      "Participação consultiva em reuniões de sócios e alinhamentos de novos projetos da empresa.",
    ],
    situacoesReais: [
      "Pequenas e médias empresas com volume constante de 5 a 20 contratos mensais para análise.",
      "Negócios digitais com crescimento rápido que precisam validar novas ofertas e termos comerciais toda semana.",
      "Empresas que não desejam arcar com os custos fixos elevados de um departamento jurídico interno CLT.",
    ],
    baseLegal: [
      {
        norma: "Lei nº 8.906/1994 (Estatuto da Advocacia e da OAB, arts. 1º e 22)",
        descricao: "Estabelece a natureza dos serviços de consultoria, assessoria e direção jurídicas e a fixação de honorários continuados.",
        orgao: "Planalto / OAB",
      },
      {
        norma: "Código de Ética e Disciplina da OAB",
        descricao: "Regulamenta o relacionamento de confiança, sigilo profissional e zelo recíproco na prestação contínua de serviços advocatícios.",
        orgao: "Conselho Federal da OAB",
      },
    ],
    perguntasFrequentes: [
      {
        pergunta: "Quais demandas estão contempladas na assessoria jurídica mensal?",
        resposta:
          "O plano de assessoria continuada é customizado de acordo com o porte do seu negócio. Normalmente contempla elaboração e revisão ilimitada ou parametrizada de contratos, pareceres rápidos sobre dúvidas operacionais, notificações preventivas, alinhamento societário e orientações trabalhistas de rotina.",
      },
      {
        pergunta: "Existe prazo mínimo de fidelidade para o contrato de assessoria mensal?",
        resposta:
          "Trabalhamos com relações de confiança mútua e prazos transparentes, permitindo que sua empresa avalie a qualidade prática das entregas no dia a dia da operação.",
      },
    ],
    servicosRelacionados: [
      { slug: "direito-empresarial", title: "Direito Empresarial" },
      { slug: "contratos-comerciais", title: "Contratos Comerciais" },
      { slug: "startups-tecnologia", title: "Assessoria para Startups" },
    ],
  },
  {
    slug: "startups-tecnologia",
    title: "Assessoria Jurídica para Startups e Tecnologia",
    shortTitle: "Startups & Tech",
    metaTitle: "Advocacia para Startups e Empresas de Tecnologia | Rollemberg & Camargos",
    metaDescription:
      "Assessoria jurídica para startups em Brasília/DF e Brasil. Mútuo conversível, vesting, captable, Termos de Uso, proteção de IP e rodadas de investimento.",
    h1: "Assessoria para Startups: Do MVP às Rodadas de Investimento",
    subtitle:
      "Modelagem jurídica ágil e sem burocracia para negócios de tecnologia que inovam em velocidade acelerada.",
    summary:
      "Startups operam em alta velocidade e com capital enxuto. O jurídico não pode ser um freio burocrático; deve ser a alavanca que protege os fundadores, alinha a divisão do captable, cria incentivos via contratos de vesting e atrai investidores anjo e fundos de venture capital com a casa totalmente em ordem.",
    problemasResolvidos: [
      "Perda de controle societário por contratos de investimento abusivos ou conversões desbalanceadas.",
      "Saída precoce de cofundadores e colaboradores-chave carregando percentuais societários indevidos.",
      "Fragilidade no repasse de propriedade intelectual do código e da marca desenvolvidos por terceiros.",
      "Reprovação em processos de Due Diligence jurídica promovidos por investidores ou aceleradoras.",
    ],
    beneficiosEAplicacao: [
      "Estruturação de contratos de Mútuo Conversível em Participação Societária e instrumentos SAFE.",
      "Planos de Vesting e Opção de Compra de Quotas (Stock Options) com metas claras de performance e cliff.",
      "Termos de cessão definitiva de direitos autorais e códigos-fonte para a sociedade.",
      "Termos de Uso e Políticas de Privacidade robustas para plataformas SaaS, marketplaces e apps mobile.",
    ],
    situacoesReais: [
      "Fundadores validando MVP que precisam de acordo preliminar (Founders Agreement) antes do aporte.",
      "Startups abrindo rodada de captação pré-seed ou seed com investidores estratégicos.",
      "Scale-ups renegociando parcerias de integração técnica via API e contratos de nível de serviço (SLA).",
    ],
    baseLegal: [
      {
        norma: "Lei Complementar nº 182/2021 (Marco Legal das Startups)",
        descricao: "Regulamenta os instrumentos de investimento em inovação sem assunção imediata de passivos, sandbox regulatório e licitações especiais.",
        orgao: "Planalto / Legislação Federal",
      },
      {
        norma: "Lei nº 9.609/1998 (Lei do Software)",
        descricao: "Dispõe sobre a proteção da propriedade intelectual de programa de computador e sua comercialização no País.",
        orgao: "Planalto / Legislação Federal",
      },
    ],
    perguntasFrequentes: [
      {
        pergunta: "O que é um contrato de Vesting e por que minha startup precisa dele?",
        resposta:
          "O Vesting é um mecanismo contratual pelo qual fundadores, conselheiros ou colaboradores ganham o direito de adquirir participação societária de forma progressiva, ao longo do tempo e mediante o atingimento de metas e permanência na empresa (cliff). Ele impede que quem saia cedo da startup leve parte das quotas sem entregar resultado.",
      },
      {
        pergunta: "Investidores anjo respondem por dívidas trabalhistas ou fiscais da startup?",
        resposta:
          "Com o advento do Marco Legal das Startups (LC 182/2021) e da Lei Complementar nº 155/2016, investidores anjo que aportam via instrumentos específicos (como mútuo conversível ou contrato de participação) não são considerados sócios e, por lei expressa, não respondem por dívidas da empresa, salvo em caso de fraude.",
      },
    ],
    servicosRelacionados: [
      { slug: "acordos-de-socios", title: "Acordos de Sócios" },
      { slug: "registro-de-marcas", title: "Registro de Marcas no INPI" },
      { slug: "direito-digital", title: "Direito Digital" },
    ],
  },
];
