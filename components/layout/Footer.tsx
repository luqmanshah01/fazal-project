import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FOOTER_LINKS } from "@/lib/data";

/**
 * Footer — Figma node 239:1510, measured values from
 * `.claude/skills/sv-tech-about-page/SKILL.md` §6.9 (verified, 100% coverage).
 *
 * ⚠️ CONTENT IS DELIBERATELY NOT FROM FIGMA. That frame is named
 * "Footer (ProposalLift — Win Upwork jobs faster)" and carries a different
 * product's copy — an Upwork proposal tool, with "Chrome Extension" and
 * "Roadmap" links. Only the SV TECH.PK wordmark is correct. The copy here was
 * WRITTEN for SV Tech, not designed, and that is signed off.
 *
 * The LAYOUT is Figma's and is reproduced exactly. Three things had drifted
 * from it and are corrected here:
 *
 *   1. A row of four social icons that does not exist anywhere in the frame.
 *   2. The copyright had been split into its own bottom bar with a divider
 *      rule and a "Rawalpindi · Islamabad · Karachi · Lahore" city line.
 *      Figma has neither — the copyright is the third item in the LEFT
 *      column, directly under the tagline.
 *   3. The wordmark rendered at 17vw (~293px at the design width) against a
 *      measured 174.527px, so it spanned the full frame instead of the
 *      1056px Figma draws.
 */
export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-black text-white">
      {/*
        Figma 239:1510 — the 1728px frame holds a 1454 x 462 inner block with
        181.799px of side padding, so the content row is 1090.79px wide (the
        top row measures 1090.79 exactly). That is NARROWER than the 1420px
        section default, so it is set explicitly: 1090.79 + 96px of `lg`
        padding = 1187px.

        Frame padding is 127px top / 40.905px bottom. The bottom belongs to
        the wordmark block below, so only the top is applied here.
      */}
      <Container
        maxWidthClass="max-w-[1187px]"
        className="pt-24 md:pt-28 lg:pt-[127px]"
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Left column is 454.5px wide in Figma, on a 13.635px stack gap */}
          <div className="flex max-w-[454.5px] flex-col gap-[13.635px]">
            {/* Logo SVG is 181 x 105.62 — `h-16` was rendering it at 64px */}
            <Image
              src="/images/logos/logo-footer.svg"
              alt="SV Tech"
              width={181}
              height={106}
              className="h-[72px] w-auto lg:h-[105.62px]"
            />
            <p className="text-sm leading-relaxed text-white/70 lg:text-base">
              Pakistan&apos;s trusted cybersecurity and IT solutions company —
              protecting enterprises with global-grade expertise since 2017.
            </p>
            {/* Figma puts the copyright here, in the left column, styled the
                same way: "© Copyright <year> <bold company>. All Rights
                Reserved." */}
            <p className="text-sm text-white/70">
              © Copyright {new Date().getFullYear()}{" "}
              <span className="font-semibold text-white">SV Tech</span>. All
              Rights Reserved.
            </p>
          </div>

          <FooterColumn title="Product" links={FOOTER_LINKS.product} />
          <FooterColumn title="Company" links={FOOTER_LINKS.company} />
          <FooterColumn title="Legal" links={FOOTER_LINKS.legal} />
        </div>
      </Container>

      {/*
        Wordmark — Inter 700, 174.527px on a 130.9px line box (ratio 0.75),
        drawn 1056 x 108 and centred on the 1728px frame.
        174.527 / 1727 = 10.11vw, the project's standard conversion.

        Figma fills these glyphs with an image texture (imageRef 71313425…),
        so any CSS gradient is an approximation. ESTIMATED from
        .figma-refs/13-footer.png: light grey at the cap height fading to
        near-black at the baseline. The previous 0.14 -> 0.02 was far too
        faint to read as the design does.
      */}
      <div
        aria-hidden
        className="pointer-events-none mt-16 w-full select-none overflow-hidden whitespace-nowrap pb-[40.905px] text-center font-inter text-[clamp(3rem,10.11vw,174.53px)] font-bold leading-[0.75] tracking-[-0.055em]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.04) 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        SV TECH.PK
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: Array<{ label: string; href: string }>;
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="font-inter text-lg font-semibold text-white">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
