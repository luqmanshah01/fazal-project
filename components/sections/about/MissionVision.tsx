import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { ABOUT_STORY, MISSION_VISION } from "@/lib/data";

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
    /* min-h, not h: the Figma frame is 733px tall at 1727px with this exact
       copy. A fixed height would clip once the type reflows at any other
       width; a min-height lands the section on the Figma figure at the design
       width and lets it grow anywhere else. Same rule for every section. */
    <section
      id="mission-vision"
      className="w-full bg-white py-16 lg:min-h-[733px] lg:py-20"
    >
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
            {/* `isolate` keeps the blend below contained — without it the
                multiply would reach past the card and mix with the white
                section behind it. */}
            <div className="relative isolate aspect-[792.94/494.95] w-full overflow-hidden rounded-[25.69px] lg:aspect-auto lg:h-full">
              <Image
                src="/images/about/mission.png"
                alt="SV Tech security operations team at work"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              {/*
                MEASURED from 425:4016 "Rectangle 799" (792.94 x 494.95,
                radius 25.689). Figma stacks three fills, bottom to top:

                  [0] IMAGE  e4b12491…  NORMAL, opacity 1
                  [1] SOLID  #FF5050    blendMode HUE, opacity 1
                  [2] GRADIENT_LINEAR   NORMAL, black -> transparent

                The #FF5050 was previously omitted, on the reasoning that an
                opaque fill would hide the photo and was therefore a disabled
                layer the API still listed (SKILL.md 9). It is not disabled —
                it is a HUE blend, which takes only the hue from the red and
                keeps the photo's own saturation and luminosity. That is why
                the monitors, which are GREEN in the source asset, render red
                in the design while the image stays legible.

                `multiply` was tried first and is wrong: it crushes the green
                channel and turns the monitors amber rather than red.

                The imageRef matches the asset already in the repo byte for
                byte (md5 6c1944d50bf5f255bc7234884c20d62a), so no new export
                is needed.
              */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-brand-red mix-blend-hue"
              />
              {/* Handles (0.5, 0.9394) -> (0.5, 0.5528), straight up, black to
                  transparent — i.e. 6.06% to 44.72% measured from the bottom,
                  which is the 6%/45% already written here. Unchanged. */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,1)_6%,rgba(0,0,0,0)_45%)]"
              />

              {/*
                "Our Story" — Figma 425:4024, white type over the photo. This
                is what the gradient above is for.

                Positions are percentages of the photo box (792.94 x 494.95) so
                the block tracks the image at any width:
                  left   53.09 / 792.94 = 6.7%
                  width  685.9 / 792.94 = 86.5%
                  bottom 29.69 / 494.95 = 6%
              */}
              <div className="absolute bottom-[6%] left-[6.7%] w-[86.5%]">
                <h3 className="font-sans text-[clamp(1.25rem,2.1vw,36.29px)] font-extrabold leading-tight text-white">
                  {ABOUT_STORY.label}
                </h3>
                <p className="mt-2 text-[clamp(0.8125rem,1.16vw,19.96px)] leading-[1.2] tracking-[-0.0429em] text-white/70">
                  {ABOUT_STORY.body}
                </p>
              </div>
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
