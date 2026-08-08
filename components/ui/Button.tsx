import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonSize = "sm" | "md" | "lg" | "cta" | "hero" | "chip";
type ButtonVariant =
  | "primary"
  | "primaryCta"
  | "secondary"
  | "ghost"
  | "ghostRed";

// `cn` is a plain join, not tailwind-merge, so each size owns its font weight
// rather than relying on CSS source order to override a shared one.
const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs font-medium rounded-[6.79px]",
  md: "h-[54px] px-8 text-base font-medium rounded-[13.9px]",
  lg: "h-[59px] px-11 text-lg font-medium rounded-[14.98px]",
  // About page CTA band — Figma 239:1689/1690
  cta: "h-[40px] px-[30.29px] text-[18.23px] font-semibold rounded-[10.1px]",
  // Service page hero — Figma 239:1707/1708
  hero: "h-[48px] px-[36.34px] text-[21.88px] font-semibold rounded-[12.11px]",
  // Service card chip — Figma 239:1825. 27px clears WCAG 2.2 AA target size
  // (24x24) but not the 44px AAA guideline.
  chip: "h-[27px] px-[20.38px] text-[12.27px] font-semibold rounded-[6.79px]",
};

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  // Border is 2.35px in Figma on both the home hero (97:520) and About hero (239:1478)
  primary:
    "bg-brand-red text-white border-[2.35px] border-white/50 shadow-[inset_3.92px_4.71px_4.86px_rgba(255,255,255,0.25)] hover:brightness-110 active:brightness-95",
  // About page CTA primary — no border, softer inset than `primary`, Figma 239:1689
  primaryCta:
    "bg-brand-red text-white shadow-btn-inset-cta hover:brightness-110 active:brightness-95",
  secondary:
    "bg-white text-black border border-black/10 hover:bg-ink-100",
  ghost: "bg-transparent text-white border border-white/40 hover:bg-white/10",
  // About page CTA secondary — transparent with a red border, Figma 239:1690
  ghostRed:
    "bg-transparent text-white border-[1.71px] border-brand-red hover:bg-brand-red/10",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<"a">, "href"> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center tracking-tight transition-all duration-150 whitespace-nowrap select-none",
    SIZE_STYLES[size],
    VARIANT_STYLES[variant],
    className,
  );

  if ("href" in rest && rest.href) {
    const { href, ...linkRest } = rest;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
