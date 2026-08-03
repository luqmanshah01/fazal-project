import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  variant?: "light" | "dark" | "transparent";
  children: ReactNode;
};

const VARIANT_STYLES: Record<NonNullable<SectionProps["variant"]>, string> = {
  light: "bg-white text-black",
  dark: "bg-black text-white",
  transparent: "",
};

export function Section({
  id,
  className,
  variant = "light",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full py-20 md:py-24 lg:py-28",
        VARIANT_STYLES[variant],
        className,
      )}
    >
      {children}
    </section>
  );
}
