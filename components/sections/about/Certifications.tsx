import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { CERTIFICATIONS } from "@/lib/data";
import { cn } from "@/lib/utils";

/**
 * Certifications — Figma node 239:1585.
 *
 * A 4 x 2 grid of 355 x 275.49 cells joined by a single #D2D2D2 hairline
 * (1.12px), reproduced with the border-t/border-l container + border-b/border-r
 * cell pattern already used by sections/Services.tsx.
 *
 * The first cell is featured with a 135deg red-to-grey gradient border.
 *
 * Note: the 80.63px #FFB3B3 circles are empty in Figma — no icon glyph exists
 * in the design. They are rendered as plain circles rather than inventing
 * icons. See SKILL.md 9.5.
 */
export function Certifications() {
  return (
    <section id="certifications" className="w-full bg-white py-16 lg:py-20">
      <Container>
        <Reveal>
          <h2 className="text-center font-sans text-[clamp(2rem,4.1vw,70.75px)] font-extrabold leading-[1.16] tracking-[-0.0316em] text-black">
            <GradientText gradient="redBlack27">Certified</GradientText> Experts.
            Proven Frameworks. Global{" "}
            <GradientText gradient="blackRed45">Standards.</GradientText>
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mx-auto mt-8 max-w-[1015px] text-center text-base font-light leading-relaxed tracking-[-0.0842em] text-ink-500 sm:text-lg lg:text-[clamp(1.125rem,1.54vw,26.53px)]">
            Our security professionals hold industry-leading certifications and
            operate within globally recognized frameworks, ensuring your business
            receives best-in-class protection and guidance.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 border-t border-l border-[1.12px] border-cert-line sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {CERTIFICATIONS.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.04}>
              <div
                className={cn(
                  "flex h-full flex-col items-center justify-center gap-4 border-b border-r border-[1.12px] border-cert-line bg-ink-150 p-8 text-center",
                  // Figma highlights the first cell with a gradient border
                  i === 0 &&
                    "border-transparent bg-[linear-gradient(#f5f5f5,#f5f5f5)_padding-box,linear-gradient(135deg,#ff5050_0%,#f1f0f0_10%,#f1f0f0_90%,#ff5050_100%)_border-box]",
                )}
              >
                <span
                  aria-hidden="true"
                  className="h-[80.63px] w-[80.63px] shrink-0 rounded-full bg-cert-icon"
                />
                <h3 className="font-sans text-[clamp(1.25rem,1.56vw,26.88px)] font-bold leading-tight tracking-[-0.0842em] text-black">
                  {cert.name}
                </h3>
                <p className="text-[clamp(0.875rem,1.17vw,20.16px)] font-light leading-snug text-cert-label">
                  {cert.fullName}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
