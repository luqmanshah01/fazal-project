import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { Reveal } from "@/components/ui/Reveal";
import { TRUST_BADGES } from "@/lib/data";

export function Hero() {
  return (
    /*
      1040px was here with no source behind it — no spec doc, no node id, no
      comment. Both heroes that HAVE been measured are 1727 x 919: About
      (239:1465) and Cybersecurity (239:1694). Same design pattern, same H1
      size, same button row. 919 is the value with evidence, so it is the one
      used.

      Caveat for the re-measure: this hero carries a trust-badge row the other
      two do not, so its frame may genuinely be a little taller. Scaling the
      client's Figma screenshot off the 1267px navbar pill puts the badges
      ending near y774, and the two measured heroes leave ~190-210px below
      their last element, which would put this frame around 975. That is a
      screenshot estimate with roughly +/-25px of slop, not a measurement —
      hence 919 rather than a number nobody has read off the file. Confirm
      against 97:506 when the fetch is possible.
    */
    <section className="relative isolate flex min-h-svh w-full items-center overflow-hidden text-white md:min-h-[800px] lg:min-h-[919px]">
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

      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 pt-32 pb-20 text-center sm:pt-40 sm:pb-24 lg:py-32">
        {/* 331.67 x 25.61 pill, fill rgba(255,80,80,.1), border rgba(255,80,80,.3) */}
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-brand-red/30 bg-brand-red-soft px-5 py-1 text-[12.81px] tracking-tight text-white backdrop-blur-sm">
            Pakistan&apos;s #1 Enterprise Cybersecurity Company
          </span>
        </Reveal>

        {/* H1 box is 1325.57 wide in Figma — it decides the wrap point */}
        <Reveal delay={0.1}>
          {/*
            DERIVED, not measured — 97:506 has not been fetched. The two heroes
            that HAVE been measured both put the H1 close under the pill:
            About (239:1465) 5px, Cybersecurity (239:1694) 16px. This hero's
            pill carries a long label like the Cybersecurity one (not About's
            short "Who We Are"), so it takes that hero's 16px rather than
            About's 5px. `mt-8` was giving 32px on every one of them.
            Re-measure when 97:506 can be fetched.
          */}
          <h1 className="mx-auto mt-8 max-w-[1326px] font-sans text-[clamp(2rem,4.69vw,81px)] font-extrabold leading-[1.124] tracking-[-0.0231em] lg:mt-4">
            <GradientText gradient="hero">Cybersecurity</GradientText>
            <span className="text-white"> Services in Pakistan</span>
            <br className="hidden sm:block" />
            <span className="text-white"> Protect, Scale &amp; Grow with </span>
            <GradientText gradient="heroEnd">Confidence</GradientText>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          {/* 1151.25 x 97 box, Bricolage Regular 25.612px on a 32.01px line */}
          <p className="mx-auto mt-8 max-w-[1152px] text-base leading-relaxed text-white/90 sm:text-lg lg:text-[clamp(1.25rem,1.48vw,25.61px)] lg:leading-[1.25]">
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
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:mt-7 lg:gap-7">
            <Button
              href="#contact"
              variant="primary"
              size="md"
              className="min-w-[260px] sm:min-w-[280px] lg:h-[57px] lg:min-w-[385px] lg:px-11 lg:text-lg"
            >
              Get a Free Security Audit
            </Button>
            <Button
              href="#services"
              variant="primary"
              size="md"
              className="min-w-[260px] sm:min-w-[280px] lg:h-[57px] lg:min-w-[385px] lg:px-11 lg:text-lg"
            >
              View Our Services
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 lg:mt-8">
            {TRUST_BADGES.map((label) => (
              <TrustBadge key={label}>{label}</TrustBadge>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
