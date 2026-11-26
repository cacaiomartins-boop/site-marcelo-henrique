import { mensagens, whatsappUrl } from "../data/clinic";
import type { Content } from "../data/content";
import { Em, WhatsAppButton } from "./ui";

export default function ComoFunciona({ t }: { t: Content }) {
  const c = t.comoFunciona;
  return (
    <section id="como-funciona" className="section-pad fit-section bg-paper">
      <div className="container-site">
        <h2 data-split className="h2-section max-w-[18ch]">
          <Em text={c.titulo} />
        </h2>
        <p
          data-reveal
          className="mt-6 max-w-[40rem] text-[1.0625rem] leading-[1.7] lg:mt-[clamp(0.6rem,2svh,1.5rem)] lg:text-[clamp(0.9rem,2.2svh,1.125rem)]"
        >
          {c.intro}
        </p>

        <dl
          data-stagger
          className="mt-[clamp(1.5rem,4svh,3rem)] grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-[clamp(0.9rem,2.8svh,2rem)]"
        >
          {c.itens.map((item) => (
            <div key={item.rotulo} data-reveal-item className="border-t border-teal/25 pt-5 lg:pt-[clamp(0.75rem,2svh,1.25rem)]">
              <dt className="label">{item.rotulo}</dt>
              <dd className="mt-3 font-serif text-[1.35rem] leading-[1.25] text-ink lg:text-[clamp(1.05rem,2.6svh,1.5rem)]">
                {item.valor}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-[clamp(1.5rem,4svh,3rem)] flex flex-col items-start gap-[clamp(1rem,3svh,2rem)]">
          <p data-reveal className="max-w-[38rem] text-[1.0625rem] leading-[1.75] lg:text-[clamp(0.9rem,2.2svh,1.0625rem)]">
            {c.texto}
          </p>
          <div data-reveal>
            <WhatsAppButton href={whatsappUrl(mensagens.contato)}>{t.botoes.agendarSua}</WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
