import { useEffect, useState } from "react";
import { clinic, mensagens, whatsappUrl } from "../data/clinic";
import type { Content } from "../data/content";
import { WhatsAppButton } from "./ui";

export default function Header({ t }: { t: Content }) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#terapia", label: t.menu.terapia },
    { href: "#sobre-mim", label: t.menu.sobreMim },
    { href: "#opinioes", label: t.menu.opinioes },
    { href: "#como-funciona", label: t.menu.comoFunciona },
  ];

  // Menu aberto: trava a rolagem e fecha com Esc
  useEffect(() => {
    const header = document.querySelector<HTMLElement>("[data-header]");
    if (header) header.dataset.menuOpen = String(open);
    if (open) window.__lenis?.stop();
    else window.__lenis?.start();
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
      window.__lenis?.start();
    };
  }, [open]);

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-teal focus:px-4 focus:py-2 focus:text-ivory"
      >
        Pular para o conteúdo
      </a>

      <header
        data-header
        data-scrolled="false"
        data-tone="light"
        data-menu-open="false"
        className="group fixed inset-x-0 top-0 z-50 text-ink transition-[background-color,box-shadow,color,backdrop-filter] duration-700 data-[scrolled=true]:bg-paper/85 data-[scrolled=true]:shadow-[0_1px_0_rgba(41,78,89,0.14)] data-[scrolled=true]:backdrop-blur-xl data-[tone=dark]:text-ivory data-[tone=dark]:data-[scrolled=true]:bg-teal-deep/80 data-[tone=dark]:data-[scrolled=true]:shadow-[0_1px_0_rgba(235,229,208,0.18)] data-[menu-open=true]:!bg-paper data-[menu-open=true]:!text-ink"
      >
        <div className="container-site flex h-[4.25rem] items-center justify-between gap-6 lg:h-[4.75rem]">
          <a href="#inicio" aria-label={`${clinic.nome}, ${clinic.profissao}. Ir para o início`} className="block leading-none">
            <span className="block whitespace-nowrap font-serif text-[1.2rem] uppercase tracking-[0.12em] sm:text-[1.35rem] xl:text-[1.6rem]">{clinic.nome}</span>
            <span className="mt-2 block whitespace-nowrap text-[0.64rem] font-medium uppercase tracking-[0.34em] opacity-75 xl:text-[0.72rem]">
              {clinic.profissao}
            </span>
          </a>

          <nav aria-label="Principal" className="hidden items-center gap-6 lg:flex xl:gap-9">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="u-link whitespace-nowrap text-[0.9rem] opacity-85 transition-opacity hover:opacity-100">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <WhatsAppButton
              href={whatsappUrl(mensagens.header)}
              className="!hidden !h-11 !px-5 !text-[0.85rem] sm:!inline-flex lg:!hidden xl:!inline-flex group-data-[tone=dark]:!bg-ivory group-data-[tone=dark]:!text-teal-deep group-data-[tone=dark]:!shadow-none"
            >
              {t.botoes.agendar}
            </WhatsAppButton>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              onClick={() => setOpen((v) => !v)}
              className="relative -mr-2 grid size-11 place-items-center lg:hidden"
            >
              <span
                className={`absolute h-px w-5 bg-current transition-transform duration-500 ease-[var(--ease-silk)] ${open ? "translate-y-0 rotate-45" : "-translate-y-[0.3rem]"}`}
              />
              <span
                className={`absolute h-px w-5 bg-current transition-transform duration-500 ease-[var(--ease-silk)] ${open ? "translate-y-0 -rotate-45" : "translate-y-[0.3rem]"}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Menu do celular */}
      <div
        id="menu-mobile"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        data-lenis-prevent
        inert={!open}
        className={`fixed inset-0 z-40 flex flex-col bg-paper px-5 pb-8 pt-[5.5rem] transition-[opacity,visibility] duration-500 lg:hidden ${open ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <nav aria-label="Menu" className="flex-1">
          <ul>
            {links.map((l) => (
              <li key={l.href} className="border-b border-teal/15">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-5 font-serif text-[1.9rem] leading-none text-ink"
                >
                  {l.label}
                  <span aria-hidden="true" className="text-teal">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <WhatsAppButton href={whatsappUrl(mensagens.header)} className="w-full">
          {t.botoes.agendar}
        </WhatsAppButton>
        <p className="mt-5 text-center text-sm text-muted">
          {clinic.nomeCompleto} · {clinic.registro}
        </p>
      </div>
    </>
  );
}
