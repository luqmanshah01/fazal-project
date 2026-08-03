import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { BLOG_POSTS } from "@/lib/constants";

export function Blog() {
  return (
    <section id="blog" className="relative w-full bg-ink-50 py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Insights"
          title={<span>Cybersecurity Insights for Pakistani Enterprises</span>}
          description={
            "Stay ahead of evolving threats with expert guidance from Pakistan's leading cybersecurity professionals."
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08}>
              <Link
                href={post.href}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_60px_-20px_rgba(0,0,0,0.2)]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 768px) 45vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <span className="text-xs font-medium uppercase tracking-wider text-brand-red">
                    {post.category}
                  </span>
                  <h3 className="mt-3 font-sans text-lg font-semibold leading-snug text-black transition-colors group-hover:text-brand-red md:text-xl">
                    {post.title}
                  </h3>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-black">
                    Read more
                    <Icon
                      icon="mdi:arrow-right"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
