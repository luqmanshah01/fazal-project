"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FAQS } from "@/lib/data";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-white py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="FAQs"
          titleMaxWidthClass="max-w-[1243px]"
          title={
            <>
              <GradientText gradient="redBlack46">Frequently</GradientText>{" "}
              <span>Asked Questions</span>
              <br className="hidden md:block" />
              <span> About Cybersecurity Services in </span>
              <GradientText gradient="blackRed74">Pakistan</GradientText>
            </>
          }
        />

        {/*
          Figma 97:752-770 — five #F6F6F6 rows, 1389px wide on a 92px pitch
          (74px row + 18px gap), square corners, padding 0 18px. Question is
          Bricolage Light 34px on a 74.2px line box at rgba(0,0,0,.5), with a
          32px majesticons:plus-line. Same treatment as the service pages.
        */}
        <div className="mx-auto mt-14 flex max-w-[1389px] flex-col gap-[18px] md:mt-16">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.question} delay={i * 0.05}>
                <div className="bg-ink-100 px-[18px]">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left lg:min-h-[74px] lg:py-0"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-sans text-lg font-light leading-snug tracking-[-0.0594em] md:text-xl lg:text-[clamp(1.0625rem,1.97vw,34px)] ${
                        isOpen ? "text-black" : "text-ink-muted-50"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <Icon
                      icon={
                        isOpen
                          ? "majesticons:minus-line"
                          : "majesticons:plus-line"
                      }
                      className="h-8 w-8 flex-shrink-0 text-ink-muted-50"
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pt-4 pr-8 text-base leading-relaxed text-ink-500 md:text-lg">
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
