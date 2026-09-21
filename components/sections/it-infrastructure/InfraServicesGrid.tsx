import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { INFRA_SERVICES, INFRA_SERVICES_INTRO } from "@/lib/data";

/**
 * IT Infrastructure services — Figma node 382:4101 (1727 x 1143, white).
 *
 * Deliberately NOT the Cybersecurity ServicesGrid. That one draws divider
 * lines with centred text and a CTA chip per card; this frame draws six real
 * cards — 445/447 x 304, #F9F9F9 on a #FF5050 1px border, radius 12.955 — with
 * left-aligned text and no buttons at all.
 *
 * Card body copy is pure #000000 here, not the #696969 used on the
 * Cybersecurity cards. Left as measured.
 *
 * The card group is 1441px wide in Figma (3 x 445/447 + 2 x 52px gaps), wider
 * than ui/Container's 1267px, so the width is set locally.
 */
export function InfraServicesGrid() {
  return (
    <section
      id="services"
      className="relative isolate w-full overflow-hidden bg-white py-16 lg:py-20"
    >
      {/*
        Mask group 382:4102 — 1928.96 x 1022, drawn at (-100.74, 121) on the
        1727 x 1143 frame, so it bleeds past both edges and starts below the
        heading. Percentages keep that relationship as the frame scales.
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-5.8%] top-[10.6%] -z-10 h-[89.4%] w-[111.7%] bg-[url('/images/it-infrastructure/grid-bg-mask.svg')] bg-cover bg-center bg-no-repeat"
      />

      <div className="mx-auto w-full max-w-[1441px] px-6 sm:px-8 lg:px-12">
        <Reveal>
          {/* 1277px wide in Figma (223 -> 1500); the wrap point depends on it */}
          <h2 className="mx-auto max-w-[1277px] text-center font-sans text-[clamp(2rem,4.1vw,70.75px)] font-extrabold leading-[1.16] tracking-[-0.0174em] text-black">
            <GradientText gradient="redBlack27b">
              {INFRA_SERVICES_INTRO.headingStart}
            </GradientText>{" "}
            {INFRA_SERVICES_INTRO.headingMiddle}{" "}
            <GradientText gradient="infraGridEnd">
              {INFRA_SERVICES_INTRO.headingEnd}
            </GradientText>
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mx-auto mt-8 max-w-[1279px] text-center text-base font-light leading-relaxed tracking-[-0.0464em] text-black sm:text-lg lg:text-[clamp(1.125rem,1.54vw,26.53px)]">
            {INFRA_SERVICES_INTRO.lede}
          </p>
        </Reveal>

        {/* 3 x 2 at >=1280, 52px column gap and 44px row gap in Figma.
            Cards sit at y409, 49px below the lede box (ends y360). */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-[49px] lg:grid-cols-3 lg:gap-x-[52px] lg:gap-y-[44px]">
          {INFRA_SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.04} className="h-full">
              <div className="flex h-full min-h-[304px] flex-col rounded-[12.95px] border border-brand-red bg-surface-soft px-8 py-10 lg:px-10 lg:pt-[53px] lg:pb-10">
                {/*
                  Figma starts every card body at y155 regardless of how many
                  lines its title runs to, so the title reserves a fixed
                  102px block (53 -> 155) and the body follows with no margin.
                */}
                <h3 className="font-sans text-[clamp(1.375rem,1.93vw,33.35px)] font-extrabold leading-[1.02] tracking-[-0.0007em] text-black lg:min-h-[102px]">
                  {service.title}
                </h3>
                <p className="mt-6 text-[clamp(0.9375rem,1.16vw,20px)] font-light leading-snug tracking-[-0.0615em] text-black lg:mt-0">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
