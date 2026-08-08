import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ABOUT_CTA } from "@/lib/data";

/**
 * Closing CTA — Figma node 239:1685 (1728 x 524).
 *
 * Background is a rgba(0,0,0,0.63) wash over the shared CTA photo, plus two
 * 659 x 624 #FF5050 ellipses at blur(150px) bleeding in from each side.
 *
 * The photo uses the same imageRef as the home page CTA band, so it reuses
 * the asset already in public/images/backgrounds.
 */
export function AboutCTA() {
  return (
    <section
      id="contact"
      className="relative isolate w-full overflow-hidden bg-black text-white"
    >
      <Image
        src="/images/backgrounds/cta-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      {/* Figma wash is exactly rgba(0,0,0,0.63); 63 is off Tailwind's opacity
          scale, so it has to be an arbitrary value or it silently drops out */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[rgba(0,0,0,0.63)]"
      />

      {/* Side glows — Figma 239:1691 / 239:1692 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-1/4 top-0 -z-10 h-full w-[38vw] max-w-[659px] rounded-full bg-brand-red blur-[100px] lg:blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-1/4 top-0 -z-10 h-full w-[38vw] max-w-[659px] rounded-full bg-brand-red blur-[100px] lg:blur-[150px]"
      />

      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 py-20 text-center lg:py-[113px]">
        <Reveal>
          <h2 className="max-w-[1010px] font-sans text-[clamp(1.875rem,3.71vw,64px)] font-extrabold leading-[1.16] tracking-[-0.0316em] text-white">
            {ABOUT_CTA.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[715px] text-base leading-relaxed text-white/80 lg:text-[18px]">
            {ABOUT_CTA.lede}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:gap-[23.4px]">
            <Button
              href="/#contact"
              variant="primaryCta"
              size="cta"
              className="min-w-[260px]"
            >
              {ABOUT_CTA.primaryCta}
            </Button>
            <Button
              href="/#services"
              variant="ghostRed"
              size="cta"
              className="min-w-[260px] lg:min-w-[276px]"
            >
              {ABOUT_CTA.secondaryCta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
