import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Gradient =
  | "hero"
  | "heroEnd"
  | "redBlack"
  | "blackRed"
  | "stat"
  | "quote"
  | "quoteReverse";

const GRADIENTS: Record<Gradient, string> = {
  hero: "text-gradient-hero",
  heroEnd: "text-gradient-hero-end",
  redBlack: "text-gradient-red-black",
  blackRed: "text-gradient-black-red",
  stat: "text-gradient-stat",
  quote: "text-gradient-quote",
  quoteReverse: "text-gradient-quote-reverse",
};

type GradientTextProps = {
  gradient?: Gradient;
  italic?: boolean;
  className?: string;
  children: ReactNode;
};

export function GradientText({
  gradient = "redBlack",
  italic = true,
  className,
  children,
}: GradientTextProps) {
  return (
    <span
      className={cn(
        GRADIENTS[gradient],
        italic && "font-serif italic",
        className,
      )}
    >
      {children}
    </span>
  );
}
