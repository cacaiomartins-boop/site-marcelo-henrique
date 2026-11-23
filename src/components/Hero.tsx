import { clinic, mensagens, whatsappUrl } from "../data/clinic";
import type { Content } from "../data/content";
import { Em, WhatsAppButton } from "./ui";

export default function Hero({ t }: { t: Content }) {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-clip pt-[6.25rem] sm:pt-28 lg:flex lg:min-h-svh lg:items-center lg:pt-0"
    >
      <div className="container-site lg:grid lg:grid-cols-12">
        <div className="max-w-[40rem] lg:col-span-7 lg:col-start-6 lg:pb-[clamp(3.5rem,8svh,5.5rem)] lg:pt-[clamp(6rem,14.5svh,8rem)]">
          <h1
            data-hero-in
            data-hero-title
            className="text-[clamp(2.15rem,9.4vw,3.5rem)] leading-[1.02] tracking-[-0.015em] lg:text-[clamp(2.4rem,min(4.6vw,7.4svh),4.6rem)]"
          >
            <Em text={t.hero.titulo} />
          </h1>

          <p
            data-hero-in
            className="mt-5 max-w-[34rem] text-[1rem] leading-[1.6] text-text sm:text-[1.0625rem] sm:leading-[1.65] lg:text-[clamp(0.98rem,2.4svh,1.125rem)]"
          >
            {t.hero.texto1}
          </p>
          <p
            data-hero-in
            className="mt-3 max-w-[34rem] text-[0.95rem] leading-[1.6] text-muted sm:text-[1rem] sm:leading-[1.65] lg:text-[clamp(0.92rem,2.2svh,1.0625rem)]"
          >
            {t.hero.texto2}
          </p>

          <p data-hero-in className="label mt-6 !text-teal lg:mt-[clamp(1.25rem,3.4svh,2rem)]">
            {t.hero.etiqueta}
          </p>

          <div data-hero-in className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4">
            <WhatsAppButton href={whatsappUrl(mensagens.hero)}>{t.botoes.agendar}</WhatsAppButton>
            <a href="#como-funciona" className="u-link hidden text-[0.95rem] font-medium text-teal sm:inline-block">
              {t.menu.comoFunciona}
            </a>
          </div>

          <p data-hero-in className="mt-5 text-[0.85rem] text-muted sm:text-[0.9rem] lg:mt-[clamp(1.25rem,3.4svh,2.25rem)]">
            {clinic.nomeCompleto} · {clinic.registro}
          </p>
        </div>
      </div>

      {/* A árvore do cartão: cresce de baixo para cima */}
      <div
        data-tree-hero
        aria-hidden="true"
        className="tree mt-6 text-teal [--h:min(40svh,23rem)] lg:absolute lg:bottom-0 lg:left-0 lg:mt-0 lg:[--h:min(86svh,52vw)] xl:[--h:min(86svh,56vw)]"
      />
    </section>
  );
}
