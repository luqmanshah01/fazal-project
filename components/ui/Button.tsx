import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "primary" | "secondary" | "ghost";

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs rounded-[6.79px]",
  md: "h-[54px] px-8 text-base rounded-[13.9px]",
  lg: "h-[59px] px-11 text-lg rounded-[14.98px]",
};

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-red text-white border border-white/50 shadow-[inset_3.92px_4.71px_4.86px_rgba(255,255,255,0.25)] hover:brightness-110 active:brightness-95",
  secondary:
    "bg-white text-black border border-black/10 hover:bg-ink-100",
  ghost: "bg-transparent text-white border border-white/40 hover:bg-white/10",
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
    "inline-flex items-center justify-center font-medium tracking-tight transition-all duration-150 whitespace-nowrap select-none",
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
