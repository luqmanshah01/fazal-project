import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { THREAT_INTRO, THREAT_STATS } from "@/lib/data";

/**
 * Threat Landscape — Figma node 239:1785 (1727 x 692, #F9F9F9).
 *
 * The page's only left-aligned two-column section: copy on the left, two stat
 * cards stacked on the right. The stat numbers reuse `.text-gradient-stat`
 * verbatim — Figma specifies the identical 125deg #000 -> #FF5050 95%.
 */
export function ThreatLandscape() {
  return (
    <section id="threat-landscape" className="w-full bg-surface-soft py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[796fr_521fr] lg:gap-16">
          <div>
            <Reveal>
              <h2 className="font-sans text-[clamp(1.875rem,3.71vw,64px)] font-extrabold leading-[1.16] tracking-[-0.0159em] text-black">
                <GradientText gradient="redBlack41">
                  Pakistan&apos;s
                </GradientText>{" "}
                Enterprises
                <br className="hidden lg:block" /> Are Under Attack Are
                <br className="hidden lg:block" /> You{" "}
                <GradientText gradient="blackRed22">Prepared?</GradientText>
              </h2>
            </Reveal>

            {THREAT_INTRO.map((paragraph, i) => (
              <Reveal key={i} delay={0.05 + i * 0.05}>
                <p className="mt-8 text-base leading-relaxed tracking-[-0.0364em] text-ink-muted-70 lg:text-[clamp(1.125rem,1.62vw,28px)] lg:leading-snug">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="flex flex-col gap-8 lg:gap-[60px]">
            {THREAT_STATS.map((stat, i) => (
              <Reveal key={stat.value} delay={0.15 + i * 0.05} className="lg:flex-1">
                {/* 481 x 232, white, #FF5050 2px outside border, radius 20 */}
                <div className="flex h-full flex-col justify-center gap-3 rounded-[20px] border-2 border-brand-red bg-white p-8 shadow-card lg:px-[76px]">
                  <p className="text-gradient-stat font-sans text-[clamp(2.25rem,3.24vw,55.88px)] font-extrabold leading-[1.125] tracking-[-0.0234em]">
                    {stat.value}
                  </p>
                  <p className="text-[clamp(1rem,1.21vw,20.95px)] leading-[1.24] text-black">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
