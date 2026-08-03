import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { CTABanner } from "@/components/sections/CTABanner";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Industries } from "@/components/sections/Industries";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import { Blog } from "@/components/sections/Blog";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <Partners />
        <About />
        <Services />
        <CTABanner />
        <WhyChoose />
        <Industries />
        <Testimonials />
        <ContactForm />
        <FAQ />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
