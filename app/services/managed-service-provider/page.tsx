import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/sections/services/ServiceHero";
import { ServiceOverview } from "@/components/sections/services/ServiceOverview";
import { ServicesGrid } from "@/components/sections/services/ServicesGrid";
import { ProcessSteps } from "@/components/sections/services/ProcessSteps";
import { ServiceFAQ } from "@/components/sections/services/ServiceFAQ";
import { ServiceCTA } from "@/components/sections/services/ServiceCTA";
import {
  MSP_FAQS,
  MSP_FAQ_HEADING,
  MSP_HERO,
  MSP_OVERVIEW,
  MSP_PROCESS_HEADING,
  MSP_PROCESS_STEPS,
  MSP_SERVICES,
  MSP_SERVICES_INTRO,
  SERVICE_CTA,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Managed Service Provider in Pakistan — SV Tech",
  description:
    "SV Tech is a Managed Service Provider in Pakistan delivering outsourced IT infrastructure, managed cybersecurity, cloud and Microsoft 365 management, help desk support, and 24/7 remote monitoring — with predictable monthly pricing.",
  alternates: { canonical: "/services/managed-service-provider" },
  openGraph: {
    title: "Managed Service Provider in Pakistan — SV Tech",
    description:
      "Outsourced IT, security, and support fully managed: RMM, help desk, managed cybersecurity, cloud, and backup & disaster recovery.",
    type: "website",
  },
};

export default function ManagedServiceProviderPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-svh flex-col">
        <ServiceHero
          content={MSP_HERO}
          gradientStart="mspHeroStart"
          gradientEnd="mspHeroEnd"
        />
        <ServiceOverview
          content={MSP_OVERVIEW}
          gradient="mspOverviewEnd"
        />
        {/* Same divider-line grid as Cybersecurity, but Figma draws no chips */}
        <ServicesGrid
          services={MSP_SERVICES}
          heading={MSP_SERVICES_INTRO}
          lede={MSP_SERVICES_INTRO.lede}
          gradientStart="mspGridStart"
          gradientEnd="mspGridEnd"
          headingMaxWidthClass="max-w-[927px]"
          ledeMaxWidthClass="max-w-[1015px]"
          showChips={false}
          // MSP frame not fetched yet — no measured height to assert
          minHeightClass=""
        />
        <ProcessSteps
          steps={MSP_PROCESS_STEPS}
          heading={MSP_PROCESS_HEADING}
          gradientStart="redBlack22"
          gradientEnd="blackRed55"
          headingMaxWidthClass="max-w-[1143px]"
        />
        <ServiceFAQ
          faqs={MSP_FAQS}
          heading={MSP_FAQ_HEADING}
          gradientStart="mspFaqStart"
          gradientEnd="infraFaqEnd"
          minHeightClass=""
        />
        {/*
          Figma 425:4208 reuses the Cybersecurity CTA word for word — same
          heading, lede and both button labels — so SERVICE_CTA is passed
          directly rather than duplicated. See the defect note in lib/data.ts.
        */}
        <ServiceCTA content={SERVICE_CTA} />
      </main>
      <Footer />
    </>
  );
}
