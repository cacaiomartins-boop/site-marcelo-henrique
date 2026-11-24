import { clinic } from "../data/clinic";
import type { Content } from "../data/content";
import { Em } from "./ui";

export default function Opinioes({ t }: { t: Content }) {
  const o = t.opinioes;
  return (
    <section id="opinioes" aria-labelledby="opinioes-titulo" className="section-pad bg-paper">
      <div className="container-site">
        <div className="max-w-[40rem]">
          <h2 id="opinioes-titulo" data-split className="h2-section">
            <Em text={o.titulo} />
          </h2>
          <p data-reveal className="mt-5 text-[0.95rem] leading-[1.6] text-muted">
            {o.nota}
          </p>
        </div>

        <ul data-stagger className="mt-12 gap-x-6 [column-fill:balance] md:columns-2 lg:columns-3 lg:gap-x-8">
          {o.itens.map((item) => (
            <li
              key={item.nome + item.data}
              data-reveal-item
              className="mb-6 break-inside-avoid rounded-[1.25rem] bg-ivory p-6 shadow-[0_1px_0_rgba(41,78,89,0.08)] lg:mb-8 lg:p-7"
            >
              <figure>
                <blockquote className="space-y-3 text-[0.98rem] leading-[1.7] text-text">
                  {item.texto.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </blockquote>
                <figcaption className="mt-5 border-t border-teal/15 pt-4">
                  <span className="block font-serif text-[1.05rem] leading-tight text-ink">{item.nome}</span>
                  <span className="mt-1 block text-[0.82rem] text-muted">{item.data}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <p data-reveal className="mt-4 text-[0.95rem] text-muted">
          <a href={clinic.doctoralia} target="_blank" rel="noopener noreferrer" className="u-link font-medium text-teal">
            {o.verTodas} ({o.total})<span className="sr-only"> (abre em nova aba)</span>
          </a>
        </p>
      </div>
    </section>
  );
}
