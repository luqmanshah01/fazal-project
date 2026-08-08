import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { MissionVision } from "@/components/sections/about/MissionVision";
import { Timeline } from "@/components/sections/about/Timeline";
import { Certifications } from "@/components/sections/about/Certifications";
import { VendorPartners } from "@/components/sections/about/VendorPartners";
import { Principles } from "@/components/sections/about/Principles";
import { AboutCTA } from "@/components/sections/about/AboutCTA";

export const metadata: Metadata = {
  title: "About SV Tech — Pakistan's Most Trusted Cybersecurity & IT Company",
  description:
    "Founded in 2017 and headquartered in Rawalpindi, SV Tech delivers enterprise cybersecurity, managed IT infrastructure, and digital transformation to Pakistan's leading enterprises across energy, finance, telecom, and manufacturing.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About SV Tech — Pakistan's Most Trusted Cybersecurity & IT Company",
    description:
      "8+ years building enterprise-grade security expertise in Pakistan. Authorized partner of CrowdStrike, Palo Alto Networks, Fortinet, and SentinelOne.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <AboutHero />
        <MissionVision />
        <Timeline />
        <Certifications />
        <VendorPartners />
        <Principles />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
