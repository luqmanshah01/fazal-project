import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { Reveal } from "@/components/ui/Reveal";
import { TRUST_BADGES } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-screen w-full items-center overflow-hidden text-white md:min-h-[800px] lg:min-h-[1040px]">
      <video
        src="/videos/hero-bg.mp4"
        poster="/images/backgrounds/hero-bg.png"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/60 to-black/85" />
      <div className="absolute inset-0 -z-10 bg-brand-red/10 mix-blend-multiply" />

      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 pt-40 pb-24 text-center lg:pt-52 lg:pb-32">
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-white/30 bg-white/5 px-5 py-1.5 text-[13px] tracking-tight text-white backdrop-blur-sm">
            Pakistan&apos;s #1 Enterprise Cybersecurity Company
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-8 font-sans font-extrabold tracking-[-0.023em] text-[44px] leading-[1.08] sm:text-[64px] lg:text-[81px] lg:leading-[1.12]">
            <GradientText gradient="hero">Cybersecurity</GradientText>
            <span className="text-white"> Services in Pakistan</span>
            <br className="hidden sm:block" />
            <span className="text-white"> Protect, Scale &amp; Grow with </span>
            <GradientText gradient="heroEnd">Confidence</GradientText>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg lg:text-[22px] lg:leading-[1.35]">
            SV Tech powers Pakistan&apos;s leading enterprises with global-grade
            cybersecurity solutions, managed IT infrastructure, and end-to-end
            digital transformation backed by{" "}
            <strong className="font-semibold text-white">
              8+ years of international experience
            </strong>
            .
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="#contact" variant="primary" size="md">
              Get a Free Security Audit
            </Button>
            <Button href="#services" variant="primary" size="md">
              View Our Services
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {TRUST_BADGES.map((label) => (
              <TrustBadge key={label}>{label}</TrustBadge>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
