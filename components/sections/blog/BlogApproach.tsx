import Image from "next/image";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { BLOG_APPROACH } from "@/lib/data";

/**
 * Our Approach — Figma node 341:4529 (1727 x 628, white).
 *
 * Copy on the left, photo on the right with an offset outline frame: the
 * photo sits at (1166, 73) at 358.69 x 458.94 on a 26.17px radius with a
 * 23.55/26.17/37.42 rgba(255,80,80,.15) shadow, and a separate unfilled
 * 334.97 x 435.72 rectangle with a 3.925px #FF5050 border sits at
 * (1217, 120) — down and to the right, so it reads as a frame behind it.
 *
 * The eyebrow pill here is NOT the shared one: it is 206 x 37 on a #FFEDED
 * fill with a solid 1px #FF5050 border, a 61px radius, and 20px type.
 */
export function BlogApproach() {
  return (
    /* Figma 341:4529 — 1727 x 628 */
    <section
      id="our-approach"
      className="w-full bg-white py-16 lg:min-h-[628px] lg:py-20"
    >
      <div className="mx-auto grid w-full max-w-[1420px] grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-[713fr_395fr] lg:gap-20 lg:px-12">
        <div>
          <Reveal>
            <span className="inline-flex min-h-[37px] items-center justify-center rounded-[61px] border border-brand-red bg-step-ring-outer px-6 text-[clamp(1rem,1.16vw,20px)] font-normal tracking-[-0.0115em] text-black">
              {BLOG_APPROACH.eyebrow}
            </span>
          </Reveal>

          {/* Figma box gaps: eyebrow(ends 162) -> H2 184 = 22px */}
          <Reveal delay={0.05}>
            {/* 681 x 178 box, 70.747px on an 82.02px line */}
            <h2 className="mt-8 max-w-[681px] font-sans text-[clamp(2rem,4.1vw,70.75px)] font-extrabold leading-[1.16] tracking-[-0.0174em] text-black lg:mt-[22px]">
              <GradientText gradient="redBlack27b">
                {BLOG_APPROACH.headingStart}
              </GradientText>{" "}
              {BLOG_APPROACH.headingRest}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            {/* H2 ends 362, body starts 385 = 23px */}
            <p className="mt-8 max-w-[713px] text-base font-light leading-relaxed tracking-[-0.0842em] text-black lg:mt-[23px] lg:text-[clamp(1.125rem,1.54vw,26.53px)]">
              {BLOG_APPROACH.body}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative mx-auto w-full max-w-[395px]">
            {/*
              Offset outline frame — decorative, drawn behind the photo and
              down/right of it. It is also SMALLER than the photo in Figma:
              334.97 x 435.72 against 358.69 x 458.94, i.e. 93.4% x 94.9%,
              offset by 51.03 / 47.11 (14.2% / 10.3%).
            */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-[14.2%] top-[10.3%] h-[94.9%] w-[93.4%] rounded-[26.17px] border-[3.925px] border-brand-red"
            />
            <div className="relative aspect-[358.69/458.94] w-full overflow-hidden rounded-[26.17px] shadow-[23.55px_26.17px_37.42px_rgba(255,80,80,0.15)]">
              <Image
                src={BLOG_APPROACH.image.src}
                alt={BLOG_APPROACH.image.alt}
                fill
                sizes="(max-width: 1023px) 100vw, 359px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
