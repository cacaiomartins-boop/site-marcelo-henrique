import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);
CustomEase.create("silk", "0.22, 1, 0.36, 1");
CustomEase.create("breath", "0.45, 0, 0.2, 1");
gsap.defaults({ ease: "silk", duration: 1.1 });
gsap.ticker.lagSmoothing(0);

export { gsap, ScrollTrigger, SplitText };

// Para testar as animações em um navegador com "reduzir movimento" ligado: abrir o site com ?motion=1
const forceMotion = new URLSearchParams(window.location.search).get("motion") === "1";
if (forceMotion) document.documentElement.classList.add("force-motion");

export const reduceMotion = () => !forceMotion && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Rolagem suave só com mouse e sem "reduzir movimento". No celular fica a rolagem nativa. */
export function initLenis(): { destroy: () => void } | null {
  if (reduceMotion() || window.matchMedia("(pointer: coarse)").matches) return null;
  const lenis = new Lenis({
    duration: 1.15,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    wheelMultiplier: 0.95,
    anchors: true,
  });
  window.__lenis = lenis;
  const onScroll = () => ScrollTrigger.update();
  const tick = (t: number) => lenis.raf(t * 1000);
  lenis.on("scroll", onScroll);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);
  return {
    destroy() {
      gsap.ticker.remove(tick);
      lenis.destroy();
      window.__lenis = undefined;
    },
  };
}
