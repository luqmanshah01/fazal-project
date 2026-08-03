"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FAQS } from "@/lib/constants";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-white py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="FAQs"
          title={
            <>
              <GradientText gradient="redBlack">Frequently</GradientText>{" "}
              <span>Asked Questions</span>
              <br className="hidden md:block" />
              <span> About Cybersecurity Services in </span>
              <GradientText gradient="blackRed">Pakistan</GradientText>
            </>
          }
        />

        <div className="mx-auto mt-14 flex max-w-5xl flex-col gap-3 md:mt-16">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.question} delay={i * 0.05}>
                <div className="rounded-2xl bg-ink-100 px-6 py-5 md:px-8 md:py-6">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-sans text-lg font-normal leading-snug tracking-[-0.01em] md:text-xl lg:text-[22px] ${
                        isOpen ? "text-black" : "text-black/60"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <Icon
                      icon={isOpen ? "mdi:minus" : "mdi:plus"}
                      className="h-6 w-6 flex-shrink-0 text-brand-red md:h-7 md:w-7"
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
                        <p className="pt-4 pr-8 text-base leading-relaxed text-ink-500 md:text-lg">
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
