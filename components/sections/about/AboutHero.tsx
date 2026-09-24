import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ABOUT_HERO } from "@/lib/data";

/**
 * About hero — Figma node 425:3930, the CURRENT "About Us" frame.
 *
 * ⚠️ BUILT FROM A CLIENT SCREENSHOT, not the Figma API — the API was
 * rate-limited when this landed. Every value marked ESTIMATED below is a
 * measurement off that image, not off the file. Copy is exact.
 *
 * Scale reference: the navbar pill is a measured 1267px (239:1482) and renders
 * 538px in the screenshot, so design_px = screenshot_px / 0.422.
 *
 * This replaces the hero built from 239:1464, which differed in every respect
 * — copy, heading treatment, button styling and background:
 *
 *   - "Powering" and "Infrastructures" are SOLID red and SOLID white here.
 *     The old hero ran both through red/white gradients (aboutHeroStart /
 *     aboutHeroEnd). Those two keys now have no call site on this page.
 *   - The second button is an OUTLINE, not a second solid red fill.
 *   - Both buttons are far narrower — ~284/301px against the old 380px.
 *   - The ambient glow rises from the BOTTOM edge. It used to be a #7A1717
 *     ellipse floating in the middle of the frame.
 */
export function AboutHero() {
  return (
    <section
      id="about-hero"
      // ESTIMATED: the screenshot works out to ~993px tall, but it may be
      // cropped at the fold. 919px is the measured height of both other heroes
      // in this design system, so it is kept until 425:3930 can be fetched.
      className="relative isolate flex min-h-svh w-full items-center overflow-hidden bg-black text-white md:min-h-[800px] lg:min-h-[919px] lg:items-start"
    >
      {/*
        Ambient glow — a broad red bloom rising from the bottom edge, brightest
        at bottom-centre and fading up through roughly half the frame.

        A radial-gradient rather than a blurred element, per the project's own
        performance note: blur(150px) on a real box is expensive and this is
        visually equivalent. ESTIMATED stops.
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_50%_104%,rgba(168,32,32,0.95)_0%,rgba(122,23,23,0.6)_38%,rgba(122,23,23,0)_72%)]"
      />

      {/* Figma puts the eyebrow pill at ~y315 on the frame, not centred.
          315 / 1727 = 18.24vw. */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 pt-32 pb-20 text-center sm:pt-40 sm:pb-24 lg:pb-16 lg:pt-[clamp(8rem,18.24vw,315px)]">
        <Reveal>
          {/* ESTIMATED: 209 x 36, against the old hero's 177 x 26 */}
          <span className="inline-flex min-h-[36px] items-center rounded-full border border-brand-red/30 bg-brand-red-soft px-6 text-[13px] tracking-tight text-white">
            {ABOUT_HERO.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          {/*
            ESTIMATED: the heading block measures ~1306px wide and the two
            lines sit on an ~88px pitch, so 88 / 81.028 = 1.087 — the same line
            ratio the Blog and Case Studies heroes measure. The 81.028px font
            size is kept from the design system.
          */}
          <h1 className="mx-auto mt-8 max-w-[1306px] font-sans text-[clamp(2rem,4.69vw,81px)] font-extrabold leading-[1.12] tracking-[-0.0231em] lg:mt-[5px] lg:leading-[1.087]">
            {/* Solid #FF5050 italic serif — not a gradient */}
            <span className="font-serif italic text-brand-red">
              {ABOUT_HERO.headingStart}
            </span>{" "}
            {ABOUT_HERO.headingMiddle.split("\n").map((line, i) => (
              <span key={line}>
                {i > 0 ? <br className="hidden lg:inline" /> : null}
                {i > 0 ? " " : null}
                {line}
              </span>
            ))}{" "}
            {/* Solid white italic serif */}
            <span className="font-serif italic text-white">
              {ABOUT_HERO.headingEnd}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          {/* ESTIMATED: ~1285px box, three lines on an ~32px pitch against a
              25.6px face — the same 1.25 ratio the old hero measured. Heading
              to lede is ~17px. */}
          <p className="mx-auto mt-8 max-w-[1285px] text-base leading-relaxed text-white/90 sm:text-lg lg:mt-[17px] lg:text-[clamp(1.125rem,1.48vw,25.61px)] lg:leading-[1.25]">
            {ABOUT_HERO.lede}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          {/*
            ESTIMATED: lede to button row is ~24px, buttons are ~57px tall on a
            ~26px gap, and the labels read ~19px. Widths are ~284px for "Get
            Started" and ~301px for "View Our Services".

            `lg:font-semibold` rather than a bare `font-semibold` because the
            `md` size hard-codes `font-medium` and cn() is a plain join — see
            ui/Container for why two competing utilities cannot be trusted to
            resolve in class order.
          */}
          {/*
            HOVER IS NOT FROM FIGMA. The file carries no interaction data at
            all — 731 nodes expose an `interactions` array and every one is
            empty, and both `prototypeStartNodeID` values are null. This
            behaviour was specified by the user, not transcribed.

            The filled emphasis SWAPS. At rest "Get Started" is the solid red
            button and "View Our Services" is the outline. Hovering the outline
            one moves the fill to it and drops "Get Started" back to the
            outline treatment. Hovering "Get Started" changes nothing.

            Done with `group-has-*` rather than React state, so the hero stays
            a Server Component. It also solves a correctness problem: the
            generated selector is `.group:has(.cta-ghost:hover) .btn`,
            which outranks the variant's own `.btn:hover` on specificity. A
            plain `hover:bg-brand-red` here would NOT be safe — `ghostRed`
            already defines `hover:bg-brand-red/10`, and two utilities setting
            the same property under the same variant resolve by Tailwind's
            internal order, not by the order they are written here. Same trap
            `cn()` has, documented in ui/Container.

            Border width is deliberately left at the primary's 2.35px through
            the swap; matching ghostRed's 1.71px would shift the row by ~1.3px
            on hover.
          */}
          <div className="group mt-10 flex flex-wrap items-center justify-center gap-4 lg:mt-[24px] lg:gap-[26px]">
            <Button
              href="/#contact"
              variant="primary"
              size="md"
              className="min-w-[260px] group-has-[.cta-ghost:hover]:border-brand-red group-has-[.cta-ghost:hover]:bg-transparent group-has-[.cta-ghost:hover]:shadow-none lg:h-[57px] lg:min-w-[284px] lg:px-8 lg:text-[19px] lg:font-semibold"
            >
              {ABOUT_HERO.primaryCta}
            </Button>
            <Button
              href="/#services"
              variant="ghostRed"
              size="md"
              className="cta-ghost min-w-[260px] group-has-[.cta-ghost:hover]:bg-brand-red group-has-[.cta-ghost:hover]:shadow-btn-inset lg:h-[57px] lg:min-w-[301px] lg:px-8 lg:text-[19px] lg:font-semibold"
            >
              {ABOUT_HERO.secondaryCta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
