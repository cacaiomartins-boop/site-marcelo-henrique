import { useEffect, useRef, useState } from "react";
import type { Content } from "../data/content";
import { ScrollTrigger } from "../motion/setup";
import { Em } from "./ui";

type Item = Content["opinioes"]["itens"][number];

function Cartao({ item, revelar, ocultoNoDesktop }: { item: Item; revelar: boolean; ocultoNoDesktop?: boolean }) {
  return (
    <li
      {...(revelar ? { "data-reveal-item": true } : {})}
      className={`mb-6 break-inside-avoid rounded-[1.25rem] bg-paper p-6 shadow-[0_1px_0_rgba(41,78,89,0.08)] lg:mb-5 lg:p-5 ${revelar ? "" : "opinioes-entra"} ${ocultoNoDesktop ? "lg:hidden" : ""}`}
    >
      <figure>
        <blockquote className="space-y-3 text-[0.98rem] leading-[1.7] text-text lg:text-[clamp(0.8rem,1.95svh,0.98rem)] lg:leading-[1.6]">
          {item.texto.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </blockquote>
        <figcaption className="mt-4 border-t border-teal/15 pt-3">
          <span className="block font-serif text-[1.05rem] leading-tight text-ink lg:text-[clamp(0.95rem,2.2svh,1.05rem)]">{item.nome}</span>
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
    <section id="opinioes" aria-labelledby="opinioes-titulo" className="section-pad fit-section bg-ivory">
      <div className="container-site">
        <div className="max-w-[56rem]">
          <h2 id="opinioes-titulo" data-split className="h2-section">
            <Em text={o.titulo} />
          </h2>
          <p data-reveal className="mt-5 text-[0.95rem] leading-[1.6] text-muted lg:mt-[clamp(0.5rem,1.6svh,1.25rem)]">
            {o.nota}
          </p>
        </div>

        <ul data-stagger className="mt-10 gap-x-6 md:columns-2 lg:mt-[clamp(1rem,3svh,2.25rem)] lg:columns-3 lg:gap-x-8">
          {iniciais.map((item, i) => (
            <Cartao key={item.nome + item.data} item={item} revelar ocultoNoDesktop={!aberto && i >= 3} />
          ))}
          {aberto && demais.map((item) => <Cartao key={item.nome + item.data} item={item} revelar={false} />)}
        </ul>

        <div data-reveal className="mt-2 lg:mt-0">
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
