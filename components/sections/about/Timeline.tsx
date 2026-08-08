import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { MILESTONES, TIMELINE_HEADING } from "@/lib/data";

/**
 * Company timeline — Figma node 239:1564 (1600 x 795).
 *
 * Six 458.3 x 297.85 cards in a 3 x 2 grid with a 23.05px gutter. Reading
 * order (left to right, top to bottom) is chronological in the design, so a
 * plain grid reproduces it.
 *
 * The heading is a placeholder — see TIMELINE_HEADING in lib/data.ts.
 */
export function Timeline() {
  return (
    <section id="journey" className="w-full bg-white py-16 lg:py-20">
      <Container>
        <Reveal>
          <h2 className="text-center font-sans text-[clamp(1.75rem,3.42vw,59.02px)] font-extrabold leading-[1.12] tracking-[-0.0234em] text-black">
            <GradientText gradient="redBlack16">
              {TIMELINE_HEADING.start}
            </GradientText>{" "}
            {TIMELINE_HEADING.middle}{" "}
            <GradientText gradient="blackRed69">
              {TIMELINE_HEADING.end}
            </GradientText>
          </h2>
        </Reveal>

        <ol className="mt-12 grid grid-cols-1 gap-[23.05px] sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {MILESTONES.map((milestone, i) => (
            <Reveal key={milestone.period} delay={i * 0.05}>
              <li className="flex h-full flex-col justify-center gap-[13.83px] rounded-[27.66px] bg-ink-150 p-8 shadow-card-timeline lg:p-[50px]">
                <h3 className="font-sans text-[clamp(1.125rem,1.39vw,23.98px)] font-bold leading-tight tracking-[-0.0392em] text-black">
                  {milestone.period}
                  <br />
                  {milestone.title}
                </h3>
                <p className="text-[clamp(0.875rem,0.96vw,16.6px)] leading-snug tracking-[-0.0567em] text-ink-muted-70">
                  {milestone.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
