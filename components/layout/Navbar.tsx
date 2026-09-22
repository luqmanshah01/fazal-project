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

          {/*
            Figma 239:1482: the nav group is a row with a 4px gap, and each
            link carries 8px of padding — so adjacent labels sit 20px apart.
            Scaling the client's screenshot off the 1267px pill measures
            19-21px between labels, which agrees.

            `lg:gap-4 xl:gap-7` was giving 32px at lg and 44px at xl. That
            over-wide group is also what forced the Contact Us button to drop
            its Figma width below xl; at 4px the whole row fits at 1024 with
            ~85px to spare, so the button keeps its measured width from lg up.
          */}
          <nav className="hidden items-center lg:flex lg:gap-1">
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
                    // T22/T23: 16px on 25.6, tracking -0.005em. `text-[15px]`
                    // and `tracking-tight` (-0.025em) were both off.
                    // min-h-[44px] stays: Figma's hit area is ~41px, and the
                    // 44px target is a deliberate, signed-off deviation.
                    "group inline-flex min-h-[44px] shrink-0 items-center gap-1.5 whitespace-nowrap rounded-[10px] px-2 text-[16px] tracking-[-0.005em] transition-colors",
                    active
                      ? "font-bold text-brand-red"
                      : "font-normal text-white/90 hover:text-white",
                  )}
                >
                  {item.label}
                  {item.hasDropdown ? (
                    <Icon
                      icon="ep:arrow-down-bold"
                      // Figma draws this at 15 x 12, not 12 x 12
                      className="h-3 w-[15px] transition-transform group-hover:translate-y-0.5"
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              /*
                Figma 239:1482: 221.41 x 44, padding 10px 24px, fill #FF5050,
                border #CC2929 0.8px, radius 100px, label Inter SemiBold 16px
                (T24 — the one place in the navbar that is not Bricolage).

                Four of those were missing. There was no border at all, even
                though --color-brand-red-deep was already in globals.css
                carrying the comment "navbar Contact Us border" — defined and
                never wired up. The label was Bricolage 14px, and the box was
                41px tall.

                The width no longer needs to wait for xl: the nav group was
                over-wide because of its gap (see above), and at the Figma 4px
                gap the full row fits at 1024px with room to spare. 44px also
                clears the touch-target floor that 41px did not.
              */
              className="hidden shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border-[0.8px] border-brand-red-deep bg-brand-red px-6 py-3 font-inter text-[16px] font-semibold text-white shadow-btn-inset-sm transition-all hover:brightness-110 lg:inline-flex lg:h-[44px] lg:min-w-[221.41px]"
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
