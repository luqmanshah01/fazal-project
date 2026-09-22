import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICE_CTA } from "@/lib/data";
import type { ServiceCtaContent } from "@/lib/types";

type ServiceCTAProps = {
  content?: ServiceCtaContent;
};

/**
 * Closing CTA — Figma nodes 239:1777 (Cybersecurity) and 341:3675
 * (IT Infrastructure). Both 1728 x 524.
 *
 * Structurally identical to the About page CTA: rgba(0,0,0,0.63) over the
 * shared photo, plus two 659 x 624 #FF5050 ellipses at blur(150px) bleeding in
 * from each side.
 *
 * The button row is data-driven because the two pages disagree on it: the
 * Cybersecurity frame draws two buttons (the second a phone number, hence the
 * tel: href in the data), the IT Infrastructure frame draws one.
 */
export function ServiceCTA({ content = SERVICE_CTA }: ServiceCTAProps = {}) {
  return (
    /* Figma 239:1777 — 1728 x 524, H2 at y113 and the button row ending at
       411, so 113 top / 113 bottom (already applied below). Constant, not a
       prop: 341:3675 measures the same 1728 x 524. */
    <section
      id="contact"
      className="relative isolate w-full overflow-hidden bg-black text-white lg:min-h-[524px]"
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
          <h2
            className={`whitespace-pre-line font-sans text-[clamp(1.875rem,3.71vw,64px)] font-extrabold leading-[1.16] tracking-[-0.0316em] text-white ${content.headingMaxWidthClass}`}
          >
            {content.heading}
          </h2>
        </Reveal>

        {/* Figma box gaps: H2 -> lede 10px, lede -> buttons 33px (239:1777).
            The sub-service CTA has no lede at all. */}
        {content.lede ? (
          <Reveal delay={0.1}>
            <p
              className={`mt-6 text-base leading-relaxed text-white/80 lg:mt-[10px] lg:text-[18px] ${content.ledeMaxWidthClass}`}
            >
              {content.lede}
            </p>
          </Reveal>
        ) : null}

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:mt-[33px] lg:gap-[23.4px]">
            {content.buttons.map((button) => (
              <Button
                key={button.label}
                href={button.href}
                variant={button.variant}
                size="cta"
                className={`min-w-[260px] ${
                  button.widthClass ??
                  (button.variant === "ghostRed"
                    ? "lg:min-w-[276px]"
                    : "lg:min-w-[198px]")
                }`}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
