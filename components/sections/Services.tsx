import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICES } from "@/lib/data";

/**
 * What We Do — Figma node 97:595 (1727 x 992).
 *
 * Figma does NOT draw cards here. It draws two flattened SVGs:
 *   97:596 "Mask group" (1727 x 1118 at 0/-7) — the faint background mesh
 *   97:601 (1488.14 x 537.87 at 120/387)      — divider lines only
 *
 * The divider SVG has fixed geometry that only lines up at 1727px, so the
 * rules are rebuilt here as positioned spans, exactly as on the Cybersecurity
 * services grid. Both SVGs are kept in public/images/home as reference.
 *
 * Type is CENTRED here, not left-aligned: titles 28px ExtraBold
 * (tracking -0.0721em), bodies 24px Light (tracking -0.0842em, #696969).
 */

/** Half the gap Figma leaves where the rules would cross. */
const GAP = "11.35px";
const LINE = "2.09px";

function GridRules() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden lg:block"
    >
      <span
        className="absolute top-1/2 h-[2.09px] -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,transparent,var(--color-grid-line)_20%,var(--color-grid-line))]"
        style={{ left: 0, right: `calc(66.667% + ${GAP})` }}
      />
      <span
        className="absolute top-1/2 h-[2.09px] -translate-y-1/2 rounded-full bg-grid-line"
        style={{ left: `calc(33.333% + ${GAP})`, right: `calc(33.333% + ${GAP})` }}
      />
      <span
        className="absolute top-1/2 h-[2.09px] -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,var(--color-grid-line),var(--color-grid-line)_80%,transparent)]"
        style={{ left: `calc(66.667% + ${GAP})`, right: 0 }}
      />

      {["33.333%", "66.667%"].map((x) => (
        <span key={x} className="contents">
          <span
            className="absolute top-0 -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,transparent,var(--color-grid-line)_20%,var(--color-grid-line))]"
            style={{ left: x, width: LINE, height: `calc(50% - ${GAP})` }}
          />
          <span
            className="absolute bottom-0 -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,var(--color-grid-line),var(--color-grid-line)_80%,transparent)]"
            style={{ left: x, width: LINE, height: `calc(50% - ${GAP})` }}
          />
        </span>
      ))}
    </div>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="relative isolate w-full overflow-hidden bg-white pt-2 pb-16 md:pt-4 md:pb-20"
    >
      {/* Faint mesh under the whole section — Figma 97:596 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/images/home/services-bg-mask.svg')] bg-cover bg-center opacity-60"
      />

      <Container>
        <SectionHeading
          eyebrow="What We Do"
          titleMaxWidthClass="max-w-[1135px]"
          descriptionMaxWidthClass="max-w-[1357px]"
          title={
            <>
              <GradientText gradient="homeServicesStart">End-to-End</GradientText>{" "}
              <span>Cybersecurity</span>
              <br className="hidden md:block" />
              <span> &amp; IT Services for Pakistan&apos;s </span>
              <GradientText gradient="homeServicesEnd">Enterprises</GradientText>
            </>
          }
          description="From protecting your network perimeter to transforming your digital operations, SV Tech delivers a comprehensive suite of cybersecurity and IT services tailored to Pakistan's enterprise landscape."
        />

        <div className="relative mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-0">
          <GridRules />

          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05}>
              <div className="flex h-full flex-col items-center gap-4 px-4 text-center lg:px-10 lg:py-12">
                <h3 className="font-sans text-[clamp(1.25rem,1.62vw,28px)] font-extrabold leading-tight tracking-[-0.0721em] text-black">
                  {service.title}
                </h3>
                <p className="text-[clamp(1rem,1.39vw,24px)] font-light leading-snug tracking-[-0.0842em] text-ink-500">
                  {service.description}
                </p>
                <Button
                  href="#contact"
                  variant="primary"
                  size="chip"
                  className="mt-2"
                >
                  {service.cta}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
