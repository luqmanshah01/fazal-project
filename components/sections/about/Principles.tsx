import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { PRINCIPLES } from "@/lib/data";
import type { Principle } from "@/lib/types";

type PrinciplesProps = {
  id?: string;
  eyebrow?: string;
  heading?: { start: string; middle: string; end: string };
  /** Figma 239:1665 draws no lede; 425:4074 adds one. Empty string = omit. */
  lede?: string;
  ledeMaxWidthClass?: string;
  headingMaxWidthClass?: string;
  items?: Principle[];
  /** Figma frame height at 1727px, as an `lg:min-h-*` class */
  minHeightClass?: string;
  /** Measured top / bottom frame padding */
  paddingClass?: string;
  /** Figma box gap from the heading block down to the first row of blocks */
  gridMarginClass?: string;
};

/**
 * A "Why SV Tech" pillar grid — the 357.55 x 27.61 eyebrow pill, a 64px
 * centred H2 with per-word gradients, and four blocks in a 2 x 2 grid, each
 * carrying a 5px x 174px #FF5050 accent rule on its left edge.
 *
 * TWO Figma frames draw this, and they are the same component:
 *
 *   239:1665  "Principles"          1727 x 701   — the ORIGINAL About page
 *   425:4074  "Why Choose SV Tech"  1727 x 1260  — the CURRENT About page
 *
 * Their geometry agrees on every measured value: pill 357.55 x 27.61, H2 64px
 * on a 71.2px line at -0.0316em, titles 28px ExtraBold, bodies 24px Light
 * #696969, column gap 94px, row gap 97px, accent rule 5px x 174px. Even the
 * two heading gradients are identical — "Why Choose"/"Pakistan" measure
 * #FF5050 8.65% -> #000 32.69% and #000 82.69% -> #FF5050 93.75%, which are
 * the redBlack33 / blackRed83 pair the Principles heading already used.
 *
 * The only structural difference is that 425:4074 adds a 24px Light lede
 * between the H2 and the grid, and is correspondingly taller.
 *
 * Defaults reproduce 239:1665 exactly, so the original section is still one
 * import away even though the current design no longer includes it.
 *
 * The pill is inlined rather than taken from ui/SectionHeading because this
 * heading needs per-word gradients that SectionHeading does not model.
 */
export function Principles({
  id = "principles",
  eyebrow = "Why SV Tech",
  heading = {
    start: "The Principles",
    middle: "That Drive Everything",
    end: "We Do",
  },
  lede = "",
  ledeMaxWidthClass = "max-w-[1150px]",
  headingMaxWidthClass = "",
  items = PRINCIPLES,
  // 239:1665 — 1727 x 701, pill at y52, last block row ending at 626
  minHeightClass = "lg:min-h-[701px]",
  paddingClass = "lg:pb-[75px] lg:pt-[52px]",
  gridMarginClass = "lg:mt-16",
}: PrinciplesProps = {}) {
  return (
    <section
      id={id}
      className={`w-full bg-white py-16 ${minHeightClass} ${paddingClass}`}
    >
      <Container>
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <span className="inline-flex w-full max-w-[357.55px] items-center justify-center rounded-full border border-brand-red/30 bg-brand-red-soft px-4 py-1 text-[13.81px] font-normal tracking-tight text-black">
              {eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2
              className={`mt-6 font-sans text-[clamp(1.875rem,3.71vw,64px)] font-extrabold leading-[1.1125] tracking-[-0.0316em] text-black ${headingMaxWidthClass}`}
            >
              <GradientText gradient="redBlack33">{heading.start}</GradientText>{" "}
              {heading.middle}{" "}
              <GradientText gradient="blackRed83">{heading.end}</GradientText>
            </h2>
          </Reveal>

          {/* 425:4074 — H2 box ends at y254, lede starts at y282, so 28px */}
          {lede ? (
            <Reveal delay={0.1}>
              <p
                className={`mt-6 text-[clamp(1rem,1.39vw,24px)] font-light leading-[1.2] tracking-[-0.0425em] text-ink-500 lg:mt-[28px] ${ledeMaxWidthClass}`}
              >
                {lede}
              </p>
            </Reveal>
          ) : null}
        </div>

        {/* Figma column gap 94px, row gap 97px (blocks are 128px tall, 225px apart) */}
        <div
          className={`mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-[94px] lg:gap-y-[97px] ${gridMarginClass}`}
        >
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="border-l-[5px] border-brand-red pl-6 lg:pl-7">
                <h3 className="font-sans text-[clamp(1.375rem,1.62vw,28px)] font-extrabold leading-[1.2] tracking-[-0.0007em] text-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-[clamp(1rem,1.39vw,24px)] font-light leading-[1.2] tracking-[-0.0425em] text-ink-500">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
