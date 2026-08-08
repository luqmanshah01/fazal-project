import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { VENDOR_ROWS } from "@/lib/data";

/**
 * Vendor partners — Figma node 239:1621 (1727 x 774).
 *
 * Three logo rows, each flanked by a 422 x 145 white-to-transparent fade on
 * both ends — the standard infinite-marquee treatment. Reuses the
 * `.animate-marquee` keyframes already defined in globals.css.
 *
 * Figma specifies no direction, speed, or easing for the scroll (the file has
 * no prototype data at all — see SKILL.md 7), so the motion here is inherited
 * from the home page Partners marquee, not measured from the design.
 */
export function VendorPartners() {
  return (
    <section id="vendors" className="w-full bg-white py-16 lg:py-20">
      <Container>
        <Reveal>
          <h2 className="text-center font-sans text-[clamp(1.875rem,3.71vw,64px)] font-extrabold leading-[1.16] tracking-[-0.0159em] text-black">
            <GradientText gradient="redBlack29">Authorized</GradientText>{" "}
            Partner of the World&apos;s
            <br className="hidden md:block" /> Leading Cybersecurity{" "}
            <GradientText gradient="blackRed57">Vendors</GradientText>
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mx-auto mt-8 max-w-[1045px] text-center text-base font-light leading-relaxed tracking-[-0.0842em] text-ink-500 sm:text-lg lg:text-[24px]">
            Our technology partnerships are not reseller agreements — they are
            deep technical relationships. Our team is certified by every vendor
            we represent, ensuring expert-level deployment and support for every
            solution we deliver.
          </p>
        </Reveal>
      </Container>

      <div className="mt-12 flex flex-col gap-6 lg:mt-16 lg:gap-8">
        {VENDOR_ROWS.map((row, rowIndex) => {
          const loop = [...row, ...row];
          return (
            <div key={rowIndex} className="relative w-full overflow-hidden">
              {/* Figma fades are 422px wide on each end */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent md:w-40 lg:w-[422px]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent md:w-40 lg:w-[422px]"
              />

              <div className="flex w-max animate-marquee items-center gap-10 py-3 md:gap-14 motion-reduce:animate-none">
                {loop.map((logo, i) => (
                  <div
                    key={`${logo.src}-${i}`}
                    className="relative flex h-16 w-28 shrink-0 items-center justify-center md:h-20 md:w-36"
                  >
                    <Image
                      src={logo.src}
                      alt={i < row.length ? logo.alt : ""}
                      aria-hidden={i >= row.length}
                      fill
                      sizes="144px"
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
