/**
 * Textos do site. Palavras entre *asteriscos* viram itálico.
 * Estrutura pronta para uma futura versão em espanhol: basta criar `es: Content`
 * e escolher o idioma em `idioma` (ver App.tsx).
 */
export type Content = {
  idioma: string;
  menu: { terapia: string; sobreMim: string; opinioes: string; comoFunciona: string };
  botoes: { agendar: string; agendarSua: string; contato: string; verApresentacao: string };
  hero: { titulo: string; texto1: string; texto2: string };
  terapia: { titulo: string; paragrafos: string[]; listaTitulo: string; lista: string[]; fechamento: string };
  sobreMim: { titulo: string; paragrafos: string[]; video: { titulo: string; duracao: string } };
  comoFunciona: {
    titulo: string;
    intro: string;
    itens: { rotulo: string; valor: string }[];
    texto: string;
  };
  opinioes: {
    titulo: string;
    nota: string;
    verMais: string;
    verMenos: string;
    iniciais: number;
    itens: { nome: string; data: string; texto: string[] }[];
  };
  rodape: { frase: string; cargo: string; emergencia: string; verificar: string };
};

export const pt: Content = {
  idioma: "pt-BR",
  menu: {
    terapia: "Sobre a terapia",
    sobreMim: "Sobre mim",
    opinioes: "Opiniões",
    comoFunciona: "Como funciona",
  },
  botoes: {
    agendar: "Agende uma conversa",
    agendarSua: "Agende sua conversa",
    contato: "Entre em contato",
    verApresentacao: "Assistir à apresentação",
  },
  hero: {
    titulo: "Um espaço para *compreender o que você está vivendo.*",
    texto1:
      "A terapia pode ser um lugar para olhar com mais cuidado para si mesmo, compreender suas experiências e descobrir outras possibilidades de estar no mundo.",
    texto2: "Um espaço de escuta e diálogo, construído a partir da sua própria experiência.",
  },
  terapia: {
    titulo: "Uma terapia que parte da *sua experiência.*",
    paragrafos: [
      "Meu trabalho segue a perspectiva fenomenológico-existencial, que compreende cada pessoa a partir de sua maneira singular de viver e se relacionar com o mundo.",
      "Na terapia, buscamos compreender aquilo que você está vivendo, suas relações, escolhas e questões, sem partir de respostas prontas.",
    ],
    listaTitulo: "O acompanhamento pode envolver questões como:",
    lista: [
      "Ansiedade e sofrimento emocional",
      "Relacionamentos e vínculos afetivos",
      "Mudanças e transições de vida",
      "Identidade e autoconhecimento",
      "Escolhas e projetos de vida",
      "Solidão e falta de sentido",
    ],
    fechamento:
      "Você não precisa chegar sabendo exatamente o que quer trabalhar. Podemos começar pelo que está presente na sua vida hoje.",
  },
  sobreMim: {
    titulo: "Prazer, *sou Marcelo.*",
    paragrafos: [
      "Sou psicólogo, formado pela Universidade de São Paulo (USP), e também graduado em Administração pela mesma universidade.",
      "Tenho experiência em atendimento clínico e passagem por instituições como o Hospital Universitário da USP e o Instituto de Psiquiatria do Hospital das Clínicas.",
    ],
    video: { titulo: "Conheça meu jeito de conversar", duracao: "1 min 26 s" },
  },
  comoFunciona: {
    titulo: "Como funciona *o acompanhamento?*",
    intro: "Os atendimentos são realizados de forma on-line, em português, espanhol ou inglês, e destinados a adultos.",
    itens: [
      { rotulo: "Modalidade", valor: "On-line" },
      { rotulo: "Público", valor: "Adultos" },
      { rotulo: "Duração", valor: "Aproximadamente 50 minutos" },
      { rotulo: "Frequência", valor: "Geralmente semanal" },
      { rotulo: "Idiomas", valor: "Português, espanhol e inglês" },
      { rotulo: "Investimento", valor: "R$ 220 / € 50 por sessão" },
    ],
    texto:
      "O primeiro encontro é uma conversa experimental, sem custo, para nos conhecermos e conversarmos sobre o que você busca no acompanhamento.",
  },
  // Opiniões copiadas do perfil do Doctoralia, sem alterações (texto, nome/abreviação e data originais).
  opinioes: {
    titulo: "O que dizem sobre *o acompanhamento.*",
    nota: "Avaliações do meu perfil na Doctoralia, reproduzidas sem alterações.",
    verMais: "Ver mais opiniões",
    verMenos: "Ver menos opiniões",
    iniciais: 5,
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
        nome: "Alessandra",
        data: "13 de janeiro de 2026",
        texto: [
          "Marcelo abriu meus olhos sobre terapia! Me sinto muito livre para falar sobre minhas questões desde a primeira consulta, ele é ótimo!",
        ],
      },
      {
        nome: "Luiz Felipe Lazzarotto",
        data: "8 de julho de 2025",
        texto: [
          "O Marcelo é um psicólogo maravilhoso pra mim, me ajuda muito! Fiquei 8 anos fazendo psicanálise e mudar para a linha da Fenomenologia com ele foi uma grata e transformadora surpresa. Agradeço e indico muitíssimo o Marcelo por sua competência, profissionalismo e sensibilidade ímpares :)",
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
        nome: "Gabriel Latorre",
        data: "20 de maio de 2025",
        texto: [
          "A terapia, dando certo desta vez, me fez falar coisas e eu mesmo descobrir o que estava certo e errado, o que gostaria de mudar em mim e o que não gostaria. As sessões com o Marcelo são muito leves e agradáveis, e tem dias que até sinto falta de conversar com ele no meio da semana. Acho que deve acontecer porque ele diz muito sobre ser um ambiente onde eu possa falar tudo o que quiser e fazer disso um ambiente confortável. Eu passei a gostar muito de terapia porque nesse 1 ano eu consegui mudar coisas muito importantes na minha vida que eu não imaginava que seria possível. Mas tudo por causa da constância. Uma coisa que eu sinto um pouco de falta é que o Marcelo falasse um pouquinho mais durante as sessões, as vezes um momento de silêncio ou se perguntas muito breves me incomoda um pouco, mas nada que me faça não gostar de fazer terapia. Acho que isso vai de profissional para profissional. Mas de uma forma geral eu gosto muito da terapia e do meu terapeuta, e estou muito satisfeito.",
        ],
      },
      {
        nome: "Sol Del Carlo",
        data: "13 de abril de 2025",
        texto: [
          "Mesmo sem ter feito um acompanhamento formal, já tive o privilégio de muitas conversas profundas com o Marcelo, e sempre me impressiona a escuta atenta, que me mostra o quanto ele leva a sério cada palavra dita, cada nuance. Ele não fala nada por falar, mas observa, escuta de verdade e enxerga além do óbvio. Sua postura é ética, objetiva e profundamente comprometida com o que faz. Dá pra sentir que cada conversa com ele é um convite à reflexão e ao autoconhecimento, de um jeito claro, direto e respeitoso.",
        ],
      },
      {
        nome: "G.R",
        data: "2 de abril de 2025",
        texto: [
          "Tenho vivenciado o processo terapêutico com o Marcelo há quase dois anos e só tenho elogios a fazer. Ele é extremamente atencioso e traz reflexões profundas e assertivas, que me fazem pensar e questionar meus próprios comportamentos de maneira construtiva. Recomendo muito para quem busca um psicólogo competente e comprometido com o bem-estar de seus pacientes!",
        ],
      },
      {
        nome: "Heloisa Alonso",
        data: "17 de março de 2025",
        texto: [
          "Desde a primeira consulta, me senti acolhida e compreendida. Marcelo tem uma abordagem sensível, profissional e extremamente humana. Suas orientações me ajudaram a enxergar questões importantes da minha vida sob uma nova perspectiva, proporcionando crescimento pessoal e bem-estar emocional.",
        ],
      },
      {
        nome: "Marcos",
        data: "6 de março de 2025",
        texto: [
          "Marcelo é um excelente profissional, dedicado e empático, sempre buscando oferecer o melhor apoio possível. Eu altamente recomendo Marcelo para qualquer pessoa que busque apoio psicológico, pois é um profissional de confiança e um parceiro valioso no caminho para o bem-estar emocional e mental.",
        ],
      },
      {
        nome: "Gabriel C",
        data: "5 de março de 2025",
        texto: [
          "Marcelo tem uma abordagem muito interessante, conseguiu me deixar muito a vontade nas consultas, sabe ouvir e falar nas horas certas.",
        ],
      },
      {
        nome: "Paciente",
        data: "25 de fevereiro de 2025",
        texto: [
          "bom, atencioso, dedicado, estudioso e da bons conselhos",
        ],
      },
      {
        nome: "M.L.",
        data: "20 de fevereiro de 2025",
        texto: [
          "Fui atendido pelo Marcelo e posso dizer que ele é excelente. Desde a primeira consulta, me senti muito à vontade para compartilhar minhas questões e ele soube ouvir com muita empatia. Sua abordagem é muito cuidadosa e ele sempre me ajuda a enxergar as situações de uma forma mais clara, o que tem feito toda a diferença na minha vida. Estou muito satisfeita com o acompanhamento que estou recebendo. Super recomendo!",
        ],
      },
      {
        nome: "VL",
        data: "17 de fevereiro de 2025",
        texto: [
          "Muito tranquilo e atencioso. Consegue navegar bem a conversa.",
        ],
      },
      {
        nome: "LMP",
        data: "12 de fevereiro de 2025",
        texto: [
          "Ótimo psicólogo, foi muito atencioso e profissional. Escutou meus problemas e me ajudou a criar confiança para resolver meus desafios com pessoas no trabalho.",
        ],
      },
      {
        nome: "Eduardo F.",
        data: "11 de fevereiro de 2025",
        texto: [
          "Marcelo é muito atento na escuta, sempre me sinto muito acolhido. Faz perguntas muito boas que me deixam pensativo por um bom tempo.",
        ],
      },
      {
        nome: "M.S.",
        data: "7 de fevereiro de 2025",
        texto: [
          "me senti muito acolhida e escutada! obrigada dr. marcelo :)",
        ],
      },
      {
        nome: "D.C",
        data: "5 de fevereiro de 2025",
        texto: [
          "Gostaria de expressar minha profunda gratidão pelo excelente trabalho realizado pelo Marcelo. Desde o início do processo terapêutico, demonstrou profissionalismo, empatia e uma abordagem sensível às minhas necessidades. Sempre atento e acolhedor, criou um ambiente seguro e de confiança, permitindo que eu me sentisse confortável para compartilhar minhas questões.",
          "Sua capacidade de escuta, compreensão e orientação tem sido essencial para meu crescimento pessoal e emocional. Além disso, a forma como conduz as sessões, com técnicas eficazes e insights valiosos, tem me ajudado a desenvolver novas perspectivas e estratégias para lidar com desafios.",
          "Recomendo fortemente o trabalho do Marcelo a qualquer pessoa que busca um profissional qualificado e comprometido com o bem-estar dos seus pacientes.",
        ],
      },
      {
        nome: "Milena Postacchini",
        data: "4 de fevereiro de 2025",
        texto: [
          "Marcelo é um excelente profissional! Da pra sentir que ama seu trabalho, pois tem uma escuta atenciosa e sabe exatamente o que perguntar e como perguntar. Me faz refletir sobre muitas coisas que eu não imaginaria, e me sinto muito a vontade para expor meus pensamentos pois não me sinto julgada e sim ouvida. Já indiquei ele para muitos pacientes meus! Sorte de quem faz essa jornada de autoconhecimento com ele. Obrigada de coração psi!",
        ],
      },
      {
        nome: "J.J.T.",
        data: "1 de fevereiro de 2025",
        texto: [
          "Excelente profissional! Muito empenhado, paciente e capaz no tratamento das minhas questões. Deixo aqui a minha indicação a todos que estiverem buscando ajuda.",
        ],
      },
      {
        nome: "B.H.",
        data: "1 de fevereiro de 2025",
        texto: [
          "Marcelo é um profissional ímpar, e tem me ajudado muito nos últimos meses. Já tinha passado por outros profissionais, mas nada supera a compreensão, sensibilidade e escuta que encontrei em nossas sessões. Recomendo!",
        ],
      },
      {
        nome: "Ariana Souza",
        data: "1 de fevereiro de 2025",
        texto: [
          "O Marcelo consegue trazer com clareza e de forma direta os pontos, as consultas são leves e bem administrada",
        ],
      },
    ],
  },
  rodape: {
    frase: "Todo caminho começa por poder *habitar a si mesmo.*",
    cargo: "Psicólogo | CRP 06/186112",
    emergencia: "Em situação de emergência, ligue 188 (CVV) ou 192 (SAMU).",
    verificar: "Verificar registro no Conselho Federal de Psicologia",
  },
};
