import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Stat } from "@/components/ui/Stat";
import { Reveal } from "@/components/ui/Reveal";
import { STATS } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative w-full bg-white pt-2 pb-12 md:pt-4 md:pb-16">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.20fr_1fr] lg:gap-20">
          <div className="flex flex-col text-center lg:text-left">
            <Reveal>
              {/* Figma 97:582 — fill rgba(255,80,80,.1), border rgba(255,80,80,.3) */}
              <span className="inline-flex items-center rounded-full border border-brand-red/30 bg-brand-red-soft px-8 py-1.5 text-[13.81px] tracking-tight text-black sm:px-14 lg:px-20 lg:py-1">
                About SV Tech
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              {/* Figma 97:581 — 812 x 223 box, 64px on a 74.2px line */}
              <h2 className="mt-6 font-sans text-[34px] font-extrabold leading-[1.15] tracking-[-0.0316em] text-black sm:text-[42px] lg:mt-6 lg:max-w-[812px] lg:text-[clamp(2.5rem,3.71vw,64px)] lg:leading-[1.16]">
                <GradientText gradient="homeAboutStart">Pakistan&apos;s</GradientText>{" "}
                <span>Most</span>{" "}
                <br className="hidden lg:block" />
                <span>Trusted Cybersecurity &amp; IT</span>{" "}
                <br className="hidden lg:block" />
                <span>Solutions</span>{" "}
                <GradientText gradient="homeAboutEnd">Company</GradientText>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 sm:gap-x-4">
                {STATS.map((s) => (
                  <Stat key={s.label} value={s.value} label={s.label} />
                ))}
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6 self-start text-center lg:gap-10 lg:text-left">
            <Reveal delay={0.1}>
              {/* Figma style_558ebda8 — Regular 22px, tracking -0.0464em,
                  fill rgba(0,0,0,.7); boxes are 650/653/637 wide */}
              <p className="mx-auto max-w-[653px] text-base leading-relaxed tracking-[-0.0464em] text-ink-muted-70 lg:mx-0 lg:text-[clamp(1rem,1.27vw,22px)] lg:leading-[1.3]">
                Our mission is simple: help Pakistani enterprises operate
                smarter, safer, and faster with technology that protects what
                matters most. From real-time threat monitoring to full IT
                infrastructure management, we are your end-to-end technology
                partner.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mx-auto max-w-[653px] text-base leading-relaxed tracking-[-0.0464em] text-ink-muted-70 lg:mx-0 lg:text-[clamp(1rem,1.27vw,22px)] lg:leading-[1.3]">
                Founded in 2017, SV Tech (SV Engineering &amp; Sourcing) has
                grown into Pakistan&apos;s premier cybersecurity and IT
                solutions company, delivering enterprise-grade protection and
                digital transformation to businesses across finance, energy,
                telecom, and manufacturing.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto max-w-[653px] text-base leading-relaxed tracking-[-0.0464em] text-ink-muted-70 lg:mx-0 lg:text-[clamp(1rem,1.27vw,22px)] lg:leading-[1.3]">
                With a team of certified security professionals and partnerships
                with the world&apos;s leading cybersecurity vendors including
                CrowdStrike, Palo Alto Networks, SentinelOne, and Fortinet we
                deliver solutions that are built for today&apos;s threats and
                tomorrow&apos;s challenges.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
