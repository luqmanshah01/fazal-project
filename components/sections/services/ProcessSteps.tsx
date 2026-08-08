import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { PROCESS_STEPS } from "@/lib/data";

/**
 * 4-step engagement process — Figma node 239:1833 (1727 x 644, #F9F9F9).
 *
 * Figma exports four 156px "icons" that are byte-identical and contain no
 * glyph — each is three concentric circles (#FFEDED r78, #FF8080 r54,
 * #FF5050 r34) with the step number on top. Rebuilt here as nested rounded
 * divs rather than shipping four copies of the same SVG.
 *
 * The dashed connectors between circles are 2px, 4/4 dashes, on a
 * transparent-to-black gradient. They only make sense in the 4-across desktop
 * layout, so they are hidden once the steps stack.
 */
export function ProcessSteps() {
  return (
    <section id="process" className="w-full bg-surface-soft py-16 lg:py-20">
      <Container>
        <Reveal>
          <h2 className="text-center font-sans text-[clamp(1.875rem,3.71vw,64px)] font-extrabold leading-[1.16] tracking-[-0.0159em] text-black">
            <GradientText gradient="redBlack22">Our</GradientText> 4-Step
            Cybersecurity Engagement{" "}
            <GradientText gradient="blackRed55">Process</GradientText>
          </h2>
        </Reveal>

        <ol className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.05}>
              <li className="relative flex flex-col items-center text-center">
                {/* Dashed connector to the next step — desktop only */}
                {i < PROCESS_STEPS.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute left-[calc(50%+78px)] top-[78px] hidden h-px w-[calc(100%-156px+2rem)] bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0.45)_0_4px,transparent_4px_8px)] lg:block"
                  />
                ) : null}

                {/* Concentric rings — 156 / 108 / 68 in Figma */}
                <span
                  aria-hidden="true"
                  className="flex h-[156px] w-[156px] shrink-0 items-center justify-center rounded-full bg-step-ring-outer"
                >
                  <span className="flex h-[108px] w-[108px] items-center justify-center rounded-full bg-brand-red-light">
                    <span className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-brand-red" />
                  </span>
                </span>
                <span className="pointer-events-none absolute top-[56px] font-sans text-[clamp(1.75rem,2.42vw,41.82px)] font-extrabold tracking-[-0.0002em] text-white">
                  {step.number}
                </span>

                <h3 className="mt-6 whitespace-pre-line font-sans text-[clamp(1.125rem,1.19vw,20.63px)] font-extrabold leading-tight tracking-[-0.0007em] text-black">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-[280px] text-[clamp(0.875rem,0.85vw,14.73px)] font-light leading-snug tracking-[-0.051em] text-ink-500">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
