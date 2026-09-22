import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/sections/services/ServiceHero";
import { InsightAreas } from "@/components/sections/blog/InsightAreas";
import { BlogApproach } from "@/components/sections/blog/BlogApproach";
import { BlogList } from "@/components/sections/blog/BlogList";
import { ServiceFAQ } from "@/components/sections/services/ServiceFAQ";
import { ServiceCTA } from "@/components/sections/services/ServiceCTA";
import { BLOG_CTA, BLOG_FAQS, BLOG_FAQ_HEADING, BLOG_HERO } from "@/lib/data";

export const metadata: Metadata = {
  title: "IT, Cybersecurity & Technology Insights — SV Tech Blog",
  description:
    "Practical guidance from SV Tech on cybersecurity, IT infrastructure, managed services, cloud technology, and digital transformation for Pakistani enterprises.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "IT, Cybersecurity & Technology Insights — SV Tech Blog",
    description:
      "Useful explanations rather than unnecessary technical complexity — security risks, implementation considerations, and practical steps.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-svh flex-col">
        <ServiceHero
          content={BLOG_HERO}
          gradientStart="blogHeroStart"
          gradientEnd="blogHeroEnd"
        />
        <InsightAreas />
        <BlogApproach />
        <BlogList />
        <ServiceFAQ
          faqs={BLOG_FAQS}
          heading={BLOG_FAQ_HEADING}
          gradientStart="blogFaqStart"
          headingMaxWidthClass="max-w-[786px]"
          minHeightClass=""
        />
        <ServiceCTA content={BLOG_CTA} />
      </main>
      <Footer />
    </>
  );
}
