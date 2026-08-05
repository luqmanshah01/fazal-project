import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  variant = "light",
  className,
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
            "inline-flex w-full items-center justify-center rounded-full border px-4 py-1 text-[13px] font-normal tracking-tight",
            isDark
              ? "border-white/30 bg-white/5 text-white"
              : "border-brand-red/40 bg-brand-red/5 text-black",
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "font-sans font-extrabold tracking-[-0.03em]",
          "text-[42px] leading-[1.1] sm:text-[52px] lg:text-[64px] lg:leading-[1.16]",
          isDark ? "text-white" : "text-black",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-3xl text-lg font-light leading-relaxed sm:text-xl lg:text-[28px] lg:leading-[1.35] tracking-[-0.02em]",
            isDark ? "text-white/80" : "text-ink-500",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
