import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { MISSION_VISION } from "@/lib/data";

/**
 * Mission & Vision — Figma node 239:1548 (1607 x 733).
 *
 * Two columns: a 792.94px photo on the left, two 589.14px cards stacked on the
 * right. The 1.346:1 ratio is preserved with a fractional grid above lg.
 *
 * Note: the Figma heading reads "Our Mission, Vision & Values" but this frame
 * holds only Mission and Vision — "Values" is delivered by the Principles
 * section. See SKILL.md 9.3.
 */
export function MissionVision() {
  return (
    <section id="mission-vision" className="w-full bg-white py-16 lg:py-20">
      <Container>
        <Reveal>
          {/* Figma line-height is 61.65px against a 72.21px font — a tight 0.854 */}
          <h2 className="text-center font-sans text-[clamp(2rem,4.18vw,72.21px)] font-extrabold leading-[0.854] tracking-[-0.0178em] text-black">
            <GradientText gradient="redBlack16">Our</GradientText>{" "}
            Mission, Vision &amp;{" "}
            <GradientText gradient="blackRed69">Values</GradientText>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-[1.346fr_1fr] lg:gap-[36.82px]">
          {/*
            In Figma the photo is 494.95px tall and the two cards are
            232.06 + 30.83 gap + 232.06 = 494.95, so all three edges line up
            exactly. Below lg the photo keeps its own aspect ratio; from lg it
            drops to h-full and lets the card column set the row height, which
            keeps the alignment at any width instead of only at 1727px.
          */}
          <Reveal delay={0.1} className="lg:h-full">
            <div className="relative aspect-[792.94/494.95] w-full overflow-hidden rounded-[25.69px] lg:aspect-auto lg:h-full">
              <Image
                src="/images/about/mission.png"
                alt="SV Tech security operations team at work"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              {/*
                Figma's topmost fill on this rectangle, verbatim:
                linear-gradient(0deg, rgba(0,0,0,1) 6%, rgba(0,0,0,0) 45%).

                It also reports a solid #FF5050 fill between this gradient and
                the photo, with no opacity or blend mode. Rendered literally
                that would hide the photo completely, so it is almost certainly
                a disabled layer that the API still lists. Omitted pending
                confirmation — see SKILL.md 9.
              */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,1)_6%,rgba(0,0,0,0)_45%)]"
              />
            </div>
          </Reveal>

          <div className="flex flex-col gap-6 lg:gap-[30.83px]">
            {MISSION_VISION.map((item, i) => (
              <Reveal
                key={item.label}
                delay={0.15 + i * 0.05}
                className="lg:flex-1"
              >
                <div className="flex h-full flex-col justify-center gap-[21.28px] rounded-[25.69px] bg-ink-150 p-8 shadow-card-mission lg:px-[33.4px]">
                  <h3 className="font-sans text-[clamp(1.5rem,2.1vw,36.29px)] font-extrabold leading-tight text-black">
                    {item.label}
                  </h3>
                  <p className="text-[clamp(0.9375rem,1.16vw,19.96px)] leading-snug tracking-[-0.0429em] text-ink-muted-70">
                    {item.body}
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
