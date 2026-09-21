import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import type { SubServiceReason } from "@/lib/types";

/**
 * "Why Choose SV Tech" — Figma node 341:4539, section 5.
 *
 * A soft pink-to-white wash behind four equal cards. Each card is near-white
 * on a thin red border with a generous radius, holding a large icon, a bold
 * title and a short centred body.
 *
 * ⚠️ BUILT FROM A SCREENSHOT — every geometric value and the background wash
 * are ESTIMATED, not measured. See ESTIMATED-VALUES.md.
 */
export function SubServiceReasons({
  lede,
  reasons,
}: {
  lede: string;
  reasons: SubServiceReason[];
}) {
  return (
    <section
      id="why-sv-tech"
      className="relative isolate w-full overflow-hidden py-16 lg:py-24"
    >
      {/* ESTIMATED: pink wash fading to white toward the centre */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_50%_0%,#ffffff_38%,#ffe9e9_100%)]"
      />

      <div className="mx-auto w-full max-w-[1320px] px-6 sm:px-8 lg:px-12">
        <Reveal>
          <h2 className="text-center font-sans text-[clamp(1.75rem,3.1vw,48px)] font-extrabold leading-tight tracking-tight text-black">
            <GradientText gradient="redBlack22">Why</GradientText> Choose SV
            Tech
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mx-auto mt-5 max-w-[720px] text-center text-base leading-relaxed text-ink-muted-70 lg:text-[17px]">
            {lede}
          </p>
        </Reveal>

        {/* ESTIMATED: 4-up at lg, 20px gap */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={0.1 + i * 0.06} className="h-full">
              {/* ESTIMATED: radius 16, 1px red border, #FBFBFB fill */}
              <div className="flex h-full flex-col items-center rounded-[16px] border border-brand-red/60 bg-ink-50 px-6 py-8 text-center">
                <span
                  aria-hidden="true"
                  className="text-[40px] leading-none"
                >
                  {reason.icon}
                </span>
                <h3 className="mt-5 font-sans text-[clamp(0.9375rem,1.05vw,17px)] font-extrabold tracking-tight text-black">
                  {reason.title}
                </h3>
                <p className="mt-3 text-[clamp(0.8125rem,0.87vw,14px)] font-light leading-snug text-ink-500">
                  {reason.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
