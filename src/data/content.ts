/**
 * Textos do site. Palavras entre *asteriscos* viram itálico.
 * Estrutura pronta para uma futura versão em espanhol: basta criar `es: Content`
 * e escolher o idioma em `idioma` (ver App.tsx).
 */
export type Content = {
  idioma: string;
  menu: { trabalho: string; paraQuem: string; sobreMim: string; comoFunciona: string };
  botoes: { agendar: string; contato: string; verApresentacao: string };
  hero: { titulo: string; texto1: string; texto2: string; etiqueta: string };
  trabalho: { titulo: string; paragrafos: string[] };
  paraQuem: { titulo: string; intro: string; lista: string[]; fechamento: string };
  sobreMim: { titulo: string; paragrafos: string[]; video: { titulo: string; duracao: string } };
  comoFunciona: {
    titulo: string;
    itens: { rotulo: string; valor: string }[];
    texto: string;
    textoExtra: string;
  };
  rodape: { frase: string; emergencia: string; verificar: string };
};

export const pt: Content = {
  idioma: "pt-BR",
  menu: {
    trabalho: "Sobre o trabalho",
    paraQuem: "Para quem",
    sobreMim: "Sobre mim",
    comoFunciona: "Como funciona",
  },
  botoes: {
    agendar: "Agende uma conversa",
    contato: "Entre em contato",
    verApresentacao: "Assistir à apresentação",
  },
  hero: {
    titulo: "Um espaço para *compreender o que você está vivendo.*",
    texto1:
      "A terapia pode ser um lugar para olhar com mais cuidado para si mesmo, compreender suas experiências e descobrir outras possibilidades de estar no mundo.",
    texto2:
      "Meu trabalho é construído a partir da escuta, do diálogo e do respeito à singularidade de cada pessoa.",
    etiqueta: "Atendimento psicológico on-line para adultos",
  },
  trabalho: {
    titulo: "Uma terapia que parte da *sua experiência.*",
    paragrafos: [
      "Meu trabalho segue a perspectiva fenomenológico-existencial, que compreende cada pessoa a partir de sua história, suas relações e de sua maneira própria de viver o mundo.",
      "Na terapia, construímos juntos um espaço em que seja possível falar livremente sobre aquilo que você está vivendo, inclusive sobre questões que ainda são difíceis de compreender ou colocar em palavras.",
      "Mais do que encontrar respostas prontas, buscamos compreender sua experiência e explorar novas possibilidades de se relacionar com a própria vida.",
    ],
  },
  paraQuem: {
    titulo: "Um espaço para olhar para *aquilo que importa.*",
    intro:
      "O acompanhamento é destinado a adultos que desejam compreender melhor suas experiências, atravessar momentos difíceis ou refletir sobre os caminhos que têm construído. Podemos conversar sobre questões como:",
    lista: [
      "Ansiedade e sofrimento emocional",
      "Insegurança e autoestima",
      "Relacionamentos e vínculos afetivos",
      "Mudanças e transições de vida",
      "Escolhas, projetos e decisões",
      "Identidade e autoconhecimento",
      "Sensação de vazio, solidão ou falta de sentido",
    ],
    fechamento:
      "Você não precisa chegar sabendo exatamente o que quer trabalhar. Podemos começar justamente pelo que está presente na sua vida hoje.",
  },
  sobreMim: {
    titulo: "Prazer, *sou Marcelo.*",
    paragrafos: [
      "Sou psicólogo, formado pela Universidade de São Paulo (USP), com experiência em atendimento clínico e passagem por instituições como o Hospital Universitário da USP e o Instituto de Psiquiatria do Hospital das Clínicas.",
      "Desenvolvo meu trabalho a partir da fenomenologia, uma perspectiva que valoriza a maneira singular como cada pessoa experimenta e compreende sua própria existência.",
      "Acredito na importância de construir um espaço de confiança, acolhimento e diálogo, em que você possa se expressar com liberdade, sem precisar chegar com tudo organizado ou ter respostas para todas as questões.",
    ],
    video: { titulo: "Conheça meu jeito de conversar", duracao: "1 min 26 s" },
  },
  comoFunciona: {
    titulo: "Como *funciona.*",
    itens: [
      { rotulo: "Modalidade", valor: "Atendimento on-line" },
      { rotulo: "Público", valor: "Adultos" },
      { rotulo: "Duração", valor: "Cerca de 50 minutos" },
      { rotulo: "Frequência", valor: "Geralmente semanal" },
      { rotulo: "Idioma", valor: "Português" },
    ],
    texto:
      "O primeiro encontro é uma oportunidade para nos conhecermos e percebermos se a proposta de trabalho faz sentido para você.",
    // TODO: confirmar com o Marcelo. Vem da bio dele no Doctoralia ("primeira conversa experimental, sem custo").
    textoExtra: "A primeira conversa é experimental e não tem custo.",
  },
  rodape: {
    frase: "Todo caminho começa por poder *habitar a si mesmo.*",
    emergencia: "Em situação de emergência, ligue 188 (CVV) ou 192 (SAMU).",
    verificar: "Verificar registro no Conselho Federal de Psicologia",
  },
};
