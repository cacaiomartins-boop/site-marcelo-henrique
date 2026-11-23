import { gsap, ScrollTrigger, SplitText, reduceMotion } from "./setup";

const SHOW_ALL = "[data-reveal],[data-reveal-item],[data-hero-in],[data-split]";

/**
 * Todas as animações do site. Os componentes só marcam os elementos com data-attributes:
 *  data-hero-in / data-hero-title / data-tree-hero  -> entrada do topo
 *  data-split      -> título que sobe linha a linha
 *  data-reveal     -> bloco que aparece ao rolar
 *  data-stagger    -> grupo; os filhos [data-reveal-item] entram em sequência
 *  data-words      -> frase que acende palavra por palavra com a rolagem
 *  data-footer-panel, data-footer-tree -> rodapé que "abre"
 *  data-header     -> cabeçalho que esconde ao descer e volta ao subir
 */
export function initAnimations() {
  const cleanups: Array<() => void> = [];
  const ctx = gsap.context(() => {
    // Sem animação: tudo visível.
    if (reduceMotion()) {
      gsap.set(SHOW_ALL, { autoAlpha: 1 });
      gsap.set("[data-tree-hero],[data-footer-tree]", { clipPath: "none" });
      cleanups.push(headerBehavior(false));
      return;
    }
    animate(cleanups);
  });

  document.fonts?.ready.then(() => ScrollTrigger.refresh());

  return () => {
    cleanups.forEach((fn) => fn());
    ctx.revert();
  };
}

function animate(cleanups: Array<() => void>) {
  {
    // ---------- Entrada do topo ----------
    const tl = gsap.timeline();
    tl.fromTo(
      "[data-tree-hero]",
      { clipPath: "inset(100% 0% 0% 0%)" },
      { clipPath: "inset(0% 0% 0% 0%)", duration: 2.8, ease: "breath" },
      0,
    );
    tl.from("[data-tree-hero]", { scale: 1.07, transformOrigin: "0% 100%", duration: 3.2, ease: "power2.out" }, 0);
    tl.fromTo(
      "[data-header]",
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 1.2 },
      0.3,
    );

    const title = document.querySelector<HTMLElement>("[data-hero-title]");
    if (title) {
      SplitText.create(title, {
        type: "lines",
        mask: "lines",
        linesClass: "split-line",
        autoSplit: true,
        onSplit(self) {
          gsap.set(title, { autoAlpha: 1 });
          return gsap.from(self.lines, {
            yPercent: 115,
            rotate: 2,
            transformOrigin: "0% 100%",
            duration: 1.3,
            stagger: 0.12,
            delay: 0.35,
          });
        },
      });
    }
    tl.fromTo(
      "[data-hero-in]:not([data-hero-title])",
      { autoAlpha: 0, y: 26 },
      { autoAlpha: 1, y: 0, duration: 1.2, stagger: 0.12, clearProps: "transform" },
      0.95,
    );

    // Pequeno afastamento da árvore ao rolar o topo
    gsap.to("[data-tree-hero]", {
      yPercent: 5,
      ease: "none",
      scrollTrigger: { trigger: "#inicio", start: "top top", end: "bottom top", scrub: true },
    });

    // ---------- Títulos ----------
    gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
      SplitText.create(el, {
        type: "lines",
        mask: "lines",
        linesClass: "split-line",
        autoSplit: true,
        onSplit(self) {
          gsap.set(el, { autoAlpha: 1 });
          return gsap.from(self.lines, {
            yPercent: 110,
            duration: 1.25,
            stagger: 0.1,
            scrollTrigger: { trigger: el, start: "top 86%", once: true },
          });
        },
      });
    });

    // ---------- Blocos que aparecem ----------
    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 32 },
        { autoAlpha: 1, y: 0, duration: 1.2, scrollTrigger: { trigger: el, start: "top 88%", once: true } },
      );
    });
    gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
      const items = group.querySelectorAll("[data-reveal-item]");
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 26 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.1,
          stagger: 0.09,
          scrollTrigger: { trigger: group, start: "top 86%", once: true },
        },
      );
    });

    // ---------- Frase que acende com a rolagem ----------
    const words = document.querySelector<HTMLElement>("[data-words]");
    if (words) {
      const sp = SplitText.create(words, { type: "words" });
      gsap.fromTo(
        sp.words,
        { opacity: 0.18 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.1,
          scrollTrigger: { trigger: words, start: "top 85%", end: "bottom 55%", scrub: 0.6 },
        },
      );
    }

    // ---------- Rodapé ----------
    gsap.fromTo(
      "[data-footer-panel]",
      { clipPath: "inset(0% 4% 0% 4% round 5rem 5rem 0rem 0rem)" },
      {
        clipPath: "inset(0% 0% 0% 0% round 2.5rem 2.5rem 0rem 0rem)",
        ease: "none",
        scrollTrigger: { trigger: "[data-footer-panel]", start: "top bottom", end: "top 35%", scrub: true },
      },
    );
    gsap.fromTo(
      "[data-footer-tree]",
      { clipPath: "inset(100% 0% 0% 0%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 2.6,
        ease: "breath",
        scrollTrigger: { trigger: "[data-footer-panel]", start: "top 60%", once: true },
      },
    );

    cleanups.push(headerBehavior(true));

    // ---------- Botões com efeito magnético (só mouse) ----------
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (fine.matches) {
      gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((btn) => {
        const x = gsap.quickTo(btn, "x", { duration: 0.6, ease: "elastic.out(1, 0.5)" });
        const y = gsap.quickTo(btn, "y", { duration: 0.6, ease: "elastic.out(1, 0.5)" });
        const move = (e: PointerEvent) => {
          const r = btn.getBoundingClientRect();
          x((e.clientX - (r.left + r.width / 2)) * 0.18);
          y((e.clientY - (r.top + r.height / 2)) * 0.28);
        };
        const leave = () => {
          x(0);
          y(0);
        };
        btn.addEventListener("pointermove", move);
        btn.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          btn.removeEventListener("pointermove", move);
          btn.removeEventListener("pointerleave", leave);
        });
      });
    }
  }
}

/** Cabeçalho: encolhe ao rolar; some ao descer e volta ao subir. */
function headerBehavior(animate: boolean): () => void {
  const header = document.querySelector<HTMLElement>("[data-header]");
  if (!header) return () => {};
  const setY = animate ? gsap.quickTo(header, "yPercent", { duration: 0.6, ease: "silk" }) : null;
  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate(self) {
      const y = self.scroll();
      header.dataset.scrolled = y > 40 ? "true" : "false";
      if (!setY) return;
      if (y < 160 || header.contains(document.activeElement) || header.dataset.menuOpen === "true") setY(0);
      else setY(self.direction === 1 ? -140 : 0);
    },
  });

  // Tom do cabeçalho sobre as seções escuras
  const dark = document.querySelectorAll("[data-theme='dark']");
  let io: IntersectionObserver | null = null;
  if (dark.length && "IntersectionObserver" in window) {
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) header.dataset.tone = "dark";
          else if (header.dataset.tone === "dark") header.dataset.tone = "light";
        });
      },
      { rootMargin: "0px 0px -94% 0px" },
    );
    dark.forEach((d) => io!.observe(d));
  }
  return () => io?.disconnect();
}
