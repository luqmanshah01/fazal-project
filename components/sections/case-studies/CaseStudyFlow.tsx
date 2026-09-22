import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { CASE_STUDY_FLOW_INTRO, CASE_STUDY_FLOW_STEPS } from "@/lib/data";

/**
 * From Challenge to Solution — Figma node 341:4090 (1727 x 948, #F9F9F9).
 *
 * Figma draws the five cards, hexagons and the dashed connecting arc as ONE
 * flattened 1295.45 x 513 SVG (341:4093) placed at (216, 367), with all the
 * type positioned on top of it. The steps sit on an arc: 01 and 05 lowest,
 * 03 highest.
 *
 * The overlay positions below are the Figma coordinates converted to
 * percentages of that artwork, so the type tracks the arc as it scales. The
 * arc only works at its own aspect ratio, so below lg the steps stack into a
 * plain numbered list instead.
 */

/**
 * Percentages of the 1295.45 x 513 artwork, which Figma places at (216, 367).
 * Title, body and hexagon number each have their own box in the design and do
 * not share a centre line, so all three are positioned independently rather
 * than stacked in one column.
 */
const STEP_POSITIONS = [
  {
    titleX: "9.27%", titleTop: "32.16%",
    bodyX: "9.42%", bodyTop: "40.94%", bodyW: "15.4%",
    numX: "9.17%", numTop: "72.66%",
  },
  {
    titleX: "29.41%", titleTop: "21.05%",
    bodyX: "29.31%", bodyTop: "30.02%", bodyW: "14.7%",
    numX: "29.51%", numTop: "59.60%",
  },
  {
    titleX: "50.41%", titleTop: "12.67%",
    bodyX: "50.44%", bodyTop: "22.95%", bodyW: "13.1%",
    numX: "50.03%", numTop: "55.06%",
  },
  {
    titleX: "69.94%", titleTop: "21.05%",
    bodyX: "70.46%", bodyTop: "30.02%", bodyW: "14.2%",
    numX: "69.56%", numTop: "59.60%",
  },
  {
    titleX: "90.63%", titleTop: "32.16%",
    bodyX: "90.66%", bodyTop: "40.94%", bodyW: "13.2%",
    numX: "90.09%", numTop: "72.66%",
  },
];

export function CaseStudyFlow() {
  return (
    /* Figma 341:4090 — 1727 x 948 */
    <section
      id="case-study-flow"
      className="w-full bg-surface-soft py-16 lg:min-h-[948px] lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-8 lg:px-12">
        <Reveal>
          {/* 780 x 75 box, 64px on a 74.2px line, tracking -0.0159em */}
          <h2 className="mx-auto max-w-[780px] text-center font-sans text-[clamp(1.875rem,3.71vw,64px)] font-extrabold leading-[1.16] tracking-[-0.0159em] text-black">
            <GradientText gradient="redBlack22">
              {CASE_STUDY_FLOW_INTRO.headingStart}
            </GradientText>{" "}
            {CASE_STUDY_FLOW_INTRO.headingMiddle}{" "}
            <GradientText gradient="blackRed55">
              {CASE_STUDY_FLOW_INTRO.headingEnd}
            </GradientText>
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          {/* 1189 x 102 box at y175 — H2 ends 143, so a 32px gap */}
          <p className="mx-auto mt-8 max-w-[1189px] text-center text-base leading-relaxed tracking-[-0.0364em] text-ink-muted-70 lg:text-[clamp(1.125rem,1.62vw,28px)] lg:leading-snug">
            {CASE_STUDY_FLOW_INTRO.lede}
          </p>
        </Reveal>

        {/* Desktop: type overlaid on the arc artwork */}
        <Reveal delay={0.1}>
          <div className="relative mt-12 hidden aspect-[1295.45/513] w-full lg:mt-[90px] lg:block">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[url('/images/case-studies/flow-arc.svg')] bg-contain bg-center bg-no-repeat"
            />

            {CASE_STUDY_FLOW_STEPS.map((step, i) => {
              const pos = STEP_POSITIONS[i];
              return (
                <div key={step.number} className="contents">
                  {/* Title — 18.49px ExtraBold #FF5050, box 268.07 wide */}
                  <h3
                    className="absolute w-[20.7%] -translate-x-1/2 text-center font-sans text-[clamp(0.875rem,1.07vw,18.49px)] font-extrabold tracking-[-0.0007em] text-brand-red"
                    style={{ left: pos.titleX, top: pos.titleTop }}
                  >
                    {step.title}
                  </h3>

                  {/* Body — 13.21px Light #696969, its own box and centre */}
                  <p
                    className="absolute -translate-x-1/2 text-center text-[clamp(0.6875rem,0.76vw,13.21px)] font-light leading-snug tracking-[-0.051em] text-ink-500"
                    style={{
                      left: pos.bodyX,
                      top: pos.bodyTop,
                      width: pos.bodyW,
                    }}
                  >
                    {step.body}
                  </p>

                  {/* Hexagon number — 36px ExtraBold, centred on the marker */}
                  <span
                    className="absolute -translate-x-1/2 -translate-y-1/2 font-sans text-[clamp(1.25rem,2.08vw,36px)] font-extrabold tracking-[-0.0002em] text-white"
                    style={{ left: pos.numX, top: pos.numTop }}
                  >
                    {step.number}
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Below lg the arc cannot hold its geometry, so the steps stack */}
        <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:hidden">
          {CASE_STUDY_FLOW_STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.05}>
              <li className="flex flex-col items-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-red font-sans text-2xl font-extrabold text-white">
                  {step.number}
                </span>
                <h3 className="mt-4 font-sans text-lg font-extrabold tracking-[-0.0007em] text-brand-red">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[280px] text-sm font-light leading-snug tracking-[-0.051em] text-ink-500">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
