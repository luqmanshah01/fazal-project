import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { INDUSTRIES } from "@/lib/data";

export function Industries() {
  return (
    <section className="relative w-full bg-white py-16 md:py-20">
      {/* Figma draws the lede box WIDER than the cell grid here — 1425 against
          1384 — so the two cannot share one container width. The section keeps
          the 1420px default (the lede then caps 5px under its Figma box) and
          the grid is pinned to 1384 on its own, below. */}
      <Container>
        <SectionHeading
          eyebrow="Industries We Serve"
          titleMaxWidthClass="max-w-[1203px]"
          descriptionMaxWidthClass="max-w-[1425px]"
          title={
            <>
              <GradientText gradient="homeIndustriesStart">Cybersecurity</GradientText>{" "}
              <span>Solutions for Every Industry in </span>
              <GradientText gradient="homeIndustriesEnd">Pakistan</GradientText>
            </>
          }
          description="We bring 8+ years of international cybersecurity experience directly to Pakistan. Our team has delivered solutions across the US, Europe, and the Middle East and now brings that same expertise home."
        />

        {/*
          Figma 97:662-690 — eight 346 x 132 cells on #FBFBFB, separated by
          0.5px #B2B2B2 hairlines (right and bottom edges only, so the outer
          frame stays open). Label is Regular 24.33px, not bold.
        */}
        {/* 8 cells of 346px, 4 across with no column gap — the hairlines join
            them — so the grid is exactly 1384px wide (97:662-690). */}
        <div className="mx-auto mt-16 grid max-w-[1384px] grid-cols-1 border-t border-l border-ink-400/50 md:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((industry, i) => (
            <Reveal key={industry.label} delay={i * 0.04}>
              <div className="group flex h-full min-h-[132px] items-center gap-5 border-b border-r border-ink-400/50 bg-ink-50 px-6 py-5 transition-colors hover:bg-white">
                <span
                  aria-hidden="true"
                  className="flex h-[62.55px] w-[62.55px] flex-shrink-0 items-center justify-center rounded-full bg-step-ring-outer text-[27px] leading-none transition-transform duration-300 group-hover:scale-110"
                >
                  {industry.icon}
                </span>
                <h3 className="whitespace-pre-line font-sans text-base font-normal leading-tight tracking-[-0.0721em] text-black md:text-[19px] lg:text-[clamp(1.125rem,1.41vw,24.33px)]">
                  {industry.label}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
