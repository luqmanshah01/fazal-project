import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/sections/services/ServiceHero";
import { ThreatLandscape } from "@/components/sections/services/ThreatLandscape";
import { ServicesGrid } from "@/components/sections/services/ServicesGrid";
import { ProcessSteps } from "@/components/sections/services/ProcessSteps";
import { ServiceFAQ } from "@/components/sections/services/ServiceFAQ";
import { ServiceCTA } from "@/components/sections/services/ServiceCTA";

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
      <main className="flex min-h-screen flex-col">
        <ServiceHero />
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
