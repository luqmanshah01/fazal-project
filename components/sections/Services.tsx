import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICES } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="relative w-full bg-white py-16
     md:py-20">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              <GradientText gradient="redBlack">End-to-End</GradientText>{" "}
              <span>Cybersecurity</span>
              <br className="hidden md:block" />
              <span> &amp; IT Services for Pakistan&apos;s </span>
              <GradientText gradient="blackRed">Enterprises</GradientText>
            </>
          }
          description="From protecting your network perimeter to transforming your digital operations, SV Tech delivers a comprehensive suite of cybersecurity and IT services tailored to Pakistan's enterprise landscape."
        />

        <div className="mt-16 grid grid-cols-1 border-t border-l border-black/10 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05}>
              <div className="flex h-full flex-col border-b border-r border-black/10 p-8 text-left md:p-10 lg:p-12">
                <h3 className="font-sans text-[22px] font-extrabold leading-tight tracking-[-0.02em] text-black lg:text-[24px]">
                  {service.title}
                </h3>
                <p className="mt-4 flex-1 text-sm font-light leading-relaxed text-ink-500 lg:text-[15px]">
                  {service.description}
                </p>
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-md bg-brand-red px-4 py-2 text-[11px] font-medium text-white shadow-[inset_1.92px_2.30px_2.38px_rgba(255,255,255,0.25)] transition hover:brightness-110"
                  >
                    {service.cta}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
