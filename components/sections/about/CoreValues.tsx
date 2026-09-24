import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { CORE_VALUES, CORE_VALUES_HEADING } from "@/lib/data";

/**
 * Our Core Values — Figma node 425:4103 (1648 x 936, white). All MEASURED.
 *
 * Six cards in a 3 x 2 grid:
 *   columns x 113 / 595 / 1077, card 459 wide  -> 23px gutter
 *   rows    y 272 / 593,        card 261 tall  -> 60px gutter
 *   cards span 113 -> 1535 = 1422px of content
 *
 * Card: radius 27.66, fill #F8F8F8, a 1px INSIDE stroke on a 155.37deg
 * #FF5050 -> #F5F5F5 gradient, and a HARD drop shadow — Figma reports blur
 * radius 0 with offset (2, 3) in solid #FF5050, so it is a crisp offset edge,
 * not a glow. `2px 3px 0` reproduces that exactly.
 *
 * The gradient stroke uses the padding-box/border-box trick already used by
 * the featured cell in about/Certifications.
 *
 * Card internals, measured from the card's own top-left:
 *   title  +51, +54    Bricolage 700  23.98px / 28.77  #FF5050
 *   body   +51, +111   Bricolage 400  16.6px  / 19.92  rgba(0,0,0,.7)
 * so 51px of side padding, and 28px between the title line box and the body.
 */
export function CoreValues() {
  return (
    <section
      id="core-values"
      // Figma 425:4103 — 1648 x 936, H2 box starting at y83
      className="w-full bg-white py-16 lg:min-h-[936px] lg:pb-20 lg:pt-[83px]"
    >
      <Container>
        <Reveal>
          {/* 1334px box, 59.02px on a 66.39px line (1.125), tracking -1.38/59.02 */}
          <h2 className="mx-auto max-w-[1334px] text-center font-sans text-[clamp(1.75rem,3.42vw,59.02px)] font-extrabold leading-[1.125] tracking-[-0.0234em] text-black">
            <GradientText gradient="valuesStart">
              {CORE_VALUES_HEADING.start}
            </GradientText>{" "}
            {CORE_VALUES_HEADING.middle}{" "}
            <GradientText gradient="valuesEnd">
              {CORE_VALUES_HEADING.end}
            </GradientText>
          </h2>
        </Reveal>

        {/* H2 box ends at y216 and the first card row starts at y272 — 56px */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-[56px] lg:grid-cols-3 lg:gap-x-[23px] lg:gap-y-[60px]">
          {CORE_VALUES.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.04} className="h-full">
              <div className="flex h-full min-h-[261px] flex-col rounded-[27.66px] border border-transparent bg-[linear-gradient(#f8f8f8,#f8f8f8)_padding-box,linear-gradient(155.37deg,#ff5050_0%,#f5f5f5_100%)_border-box] px-8 py-10 shadow-[2px_3px_0_0_#FF5050] lg:px-[51px] lg:pb-10 lg:pt-[54px]">
                <h3 className="font-sans text-[clamp(1.25rem,1.39vw,23.98px)] font-bold leading-[1.2] tracking-[-0.0392em] text-brand-red">
                  {value.title}
                </h3>
                <p className="mt-4 text-[clamp(0.875rem,0.96vw,16.6px)] leading-[1.2] tracking-[-0.0566em] text-ink-muted-70 lg:mt-[28px]">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
