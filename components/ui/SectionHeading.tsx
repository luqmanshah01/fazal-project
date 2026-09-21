import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
  className?: string;
  /** Figma lede boxes vary per section — 1357px on Services, 1425px on
   *  Industries, 813px on Blog. Replaces the default rather than stacking. */
  descriptionMaxWidthClass?: string;
  /** Figma H2 boxes vary per section too. */
  titleMaxWidthClass?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  variant = "light",
  className,
  descriptionMaxWidthClass = "max-w-3xl",
  titleMaxWidthClass,
}: SectionHeadingProps) {
  const isDark = variant === "dark";
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span
          style={{ maxWidth: "357.55px", minHeight: "27.61px" }}
          className={cn(
            // Figma: 357.55 x 27.61, fill rgba(255,80,80,.1),
            // border rgba(255,80,80,.3) 0.812px, radius 61.72, text 13.805px
            "inline-flex w-full items-center justify-center rounded-full border px-4 py-1 text-[13.81px] font-normal tracking-tight",
            isDark
              ? "border-white/30 bg-white/10 text-white"
              : "border-brand-red/30 bg-brand-red-soft text-black",
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          // Figma style_1bbc41b3 — 64px on a 74.2px line, tracking -0.0316em
          "font-sans font-extrabold tracking-[-0.0316em]",
          "text-[42px] leading-[1.1] sm:text-[52px] lg:text-[64px] lg:leading-[1.16]",
          isDark ? "text-white" : "text-black",
          titleMaxWidthClass,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            // Figma style_4185848e — Light 28px, tracking -0.0721em, #696969
            descriptionMaxWidthClass,
            "text-lg font-light leading-relaxed sm:text-xl lg:text-[28px] lg:leading-[1.35] tracking-[-0.0721em]",
            isDark ? "text-white/80" : "text-ink-500",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
