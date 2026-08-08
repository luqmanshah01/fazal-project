import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICE_CTA } from "@/lib/data";

/**
 * Closing CTA — Figma node 239:1777 (1728 x 524).
 *
 * Structurally identical to the About page CTA: rgba(0,0,0,0.63) over the
 * shared photo, plus two 659 x 624 #FF5050 ellipses at blur(150px) bleeding in
 * from each side. Only the copy differs — and the second button is a phone
 * number, so it links with tel: rather than to a route.
 */
export function ServiceCTA() {
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
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[rgba(0,0,0,0.63)]"
      />

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
          <h2 className="max-w-[1165px] font-sans text-[clamp(1.875rem,3.71vw,64px)] font-extrabold leading-[1.16] tracking-[-0.0316em] text-white">
            {SERVICE_CTA.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[715px] text-base leading-relaxed text-white/80 lg:text-[18px]">
            {SERVICE_CTA.lede}
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
              {SERVICE_CTA.primaryCta}
            </Button>
            <Button
              href={SERVICE_CTA.phoneHref}
              variant="ghostRed"
              size="cta"
              className="min-w-[260px] lg:min-w-[276px]"
            >
              {SERVICE_CTA.secondaryCta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
