"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BFCacheRestorer() {
  const router = useRouter();

  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        // Dispara revalidação no router do Next.js
        router.refresh();

        // Acorda animações, observadores de scroll e layouts
        window.dispatchEvent(new Event("resize"));
        window.dispatchEvent(new Event("scroll"));

        // Reinicia reprodução de vídeos que possam ter sido congelados pelo BFCache
        document.querySelectorAll("video").forEach((video) => {
          video.muted = true;
          video.defaultMuted = true;
          video.play().catch(() => {});
        });
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        window.dispatchEvent(new Event("scroll"));
        document.querySelectorAll("video").forEach((video) => {
          if (video.autoplay) {
            video.muted = true;
            video.play().catch(() => {});
          }
        });
      }
    };

    const handleFocus = () => {
      window.dispatchEvent(new Event("scroll"));
      document.querySelectorAll("video").forEach((video) => {
        if (video.autoplay && video.paused) {
          video.muted = true;
          video.play().catch(() => {});
        }
      });
    };

    window.addEventListener("pageshow", handlePageShow);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", handleFocus);
    };
  }, [router]);

  return null;
}
