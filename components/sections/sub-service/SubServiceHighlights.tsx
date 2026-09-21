import { Reveal } from "@/components/ui/Reveal";
import type { SubServiceHighlight } from "@/lib/types";

/**
 * Two dark highlight cards — Figma node 341:4539, section 3.
 *
 * A near-black band with a vertical stripe texture and a red glow bleeding in
 * from the left and right edges. Two translucent cards sit on it, each with a
 * white circular icon badge overlapping the top, a large white heading, and a
 * justified body.
 *
 * ⚠️ BUILT FROM A SCREENSHOT — the Figma API was rate-limited. Every size,
 * radius, colour stop and spacing value here is ESTIMATED, not measured.
 * See ESTIMATED-VALUES.md.
 */
export function SubServiceHighlights({
  highlights,
}: {
  highlights: SubServiceHighlight[];
}) {
  return (
    <section
      id="highlights"
      className="relative isolate w-full overflow-hidden bg-black py-20 lg:py-28"
    >
      {/* ESTIMATED: vertical stripe texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.07] [background-image:repeating-linear-gradient(90deg,#fff_0_1px,transparent_1px_6px)]"
      />
      {/* ESTIMATED: red glow bleeding from both edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-1/4 top-1/2 -z-10 h-[120%] w-[45vw] -translate-y-1/2 rounded-full bg-brand-red/40 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-1/4 top-1/2 -z-10 h-[120%] w-[45vw] -translate-y-1/2 rounded-full bg-brand-red/40 blur-[140px]"
      />

      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-[52px]">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} className="h-full">
              {/* ESTIMATED: radius, border and fill of the card */}
              <div className="flex h-full flex-col items-center rounded-[28px] border border-white/15 bg-white/[0.04] px-8 pb-12 pt-10 text-center backdrop-blur-sm lg:px-14 lg:pb-14 lg:pt-12">
                {/*
                  The badge sits fully INSIDE the card near the top — it does
                  not overlap the card edge. Kept in normal flow so it centres
                  with the flex column.
                  ESTIMATED: 96px white circle, 40px glyph.
                */}
                <span
                  aria-hidden="true"
                  className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-white text-[40px] leading-none shadow-lg"
                >
                  {item.icon}
                </span>

                <h3 className="mt-8 font-sans text-[clamp(1.5rem,2.2vw,38px)] font-extrabold leading-tight tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-6 text-left text-[clamp(0.875rem,1vw,17px)] font-light leading-relaxed text-white/75 [text-align:justify]">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
