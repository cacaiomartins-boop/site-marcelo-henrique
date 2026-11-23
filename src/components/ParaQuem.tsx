import type { Content } from "../data/content";
import { Em } from "./ui";

export default function ParaQuem({ t }: { t: Content }) {
  return (
    <section id="para-quem" className="section-pad fit-section bg-sand">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-5">
            <h2 data-split className="h2-section max-w-[14ch]">
              <Em text={t.paraQuem.titulo} />
            </h2>
            <p
              data-reveal
              className="mt-6 max-w-[30rem] text-[1.0625rem] leading-[1.7] lg:text-[clamp(0.95rem,2.3svh,1.0625rem)]"
            >
              {t.paraQuem.intro}
            </p>
          </div>

          <ul data-stagger className="grid content-start gap-x-10 sm:grid-cols-2 lg:col-span-7 lg:pt-2">
            {t.paraQuem.lista.map((item) => (
              <li
                key={item}
                data-reveal-item
                className="flex items-baseline gap-4 border-t border-teal/20 py-[clamp(0.85rem,2.6svh,1.25rem)] last:border-b sm:last:col-span-2"
              >
                <span aria-hidden="true" className="h-px w-5 shrink-0 translate-y-[-0.35em] bg-teal" />
                <span className="font-serif text-[1.2rem] leading-[1.3] text-ink lg:text-[clamp(1.05rem,2.7svh,1.3rem)]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p
          data-words
          className="mt-[clamp(2rem,6svh,4rem)] max-w-[56rem] font-serif text-[1.45rem] italic leading-[1.35] text-ink lg:text-[clamp(1.3rem,min(2.5vw,4.2svh),2.2rem)]"
        >
          {t.paraQuem.fechamento}
        </p>
      </div>
    </section>
  );
}
