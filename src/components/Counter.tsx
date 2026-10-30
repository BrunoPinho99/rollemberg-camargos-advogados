"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  value: string;
  className?: string;
  duration?: number;
}

export default function Counter({ value, className = "", duration = 1600 }: CounterProps) {
  const [displayValue, setDisplayValue] = useState<string>(() => {
    // Valor inicial com o número substituído por 1
    const match = value.match(/\d+/);
    if (!match) return value;
    return value.replace(/\d+/, "1");
  });

  const ref = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Extrai o número e os prefixos/sufixos
    // Ex: "+200" -> prefix: "+", target: 200, suffix: ""
    // Ex: "98%"  -> prefix: "", target: 98, suffix: "%"
    // Ex: "24h"  -> prefix: "", target: 24, suffix: "h"
    // Ex: "001"  -> prefix: "", target: 1, suffix: "", pad: 3
    const match = value.match(/^([^0-9]*)(\d+)([^0-9]*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1] || "";
    const rawNumberStr = match[2];
    const suffix = match[3] || "";
    const target = parseInt(rawNumberStr, 10);
    const padLength = rawNumberStr.startsWith("0") ? rawNumberStr.length : 0;

    // Formata o número respeitando zeros à esquerda se houver (ex: 001)
    const formatNumber = (num: number) => {
      let s = Math.round(num).toString();
      if (padLength > 0) {
        s = s.padStart(padLength, "0");
      }
      return `${prefix}${s}${suffix}`;
    };

    const startAnimation = () => {
      if (animatedRef.current) return;
      animatedRef.current = true;

      const startTime = performance.now();
      const startVal = 1;

      // Easing cúbico suave (easeOutExpo / easeOutQuart)
      const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = startVal + (target - startVal) * easeOutQuart(progress);

        setDisplayValue(formatNumber(current));

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setDisplayValue(formatNumber(target));
        }
      };

      requestAnimationFrame(step);
    };

    // Observador para disparar quando entrar no viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    // Se já estiver visível logo de início
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      startAnimation();
    } else {
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
