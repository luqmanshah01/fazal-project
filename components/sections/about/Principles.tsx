import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { PRINCIPLES } from "@/lib/data";

/**
 * Principles — Figma node 239:1665 (1727 x 701).
 *
 * Four blocks in a 2 x 2 grid, each with a 5px #FF5050 vertical accent bar
 * 174px tall on its left edge.
 *
 * The eyebrow pill here (357.55 x 27.61) is the exact one already baked into
 * ui/SectionHeading, but this section's heading needs per-word gradients that
 * SectionHeading does not model, so the pill is inlined.
 */
export function Principles() {
  return (
    <section id="principles" className="w-full bg-white py-16 lg:py-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <span className="inline-flex w-full max-w-[357.55px] items-center justify-center rounded-full border border-brand-red/30 bg-brand-red-soft px-4 py-1 text-[13.81px] font-normal tracking-tight text-black">
              Why SV Tech
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-6 font-sans text-[clamp(1.875rem,3.71vw,64px)] font-extrabold leading-[1.16] tracking-[-0.0316em] text-black">
              <GradientText gradient="redBlack33">The Principles</GradientText>{" "}
              That Drive Everything{" "}
              <GradientText gradient="blackRed83">We Do</GradientText>
            </h2>
          </Reveal>
        </div>

        {/* Figma column gap 94px, row gap 97px (blocks are 128px tall, 225px apart) */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-x-[94px] lg:gap-y-[97px]">
          {PRINCIPLES.map((principle, i) => (
            <Reveal key={principle.title} delay={i * 0.05}>
              <div className="border-l-[5px] border-brand-red pl-6 lg:pl-7">
                <h3 className="font-sans text-[clamp(1.375rem,1.62vw,28px)] font-extrabold leading-tight tracking-[-0.0007em] text-black">
                  {principle.title}
                </h3>
                <p className="mt-2 text-[clamp(1rem,1.39vw,24px)] font-light leading-snug tracking-[-0.0425em] text-ink-500">
                  {principle.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
