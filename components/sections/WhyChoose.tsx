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
          title={
            <>
              <GradientText gradient="redBlack">Why</GradientText>{" "}
              <span>Pakistan&apos;s Top Enterprises Choose SV Tech for </span>
              <GradientText gradient="blackRed">Cybersecurity</GradientText>
            </>
          }
        />

        <div className="relative mt-16 grid grid-cols-1 gap-x-12 gap-y-14 md:mt-20 md:grid-cols-2 md:gap-x-16 lg:gap-x-20">
          {WHY_US.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="group relative pl-6 md:pl-8">
                <span className="absolute left-0 top-1 h-full w-[3px] rounded-full bg-brand-red" />
                <h3 className="font-sans text-2xl font-extrabold leading-tight tracking-[-0.02em] text-black lg:text-[28px]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base font-light leading-relaxed text-ink-500 lg:text-[19px]">
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
