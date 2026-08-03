"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const total = TESTIMONIALS.length;

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  const CARD_WIDTH = 560;
  const GAP = 32;

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Social Proof"
          title={
            <>
              <span>Trusted by Pakistan&apos;s Most Recognized </span>
              <span className="font-serif italic text-brand-red">Brands</span>
            </>
          }
        />
      </Container>

      <Reveal>
        <div className="mt-12 flex justify-center md:mt-16">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(calc(50vw - ${CARD_WIDTH / 2}px - ${active * (CARD_WIDTH + GAP)}px))`,
              gap: `${GAP}px`,
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard
                key={i}
                testimonial={t}
                width={CARD_WIDTH}
                active={i === active}
              />
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-10 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black transition-all hover:border-brand-red hover:text-brand-red"
        >
          <Icon icon="mdi:arrow-left" className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-1.5">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                active === i ? "w-8 bg-brand-red" : "w-2 bg-black/20"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black transition-all hover:border-brand-red hover:text-brand-red"
        >
          <Icon icon="mdi:arrow-right" className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}

type CardProps = {
  testimonial: (typeof TESTIMONIALS)[number];
  width: number;
  active: boolean;
};

function TestimonialCard({ testimonial, width, active }: CardProps) {
  return (
    <article
      style={{ width: `${width}px` }}
      className={`flex-shrink-0 rounded-3xl border bg-white p-10 text-center transition-all duration-500 md:p-12 ${
        active
          ? "border-brand-red/60 opacity-100 shadow-[0_10px_40px_-10px_rgba(255,80,80,0.25)]"
          : "border-brand-red/30 opacity-70"
      }`}
    >
      <p className="text-base font-light leading-relaxed text-ink-500 md:text-[17px] lg:leading-[1.6]">
        {testimonial.quote}
      </p>
      <div className="mt-8">
        <p className="text-sm font-extrabold tracking-tight text-brand-red md:text-[15px]">
          {testimonial.company}
        </p>
        <p className="mt-1 text-xs font-light text-ink-500">
          {testimonial.role}
        </p>
      </div>
    </article>
  );
}
