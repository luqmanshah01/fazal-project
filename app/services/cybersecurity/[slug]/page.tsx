import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/sections/services/ServiceHero";
import { SubServiceOverview } from "@/components/sections/sub-service/SubServiceOverview";
import { SubServiceHighlights } from "@/components/sections/sub-service/SubServiceHighlights";
import { SubServiceMatters } from "@/components/sections/sub-service/SubServiceMatters";
import { SubServiceReasons } from "@/components/sections/sub-service/SubServiceReasons";
import { ServiceFAQ } from "@/components/sections/services/ServiceFAQ";
import { ServiceCTA } from "@/components/sections/services/ServiceCTA";
import { SUB_SERVICES, SUB_SERVICE_CTA } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return SUB_SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SUB_SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  const title = `${service.headingStart} ${service.headingMiddle} ${service.headingEnd} — SV Tech`;
  return {
    title,
    description: service.lede,
    alternates: { canonical: `/services/cybersecurity/${slug}` },
    openGraph: { title, description: service.lede, type: "website" },
  };
}

export default async function SubServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = SUB_SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <Navbar />
      <main className="flex min-h-svh flex-col">
        <ServiceHero
          content={{
            eyebrow: service.eyebrow,
            headingStart: service.headingStart,
            headingMiddle: service.headingMiddle,
            headingEnd: service.headingEnd,
            lede: service.lede,
            primaryCta: service.primaryCta,
            primaryHref: "/#contact",
            secondaryCta: service.secondaryCta,
            secondaryHref: "/#contact",
            secondaryWidthClass: "lg:min-w-[260px]",
            // ESTIMATED — screenshot only, no Figma measurements available
            headingMaxWidthClass: "max-w-[900px]",
            ledeMaxWidthClass: "max-w-[720px]",
            headingLeadingClass: "lg:leading-[1.1]",
          }}
          gradientStart="csHeroStart"
          gradientEnd="blogHeroEnd"
        />

        <SubServiceOverview
          eyebrow={service.overviewEyebrow}
          heading={service.overviewHeading}
          body={service.overviewBody}
          checklist={service.overviewChecklist}
          image={service.overviewImage}
        />

        <SubServiceHighlights highlights={service.highlights} />

        <SubServiceMatters
          headingStart={service.mattersHeadingStart}
          headingEnd={service.mattersHeadingEnd}
          lede={service.mattersLede}
          steps={service.mattersSteps}
          closing={service.mattersClosing}
        />

        <SubServiceReasons
          lede={service.reasonsLede}
          reasons={service.reasons}
        />

        <ServiceFAQ
          faqs={service.faqs}
          heading={{
            start: service.faqHeadingStart,
            middle: service.faqHeadingMiddle,
            end: service.faqHeadingEnd,
          }}
          gradientStart="csFaqStart"
          gradientEnd="blackRed55"
          headingMaxWidthClass="max-w-[760px]"
          // Screenshot draws the plus glyph in red here, unlike every other page
          iconClassName="text-brand-red"
        />

        <ServiceCTA content={SUB_SERVICE_CTA} />
      </main>
      <Footer />
    </>
  );
}
