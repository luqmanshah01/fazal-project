import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/sections/services/ServiceHero";
import { ServiceOverview } from "@/components/sections/services/ServiceOverview";
import { ThreatLandscape } from "@/components/sections/services/ThreatLandscape";
import { ServicesGrid } from "@/components/sections/services/ServicesGrid";
import { ProcessSteps } from "@/components/sections/services/ProcessSteps";
import { ServiceFAQ } from "@/components/sections/services/ServiceFAQ";
import { ServiceCTA } from "@/components/sections/services/ServiceCTA";
import { MSP_OVERVIEW } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cybersecurity Services in Pakistan — SV Tech",
  description:
    "Enterprise cybersecurity services in Pakistan: VAPT, 24/7 SOC monitoring, endpoint and network security, email protection, and ISO 27001 / PCI-DSS compliance — delivered by certified experts in Rawalpindi.",
  alternates: { canonical: "/services/cybersecurity" },
  openGraph: {
    title: "Cybersecurity Services in Pakistan — SV Tech",
    description:
      "360° protection for your enterprise: threat hunting, SOC-as-a-Service, penetration testing, endpoint protection, and regulatory compliance.",
    type: "website",
  },
};

export default function CybersecurityServicePage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-svh flex-col">
        <ServiceHero />
        {/*
          Overview band directly under the hero, added at the user's request
          from a screenshot (2026-09-24).

          ⚠️ THE COPY IS MSP's. The screenshot supplied was of Figma 425:4124,
          the Managed Service Provider page, so this renders "Managed Service
          Provider Services in Pakistan" with RMM and co-managed IT support in
          the checklist — on the Cybersecurity page. The user confirmed this
          placement three times, so it ships as asked.

          MSP_OVERVIEW is passed directly rather than copied into a
          CYBER_OVERVIEW, for the same reason the MSP page passes SERVICE_CTA
          directly: one source of truth while the two are identical. That file
          is full of frames pasted between pages, so this may even be what
          425:4500 draws. Split it the moment real cybersecurity copy exists —
          and note the geometry travelling with it (container 1455px, 768/562
          columns, 628px frame height) was measured for the MSP frame, not
          this one.

          425:4500 is the current Cybersecurity frame and has never been
          fetched; the page below it is still built from 239:1693. The Figma
          API is rate-limited until ~28 Sep, so none of this could be verified
          against the node.
        */}
        <ServiceOverview content={MSP_OVERVIEW} gradient="mspOverviewEnd" />
        <ThreatLandscape />
        <ServicesGrid />
        <ProcessSteps />
        <ServiceFAQ />
        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
}
