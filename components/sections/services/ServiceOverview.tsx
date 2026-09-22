import Image from "next/image";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { INFRA_OVERVIEW } from "@/lib/data";
import type { ServiceOverviewContent } from "@/lib/types";
import type { ComponentProps } from "react";

type Gradient = ComponentProps<typeof GradientText>["gradient"];

type ServiceOverviewProps = {
  content?: ServiceOverviewContent;
  gradient?: Gradient;
};

/**
 * Service overview band — copy left, one photo right.
 *
 * Figma nodes 341:3682 (IT Infrastructure, 1727 x 792) and 425:4216
 * (Managed Service Provider, 1727 x 628). Same structure, but the two frames
 * disagree on the heading line box, the photo aspect, and the photo treatment:
 * IT Infrastructure frames it with a 2px #FF5050 border, a 35px radius and the
 * card shadow, while MSP has no frame at all and instead lays an
 * rgba(255,80,80,0.8) wash over the image. All three are content fields.
 *
 * Defaults reproduce the IT Infrastructure page exactly.
 */
export function ServiceOverview({
  content = INFRA_OVERVIEW,
  gradient = "infraOverviewEnd",
}: ServiceOverviewProps = {}) {
  return (
    <section
      id="service-overview"
      className={`w-full bg-surface-soft py-16 lg:py-20 ${content.minHeightClass}`}
    >
      <div
        className={`mx-auto grid w-full grid-cols-1 items-start gap-12 px-6 sm:px-8 lg:gap-[20px] lg:px-12 ${content.containerMaxWidthClass} ${content.gridColsClass}`}
      >
        <div>
          <Reveal>
            <h2
              className={`font-sans text-[clamp(1.875rem,3.71vw,64px)] font-extrabold tracking-[-0.0159em] text-black ${content.headingLeadingClass} ${content.headingMaxWidthClass}`}
            >
              {content.headingLines.map((line, i) => (
                <span key={line}>
                  {i > 0 ? <br className="hidden lg:block" /> : null}
                  {i > 0 ? " " : null}
                  {line}
                </span>
              ))}
              <GradientText gradient={gradient}>
                {content.headingEnd}
              </GradientText>
            </h2>
          </Reveal>

          {/* Figma box gap H2 -> body: 53px on IT Infra, 35px on MSP */}
          <Reveal delay={0.05}>
            <p
              className={`mt-8 text-base leading-relaxed tracking-[-0.0364em] text-ink-muted-70 lg:text-[clamp(1.125rem,1.62vw,28px)] lg:leading-snug ${content.bodyMaxWidthClass} ${content.bodyMarginClass}`}
            >
              {content.body}
            </p>
          </Reveal>

          {/*
            Figma draws the ticks as ONE text block on a 35px line box, not as
            spaced list items — so there is no gap between rows, only the line
            height.
          */}
          <Reveal delay={0.1}>
            <ul className={`mt-8 lg:mt-[26px] ${content.checklistMaxWidthClass}`}>
              {content.checklist.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-base leading-relaxed tracking-[-0.0364em] text-ink-muted-70 lg:text-[clamp(1.125rem,1.62vw,28px)] lg:leading-[1.25]"
                >
                  <span aria-hidden="true" className="text-brand-red">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div
            className={`relative w-full overflow-hidden ${content.imageAspectClass} ${content.imageFrameClass}`}
          >
            <Image
              src={content.image.src}
              alt={content.image.alt}
              fill
              sizes="(max-width: 1023px) 100vw, 562px"
              className="object-cover object-center"
            />
            {/* MSP lays a red wash over the photo; IT Infrastructure does not */}
            {content.imageOverlayClass ? (
              <div
                aria-hidden="true"
                className={`absolute inset-0 ${content.imageOverlayClass}`}
              />
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
