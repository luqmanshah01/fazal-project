import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/sections/services/ServiceHero";
import { CaseStudyFlow } from "@/components/sections/case-studies/CaseStudyFlow";
import { InsightAreas } from "@/components/sections/blog/InsightAreas";
import { GradientText } from "@/components/ui/GradientText";
import { ServiceFAQ } from "@/components/sections/services/ServiceFAQ";
import { ServiceCTA } from "@/components/sections/services/ServiceCTA";
import {
  CASE_STUDY_CTA,
  CASE_STUDY_FAQS,
  CASE_STUDY_FAQ_HEADING,
  CASE_STUDY_HERO,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies — SV Tech",
  description:
    "Selected SV Tech projects across IT infrastructure, cybersecurity, managed services, and digital transformation — the challenge, the environment, the objectives, the work performed, and the outcome.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies — SV Tech",
    description:
      "Real-world technology success stories from Pakistani enterprises.",
    type: "website",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-svh flex-col">
        <ServiceHero
          content={CASE_STUDY_HERO}
          gradientStart="csHeroStart"
          gradientEnd="csHeroEnd"
        />
        <CaseStudyFlow />
        {/*
          Figma 341:4150 is byte-identical to the Blog page's 341:4503 — same
          frame, card geometry, copy, CTAs and glyphs. Only the heading and the
          section surface differ, so the component is reused.
        */}
        <InsightAreas
          id="case-study-categories"
          surfaceClass="bg-white"
          headingMaxWidthClass="max-w-[780px]"
          // 341:4150 not fetched — cards match Blog's, the frame height may not
          minHeightClass=""
          heading={
            <>
              Case Study{" "}
              <GradientText gradient="blackRed55">Categories</GradientText>
            </>
          }
        />
        <ServiceFAQ
          faqs={CASE_STUDY_FAQS}
          heading={CASE_STUDY_FAQ_HEADING}
          gradientStart="csFaqStart"
          minHeightClass=""
        />
        <ServiceCTA content={CASE_STUDY_CTA} />
      </main>
      <Footer />
    </>
  );
}
