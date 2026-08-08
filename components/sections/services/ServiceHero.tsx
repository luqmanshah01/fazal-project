import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICE_HERO } from "@/lib/data";

/**
 * Service hero — Figma node 239:1694 (1727 x 919).
 *
 * Same shell as the About hero, but the lede is 18px/26 rather than
 * 25.61px/32.01, and the second button is an outline instead of a solid fill.
 */
export function ServiceHero() {
  return (
    <section
      id="service-hero"
      className="relative isolate flex min-h-svh w-full items-center overflow-hidden bg-black text-white md:min-h-[800px] lg:min-h-[919px]"
    >
      {/* Ambient glow — 1019.82px ellipse, #7A1717, blur(150.27px) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 aspect-square w-[59vw] max-w-[1020px] -translate-x-1/2 -translate-y-[15%] rounded-full bg-hero-glow opacity-90 blur-[100px] lg:blur-[150px]"
      />

      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 pt-32 pb-20 text-center sm:pt-40 sm:pb-24 lg:py-32">
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-brand-red/30 bg-brand-red-soft px-5 py-1 text-[12.81px] tracking-tight text-white">
            {SERVICE_HERO.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mx-auto mt-8 max-w-[1346px] font-sans text-[clamp(2rem,4.69vw,81px)] font-extrabold leading-[1.12] tracking-[-0.0231em]">
            <GradientText gradient="svcHeroStart">
              {SERVICE_HERO.headingStart}
            </GradientText>{" "}
            {SERVICE_HERO.headingMiddle}{" "}
            <GradientText gradient="svcHeroEnd">
              {SERVICE_HERO.headingEnd}
            </GradientText>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-[1056px] text-base leading-relaxed text-white/90 lg:text-[18px] lg:leading-[1.45]">
            {SERVICE_HERO.lede}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:gap-[28.08px]">
            <Button
              href="#contact"
              variant="primary"
              size="md"
              className="min-w-[260px] lg:h-[48px] lg:px-[36.34px] lg:text-[21.88px]"
            >
              {SERVICE_HERO.primaryCta}
            </Button>
            <Button
              href="/#services"
              variant="ghostRed"
              size="md"
              className="min-w-[260px] lg:h-[48px] lg:min-w-[331px] lg:px-[36.34px] lg:text-[21.88px]"
            >
              {SERVICE_HERO.secondaryCta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
