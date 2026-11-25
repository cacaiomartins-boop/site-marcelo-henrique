import { useRef } from "react";
import type { Content } from "../data/content";
import { clinic, mensagens, whatsappUrl } from "../data/clinic";
import { Em, IconClose, IconPlay, WhatsAppButton } from "./ui";

export default function SobreMim({ t }: { t: Content }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const abrir = () => {
    const v = videoRef.current;
    if (v && !v.getAttribute("src")) v.setAttribute("src", "/video/apresentacao.mp4");
    window.__lenis?.stop();
    dialogRef.current?.showModal();
    v?.play().catch(() => {});
  };
  const fechar = () => dialogRef.current?.close();
  const aoFechar = () => {
    videoRef.current?.pause();
    window.__lenis?.start();
  };

  return (
    <section id="sobre-mim" className="section-pad fit-section bg-paper">
      <div className="container-site grid items-center gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-x-16">
        <div data-reveal className="relative mx-auto w-full max-w-[24rem] lg:mx-0 lg:max-w-[min(26rem,calc((100svh-12rem)*0.8))]">
          <img
            src="/img/marcelo.webp"
            alt={`${clinic.nomeCompleto}, psicólogo, sorrindo em um ambiente com plantas`}
            width={1000}
            height={1250}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[0_24px_60px_-28px_rgba(26,56,65,0.45)]"
          />
          <button
            type="button"
            onClick={abrir}
            className="group absolute -bottom-6 right-3 flex items-center gap-3 rounded-2xl border border-white/70 bg-ivory/90 p-2.5 pr-5 text-left shadow-[0_14px_40px_-16px_rgba(26,56,65,0.4)] backdrop-blur-md transition-transform duration-500 ease-[var(--ease-silk)] hover:-translate-y-0.5 sm:-right-8"
          >
            <span className="relative size-14 shrink-0 overflow-hidden rounded-xl">
              <img
                src="/img/video-poster.jpg"
                alt=""
                width={576}
                height={1024}
                loading="lazy"
                className="size-full object-cover object-[50%_22%]"
              />
              <span className="absolute inset-0 grid place-items-center bg-teal-deep/35 text-ivory transition-colors group-hover:bg-teal-deep/50">
                <IconPlay className="size-5" />
              </span>
            </span>
            <span className="block leading-tight">
              <span className="block font-serif text-[1.05rem] text-ink">{t.botoes.verApresentacao}</span>
              <span className="mt-0.5 block text-[0.78rem] text-muted">Vídeo · {t.sobreMim.video.duracao}</span>
            </span>
          </button>
        </div>

        <div>
          <h2 data-split className="h2-section">
            <Em text={t.sobreMim.titulo} />
          </h2>
          <div className="mt-7 space-y-5 lg:mt-[clamp(1.25rem,3.4svh,2rem)]">
            {t.sobreMim.paragrafos.map((p) => (
              <p
                key={p}
                data-reveal
                className="max-w-[38rem] text-[1.0625rem] leading-[1.75] lg:text-[clamp(0.95rem,2.35svh,1.0625rem)]"
              >
                {p}
              </p>
            ))}
          </div>
          <div data-reveal className="mt-8 lg:mt-[clamp(1.5rem,4svh,2.25rem)]">
            <WhatsAppButton href={whatsappUrl(mensagens.hero)}>{t.botoes.agendar}</WhatsAppButton>
          </div>
        </div>
      </div>

      <dialog ref={dialogRef} onClose={aoFechar} aria-label="Apresentação em vídeo" className="video-dialog" onClick={(e) => e.target === dialogRef.current && fechar()}>
        <div className="relative">
          <button
            type="button"
            onClick={fechar}
            aria-label="Fechar vídeo"
            className="absolute -top-12 right-0 grid size-10 place-items-center rounded-full bg-ivory/15 text-ivory transition-colors hover:bg-ivory/30"
          >
            <IconClose />
          </button>
          <video
            ref={videoRef}
            controls
            playsInline
            preload="none"
            poster="/img/video-poster.jpg"
            aria-label={`Apresentação em vídeo de ${clinic.nome}`}
            className="aspect-[9/16] h-[min(84dvh,56rem)] max-w-[92vw] rounded-2xl bg-black object-contain shadow-2xl"
          />
        </div>
      </dialog>
    </section>
  );
}
