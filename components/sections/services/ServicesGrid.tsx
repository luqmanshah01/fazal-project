import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { SECURITY_SERVICES } from "@/lib/data";

/**
 * Cybersecurity services — Figma node 239:1797 (1727 x 1058).
 *
 * Figma draws the 3 x 2 layout with a single flattened SVG (239:1803) that is
 * *only* divider lines, not card boxes: one horizontal rule per column at the
 * mid-height and two verticals, every one of them broken by a 22.7px gap where
 * they would otherwise cross, with a gradient fade at the outer ends.
 *
 * That SVG has fixed geometry and would only line up at 1727px, so the rules
 * are rebuilt here as positioned spans. `services-grid.svg` is kept in
 * public/images/services as the reference.
 */

/** Half the 22.7px gap Figma leaves at each crossing. */
const GAP = "11.35px";
const LINE = "2.09px";

function GridRules() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden lg:block"
    >
      {/* Horizontal rule at mid-height, broken into one segment per column */}
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

      {/* Two verticals, each split above and below the horizontal */}
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

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="relative isolate w-full overflow-hidden bg-white py-16 lg:py-20"
    >
      {/* Faint mesh — 159 #04102A hairlines under a radial mask, Figma 239:1798 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/images/services/services-bg-mask.svg')] bg-cover bg-center opacity-60"
      />

      <Container>
        <Reveal>
          <h2 className="text-center font-sans text-[clamp(2rem,4.1vw,70.75px)] font-extrabold leading-[1.16] tracking-[-0.0316em] text-black">
            <GradientText gradient="redBlack27b">Our</GradientText>{" "}
            Cybersecurity Services Built
            <br className="hidden md:block" /> for Pakistan&apos;s Enterprise{" "}
            <GradientText gradient="blackRed56">Environment</GradientText>
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mx-auto mt-8 max-w-[1015px] text-center text-base font-light leading-relaxed tracking-[-0.0842em] text-black sm:text-lg lg:text-[clamp(1.125rem,1.54vw,26.53px)]">
            Every organization has a unique threat profile. Our cybersecurity
            services are modular you can engage us for a single service or a
            fully managed security program across all domains.
          </p>
        </Reveal>

        <div className="relative mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-0">
          <GridRules />

          {SECURITY_SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.04}>
              <div className="flex h-full flex-col items-center gap-4 px-4 text-center lg:px-10 lg:py-12">
                <h3 className="whitespace-pre-line font-sans text-[clamp(1.25rem,1.62vw,28px)] font-extrabold leading-tight tracking-[-0.0364em] text-black">
                  {service.title}
                </h3>
                <p className="text-[clamp(0.9375rem,1.1vw,19px)] font-light leading-snug tracking-[-0.0537em] text-ink-500">
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
