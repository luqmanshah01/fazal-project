import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { BLOG_POSTS } from "@/lib/data";

export function Blog() {
  return (
    <section id="blog" className="relative w-full bg-white py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Insights"
          titleMaxWidthClass="max-w-[1079px]"
          descriptionMaxWidthClass="max-w-[813px]"
          title={<span>Cybersecurity Insights for Pakistani Enterprises</span>}
          description={
            "Stay ahead of evolving threats with expert guidance from Pakistan's leading cybersecurity professionals."
          }
        />

        {/*
          Figma 97:777-792 — three cards in a 1386.56px row, gap 22.15.
          Card is #F2F0F0 at radius 35.44 with 12.4/11.5 padding; the cover
          sits inside on a 31.9 radius with a 1.77px white stroke. Category is
          Regular 14px in #FF5050 (not uppercase), title Regular 15.95px/24.81.
        */}
        <div className="mt-16 grid grid-cols-1 gap-[22.15px] md:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08}>
              <Link
                href={post.href}
                className="group flex h-full flex-col rounded-[35.44px] bg-cert-surface p-[11.52px] pb-[12.4px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_60px_-20px_rgba(0,0,0,0.2)]"
              >
                <div className="relative aspect-[424/306] w-full overflow-hidden rounded-[31.9px] border-[1.77px] border-white">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 425px, (min-width: 768px) 45vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col px-3 pt-2">
                  <span className="text-[14px] font-normal tracking-[-0.0158em] text-brand-red">
                    {post.category}
                  </span>
                  <h3 className="font-sans text-[15.95px] font-normal leading-[1.56] text-black transition-colors group-hover:text-brand-red">
                    {post.title}
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
