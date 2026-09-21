"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICE_FAQS } from "@/lib/data";
import type { ServiceFaq } from "@/lib/types";
import type { ComponentProps } from "react";

type Gradient = ComponentProps<typeof GradientText>["gradient"];

type ServiceFAQProps = {
  faqs?: ServiceFaq[];
  heading?: { start: string; middle: string; end: string };
  gradientStart?: Gradient;
  gradientEnd?: Gradient;
  /** Figma H2 box — 1243px on the service pages, 786px on the Blog page */
  headingMaxWidthClass?: string;
  /**
   * The sub-service template draws the plus/minus glyph in #FF5050; every
   * other frame draws it at rgba(0,0,0,.5).
   */
  iconClassName?: string;
};

/**
 * Service FAQ — Figma nodes 239:1866 (Cybersecurity, 4 rows) and 341:3720
 * (IT Infrastructure, 6 rows).
 *
 * #F6F6F6 rows, 1389px wide on a 92px pitch, each with a
 * majesticons:plus-line icon at 32px. Row count, copy and gradient stops are
 * props; the geometry is identical on both pages.
 *
 * ⚠️ Figma contains the questions only — every accordion is drawn closed and no
 * answer copy exists anywhere in either frame. Rows whose answer is still empty
 * render as plain, non-interactive rows rather than as buttons that expand to
 * nothing. Fill in an `answer` and the row becomes a real accordion with no
 * further change here.
 */
export function ServiceFAQ({
  faqs = SERVICE_FAQS,
  heading = {
    start: "Frequently",
    middle: "Asked Questions Cybersecurity Services in",
    end: "Pakistan",
  },
  gradientStart = "redBlack46",
  gradientEnd = "blackRed74",
  headingMaxWidthClass = "max-w-[1243px]",
  iconClassName = "text-ink-muted-50",
}: ServiceFAQProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full bg-white py-16 lg:py-20">
      <Container>
        <Reveal>
          {/* Figma H2 box: 1243 x 151 on the service pages, 786 x 84 on Blog */}
          <h2
            className={`mx-auto text-center font-sans text-[clamp(1.875rem,3.71vw,64px)] font-extrabold leading-[1.16] tracking-[-0.0316em] text-black ${headingMaxWidthClass}`}
          >
            <GradientText gradient={gradientStart}>
              {heading.start}
            </GradientText>{" "}
            {/* A "\n" in heading.middle is a hard line break — the
                sub-service FAQ breaks after "Asked". */}
            {heading.middle.split("\n").map((line, i) => (
              <span key={line}>
                {i > 0 ? <br className="hidden lg:inline" /> : null}
                {i > 0 ? " " : null}
                {line}
              </span>
            ))}
            {/* The Blog page heading has no trailing gradient word */}
            {heading.end ? (
              <>
                {" "}
                <GradientText gradient={gradientEnd}>
                  {heading.end}
                </GradientText>
              </>
            ) : null}
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 flex max-w-[1389px] flex-col gap-[18px] lg:mt-16">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const hasAnswer = faq.answer.trim().length > 0;

            const question = (
              <>
                <span className="text-left text-[clamp(1.0625rem,1.97vw,34px)] font-light leading-snug tracking-[-0.0594em] text-ink-muted-50">
                  {faq.question}
                </span>
                <Icon
                  icon={
                    hasAnswer && isOpen
                      ? "majesticons:minus-line"
                      : "majesticons:plus-line"
                  }
                  aria-hidden="true"
                  className={`h-8 w-8 shrink-0 ${iconClassName}`}
                />
              </>
            );

            return (
              <Reveal key={faq.question} delay={i * 0.04}>
                <div className="bg-ink-100">
                  {hasAnswer ? (
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${i}`}
                      className="flex w-full items-center justify-between gap-6 py-5 pl-8 pr-[18px] text-left lg:min-h-[74px] lg:py-0"
                    >
                      {question}
                    </button>
                  ) : (
                    <div className="flex w-full items-center justify-between gap-6 py-5 pl-8 pr-[18px] lg:min-h-[74px] lg:py-0">
                      {question}
                    </div>
                  )}

                  <AnimatePresence initial={false}>
                    {hasAnswer && isOpen ? (
                      <motion.div
                        id={`faq-answer-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-8 pb-6 text-base leading-relaxed text-ink-500">
                          {faq.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
