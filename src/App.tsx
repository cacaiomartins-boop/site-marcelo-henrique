import { useEffect } from "react";
import { pt } from "./data/content";
import { initAnimations } from "./motion/animations";
import { initLenis, ScrollTrigger } from "./motion/setup";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Terapia from "./components/Terapia";
import SobreMim from "./components/SobreMim";
import ComoFunciona from "./components/ComoFunciona";
import Opinioes from "./components/Opinioes";
import Rodape from "./components/Rodape";
import WhatsAppFloat from "./components/WhatsAppFloat";

// Para a futura versão em espanhol: criar `es` em data/content.ts e escolher aqui.
const t = pt;

export default function App() {
  useEffect(() => {
    document.documentElement.lang = t.idioma;
    const lenis = initLenis();
    const parar = initAnimations();
    // Animações ativas: o tempo limite do anti-flash não é mais necessário.
    if (window.__motionTimer) clearTimeout(window.__motionTimer);
    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 400);
    return () => {
      clearTimeout(refresh);
      parar();
      lenis?.destroy();
    };
  }, []);

  return (
    <>
      <Header t={t} />
      <main id="conteudo">
        <Hero t={t} />
        <Terapia t={t} />
        <SobreMim t={t} />
        <Opinioes t={t} />
        <ComoFunciona t={t} />
      </main>
      <Rodape t={t} />
      <WhatsAppFloat />
    </>
  );
}
