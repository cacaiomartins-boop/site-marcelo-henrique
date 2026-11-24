import { mensagens, whatsappUrl } from "../data/clinic";
import type { Content } from "../data/content";
import { Em, WhatsAppButton } from "./ui";

export default function ComoFunciona({ t }: { t: Content }) {
  const c = t.comoFunciona;
  return (
    <section id="como-funciona" className="section-pad fit-section bg-ivory">
      <div className="container-site">
        <h2 data-split className="h2-section">
          <Em text={c.titulo} />
        </h2>

        <dl
          data-stagger
          className="mt-[clamp(2rem,6svh,3.5rem)] grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-6"
        >
          {c.itens.map((item) => (
            <div key={item.rotulo} data-reveal-item className="border-t border-teal/25 pt-5">
              <dt className="label">{item.rotulo}</dt>
              <dd className="mt-3 font-serif text-[1.35rem] leading-[1.25] text-ink lg:text-[clamp(1.15rem,2.9svh,1.5rem)]">
                {item.valor}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-[clamp(2rem,6svh,3.5rem)] flex flex-col items-start gap-[clamp(1.5rem,4svh,2rem)]">
          <div data-reveal className="max-w-[38rem] space-y-3">
            <p className="text-[1.0625rem] leading-[1.75] lg:text-[clamp(0.95rem,2.4svh,1.0625rem)]">{c.texto}</p>
            <p className="text-[1.0625rem] leading-[1.75] text-muted lg:text-[clamp(0.95rem,2.4svh,1.0625rem)]">
              {c.textoExtra}
            </p>
          </div>
          <div data-reveal>
            <WhatsAppButton href={whatsappUrl(mensagens.contato)}>{t.botoes.contato}</WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
