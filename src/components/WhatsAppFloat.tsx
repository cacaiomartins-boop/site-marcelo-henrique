import { useEffect, useState } from "react";
import { mensagens, whatsappUrl } from "../data/clinic";
import { IconWhatsApp } from "./ui";

/** Botão redondo do WhatsApp: aparece depois do topo e some perto do rodapé. */
export default function WhatsAppFloat() {
  const [heroVisivel, setHeroVisivel] = useState(true);
  const [rodapeVisivel, setRodapeVisivel] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    const rodape = document.querySelector("[data-footer-panel]");
    const ios: IntersectionObserver[] = [];
    if (hero) {
      const io = new IntersectionObserver(([e]) => setHeroVisivel(e.isIntersecting), { threshold: 0.12 });
      io.observe(hero);
      ios.push(io);
    }
    if (rodape) {
      const io = new IntersectionObserver(([e]) => setRodapeVisivel(e.isIntersecting), { threshold: 0.25 });
      io.observe(rodape);
      ios.push(io);
    }
    return () => ios.forEach((io) => io.disconnect());
  }, []);

  const visivel = !heroVisivel && !rodapeVisivel;

  return (
    <a
      href={whatsappUrl(mensagens.flutuante)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar uma conversa pelo WhatsApp (abre em nova aba)"
      tabIndex={visivel ? 0 : -1}
      className={`fixed bottom-4 right-4 z-40 grid size-14 place-items-center rounded-full bg-teal text-ivory shadow-[0_14px_34px_-12px_rgba(41,78,89,0.7)] transition-[opacity,transform,background-color] duration-500 ease-[var(--ease-silk)] hover:bg-teal-deep sm:bottom-6 sm:right-6 ${visivel ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
    >
      <IconWhatsApp className="size-6" />
    </a>
  );
}
