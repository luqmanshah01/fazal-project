import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Gradient =
  | "hero"
  | "heroEnd"
  | "redBlack"
  | "blackRed"
  | "stat"
  | "quote"
  | "quoteReverse"
  // About page — each section has its own stops, they are not interchangeable
  | "aboutHeroStart"
  | "aboutHeroEnd"
  | "redBlack16"
  | "blackRed69"
  | "redBlack27"
  | "blackRed45"
  | "redBlack29"
  | "blackRed57"
  | "redBlack33"
  | "blackRed83"
  // Service page — again per-section, again not interchangeable
  | "svcHeroStart"
  | "svcHeroEnd"
  | "redBlack41"
  | "blackRed22"
  | "redBlack27b"
  | "blackRed56"
  | "redBlack22"
  | "blackRed55"
  | "redBlack46"
  | "blackRed74"
  // IT Infrastructure page — Figma 341:3591. "Complete" in the services grid
  // measures the same stops as `redBlack27b`, so it has no key of its own.
  | "infraHeroStart"
  | "infraHeroEnd"
  | "infraOverviewEnd"
  | "infraGridEnd"
  | "infraProcessStart"
  | "infraProcessEnd"
  | "infraFaqStart"
  | "infraFaqEnd"
  // Home page — Figma 97:506. Each section measures its own stops; the FAQ
  // pair matches the service page, so it reuses redBlack46 / blackRed74.
  | "homeAboutStart"
  | "homeAboutEnd"
  | "homeServicesStart"
  | "homeServicesEnd"
  | "homeWhyStart"
  | "homeWhyEnd"
  | "homeIndustriesStart"
  | "homeIndustriesEnd"
  | "homeBrands"
  | "homePartners"
  // Managed Service Provider — Figma 425:4124. Its Process pair and FAQ end
  // word measure identically to redBlack22 / blackRed55 / infraFaqEnd, so
  // those are reused and have no key here.
  | "mspHeroStart"
  | "mspHeroEnd"
  | "mspOverviewEnd"
  | "mspGridStart"
  | "mspGridEnd"
  | "mspFaqStart"
  // Blog page — Figma 341:4370. "Insights" and "Practical" measure identically
  // to homeIndustriesStart / redBlack27b, so those are reused.
  | "blogHeroStart"
  | "blogHeroEnd"
  | "blogListEnd"
  | "blogAreasEnd"
  | "blogFaqStart"
  // Case Studies — Figma 341:3962. "Form" and "Solution"/"Categories" reuse
  // redBlack22 / blackRed55.
  | "csHeroStart"
  | "csHeroEnd"
  | "csFaqStart";

const GRADIENTS: Record<Gradient, string> = {
  hero: "text-gradient-hero",
  heroEnd: "text-gradient-hero-end",
  redBlack: "text-gradient-red-black",
  blackRed: "text-gradient-black-red",
  stat: "text-gradient-stat",
  quote: "text-gradient-quote",
  quoteReverse: "text-gradient-quote-reverse",
  aboutHeroStart: "text-gradient-about-hero-start",
  aboutHeroEnd: "text-gradient-about-hero-end",
  redBlack16: "text-gradient-red-black-16",
  blackRed69: "text-gradient-black-red-69",
  redBlack27: "text-gradient-red-black-27",
  blackRed45: "text-gradient-black-red-45",
  redBlack29: "text-gradient-red-black-29",
  blackRed57: "text-gradient-black-red-57",
  redBlack33: "text-gradient-red-black-33",
  blackRed83: "text-gradient-black-red-83",
  svcHeroStart: "text-gradient-svc-hero-start",
  svcHeroEnd: "text-gradient-svc-hero-end",
  redBlack41: "text-gradient-red-black-41",
  blackRed22: "text-gradient-black-red-22",
  redBlack27b: "text-gradient-red-black-27b",
  blackRed56: "text-gradient-black-red-56",
  redBlack22: "text-gradient-red-black-22",
  blackRed55: "text-gradient-black-red-55",
  redBlack46: "text-gradient-red-black-46",
  blackRed74: "text-gradient-black-red-74",
  infraHeroStart: "text-gradient-infra-hero-start",
  infraHeroEnd: "text-gradient-infra-hero-end",
  infraOverviewEnd: "text-gradient-infra-overview-end",
  infraGridEnd: "text-gradient-infra-grid-end",
  infraProcessStart: "text-gradient-infra-process-start",
  infraProcessEnd: "text-gradient-infra-process-end",
  infraFaqStart: "text-gradient-infra-faq-start",
  infraFaqEnd: "text-gradient-infra-faq-end",
  homeAboutStart: "text-gradient-home-about-start",
  homeAboutEnd: "text-gradient-home-about-end",
  homeServicesStart: "text-gradient-home-services-start",
  homeServicesEnd: "text-gradient-home-services-end",
  homeWhyStart: "text-gradient-home-why-start",
  homeWhyEnd: "text-gradient-home-why-end",
  homeIndustriesStart: "text-gradient-home-industries-start",
  homeIndustriesEnd: "text-gradient-home-industries-end",
  homeBrands: "text-gradient-home-brands",
  homePartners: "text-gradient-home-partners",
  mspHeroStart: "text-gradient-msp-hero-start",
  mspHeroEnd: "text-gradient-msp-hero-end",
  mspOverviewEnd: "text-gradient-msp-overview-end",
  mspGridStart: "text-gradient-msp-grid-start",
  mspGridEnd: "text-gradient-msp-grid-end",
  mspFaqStart: "text-gradient-msp-faq-start",
  blogHeroStart: "text-gradient-blog-hero-start",
  blogHeroEnd: "text-gradient-blog-hero-end",
  blogListEnd: "text-gradient-blog-list-end",
  blogAreasEnd: "text-gradient-blog-areas-end",
  blogFaqStart: "text-gradient-blog-faq-start",
  csHeroStart: "text-gradient-cs-hero-start",
  csHeroEnd: "text-gradient-cs-hero-end",
  csFaqStart: "text-gradient-cs-faq-start",
};

type GradientTextProps = {
  gradient?: Gradient;
  italic?: boolean;
  className?: string;
  children: ReactNode;
};

export function GradientText({
  gradient = "redBlack",
  italic = true,
  className,
  children,
}: GradientTextProps) {
  return (
    <span
      className={cn(
        GRADIENTS[gradient],
        italic && "font-serif italic",
        className,
      )}
    >
      {children}
    </span>
  );
}
