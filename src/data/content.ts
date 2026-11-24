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
  opinioes: {
    titulo: string;
    nota: string;
    verTodas: string;
    total: number;
    itens: { nome: string; data: string; texto: string[] }[];
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
      { rotulo: "Valor da sessão", valor: "R$ 220" },
    ],
    texto:
      "O primeiro encontro é uma oportunidade para nos conhecermos e percebermos se a proposta de trabalho faz sentido para você.",
    // TODO: confirmar com o Marcelo. Vem da bio dele no Doctoralia ("primeira conversa experimental, sem custo").
    textoExtra: "A primeira conversa é experimental e não tem custo.",
  },
  // Opiniões copiadas do perfil do Doctoralia, sem alterações (texto, nome/abreviação e data originais).
  opinioes: {
    titulo: "Opiniões de *quem já passou por aqui.*",
    nota: "Avaliações reproduzidas, sem alterações, do meu perfil no Doctoralia.",
    verTodas: "Ver todas as opiniões no Doctoralia",
    total: 27,
    itens: [
      {
        nome: "Leonardo goes rodrigues",
        data: "24 de setembro de 2026",
        texto: [
          "Marcelo e um excelente psicologo! Muito atencioso, prestativo e inteligente, sabe abordar os temas de uma maneira muito leve e inteligente",
        ],
      },
      {
        nome: "Gustavo",
        data: "17 de agosto de 2026",
        texto: [
          "As sessões com o Marcelo tem me ajudado bastante a lidar com a ansiedade, além de me ajudar a entrar em contato comigo mesmo e com o sentido das cosias na minha vida. Ele é muito acolhedor e atencioso, recomendo muito",
        ],
      },
      {
        nome: "G.B.",
        data: "23 de junho de 2026",
        texto: [
          "O Marcelo constrói um espaço de acolhimento e presença, o que faz com que eu me sinta à vontade para falar abertamente sobre minhas questões, mesmo que elas não estejam completamente \"prontas\" e organizadas para serem ditas. Esse trabalho de escuta e presença ativa tem feito com que eu mesma me abra para descobrir mais de mim e entender o que já não me cabe mais.",
        ],
      },
      {
        nome: "Gabriel Rocha",
        data: "5 de junho de 2026",
        texto: [
          "Marcelo foi meu psicólogo por quase 6 meses e uma presença essencial na minha caminhada. Ele é um querido!! Muito acolhedor e respeitoso. Sua abordagem me ajudou bastante a compreender os mais diversos aspectos da minha personalidade e dar nome ao que eu sentia, além de conseguir me enxergar com mais profundidade. Em minhas crises sempre fui amparado e consegui me reerguer com o apoio dele. Apenas precisei interromper o acompanhamento, não por falta de confiança ou por algo negativo, muito pelo contrário. Mas porque decidi experimentar outra abordagem terapêutica, mais voltada para manejo do Borderline e controle das minhas crises. Sou muito grato pelo cuidado e o recomendo com muito carinho.",
        ],
      },
      {
        nome: "DCN",
        data: "27 de março de 2026",
        texto: [
          "Comecei a terapia com o Marcelo sem saber muito o que esperar, mas me surpreendi com a forma como as sessões foram me ajudando a organizar coisas que antes pareciam confusas.",
          "Ele tem um jeito muito claro e ao mesmo tempo cuidadoso de conduzir, o que faz com que a conversa não fique perdida, mas também não seja forçada. Aos poucos, fui percebendo mudanças reais no meu dia a dia, principalmente na forma como lido com situações difíceis.",
          "Hoje vejo a terapia como um investimento importante pra mim. Recomendo pra quem quer um acompanhamento sério, que realmente faça diferença ao longo do tempo.",
        ],
      },
      {
        nome: "Elena",
        data: "24 de março de 2026",
        texto: [
          "Fazer terapia com o Marcelo tem sido uma experiência muito diferente do que eu já tinha vivido antes. Desde o começo, senti que ele não tenta encaixar a gente em explicações prontas, mas realmente escuta com atenção e interesse genuíno pelo que estamos vivendo.",
          "Ao longo das sessões, fui me sentindo mais à vontade para falar no meu tempo, sem pressão ou julgamento. Ele tem uma forma muito cuidadosa de conduzir, ajudando a gente a entender melhor o que está sentindo e como as coisas vão se dando na nossa vida, sem respostas simplistas.",
          "É um espaço que acolhe, mas que também traz reflexões importantes, que vão fazendo sentido aos poucos. Recomendo principalmente para quem busca uma terapia mais profunda, que respeite o tempo de cada um e ajude a olhar para si com mais clareza.",
        ],
      },
      {
        nome: "Alessandra",
        data: "13 de janeiro de 2026",
        texto: [
          "Marcelo abriu meus olhos sobre terapia! Me sinto muito livre para falar sobre minhas questões desde a primeira consulta, ele é ótimo!",
        ],
      },
      {
        nome: "V.F.S",
        data: "8 de agosto de 2025",
        texto: [
          "Profissional habilidoso em tratar assuntos relacionados a saúde emocional. Mostra-se com extrema paciência durante as consultas, atendimento humanizado e sensível. Recomendo para todos.",
        ],
      },
      {
        nome: "Jonas Maciel",
        data: "6 de agosto de 2025",
        texto: [
          "EXCEPCIONAL !!",
          "Ao longo de aproximadamente 4 anos faço acompanhamento com Marcelo.",
          "Pra além de um simples profissional ele se mostra extremamente competente, inteligente e acima de tudo, humano.",
          "Nossas consultas pulam para fora do espectro de uma simples conversa, mas pairam dentro da construção um espaço de aprendizado, questionamento, reflexão, auto conhecimento, crescimento mental, profissional e intelectual.",
          "Neste espaço falamos e questionamos sobre todos meus aspectos individuais, como TDAH, Dislexia, bissexualidade, traumas familiares e de infância, ansiedades, medos, problemas familiares, problemas profissionais etc... Enfim, me sinto livre pra conversar sobre como me sinto e o por que me sinto de tal forma.",
          "Ele vem me auxiliando a enxergar as diversas perspectivas da vida em diferentes expertos, do mais simples ao mais complexo, abordando as diferentes historias pelas quais passo e passei, para poder enxergar a vida de uma forma mais linda.",
        ],
      },
      {
        nome: "Luiz Felipe Lazzarotto",
        data: "8 de julho de 2025",
        texto: [
          "O Marcelo é um psicólogo maravilhoso pra mim, me ajuda muito! Fiquei 8 anos fazendo psicanálise e mudar para a linha da Fenomenologia com ele foi uma grata e transformadora surpresa. Agradeço e indico muitíssimo o Marcelo por sua competência, profissionalismo e sensibilidade ímpares :)",
        ],
      },
    ],
  },
  rodape: {
    frase: "Todo caminho começa por poder *habitar a si mesmo.*",
    emergencia: "Em situação de emergência, ligue 188 (CVV) ou 192 (SAMU).",
    verificar: "Verificar registro no Conselho Federal de Psicologia",
  },
};
