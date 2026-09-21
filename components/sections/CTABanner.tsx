import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CTABanner() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-black text-white">
      <Image
        src="/images/backgrounds/cta-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center opacity-40"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/60 to-black/90" />

      {/* Figma 97:635 — 701 x 362 #FF5050 ellipse at blur(150px), bleeding in
          from the left edge at (-351, -15), not centred. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[351px] top-0 -z-10 h-[362px] w-[701px] rounded-full bg-brand-red blur-[150px] animate-ambient-pulse"
      />

      <div className="mx-auto flex w-full max-w-[1450px] flex-col items-center gap-10 px-6 py-20 text-center md:flex-row md:justify-between md:py-24 md:text-left">
        {/* 527 x 124 box, Bricolage SemiBold 64px on a 62px line */}
        <Reveal>
          <h2 className="max-w-[527px] font-sans text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[clamp(2.5rem,3.71vw,64px)] lg:leading-[0.97]">
            Not sure which service you need?
          </h2>
        </Reveal>
        {/* 409.93 x 59.36, radius 14.98, label SemiBold 27.05px */}
        <Reveal delay={0.1}>
          <Button
            href="#contact"
            variant="primary"
            size="lg"
            className="lg:h-[59.36px] lg:min-w-[410px] lg:text-[27.05px] lg:font-semibold"
          >
            Get a Free Consultation
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
