import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICE_HERO } from "@/lib/data";
import type { ServiceHeroContent } from "@/lib/types";
import type { ComponentProps } from "react";

type Gradient = ComponentProps<typeof GradientText>["gradient"];

type ServiceHeroProps = {
  content?: ServiceHeroContent;
  /** Each service page measures its own stops; they are not interchangeable. */
  gradientStart?: Gradient;
  gradientEnd?: Gradient;
};

/**
 * Service hero — Figma nodes 239:1694 (Cybersecurity, 1727 x 919) and
 * 341:3592 (IT Infrastructure, 1727 x 919).
 *
 * Same shell as the About hero, but the lede is 18px/26 rather than
 * 25.61px/32.01, and the second button is an outline instead of a solid fill.
 * The two pages differ only in copy, gradient stops, and the width of the
 * outline button, so all three are props. Defaults reproduce the Cybersecurity
 * page exactly.
 */
export function ServiceHero({
  content = SERVICE_HERO,
  gradientStart = "svcHeroStart",
  gradientEnd = "svcHeroEnd",
}: ServiceHeroProps = {}) {
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
            {content.eyebrow}
          </span>
        </Reveal>

        {/* Figma box gap eyebrow -> H1 is ~15px on both service frames */}
        <Reveal delay={0.1}>
          <h1
            className={`mx-auto mt-8 font-sans text-[clamp(2rem,4.69vw,81px)] font-extrabold leading-[1.12] tracking-[-0.0231em] lg:mt-4 ${content.headingMaxWidthClass} ${content.headingLeadingClass}`}
          >
            <GradientText gradient={gradientStart}>
              {content.headingStart}
            </GradientText>{" "}
            {/*
              A "\n" in headingMiddle is a hard line break in Figma — the Case
              Studies H1 breaks after "Technology" (1346 x 177 = two lines on
              the 88.1px box). The break is desktop-only; below lg the clamp
              reflows the heading anyway.
            */}
            {content.headingMiddle.split("\n").map((line, i) => (
              <span key={line}>
                {i > 0 ? <br className="hidden lg:inline" /> : null}
                {i > 0 ? " " : null}
                {line}
              </span>
            ))}{" "}
            <GradientText gradient={gradientEnd}>
              {content.headingEnd}
            </GradientText>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            className={`mx-auto mt-8 text-base leading-relaxed text-white/90 lg:mt-6 lg:text-[18px] lg:leading-[1.45] ${content.ledeMaxWidthClass}`}
          >
            {content.lede}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:gap-[28.08px]">
            <Button
              href={content.primaryHref}
              variant="primary"
              size="md"
              className={`min-w-[260px] lg:h-[48px] lg:px-[36.34px] lg:text-[21.88px] ${content.primaryWidthClass ?? ""}`}
            >
              {content.primaryCta}
            </Button>
            <Button
              href={content.secondaryHref}
              variant="ghostRed"
              size="md"
              className={`min-w-[260px] lg:h-[48px] lg:px-[36.34px] lg:text-[21.88px] ${content.secondaryWidthClass}`}
            >
              {content.secondaryCta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
