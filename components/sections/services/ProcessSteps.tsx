import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { PROCESS_STEPS } from "@/lib/data";
import type { ProcessStep } from "@/lib/types";
import type { ComponentProps } from "react";

type Gradient = ComponentProps<typeof GradientText>["gradient"];

type ProcessStepsProps = {
  steps?: ProcessStep[];
  heading?: { start: string; middle: string; end: string };
  gradientStart?: Gradient;
  gradientEnd?: Gradient;
  /** Figma H2 box — 754px on Cybersecurity, 1065px on IT Infrastructure */
  headingMaxWidthClass?: string;
};

/**
 * 4-step engagement process — Figma nodes 239:1833 (Cybersecurity) and
 * 341:3687 (IT Infrastructure). Both are 1727 x 644 on #F9F9F9 with identical
 * geometry; only the copy and gradient stops differ, so they are props.
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
export function ProcessSteps({
  steps = PROCESS_STEPS,
  heading = {
    start: "Our",
    middle: "4-Step Cybersecurity Engagement",
    end: "Process",
  },
  gradientStart = "redBlack22",
  gradientEnd = "blackRed55",
  headingMaxWidthClass = "max-w-[754px]",
}: ProcessStepsProps = {}) {
  return (
    /* Figma 239:1833 — 1727 x 644, H2 at y42. Safe as a constant rather than
       a prop: 341:3687 (IT Infrastructure) measures the same 1727 x 644 with
       identical geometry, per the service-page spec. */
    <section
      id="process"
      className="w-full bg-surface-soft py-16 lg:min-h-[644px] lg:pb-20 lg:pt-[42px]"
    >
      {/*
        Figma 239:1833 — the four 156px circles sit at x246 / 606 / 966 / 1326,
        a 360px pitch. Solving 4W + 3G = span with W + G = 360 and the circles
        centred (246 = 144 + (360-156)/2) gives W = 360, G = 0: four equal
        360px columns with NO gap, spanning 144 -> 1584 = 1440px.
        1440 + 96px of `lg` padding = 1536px.
      */}
      <Container maxWidthClass="max-w-[1536px]">
        <Reveal>
          <h2
            className={`mx-auto text-center font-sans text-[clamp(1.875rem,3.71vw,64px)] font-extrabold leading-[1.16] tracking-[-0.0159em] text-black ${headingMaxWidthClass}`}
          >
            <GradientText gradient={gradientStart}>
              {heading.start}
            </GradientText>{" "}
            {heading.middle}{" "}
            <GradientText gradient={gradientEnd}>{heading.end}</GradientText>
          </h2>
        </Reveal>

        {/* lg:gap-0 — Figma's column pitch IS the column width (see above), so
            any gap here would shrink the columns below 360px and pull the
            connectors out of alignment with the circles. */}
        <ol className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-0">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.05}>
              <li className="relative flex flex-col items-center text-center">
                {/*
                  Dashed connector — desktop only. Figma 239:1833 draws it
                  204px wide at y324: a 2px stroke on 4,4 dashes, filled with
                  `linear-gradient(90deg, transparent -> #000)`.

                  With 360px columns, `100% - 156px` is exactly the 204px
                  Figma measures (360 - the 156px circle). The gradient is the
                  background and the dashes are a mask over it, because a
                  repeating-linear-gradient cannot both fade and dash.
                */}
                {i < steps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute left-[calc(50%+78px)] top-[78px] hidden h-[2px] w-[calc(100%-156px)] bg-[linear-gradient(90deg,transparent,#000)] [mask-image:repeating-linear-gradient(90deg,#000_0_4px,transparent_4px_8px)] lg:block"
                  />
                ) : null}

                {/*
                  Concentric rings — 156 / 108 / 68 in Figma. The number lives
                  inside the innermost circle rather than being positioned over
                  it, so it stays centred as the type clamps down.
                */}
                <span className="flex h-[156px] w-[156px] shrink-0 items-center justify-center rounded-full bg-step-ring-outer">
                  <span className="flex h-[108px] w-[108px] items-center justify-center rounded-full bg-brand-red-light">
                    <span className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-brand-red font-sans text-[clamp(1.75rem,2.42vw,41.82px)] font-extrabold leading-none tracking-[-0.0002em] text-white">
                      {step.number}
                    </span>
                  </span>
                </span>

                <h3 className="mt-6 whitespace-pre-line font-sans text-[clamp(1.125rem,1.19vw,20.63px)] font-extrabold leading-tight tracking-[-0.0007em] text-black">
                  {step.title}
                </h3>
                {/* Figma body boxes run 190-223px; 223 is the widest, so it is
                    the cap. 280px was letting these run wider than any of them. */}
                <p className="mt-4 max-w-[223px] text-[clamp(0.875rem,0.85vw,14.73px)] font-light leading-snug tracking-[-0.051em] text-ink-500">
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
