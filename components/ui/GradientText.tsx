import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Gradient =
  | "hero"
  | "heroEnd"
  | "redBlack"
  | "blackRed"
  | "stat"
  | "quote"
  | "quoteReverse"
  // About page — each section has its own stops, they are not interchangeable
  | "aboutHeroStart"
  | "aboutHeroEnd"
  | "redBlack16"
  | "blackRed69"
  | "redBlack27"
  | "blackRed45"
  | "redBlack29"
  | "blackRed57"
  | "redBlack33"
  | "blackRed83"
  // Service page — again per-section, again not interchangeable
  | "svcHeroStart"
  | "svcHeroEnd"
  | "redBlack41"
  | "blackRed22"
  | "redBlack27b"
  | "blackRed56"
  | "redBlack22"
  | "blackRed55"
  | "redBlack46"
  | "blackRed74";

const GRADIENTS: Record<Gradient, string> = {
  hero: "text-gradient-hero",
  heroEnd: "text-gradient-hero-end",
  redBlack: "text-gradient-red-black",
  blackRed: "text-gradient-black-red",
  stat: "text-gradient-stat",
  quote: "text-gradient-quote",
  quoteReverse: "text-gradient-quote-reverse",
  aboutHeroStart: "text-gradient-about-hero-start",
  aboutHeroEnd: "text-gradient-about-hero-end",
  redBlack16: "text-gradient-red-black-16",
  blackRed69: "text-gradient-black-red-69",
  redBlack27: "text-gradient-red-black-27",
  blackRed45: "text-gradient-black-red-45",
  redBlack29: "text-gradient-red-black-29",
  blackRed57: "text-gradient-black-red-57",
  redBlack33: "text-gradient-red-black-33",
  blackRed83: "text-gradient-black-red-83",
  svcHeroStart: "text-gradient-svc-hero-start",
  svcHeroEnd: "text-gradient-svc-hero-end",
  redBlack41: "text-gradient-red-black-41",
  blackRed22: "text-gradient-black-red-22",
  redBlack27b: "text-gradient-red-black-27b",
  blackRed56: "text-gradient-black-red-56",
  redBlack22: "text-gradient-red-black-22",
  blackRed55: "text-gradient-black-red-55",
  redBlack46: "text-gradient-red-black-46",
  blackRed74: "text-gradient-black-red-74",
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
