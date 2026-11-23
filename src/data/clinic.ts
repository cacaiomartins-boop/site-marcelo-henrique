/**
 * Dados do profissional. Edite aqui: os componentes só leem este arquivo.
 * Itens marcados com TODO ainda precisam ser confirmados com o Marcelo.
 */
export const clinic = {
  nome: "Marcelo Oliveira",
  nomeCompleto: "Marcelo Henrique de Oliveira",
  primeiroNome: "Marcelo",
  profissao: "Psicólogo",
  registro: "CRP 06/186112",
  registroLink: "https://cadastro.cfp.org.br/",
  conselho: "Conselho Federal de Psicologia",

  // WhatsApp (DDD + número, sem o 55)
  whatsappNumero: "5511967930606",
  whatsappExibicao: "(11) 96793-0606",
  email: "marcelohenriqueoliveira@gmail.com",

  doctoralia: "https://www.doctoralia.com.br/perfil/marcelo-henrique-de-oliveira-3",

  // TODO: trocar pelo endereço final do site quando houver domínio (usado em canonical e Open Graph)
  siteUrl: "",

  // Atendimento 100% on-line. Sem endereço, sem mapa.
  online: true,
} as const;

/** Mensagens pré-preenchidas do WhatsApp, por contexto (1ª pessoa, sem dado sensível). */
export const mensagens = {
  header: `Olá, ${clinic.primeiroNome}! Vim pelo site e gostaria de agendar uma conversa.`,
  hero: `Olá, ${clinic.primeiroNome}! Vim pelo site e gostaria de agendar uma conversa.`,
  contato: `Olá, ${clinic.primeiroNome}! Vim pelo site e gostaria de entrar em contato para saber mais sobre o atendimento.`,
  flutuante: `Olá, ${clinic.primeiroNome}! Vim pelo site e gostaria de agendar uma conversa.`,
} as const;

export function whatsappUrl(mensagem: string) {
  return `https://wa.me/${clinic.whatsappNumero}?text=${encodeURIComponent(mensagem)}`;
}
