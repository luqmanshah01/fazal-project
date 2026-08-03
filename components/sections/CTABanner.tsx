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

      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red/60 blur-[150px] animate-ambient-pulse" />

      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10 px-6 py-20 text-center md:flex-row md:justify-between md:text-left md:py-24">
        <Reveal>
          <h2 className="max-w-2xl font-sans text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[52px] lg:leading-[1.05]">
            Not sure which service you need?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Button href="#contact" variant="primary" size="lg">
            Get a Free Consultation
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
