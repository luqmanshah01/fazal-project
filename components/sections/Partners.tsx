import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { PARTNERS } from "@/lib/constants";

export function Partners() {
  const loop = [...PARTNERS, ...PARTNERS];

  return (
    <section className="w-full bg-white py-10 md:py-14">
      <Container>
        <Reveal>
          <h2 className="text-center font-sans text-4xl font-extrabold tracking-[-0.023em] text-black sm:text-5xl lg:text-[64px] lg:leading-[1.12]">
            <GradientText gradient="redBlack">Our</GradientText>{" "}
            <span>Partners</span>
          </h2>
        </Reveal>
      </Container>

      <div className="relative mt-10 w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent md:w-40" />

        <div className="flex w-max animate-marquee items-center gap-10 py-3 md:gap-14">
          {loop.map((partner, i) => (
            <div
              key={`${partner.src}-${i}`}
              className="relative flex h-14 w-32 flex-shrink-0 items-center justify-center md:h-16 md:w-40"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
