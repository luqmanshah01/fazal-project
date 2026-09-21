import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import type { SubServiceFlowStep } from "@/lib/types";

/**
 * "Why … Matters" — Figma node 341:4539, section 4.
 *
 * White band. Centred heading with a red italic serif last word, a centred
 * lede, then a three-step horizontal flow — pink circular icon, title, small
 * caption — joined by dotted arrows. A closing line sits underneath.
 *
 * The dotted connectors only make sense while the three steps sit in a row,
 * so they are hidden once the steps stack.
 *
 * ⚠️ BUILT FROM A SCREENSHOT — every geometric value is ESTIMATED.
 * See ESTIMATED-VALUES.md.
 */
export function SubServiceMatters({
  headingStart,
  headingEnd,
  lede,
  steps,
  closing,
}: {
  headingStart: string;
  headingEnd: string;
  lede: string;
  steps: SubServiceFlowStep[];
  closing: string;
}) {
  return (
    // overflow-hidden contains the dotted connector, whose width is a calc()
    // that reaches past its own column into the next one.
    <section
      id="why-it-matters"
      className="w-full overflow-hidden bg-white py-16 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8 lg:px-12">
        <Reveal>
          {/* ESTIMATED: 48px heading */}
          <h2 className="text-center font-sans text-[clamp(1.75rem,3.1vw,48px)] font-extrabold leading-tight tracking-tight text-black">
            {headingStart}{" "}
            <GradientText gradient="blackRed55">{headingEnd}</GradientText>
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mx-auto mt-6 max-w-[860px] text-center text-base leading-relaxed text-ink-muted-70 lg:text-[17px]">
            {lede}
          </p>
        </Reveal>

        <ol className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-3 lg:mt-16 lg:gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={0.1 + i * 0.08}>
              <li className="relative flex flex-col items-center text-center">
                {/* Dotted connector to the next step — row layout only */}
                {i < steps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute left-[calc(50%+48px)] top-[44px] hidden h-px w-[calc(100%-96px+2rem)] bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0.35)_0_3px,transparent_3px_9px)] after:absolute after:-right-1 after:-top-[4px] after:text-[10px] after:leading-none after:text-black/50 after:content-['▶'] sm:block"
                  />
                ) : null}

                {/* ESTIMATED: 88px pink circle */}
                <span
                  aria-hidden="true"
                  className="flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-full bg-step-ring-outer text-[34px] leading-none"
                >
                  {step.icon}
                </span>

                <h3 className="mt-5 font-sans text-[clamp(0.9375rem,1.05vw,17px)] font-extrabold tracking-tight text-black">
                  {step.title}
                </h3>
                <p className="mt-1 text-[clamp(0.6875rem,0.72vw,12px)] font-light text-ink-500">
                  {step.caption}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-14 max-w-[820px] text-center text-base leading-relaxed text-ink-muted-70 lg:mt-16 lg:text-[17px]">
            {closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
