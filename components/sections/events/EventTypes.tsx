import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { EVENT_TYPES, EVENT_TYPES_INTRO } from "@/lib/data";

/**
 * What You'll Find Here — Figma node 341:4324 (1727 x 914, white).
 *
 * Six blocks in a 3 x 2 grid inside a 1439.82 x 400.15 group at (144, 371).
 * Columns sit at x 33.35 / 525.2 / 1067.06 and rows at y 10.72 / 263.19, so
 * the column pitch is ~491.9px and the row pitch ~252.5px.
 *
 * Each block carries a #FF5050 vertical rule on its left edge — 5.95px wide
 * and 154.82px tall (nodes 341:4350-4355), the same treatment as the home
 * page's "Why SV Tech" section but heavier.
 *
 * A faint mesh (341:4325, 1727 x 887 at y13) sits behind the whole section.
 */
export function EventTypes() {
  return (
    <section
      id="event-types"
      className="relative isolate w-full overflow-hidden bg-white py-16 lg:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[1.4%] -z-10 h-[97%] bg-[url('/images/events/types-bg-mask.svg')] bg-cover bg-center bg-no-repeat opacity-60"
      />

      <div className="mx-auto w-full max-w-[1584px] px-6 sm:px-8 lg:px-12">
        <Reveal>
          {/* 651 x 83 box, 70.747px on an 82.02px line */}
          <h2 className="mx-auto max-w-[651px] text-center font-sans text-[clamp(2rem,4.1vw,70.75px)] font-extrabold leading-[1.16] tracking-[-0.0316em] text-black">
            <GradientText gradient="redBlack27b">
              {EVENT_TYPES_INTRO.headingStart}
            </GradientText>{" "}
            {EVENT_TYPES_INTRO.headingRest}
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          {/* H2 ends 172, lede starts 201 — a 29px gap */}
          <p className="mx-auto mt-8 max-w-[1014px] text-center text-base font-light leading-relaxed tracking-[-0.0842em] text-black lg:mt-[29px] lg:text-[clamp(1.125rem,1.54vw,26.53px)]">
            {EVENT_TYPES_INTRO.lede}
          </p>
        </Reveal>

        {/* Lede ends 297, group starts 371 — a 74px gap.
            Column gap 491.9 - 366.8 ≈ 125px, row gap 263.19 - 133.38 ≈ 130px */}
        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 lg:mt-[74px] lg:grid-cols-3 lg:gap-x-[125px] lg:gap-y-[130px]">
          {EVENT_TYPES.map((type, i) => (
            <Reveal key={type.title} delay={i * 0.06}>
              {/* 5.95px #FF5050 rule, 154.82px tall */}
              <div className="relative pl-6 md:pl-8">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 w-[5.95px] rounded-full bg-brand-red h-full lg:h-[154.82px]"
                />
                <h3 className="font-sans text-[clamp(1.375rem,1.93vw,33.35px)] font-extrabold leading-tight tracking-[-0.0007em] text-black">
                  {type.title}
                </h3>
                <p className="mt-3 text-base font-light leading-snug tracking-[-0.0425em] text-ink-500 lg:mt-[10px] lg:text-[clamp(1.125rem,1.66vw,28.58px)]">
                  {type.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
