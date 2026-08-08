"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { NAV_ITEMS } from "@/lib/data";
import { cn } from "@/lib/utils";

// A link is active only when it points at a route, never at a hash target.
function isActiveHref(href: string, pathname: string): boolean {
  if (href.includes("#")) return false;
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute inset-x-0 top-0 z-50 pt-6 md:pt-10 lg:pt-[60px]">
      <div className="w-full px-6 lg:px-12 xl:px-[clamp(3rem,13.38vw,231px)]">
        <div className="mx-auto flex max-w-[1267px] items-center justify-between gap-6 rounded-full border border-brand-red/50 bg-black/50 px-5 py-3 backdrop-blur-md lg:h-[85px] lg:py-0 lg:pl-[72px] lg:pr-16">
          <Link href="/" className="flex items-center gap-2" aria-label="SV Tech home">
            <Image
              src="/images/logos/logo.svg"
              alt="SV Tech"
              width={78}
              height={46}
              priority
            />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-7">
            {NAV_ITEMS.map((item) => {
              const active = isActiveHref(item.href, pathname);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    // px-2 matches the 8px padding in Figma; min-h-[44px] is an
                    // accessibility deviation from the design's 41.6px hit area.
                    "group inline-flex min-h-[44px] items-center gap-1.5 rounded-[10px] px-2 text-[15px] tracking-tight transition-colors",
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
              className="hidden items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-btn-inset-sm transition-all hover:brightness-110 lg:inline-flex lg:h-[41px] lg:min-w-[219px]"
            >
              Contact Us
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white lg:hidden"
            >
              <Icon icon={open ? "mdi:close" : "mdi:menu"} className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          className={cn(
            "mt-3 overflow-hidden rounded-2xl border border-white/15 bg-black/85 backdrop-blur-lg transition-all duration-300 lg:hidden",
            open ? "max-h-[500px] py-4 opacity-100" : "max-h-0 py-0 opacity-0",
          )}
        >
          <nav className="flex flex-col gap-1 px-4">
            {NAV_ITEMS.map((item) => {
              const active = isActiveHref(item.href, pathname);
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
