import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { MissionVision } from "@/components/sections/about/MissionVision";
import { CoreValues } from "@/components/sections/about/CoreValues";
import { VendorPartners } from "@/components/sections/about/VendorPartners";
import { Principles } from "@/components/sections/about/Principles";
import { AboutCTA } from "@/components/sections/about/AboutCTA";
import { WHY_CHOOSE_HEADING, WHY_CHOOSE_SV_TECH } from "@/lib/data";

export const metadata: Metadata = {
  title: "About SV Tech — Pakistan's IT Infrastructure & Cybersecurity Company",
  description:
    "SV Tech is a leading IT infrastructure company in Pakistan, delivering managed IT services, cybersecurity solutions, and digital transformation to enterprises across the country.",
  alternates: { canonical: "/about" },
  openGraph: {
    title:
      "About SV Tech — Pakistan's IT Infrastructure & Cybersecurity Company",
    description:
      "Global delivery experience since 2017, certified expertise across infrastructure, cloud and cybersecurity, and local market understanding — under one accountable partner.",
    type: "website",
  },
};

/**
 * Section order is Figma node 425:3930, top to bottom:
 *
 *   y0     425:3931  Hero                       1727 x  919
 *   y919   425:4014  Mission, Vision & Values   1607 x  733
 *   y1648  425:4103  Our Core Values            1648 x  936
 *   y2534  425:4030  Vendor Partners            1727 x  774
 *   y3315  425:4074  Why Choose SV Tech         1727 x 1260
 *   y4234  425:4095  CTA                        1728 x  524
 *   y4758  425:3976  Footer                     1728 x  615
 *
 * ⚠️ Three sections the ORIGINAL About frame (239:1464) carried are not in
 * this design and are therefore not rendered: Timeline (the 2017 -> 2026
 * milestones), Certifications (the eight badges), and the original Principles
 * copy.
 *
 * Nothing was deleted. `about/Timeline.tsx` and `about/Certifications.tsx` are
 * still on disk, MILESTONES / CERTIFICATIONS / PRINCIPLES are still in
 * lib/data.ts, and `Principles` still defaults to its original content — so
 * re-adding any of them is a single import. This repo has no git history, so
 * the removal is deliberately non-destructive.
 *
 * `Principles` is reused for "Why Choose SV Tech": 425:4074 and 239:1665
 * measure identically apart from an added lede. See that file.
 */
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-svh flex-col">
        <AboutHero />
        <MissionVision />
        <CoreValues />
        <VendorPartners />
        <Principles
          id="why-sv-tech"
          eyebrow={WHY_CHOOSE_HEADING.eyebrow}
          heading={{
            start: WHY_CHOOSE_HEADING.start,
            middle: WHY_CHOOSE_HEADING.middle,
            end: WHY_CHOOSE_HEADING.end,
          }}
          lede={WHY_CHOOSE_HEADING.lede}
          items={WHY_CHOOSE_SV_TECH}
          // 425:4074 — 1727 x 1260, pill at y55, last block row ending at 825
          minHeightClass="lg:min-h-[1260px]"
          paddingClass="lg:pb-20 lg:pt-[55px]"
          headingMaxWidthClass="max-w-[1203px]"
          ledeMaxWidthClass="max-w-[1150px]"
          // lede box ends at y368, first block row starts at y472
          gridMarginClass="lg:mt-[104px]"
        />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
