"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/lib/data";

/**
 * Testimonials carousel — Figma 97:691.
 *
 * Figma 97:695 is a centred row of three 694 x 354 cards on a 29px gap,
 * starting at x-138 so the outer two bleed off both edges — the middle card
 * is active, the neighbours are faded. Only the 1727px state is designed.
 *
 * This is a native CSS scroll-snap carousel, NOT a transform-driven one. An
 * earlier transform version computed
 *   translateX(calc(-i * (min(694px, calc(100vw - 3rem)) + 29px)))
 * which shifted the card off-screen on narrow viewports: the nested min()
 * inside a multiplying calc() is fragile, and 100vw counts the scrollbar, so
 * the step size and the card width disagreed. Scroll-snap removes the
 * arithmetic entirely, and gives real swipe, keyboard and trackpad support
 * for free.
 *
 * Padding centres the first and last card so every item can reach the middle.
 *
 * Interaction is NOT from Figma — the file specifies none. Arrows, dots and
 * swipe are derived from the repo's existing patterns.
 */
export function Testimonials() {
  const [active, setActive] = useState(0);
  const total = TESTIMONIALS.length;

  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    const card = cardRefs.current[index];
    if (!track || !card) return;
    track.scrollTo({
      left: card.offsetLeft - (track.clientWidth - card.clientWidth) / 2,
      behavior: "smooth",
    });
  }, []);

  // Derive the active card from scroll position so swipe, arrows, dots and a
  // trackpad all stay in sync.
  const syncActive = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const centre = track.scrollLeft + track.clientWidth / 2;
    let nearest = 0;
    let shortest = Infinity;
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const distance = Math.abs(card.offsetLeft + card.clientWidth / 2 - centre);
      if (distance < shortest) {
        shortest = distance;
        nearest = i;
      }
    });
    setActive(nearest);
  }, []);

  useEffect(() => {
    syncActive();
  }, [syncActive]);

  return (
    /*
      INTERIM top padding. `md:py-20` (80px) stacked on the 80px Industries
      leaves above it gave a 160px gap between the two sections. The only
      home-page inter-section gap actually recorded from Figma is Services ->
      Partners at 30px (2613 -> 2643, noted in app/page.tsx), so the generic
      rhythm is far too loose — but 97:691's own y-offset has not been fetched,
      so this is a reduction in the right direction, not a measurement.
      Replace with the real value once 97:506 can be fetched.
    */
    <section className="relative w-full overflow-hidden bg-white pb-16 pt-6 md:pb-20 md:pt-8">
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
          ref={trackRef}
          onScroll={syncActive}
          role="group"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          // Percentage, not `vw`: `100vw` counts the scrollbar gutter, so on a
          // desktop with a classic scrollbar the computed padding overshot by
          // half the gutter and the "centred" card sat a few px off. `100%`
          // resolves against the section's own content width instead.
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-[29px] overflow-x-auto scroll-smooth md:mt-16 [scroll-padding-inline:0]
            px-[7vw] md:px-[max(1.5rem,calc((100%-694px)/2))]"
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="w-[86vw] max-w-[694px] shrink-0 snap-center"
            >
              <TestimonialCard testimonial={t} active={i === active} />
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 flex items-center justify-center gap-1">
        <button
          type="button"
          onClick={() => goTo((active - 1 + total) % total)}
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
              onClick={() => goTo(i)}
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={active === i ? "true" : undefined}
              // The 8px dot is the visual; the button around it is the touch target.
              className="inline-flex h-11 w-6 items-center justify-center"
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
          onClick={() => goTo((active + 1) % total)}
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
};

function TestimonialCard({ testimonial, active }: CardProps) {
  return (
    // Figma 97:704 — #FBFBFB fill, #FF5050 2px border, radius 20,
    // shadow 8/9/38.2 rgba(0,0,0,.1).
    <article
      className={`h-full rounded-[20px] border-2 bg-ink-50 p-6 text-center transition-all duration-500 sm:p-10 md:px-[73px] md:py-10 ${
        active
          ? "border-brand-red opacity-100 shadow-card"
          : "border-brand-red/30 opacity-70"
      }`}
    >
      {/* Figma's tracking is measured for 32px display type — applying it to
          16px mobile text closes the letters up, so it starts at md. */}
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
