"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type StatProps = {
  value: string;
  label: string;
  className?: string;
};

function parseTarget(value: string): { target: number; suffix: string } {
  const match = value.match(/^([\d.]+)(.*)$/);
  if (!match) return { target: 0, suffix: value };
  return { target: parseFloat(match[1]), suffix: match[2] };
}

export function Stat({ value, label, className }: StatProps) {
  const { target, suffix } = parseTarget(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1500;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(target * eased);
              if (progress < 1) requestAnimationFrame(tick);
              else setDisplay(target);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  const isDecimal = value.includes(".");
  const shown = isDecimal ? display.toFixed(1) : Math.round(display).toString();

  return (
    <div ref={ref} className={cn("flex flex-col items-center gap-2", className)}>
      <span
        className="font-sans font-extrabold align-middle"
        style={{
          fontSize: "55.88px",
          lineHeight: "62.86px",
          letterSpacing: "-1.31px",
        }}
      >
        <span className="text-gradient-stat-dark">{shown}</span>
        <span className="text-brand-red">{suffix}</span>
      </span>
      <span className="whitespace-pre-line text-center text-[19px] font-normal leading-tight text-black">
        {label}
      </span>
    </div>
  );
}
