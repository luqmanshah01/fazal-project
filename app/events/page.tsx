import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/sections/services/ServiceHero";
import { EventTypes } from "@/components/sections/events/EventTypes";
import { BlogList } from "@/components/sections/blog/BlogList";
import { ServiceFAQ } from "@/components/sections/services/ServiceFAQ";
import { ServiceCTA } from "@/components/sections/services/ServiceCTA";
import {
  EVENTS,
  EVENTS_CTA,
  EVENTS_FAQS,
  EVENTS_FAQ_HEADING,
  EVENTS_FILTERS,
  EVENTS_HERO,
  EVENTS_LIST_INTRO,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Events — SV Tech",
  description:
    "Upcoming and past SV Tech events: exhibitions, conferences, webinars, and speaking engagements across IT infrastructure, cybersecurity, managed services, and digital transformation.",
  alternates: { canonical: "/events" },
  openGraph: {
    title: "Events — SV Tech",
    description:
      "Connecting, learning, and leading at technology events across Pakistan.",
    type: "website",
  },
};

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-svh flex-col">
        <ServiceHero
          content={EVENTS_HERO}
          gradientStart="csHeroStart"
          gradientEnd="blogHeroEnd"
        />
        <EventTypes />
        {/*
          Figma 341:4294 is the same pill-row-over-card-grid as the Blog page's
          341:4461 — same 453px card, same flat red underline, same 22.15px
          gap. Only the copy and the five filters differ.
        */}
        <BlogList
          id="upcoming-events"
          posts={EVENTS}
          filters={EVENTS_FILTERS}
          headingStart={EVENTS_LIST_INTRO.headingStart}
          headingEnd={EVENTS_LIST_INTRO.headingEnd}
          lede={EVENTS_LIST_INTRO.lede}
          headingMaxWidthClass="max-w-[537px]"
          ledeMaxWidthClass="max-w-[764px]"
          emptyLabel="events"
          // 341:4294 not fetched — 5 filter pills here vs Blog's 4
          minHeightClass=""
        />
        <ServiceFAQ
          faqs={EVENTS_FAQS}
          heading={EVENTS_FAQ_HEADING}
          gradientStart="blogFaqStart"
          headingMaxWidthClass="max-w-[786px]"
          minHeightClass=""
        />
        <ServiceCTA content={EVENTS_CTA} />
      </main>
      <Footer />
    </>
  );
}
