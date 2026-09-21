"use client";

import { useRef, useState, type CSSProperties } from "react";
import { Icon } from "@iconify/react";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/lib/data";

/**
 * Testimonials carousel — Figma 97:691.
 *
 * Figma only designs the 1727px desktop state: a 694 x 354 card on #FBFBFB
 * with a 2px #FF5050 border, quote at Light 32px, company ExtraBold 20.88px,
 * role Light 17.9px.
 *
 * Everything below lg is derived. Three things are deliberately NOT inherited
 * from the desktop measurements because they only make sense at display size:
 *   - the tight negative tracking (-0.0631em et al) is applied from md up
 *     only; at 16px it closes the letters up and hurts readability
 *   - the dots are 8px tall in the design, which is an 8px touch target, so
 *     they get a 44px transparent hit area on touch
 *   - the arrows are 40px, raised to 44px on touch
 *
 * Swipe is also derived — Figma specifies no interaction at all, but a
 * carousel that can only be driven by arrows is broken on a phone.
 */
export function Testimonials() {
  const [active, setActive] = useState(0);
  const total = TESTIMONIALS.length;

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  // Horizontal swipe, ignoring mostly-vertical drags so the page still scrolls.
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const SWIPE_THRESHOLD = 50;

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Social Proof"
          titleMaxWidthClass="max-w-[812px]"
          title={
            <>
              <span>Trusted by Pakistan&apos;s Most Recognized </span>
              {/* ts14 — a gradient in Figma, not solid red */}
              <GradientText gradient="homeBrands">Brands</GradientText>
            </>
          }
        />
      </Container>

      <Reveal>
        <div
          className="mx-auto mt-12 w-[var(--card-w)] touch-pan-y md:mt-16"
          style={
            {
              // Figma 97:703 — 694px card, 29px gap. Below that the card is the
              // viewport minus the Container gutter.
              "--card-w": "min(694px, calc(100vw - 3rem))",
              "--gap": "29px",
            } as CSSProperties
          }
          onTouchStart={(e) => {
            const t = e.touches[0];
            touchStart.current = { x: t.clientX, y: t.clientY };
          }}
          onTouchEnd={(e) => {
            const start = touchStart.current;
            if (!start) return;
            const t = e.changedTouches[0];
            const dx = t.clientX - start.x;
            const dy = t.clientY - start.y;
            touchStart.current = null;
            if (Math.abs(dx) < SWIPE_THRESHOLD) return;
            if (Math.abs(dx) < Math.abs(dy)) return; // vertical scroll, not a swipe
            if (dx < 0) next();
            else prev();
          }}
        >
          <div
            className="flex gap-[var(--gap)] transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(calc(${-active} * (var(--card-w) + var(--gap))))`,
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard
                key={i}
                testimonial={t}
                active={i === active}
                hidden={i !== active}
              />
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-10 flex items-center justify-center gap-1">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-black transition-all hover:text-brand-red md:h-10 md:w-10 md:border md:border-black/10 md:bg-white md:hover:border-brand-red"
        >
          <Icon icon="mdi:arrow-left" className="h-4 w-4" />
        </button>

        <div className="flex items-center">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={active === i ? "true" : undefined}
              // The 8px dot is the visual; the button around it is the 44px
              // touch target.
              className="group inline-flex h-11 w-6 items-center justify-center"
            >
              <span
                className={`h-2 rounded-full transition-all ${
                  active === i ? "w-8 bg-brand-red" : "w-2 bg-black/20"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-black transition-all hover:text-brand-red md:h-10 md:w-10 md:border md:border-black/10 md:bg-white md:hover:border-brand-red"
        >
          <Icon icon="mdi:arrow-right" className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}

type CardProps = {
  testimonial: (typeof TESTIMONIALS)[number];
  active: boolean;
  hidden: boolean;
};

function TestimonialCard({ testimonial, active, hidden }: CardProps) {
  return (
    // Figma 97:704 — #FBFBFB fill, #FF5050 2px border, radius 20,
    // shadow 8/9/38.2 rgba(0,0,0,.1).
    <article
      aria-hidden={hidden}
      className={`w-[var(--card-w)] flex-shrink-0 rounded-[20px] border-2 bg-ink-50 p-6 text-center transition-all duration-500 sm:p-10 md:px-[73px] md:py-10 ${
        active
          ? "border-brand-red opacity-100 shadow-card"
          : "border-brand-red/30 opacity-70"
      }`}
    >
      {/* Figma's tracking is for 32px display type — applied from md only */}
      <p className="text-base font-light leading-relaxed text-ink-500 md:text-[clamp(1.25rem,1.85vw,32px)] md:leading-snug md:tracking-[-0.0631em]">
        {testimonial.quote}
      </p>
      <div className="mt-6 md:mt-8">
        <p className="font-sans text-base font-extrabold text-brand-red md:text-[20.88px] md:tracking-[-0.0721em]">
          {testimonial.company}
        </p>
        <p className="mt-1 text-sm font-light text-ink-500 md:text-[17.9px] md:tracking-[-0.0842em]">
          {testimonial.role}
        </p>
      </div>
    </article>
  );
}
