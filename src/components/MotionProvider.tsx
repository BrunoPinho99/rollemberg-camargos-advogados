"use client";

import { useEffect, ReactNode, createContext, useContext, useRef } from "react";
import Lenis from "lenis";

interface MotionContextType {
  lenis: Lenis | null;
  scrollTo: (target: string | HTMLElement) => void;
}

const MotionContext = createContext<MotionContextType>({
  lenis: null,
  scrollTo: () => {},
});

export const useMotion = () => useContext(MotionContext);

export default function MotionProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // 1. Inicializa Lenis com a física exata do Attest Framer Motion
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.6,
      infinite: false,
    });
    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // 2. Motor de Stagger Dinâmico e Scroll Reveal
    const revealElements = document.querySelectorAll(".reveal");
    const parentGroups = new Map<HTMLElement, HTMLElement[]>();

    revealElements.forEach((el) => {
      const parent = el.parentElement;
      if (parent) {
        if (!parentGroups.has(parent)) {
          parentGroups.set(parent, []);
        }
        parentGroups.get(parent)!.push(el as HTMLElement);
      }
    });

    parentGroups.forEach((children) => {
      if (children.length > 1) {
        children.forEach((child, idx) => {
          const hasManualDelay = [
            "delay-100",
            "delay-200",
            "delay-300",
            "delay-400",
            "delay-500",
          ].some((c) => child.classList.contains(c));
          if (!hasManualDelay) {
            child.style.transitionDelay = `${Math.min(idx * 0.09, 0.36)}s`;
          }
        });
      }
    });

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.08,
      }
    );

    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      // Revela imediatamente apenas o que já estiver visível na dobra atual;
      // tudo abaixo da dobra anima com slide-up conforme o usuário rola a página.
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
        el.classList.add("is-revealed");
      } else {
        revealObserver.observe(el);
      }
    });

    // 3. Suavização para links âncora internos
    if (window.location.hash) {
      const hashEl = document.querySelector(window.location.hash);
      if (hashEl) {
        lenis.scrollTo(hashEl as HTMLElement, { immediate: true });
      }
    }

    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (target) {
        const href = target.getAttribute("href");
        if (href && href.startsWith("#") && href.length > 1) {
          const targetEl = document.querySelector(href);
          if (targetEl) {
            e.preventDefault();
            lenis.scrollTo(targetEl as HTMLElement, {
              offset: -30,
              duration: 0.9,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          }
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      revealObserver.disconnect();
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  const scrollTo = (target: string | HTMLElement) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        offset: -30,
        duration: 0.9,
      });
    }
  };

  return (
    <MotionContext.Provider value={{ lenis: lenisRef.current, scrollTo }}>
      {children}
    </MotionContext.Provider>
  );
}
