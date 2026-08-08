import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { ABOUT_HERO } from "@/lib/data";

/**
 * About hero — Figma node 239:1465 (1727 x 919).
 *
 * Fixed design widths are converted with `design_px / 1727 * 100 = vw` and
 * clamped, matching the pattern already used by the home page hero.
 */
export function AboutHero() {
  return (
    <section
      id="about-hero"
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
            {ABOUT_HERO.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          {/* max-w 1346px is the Figma text box, which is what forces the
              two-line break at the design width */}
          <h1 className="mx-auto mt-8 max-w-[1346px] font-sans text-[clamp(2rem,4.69vw,81px)] font-extrabold leading-[1.12] tracking-[-0.0231em]">
            <GradientText gradient="aboutHeroStart">
              {ABOUT_HERO.headingStart}
            </GradientText>{" "}
            <span>{ABOUT_HERO.headingMiddle}</span>{" "}
            <GradientText gradient="aboutHeroEnd">
              {ABOUT_HERO.headingEnd}
            </GradientText>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-[1221px] text-base leading-relaxed text-white/90 sm:text-lg lg:text-[clamp(1.125rem,1.48vw,25.61px)] lg:leading-[1.25]">
            {ABOUT_HERO.lede}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:mt-7 lg:gap-8">
            <Button
              href="#contact"
              variant="primary"
              size="md"
              className="min-w-[260px] sm:min-w-[280px] lg:h-[55px] lg:min-w-[380px] lg:px-[41.7px] lg:text-[25.1px]"
            >
              {ABOUT_HERO.primaryCta}
            </Button>
            <Button
              href="/#services"
              variant="primary"
              size="md"
              className="min-w-[260px] sm:min-w-[280px] lg:h-[55px] lg:min-w-[380px] lg:px-[41.7px] lg:text-[25.1px]"
            >
              {ABOUT_HERO.secondaryCta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
