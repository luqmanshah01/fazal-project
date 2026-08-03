import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BadgeProps = {
  variant?: "light" | "dark";
  className?: string;
  children: ReactNode;
};

export function Badge({ variant = "light", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-1.5 text-xs tracking-tight",
        variant === "light"
          ? "border border-brand-red/40 bg-white text-black"
          : "border border-white/40 bg-white/5 text-white",
        className,
      )}
    >
      {children}
    </span>
  );
}
