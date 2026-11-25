import { mensagens, whatsappUrl } from "../data/clinic";
import type { Content } from "../data/content";
import { Em, WhatsAppButton } from "./ui";

export default function Hero({ t }: { t: Content }) {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-clip pb-20 pt-[8.5rem] sm:pb-28 sm:pt-40 lg:flex lg:min-h-svh lg:items-center lg:pb-[clamp(3.5rem,8svh,5.5rem)] lg:pt-[clamp(6.5rem,14svh,8rem)]"
    >
      <div className="container-site">
        <div className="max-w-[52rem]">
          <h1
            data-hero-in
            data-hero-title
            className="text-[clamp(2.4rem,10vw,3.8rem)] leading-[1.02] tracking-[-0.015em] lg:text-[clamp(2.8rem,min(5.4vw,9svh),5.6rem)]"
          >
            <Em text={t.hero.titulo} />
          </h1>

          <p
            data-hero-in
            className="mt-7 max-w-[36rem] text-[1.0625rem] leading-[1.65] text-text sm:text-[1.125rem] lg:mt-[clamp(1.5rem,4svh,2.25rem)] lg:text-[clamp(1rem,2.5svh,1.2rem)]"
          >
            {t.hero.texto1}
          </p>
          <p
            data-hero-in
            className="mt-4 max-w-[36rem] font-serif text-[1.2rem] italic leading-[1.5] text-teal lg:text-[clamp(1.05rem,2.7svh,1.35rem)]"
          >
            {t.hero.texto2}
          </p>

          <div data-hero-in className="mt-9 lg:mt-[clamp(1.75rem,5svh,2.75rem)]">
            <WhatsAppButton href={whatsappUrl(mensagens.hero)}>{t.botoes.agendar}</WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
