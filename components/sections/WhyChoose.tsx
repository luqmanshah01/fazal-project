import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WHY_US } from "@/lib/data";

export function WhyChoose() {
  return (
    <section className="relative w-full bg-white py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Why SV Tech"
          titleMaxWidthClass="max-w-[1203px]"
          title={
            <>
              <GradientText gradient="homeWhyStart">Why</GradientText>{" "}
              <span>Pakistan&apos;s Top Enterprises Choose SV Tech for </span>
              <GradientText gradient="homeWhyEnd">Cybersecurity</GradientText>
            </>
          }
        />

        <div className="relative mt-16 grid grid-cols-1 gap-x-12 gap-y-14 md:mt-20 md:grid-cols-2 md:gap-x-16 lg:gap-x-20">
          {WHY_US.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              {/* Figma 97:653-656 — #FF5050 rule, 5px wide, 174px tall.
                  Title style_bac5ede0 (ExtraBold 28px, -0.0721em),
                  body style_88e93664 (Light 24px, -0.0842em, #696969). */}
              <div className="group relative pl-6 md:pl-8">
                <span className="absolute left-0 top-1 h-full w-[5px] rounded-full bg-brand-red lg:h-[174px]" />
                <h3 className="font-sans text-2xl font-extrabold leading-tight tracking-[-0.0721em] text-black lg:text-[28px]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base font-light leading-snug tracking-[-0.0842em] text-ink-500 lg:text-[clamp(1rem,1.39vw,24px)]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
