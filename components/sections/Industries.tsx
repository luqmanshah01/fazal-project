import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { INDUSTRIES } from "@/lib/constants";

export function Industries() {
  return (
    <section className="relative w-full bg-white py-16 md:py-2">
      <Container>
        <SectionHeading
          eyebrow="Industries We Serve"
          title={
            <>
              <GradientText gradient="redBlack">Cybersecurity</GradientText>{" "}
              <span>Solutions for Every Industry in </span>
              <GradientText gradient="blackRed">Pakistan</GradientText>
            </>
          }
          description="We bring 8+ years of international cybersecurity experience directly to Pakistan. Our team has delivered solutions across the US, Europe, and the Middle East and now brings that same expertise home."
        />

        <div className="mt-16 grid grid-cols-1 divide-y divide-black/8 border border-black/8 sm:grid-cols-2 sm:divide-y-0 md:mt-20 md:grid-cols-3 lg:grid-cols-4">
          {INDUSTRIES.map((label, i) => (
            <Reveal key={label} delay={i * 0.04}>
              <div className="group flex h-full items-center gap-5 border-black/8 bg-white p-6 transition-colors hover:bg-ink-50 sm:border-r sm:[&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(n+4)]:border-t lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(4n)]:border-r-0 lg:[&:nth-child(n+4)]:border-t-0 lg:[&:nth-child(n+5)]:border-t">
                <span className="h-14 w-14 flex-shrink-0 rounded-full bg-brand-red-light transition-transform duration-300 group-hover:scale-110" />
                <h3 className="whitespace-pre-line font-sans text-base font-extrabold leading-tight tracking-[-0.02em] text-black md:text-[17px] lg:text-[19px]">
                  {label}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
