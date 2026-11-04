"use client";

import { useEffect } from "react";

/**
 * Ao restaurar a página pelo BFCache, apenas "acorda" animações e observers.
 * Sem router.refresh() para não desmontar componentes nem reiniciar estados.
 * A retomada dos vídeos é feita pelo hook useBackgroundVideo (pageshow/visibilitychange).
 */
export default function BFCacheRestorer() {
  useEffect(() => {
    const wake = () => {
      window.dispatchEvent(new Event("resize"));
      window.dispatchEvent(new Event("scroll"));
    };
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) wake();
    };
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") wake();
    };

    window.addEventListener("pageshow", handlePageShow);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
}
