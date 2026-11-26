import { mensagens, whatsappUrl } from "../data/clinic";
import type { Content } from "../data/content";
import { Em, WhatsAppButton } from "./ui";

export default function Terapia({ t }: { t: Content }) {
  const c = t.terapia;
  return (
    <section id="terapia" className="section-pad fit-section relative isolate overflow-clip bg-ivory">
      <div className="container-site lg:grid lg:grid-cols-12">
        <div className="lg:col-span-8 lg:col-start-5">
          <h2 data-split className="h2-section max-w-[22ch]">
            <Em text={c.titulo} />
          </h2>

          <div className="mt-8 space-y-3 lg:mt-[clamp(0.9rem,2.6svh,1.75rem)]">
            {c.paragrafos.map((p, i) => (
              <p
                key={p}
                data-reveal
                className={
                  i === 0
                    ? "max-w-[44rem] font-serif text-[1.3rem] leading-[1.45] text-ink lg:text-[clamp(1.02rem,2.5svh,1.4rem)]"
                    : "max-w-[44rem] text-[1.0625rem] leading-[1.75] lg:leading-[1.6] lg:text-[clamp(0.9rem,2.2svh,1.0625rem)]"
                }
              >
                {p}
              </p>
            ))}
          </div>

          <p data-reveal className="label mt-10 !text-teal lg:mt-[clamp(1rem,3.4svh,2rem)]">
            {c.listaTitulo}
          </p>
          <ul data-stagger className="mt-3 grid max-w-[46rem] gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {c.lista.map((item) => (
              <li
                key={item}
                data-reveal-item
                className="flex items-baseline gap-4 border-t border-teal/20 py-[clamp(0.6rem,1.9svh,1rem)] last:border-b sm:[&:nth-last-child(2)]:border-b lg:[&:nth-last-child(2)]:border-b lg:[&:nth-last-child(3)]:border-b"
              >
                <span aria-hidden="true" className="h-px w-5 shrink-0 translate-y-[-0.35em] bg-teal" />
                <span className="font-serif text-[1.15rem] leading-[1.3] text-ink lg:text-[clamp(0.9rem,2.2svh,1.1rem)]">{item}</span>
              </li>
            ))}
          </ul>

          <p
            data-reveal
            className="mt-9 max-w-[44rem] font-serif text-[1.3rem] italic leading-[1.4] text-ink lg:mt-[clamp(1rem,3.4svh,2rem)] lg:text-[clamp(1rem,2.6svh,1.45rem)]"
          >
            {c.fechamento}
          </p>

          <div data-reveal className="mt-8 lg:mt-[clamp(0.9rem,2.8svh,1.75rem)]">
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
