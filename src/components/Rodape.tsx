import { clinic, mensagens, whatsappUrl } from "../data/clinic";
import type { Content } from "../data/content";
import { Em, IconMail, IconWhatsApp } from "./ui";

export default function Rodape({ t }: { t: Content }) {
  return (
    <div className="bg-ivory">
      <footer
        data-theme="dark"
        data-footer-panel
        className="relative isolate overflow-hidden rounded-t-[2.5rem] bg-teal-deep text-ivory lg:flex lg:min-h-svh lg:flex-col lg:justify-between"
      >
        {/* Árvore de fundo, espelhada, como no verso do cartão */}
        <div
          data-footer-tree
          aria-hidden="true"
          className="tree pointer-events-none absolute bottom-0 right-0 -z-10 -scale-x-100 text-ivory opacity-[0.12] [--h:22rem] lg:[--h:min(92svh,60vw)]"
        />

        <div className="container-site pt-24 lg:pt-[clamp(6rem,14svh,9rem)]">
          <h2
            data-split
            className="max-w-[16ch] text-[clamp(2.3rem,8vw,3.4rem)] leading-[1.04] !text-ivory lg:max-w-[18ch] lg:text-[clamp(2.4rem,min(5vw,8svh),4.75rem)] [&_em]:!text-sand"
          >
            <Em text={t.rodape.frase} />
          </h2>

          <div data-reveal className="mt-12 flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:gap-x-16 lg:mt-[clamp(2rem,7svh,4.5rem)]">
            <a
              href={whatsappUrl(mensagens.contato)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4"
            >
              <IconWhatsApp className="mt-1 size-6 shrink-0 text-sand" />
              <span>
                <span className="label !text-sand/80">WhatsApp</span>
                <span className="u-link mt-1 block font-serif text-[1.4rem] leading-tight">{clinic.whatsappExibicao}</span>
                <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
              </span>
            </a>
            <a href={`mailto:${clinic.email}`} className="group flex items-start gap-4">
              <IconMail className="mt-1 size-6 shrink-0 text-sand" />
              <span>
                <span className="label !text-sand/80">E-mail</span>
                <span className="u-link mt-1 block font-serif text-[1.02rem] leading-tight [overflow-wrap:anywhere] sm:text-[1.4rem]">
                  {clinic.email}
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="container-site mt-20 pb-8 lg:mt-12 lg:pb-[clamp(1.25rem,3.5svh,2.25rem)]">
          <div className="border-t border-ivory/15 pt-6">
            <p className="text-[0.9rem] text-ivory/80">{t.rodape.emergencia}</p>
            <div className="mt-4 flex flex-col gap-2 text-[0.85rem] text-ivory/70 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
              <p>
                {clinic.nomeCompleto} · {clinic.registro}{" "}
                <a
                  href={clinic.registroLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="u-link mt-1 block text-ivory/90 sm:ml-1 sm:mt-0 sm:inline-block"
                >
                  Verificar registro
                  <span className="sr-only"> no {clinic.conselho} (abre em nova aba)</span>
                </a>
              </p>
              <p>© {new Date().getFullYear()} {clinic.nome}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
