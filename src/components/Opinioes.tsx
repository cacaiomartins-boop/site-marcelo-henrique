import { useEffect, useRef, useState } from "react";
import type { Content } from "../data/content";
import { ScrollTrigger } from "../motion/setup";
import { Em } from "./ui";

type Item = Content["opinioes"]["itens"][number];

function Cartao({ item, revelar }: { item: Item; revelar: boolean }) {
  return (
    <li
      {...(revelar ? { "data-reveal-item": true } : {})}
      className={`mb-6 break-inside-avoid rounded-[1.25rem] bg-paper p-6 shadow-[0_1px_0_rgba(41,78,89,0.08)] lg:mb-8 lg:p-7 ${revelar ? "" : "opinioes-entra"}`}
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
  );
}

export default function Opinioes({ t }: { t: Content }) {
  const o = t.opinioes;
  const [aberto, setAberto] = useState(false);
  const primeiraVez = useRef(true);

  // A página muda de altura ao abrir/fechar: recalcula as posições das animações de rolagem
  useEffect(() => {
    if (primeiraVez.current) {
      primeiraVez.current = false;
      return;
    }
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 50);
    return () => clearTimeout(id);
  }, [aberto]);

  const iniciais = o.itens.slice(0, o.iniciais);
  const demais = o.itens.slice(o.iniciais);

  return (
    <section id="opinioes" aria-labelledby="opinioes-titulo" className="section-pad bg-ivory">
      <div className="container-site">
        <div className="max-w-[40rem]">
          <h2 id="opinioes-titulo" data-split className="h2-section">
            <Em text={o.titulo} />
          </h2>
          <p data-reveal className="mt-5 text-[0.95rem] leading-[1.6] text-muted">
            {o.nota}
          </p>
        </div>

        <ul data-stagger className="mt-12 gap-x-6 md:columns-2 lg:columns-3 lg:gap-x-8">
          {iniciais.map((item) => (
            <Cartao key={item.nome + item.data} item={item} revelar />
          ))}
          {aberto && demais.map((item) => <Cartao key={item.nome + item.data} item={item} revelar={false} />)}
        </ul>

        <div data-reveal className="mt-2">
          <button
            type="button"
            aria-expanded={aberto}
            onClick={() => {
              // Ao recolher, volta para o começo da seção (a página fica bem mais curta)
              if (aberto) {
                const topo = document.getElementById("opinioes")?.offsetTop ?? 0;
                if (window.__lenis) window.__lenis.scrollTo(topo, { immediate: true });
                else window.scrollTo(0, topo);
              }
              setAberto((v) => !v);
            }}
            className="btn btn-outline"
          >
            {aberto ? o.verMenos : o.verMais}
          </button>
        </div>
      </div>
    </section>
  );
}
