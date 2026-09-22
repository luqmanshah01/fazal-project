import Link from "next/link";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { INSIGHT_AREAS } from "@/lib/data";
import type { ReactNode } from "react";

type InsightAreasProps = {
  /** Figma gives the two frames different headings but identical cards */
  heading?: ReactNode;
  headingMaxWidthClass?: string;
  /** Blog draws the section on #F9F9F9, Case Studies on white */
  surfaceClass?: string;
  id?: string;
  /**
   * Figma frame height at 1727px, as an `lg:min-h-*` class. Blog (341:4503)
   * measures 751. The Case Studies frame has not been fetched, so that page
   * passes "".
   */
  minHeightClass?: string;
};

/**
 * Insights Across Core Areas — Figma node 341:4503 (1747 x 751, #F9F9F9).
 *
 * Three cards, ~460 x 486 at x154.91 / 634 / 1115, white on a #FF5050
 * 0.892px border with a 44.6px radius. Each carries a 97.23px #FFEDED circle
 * with an emoji glyph, an UPPERCASE 31.77px title, a centred 22.69px body,
 * and a red pill button (radius 7.01, inset highlight, 16.36px Light label
 * with a soft text shadow).
 *
 * ⚠️ Figma pairs the shield glyph with "IT Infrastructure" and the monitor
 * glyph with "Cybersecurity". That reads as swapped, but it is reproduced as
 * drawn rather than silently corrected.
 */
export function InsightAreas({
  heading,
  headingMaxWidthClass = "max-w-[863px]",
  surfaceClass = "bg-surface-soft",
  id = "insight-areas",
  minHeightClass = "lg:min-h-[751px]",
}: InsightAreasProps = {}) {
  return (
    // Figma 341:4503 — 1747 x 751
    <section
      id={id}
      className={`w-full py-16 lg:py-20 ${surfaceClass} ${minHeightClass}`}
    >
      {/* Cards span x154.91 -> 1577 = 1422px */}
      <div className="mx-auto w-full max-w-[1422px] px-6 sm:px-8 lg:px-12">
        <Reveal>
          <h2
            className={`mx-auto text-center font-sans text-[clamp(1.875rem,3.71vw,64px)] font-extrabold leading-[1.16] tracking-[-0.0159em] text-black ${headingMaxWidthClass}`}
          >
            {heading ?? (
              <>
                <GradientText gradient="homeIndustriesStart">
                  Insights
                </GradientText>{" "}
                Across Core{" "}
                <GradientText gradient="blogAreasEnd">Areas</GradientText>
              </>
            )}
          </h2>
        </Reveal>

        {/* Column gap is 20px (634 - 614), not 22 */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {INSIGHT_AREAS.map((area, i) => (
            <Reveal key={area.title} delay={i * 0.06} className="h-full">
              {/* Figma card internals: circle y76, title y210, body y267,
                  button y382 within a 486px card */}
              <div className="flex h-full min-h-[486px] flex-col items-center rounded-[44.6px] border-[0.892px] border-brand-red bg-white px-8 py-12 text-center lg:pt-[76px] lg:pb-[66px]">
                {/* 97.23px #FFEDED circle with the glyph on top */}
                <span
                  aria-hidden="true"
                  className="flex h-[97.23px] w-[97.23px] shrink-0 items-center justify-center rounded-full bg-step-ring-outer text-[42px] leading-none"
                >
                  {area.icon}
                </span>

                <h3 className="mt-10 font-sans text-[clamp(1.5rem,1.84vw,31.77px)] font-extrabold uppercase leading-tight tracking-[-0.0007em] text-black">
                  {area.title}
                </h3>

                <p className="mt-5 max-w-[383px] text-[clamp(1rem,1.31vw,22.69px)] font-light leading-snug tracking-[-0.051em] text-ink-500">
                  {area.description}
                </p>

                <Link
                  href={area.href}
                  className="mt-auto inline-flex min-h-[44px] items-center justify-center rounded-[7.01px] bg-brand-red px-6 text-[clamp(0.875rem,0.95vw,16.36px)] font-light tracking-[-0.0927em] text-white shadow-[inset_4.68px_7.01px_8.53px_rgba(255,255,255,0.25)] drop-shadow-[0_0.58px_1.4px_rgba(0,0,0,0.25)] transition-all hover:brightness-110"
                >
                  {area.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
