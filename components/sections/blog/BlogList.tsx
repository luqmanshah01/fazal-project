"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { BLOG_FILTERS, BLOG_LIST_INTRO, BLOG_POSTS } from "@/lib/data";
import type { BlogPost } from "@/lib/types";

type BlogListProps = {
  posts?: BlogPost[];
  filters?: string[];
  headingStart?: string;
  headingEnd?: string;
  headingGradient?: "blogListEnd";
  lede?: string;
  /** Blog draws the heading box 445px wide, Events 537px */
  headingMaxWidthClass?: string;
  ledeMaxWidthClass?: string;
  emptyLabel?: string;
  id?: string;
};

/**
 * SV Tech Blogs — Figma node 341:4461 (1729 x 908, #F9F9F9).
 *
 * A pill row (36px tall, 26px radius: "All" filled #FF5050, the rest outlined
 * with a #7C7C7C label) over a three-card row 1386.56px wide with a 22.15px
 * gap. The card is white on a 35.44px radius with a flat
 * `0 4px 0 #FF5050` shadow — a solid red underline, not a blur. Cover sits
 * inside on a 31.9px radius with a 1.77px white stroke; category is 14px in
 * #FF5050 and the title 15.95px, both CENTRED.
 *
 * ⚠️ Two things are NOT from Figma and are derived:
 *   - Figma fills all three cards with placeholder lorem ("Blog name" /
 *     "Details about the blog or..."), so the real BLOG_POSTS are rendered.
 *   - The pills carry no interaction, prototype link or post mapping. They
 *     are wired to filter on `post.topic` using the repo's existing motion
 *     vocabulary. Buckets with no posts yet show an empty state.
 */
export function BlogList({
  posts: allPosts = BLOG_POSTS,
  filters = BLOG_FILTERS,
  headingStart = BLOG_LIST_INTRO.headingStart,
  headingEnd = BLOG_LIST_INTRO.headingEnd,
  lede = BLOG_LIST_INTRO.lede,
  headingMaxWidthClass = "max-w-[445px]",
  ledeMaxWidthClass = "max-w-[972px]",
  emptyLabel = "articles",
  id = "blog-list",
}: BlogListProps = {}) {
  const [active, setActive] = useState(filters[0]);

  const posts =
    active === "All"
      ? allPosts
      : allPosts.filter((post) => post.topic === active);

  return (
    <section id={id} className="w-full bg-surface-soft py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1445px] px-6 sm:px-8 lg:px-12">
        <Reveal>
          <h2
            className={`mx-auto text-center font-sans text-[clamp(2rem,4.1vw,70.75px)] font-extrabold leading-[1.16] tracking-[-0.0316em] text-black ${headingMaxWidthClass}`}
          >
            {headingStart}{" "}
            <GradientText gradient="blogListEnd">{headingEnd}</GradientText>
          </h2>
        </Reveal>

        {/* Figma box gaps: H2 ends 135 -> lede 144 = 9px;
            lede ends 208 -> pills 256 = 48px; pills end 292 -> cards 364 = 72px */}
        <Reveal delay={0.05}>
          <p
            className={`mx-auto mt-6 text-center text-base font-light leading-relaxed tracking-[-0.0464em] text-black lg:mt-[9px] lg:text-[clamp(1.125rem,1.54vw,26.53px)] ${ledeMaxWidthClass}`}
          >
            {lede}
          </p>
        </Reveal>

        {/* 36px pills, 26px radius, 20px gap */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:mt-12 lg:gap-5">
            {filters.map((filter) => {
              const isActive = filter === active;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActive(filter)}
                  aria-pressed={isActive}
                  className={`inline-flex min-h-[44px] items-center justify-center rounded-[26px] px-6 text-[clamp(0.9375rem,1.39vw,24px)] font-light tracking-[-0.0513em] transition-colors ${
                    isActive
                      ? "bg-brand-red text-white"
                      : "border border-brand-red bg-transparent text-[#7C7C7C] hover:bg-brand-red/5"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </Reveal>

        {posts.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-[22.15px] md:grid-cols-2 lg:mt-[72px] lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.title} delay={i * 0.06} className="h-full">
                {/* Card is a fixed 453px tall in Figma */}
                <Link
                  href={post.href}
                  className="group flex h-full flex-col rounded-[35.44px] bg-white p-[11.52px] pb-[12.4px] shadow-[0_4px_0_0_#FF5050] transition-all duration-300 hover:-translate-y-1 lg:min-h-[453px]"
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
                  <div className="flex flex-1 flex-col px-3 pt-2 text-center">
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
        ) : (
          <p className="mt-12 text-center text-lg font-light text-ink-500">
            No {active} {emptyLabel} published yet — check back soon.
          </p>
        )}
      </div>
    </section>
  );
}
