import type { Content } from "../data/content";
import { Em } from "./ui";

export default function Trabalho({ t }: { t: Content }) {
  const [primeiro, ...resto] = t.trabalho.paragrafos;
  return (
    <section id="trabalho" className="section-pad fit-section bg-ivory">
      <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-x-12">
        <div className="lg:col-span-5">
          <h2 data-split className="h2-section max-w-[14ch]">
            <Em text={t.trabalho.titulo} />
          </h2>
          <div data-reveal className="mt-8 h-px w-14 bg-teal/60" aria-hidden="true" />
        </div>

        <div className="space-y-6 lg:col-span-6 lg:col-start-7">
          <p
            data-reveal
            className="font-serif text-[1.3rem] leading-[1.5] text-ink lg:text-[clamp(1.15rem,2.9svh,1.5rem)]"
          >
            {primeiro}
          </p>
          {resto.map((p) => (
            <p key={p} data-reveal className="text-[1.0625rem] leading-[1.75] lg:text-[clamp(0.96rem,2.4svh,1.0625rem)]">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
