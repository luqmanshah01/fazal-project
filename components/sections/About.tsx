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
          <div className="flex flex-col">
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-brand-red/40 bg-brand-red/5 px-20 py-1 text-[13px] tracking-tight text-black">
                About SV Tech
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="mt-6 font-sans font-extrabold text-black text-3xl leading-tight sm:text-4xl lg:max-w-[600px] lg:text-[44px]"
                style={{
                  lineHeight: "52px",
                  letterSpacing: "-1.2px",
                }}
              >
                <GradientText gradient="redBlack">Pakistan&apos;s</GradientText>{" "}
                <span>Most</span>
                <br />
                <span>Trusted Cybersecurity &amp; IT</span>
                <br />
                <span>Solutions </span>
                <GradientText gradient="blackRed">Company</GradientText>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-x-4">
                {STATS.map((s) => (
                  <Stat key={s.label} value={s.value} label={s.label} />
                ))}
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6 self-start lg:gap-10">
            <Reveal delay={0.1}>
              <p className="max-w-[700px] text-sm leading-[1.10] text-black tracking-[-0.04em] lg:text-[18px]">
                Our mission is simple: help Pakistani enterprises operate
                smarter, safer, and faster with technology that protects what
                matters most. From real-time threat monitoring to full IT
                infrastructure management, we are your end-to-end technology
                partner.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="max-w-[620px] text-sm leading-[1.10] text-black tracking-[-0.04em] lg:text-[18px]">
                Founded in 2017, SV Tech (SV Engineering &amp; Sourcing) has
                grown into Pakistan&apos;s premier cybersecurity and IT
                solutions company, delivering enterprise-grade protection and
                digital transformation to businesses across finance, energy,
                telecom, and manufacturing.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="max-w-[620px] text-sm leading-[1.10]  text-black tracking-[-0.04em] lg:text-[18px]">
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
