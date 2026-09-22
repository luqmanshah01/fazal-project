"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { NAV_ITEMS } from "@/lib/data";
import { cn } from "@/lib/utils";

// A link is active only when it points at a route, never at a hash target.
// `activePrefix` exists because "Services" links at one specific service page
// but must light up across every /services/* route — Figma draws it active on
// both the Cybersecurity and IT Infrastructure frames.
function isActiveHref(
  href: string,
  pathname: string,
  activePrefix?: string | string[],
): boolean {
  if (activePrefix) {
    const prefixes = Array.isArray(activePrefix) ? activePrefix : [activePrefix];
    return prefixes.some((prefix) => pathname.startsWith(prefix));
  }
  if (href.includes("#")) return false;
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute inset-x-0 top-0 z-50 pt-6 md:pt-10 lg:pt-[60px]">
      <div className="w-full px-6 lg:px-12 xl:px-[clamp(3rem,13.38vw,231px)]">
        {/*
          Figma measures the pill at 1727px: 72px left / 64px right padding.
          That leaves too little room for the nav at 1024px, which pushed
          "About Us" onto a second line — so the Figma padding is applied from
          xl up, with tighter padding at lg.
        */}
        <div className="mx-auto flex max-w-[1267px] items-center justify-between gap-6 rounded-full border border-brand-red/50 bg-black/50 px-5 py-3 backdrop-blur-md lg:h-[85px] lg:py-0 lg:pl-8 lg:pr-6 xl:pl-[72px] xl:pr-16">
          <Link href="/" className="flex items-center gap-2" aria-label="SV Tech home">
            <Image
              src="/images/logos/logo.svg"
              alt="SV Tech"
              width={78}
              height={46}
              priority
            />
          </Link>

          <nav className="hidden items-center lg:flex lg:gap-4 xl:gap-7">
            {NAV_ITEMS.map((item) => {
              const active = isActiveHref(item.href, pathname, item.activePrefix);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    // px-2 matches the 8px padding in Figma; min-h-[44px] is an
                    // accessibility deviation from the design's 41.6px hit area.
                    // whitespace-nowrap + shrink-0 stop two-word labels like
                    // "About Us" breaking onto a second line when the row gets
                    // tight between lg and xl.
                    "group inline-flex min-h-[44px] shrink-0 items-center gap-1.5 whitespace-nowrap rounded-[10px] px-2 text-[15px] tracking-tight transition-colors",
                    active
                      ? "font-bold text-brand-red"
                      : "font-normal text-white/90 hover:text-white",
                  )}
                >
                  {item.label}
                  {item.hasDropdown ? (
                    <Icon
                      icon="ep:arrow-down-bold"
                      className="h-3 w-3 transition-transform group-hover:translate-y-0.5"
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              // Figma's 219px width is measured at 1727px and crowds the nav at
              // 1024px, so it only applies from xl up; at lg the button hugs.
              className="hidden shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-btn-inset-sm transition-all hover:brightness-110 lg:inline-flex lg:h-[41px] xl:min-w-[219px]"
            >
              Contact Us
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white lg:hidden"
            >
              <Icon icon={open ? "mdi:close" : "mdi:menu"} className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/*
          `inert` while closed. The panel collapses to `max-h-0 opacity-0` but
          stays in the DOM so the height can transition — which left its six
          links keyboard-focusable and screen-reader-visible at every width,
          including desktop where the menu can never be opened. `inert` is the
          one thing that removes them without removing the animation.
        */}
        <div
          id="mobile-nav"
          inert={!open}
          className={cn(
            "mt-3 overflow-hidden rounded-2xl border border-white/15 bg-black/85 backdrop-blur-lg transition-all duration-300 lg:hidden",
            open ? "max-h-[500px] py-4 opacity-100" : "max-h-0 py-0 opacity-0",
          )}
        >
          <nav className="flex flex-col gap-1 px-4">
            {NAV_ITEMS.map((item) => {
              const active = isActiveHref(item.href, pathname, item.activePrefix);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-3 py-3 text-base transition-colors",
                    active
                      ? "font-bold text-brand-red"
                      : "text-white/90 hover:bg-white/5",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
