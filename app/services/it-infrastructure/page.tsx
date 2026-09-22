import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/sections/services/ServiceHero";
import { ServiceOverview } from "@/components/sections/services/ServiceOverview";
import { InfraServicesGrid } from "@/components/sections/it-infrastructure/InfraServicesGrid";
import { ProcessSteps } from "@/components/sections/services/ProcessSteps";
import { ServiceFAQ } from "@/components/sections/services/ServiceFAQ";
import { ServiceCTA } from "@/components/sections/services/ServiceCTA";
import {
  INFRA_CTA,
  INFRA_FAQS,
  INFRA_FAQ_HEADING,
  INFRA_HERO,
  INFRA_PROCESS_HEADING,
  INFRA_PROCESS_STEPS,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "IT Infrastructure Services in Pakistan — SV Tech",
  description:
    "Managed IT infrastructure services in Pakistan: infrastructure outsourcing, cloud and hybrid environments, data center solutions, IT operations management, and 24/7 monitoring — delivered by certified engineers in Rawalpindi.",
  alternates: { canonical: "/services/it-infrastructure" },
  openGraph: {
    title: "IT Infrastructure Services in Pakistan — SV Tech",
    description:
      "Built for security, scale, and uptime: fully managed or co-managed IT infrastructure with 24/7 proactive monitoring and enterprise-grade tooling.",
    type: "website",
  },
};

export default function ITInfrastructureServicePage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-svh flex-col">
        <ServiceHero
          content={INFRA_HERO}
          gradientStart="infraHeroStart"
          gradientEnd="infraHeroEnd"
        />
        <ServiceOverview />
        <InfraServicesGrid />
        <ProcessSteps
          steps={INFRA_PROCESS_STEPS}
          heading={INFRA_PROCESS_HEADING}
          gradientStart="infraProcessStart"
          gradientEnd="infraProcessEnd"
          headingMaxWidthClass="max-w-[1065px]"
        />
        <ServiceFAQ
          faqs={INFRA_FAQS}
          heading={INFRA_FAQ_HEADING}
          gradientStart="infraFaqStart"
          gradientEnd="infraFaqEnd"
          // 341:3720 draws 6 rows, not Cybersecurity's 4 — height not measured
          minHeightClass=""
        />
        <ServiceCTA content={INFRA_CTA} />
      </main>
      <Footer />
    </>
  );
}
