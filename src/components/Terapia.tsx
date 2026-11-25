import { mensagens, whatsappUrl } from "../data/clinic";
import type { Content } from "../data/content";
import { Em, WhatsAppButton } from "./ui";

export default function Terapia({ t }: { t: Content }) {
  const c = t.terapia;
  return (
    <section id="terapia" className="relative isolate overflow-clip bg-ivory pt-20 sm:pt-28 lg:pb-[clamp(5rem,12svh,8rem)] lg:pt-[clamp(5rem,12svh,8rem)]">
      <div className="container-site lg:grid lg:grid-cols-12">
        <div className="lg:col-span-7 lg:col-start-6">
          <h2 data-split className="h2-section max-w-[16ch]">
            <Em text={c.titulo} />
          </h2>

          <div className="mt-8 space-y-4 lg:mt-[clamp(1.5rem,4svh,2.25rem)]">
            {c.paragrafos.map((p, i) => (
              <p
                key={p}
                data-reveal
                className={
                  i === 0
                    ? "max-w-[36rem] font-serif text-[1.3rem] leading-[1.5] text-ink lg:text-[clamp(1.15rem,2.8svh,1.5rem)]"
                    : "max-w-[36rem] text-[1.0625rem] leading-[1.75] lg:text-[clamp(0.96rem,2.4svh,1.0625rem)]"
                }
              >
                {p}
              </p>
            ))}
          </div>

          <p data-reveal className="label mt-10 !text-teal lg:mt-[clamp(1.75rem,5svh,2.75rem)]">
            {c.listaTitulo}
          </p>
          <ul data-stagger className="mt-4 grid max-w-[40rem] gap-x-10 sm:grid-cols-2">
            {c.lista.map((item) => (
              <li
                key={item}
                data-reveal-item
                className="flex items-baseline gap-4 border-t border-teal/20 py-[clamp(0.8rem,2.3svh,1.1rem)] last:border-b sm:[&:nth-last-child(2)]:border-b"
              >
                <span aria-hidden="true" className="h-px w-5 shrink-0 translate-y-[-0.35em] bg-teal" />
                <span className="font-serif text-[1.15rem] leading-[1.3] text-ink lg:text-[clamp(1.02rem,2.5svh,1.25rem)]">{item}</span>
              </li>
            ))}
          </ul>

          <p
            data-reveal
            className="mt-9 max-w-[36rem] font-serif text-[1.3rem] italic leading-[1.4] text-ink lg:mt-[clamp(1.75rem,5svh,2.75rem)] lg:text-[clamp(1.15rem,2.9svh,1.6rem)]"
          >
            {c.fechamento}
          </p>

          <div data-reveal className="mt-8 lg:mt-[clamp(1.5rem,4svh,2.25rem)]">
            <WhatsAppButton href={whatsappUrl(mensagens.hero)}>{t.botoes.agendar}</WhatsAppButton>
          </div>
        </div>
      </div>

      {/* A árvore do cartão: cresce de baixo para cima, no vazio ao lado do texto */}
      <div
        data-tree-grow
        aria-hidden="true"
        className="tree mt-14 text-teal [--h:min(40svh,23rem)] lg:absolute lg:bottom-0 lg:left-0 lg:mt-0 lg:[--h:min(78svh,41vw)]"
      />
    </section>
  );
}
