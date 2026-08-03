"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { NAV_ITEMS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 pt-6 md:pt-10">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-6 px-6 lg:px-12">
        <Link href="/" className="flex items-center gap-2" aria-label="SV Tech home">
          <Image
            src="/images/logos/logo.svg"
            alt="SV Tech"
            width={78}
            height={46}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group inline-flex items-center gap-1.5 text-[15px] font-normal tracking-tight text-white/90 transition-colors hover:text-white"
            >
              {item.label}
              {item.hasDropdown ? (
                <Icon
                  icon="ep:arrow-down-bold"
                  className="h-3 w-3 transition-transform group-hover:translate-y-0.5"
                />
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-[inset_1.92px_2.30px_2.38px_rgba(255,255,255,0.25)] transition-all hover:brightness-110 lg:inline-flex"
          >
            Contact Us
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white lg:hidden"
          >
            <Icon
              icon={open ? "mdi:close" : "mdi:menu"}
              className="h-5 w-5"
            />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "mx-4 mt-3 overflow-hidden rounded-2xl border border-white/15 bg-black/85 backdrop-blur-lg transition-all duration-300 lg:hidden",
          open ? "max-h-[500px] py-4 opacity-100" : "max-h-0 py-0 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base text-white/90 transition-colors hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
