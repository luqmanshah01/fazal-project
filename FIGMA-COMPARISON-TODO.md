# Figma comparison — blocked until 2026-09-24 02:36

**Why this file exists:** on 2026-09-22 the user asked for the build to be made
100% Figma-accurate. The Figma API returned 429 on the first call:

```
Figma API rate limit hit (429). Retry after 118443 seconds.
Your Figma seat type (Viewer or Collaborator) has a lower API rate limit.
```

118,443s from 2026-09-22 17:42 = **2026-09-24 02:36**. This is the second time
the same limit has blocked this project — it also produced `ESTIMATED-VALUES.md`
on 2026-09-17.

A durable cron job could not be written: `CronCreate` fails with
`EEXIST: mkdir '.claude'` because it does not create the directory recursively
and `.claude/` already exists. Hence a file instead.

## How to resume

Say **"Figma comparison resume karo"** (or read this file) in any session on or
after 2026-09-24.

---

## Rate-limit discipline

The user's seat is Viewer/Collaborator, so the quota is small. **Do not fetch
all nodes at once** — that is what triggered the 429 both times. Fetch one node,
finish comparing it, then fetch the next.

File key: `vI3g8SFyp31vKyPKsL6bIH` — "SV Tech Website UI Redesign"

## Fetch order, highest value first

| # | Node | Page | Why this priority |
|---|---|---|---|
| 1 | `341:4539` | sub-service template | **~30 values are ESTIMATED, not measured.** Built from screenshots. Full list in `ESTIMATED-VALUES.md`. Highest chance of real mismatch |
| 2 | `97:506` | home | User supplied `node-id=97-505` (the parent). No spec doc exists; values live only in code comments |
| 3 | `341:3591` | it-infrastructure | No spec doc |
| 4 | `425:4124` | managed-service-provider | No spec doc |
| 5 | `341:3962` | case-studies | No spec doc |
| 6 | `341:4190` | events | No spec doc |
| 7 | `341:4370` | blog | No spec doc |

**Do not re-fetch these two** — their measured specs are already recorded at
100% coverage and double-verified, so spot-check against the docs instead and
save the quota:

- `239:1464` About → `.claude/skills/sv-tech-about-page/SKILL.md`
- `239:1693` Cybersecurity → `.claude/skills/sv-tech-service-page/SKILL.md`

## Also worth one fetch

`114:721`, `114:722`, `114:724`, `115:757`, `115:758` — five `iPhone 16 & 17 Pro`
frames at 402px. These are the **only** non-1727px frames in the entire file.
Their page association was never verified. If they contain real responsive
specs, the whole "responsiveness is not in Figma" conclusion changes.

## When node 341:4539 is measured

1. Replace every estimated value listed in `ESTIMATED-VALUES.md`
2. Remove the `ESTIMATED` comments from `components/sections/sub-service/*`
3. Delete `ESTIMATED-VALUES.md`
4. Confirm the route decision it flags (`/services/cybersecurity/[slug]` was
   chosen without sign-off after being raised three times)

---

## Already done on 2026-09-22 — do not redo

Section widths were corrected against the measured Figma values already on
record. `ui/Container`'s default was 1267px, taken from the navbar pill
(`239:1482`), which is the narrowest element on the page — every section
rendered 16–27% narrower than designed.

- `ui/Container.tsx` — default `max-w-[1267px]` → `max-w-[1516px]` (= 1420px
  content at `lg`), plus a `maxWidthClass` prop that **replaces** the default
  rather than stacking. It has to replace: `cn()` is a plain join, not
  tailwind-merge, so two `max-w-*` classes would both land and let CSS source
  order pick the winner.

Per-section overrides where Figma measures something other than 1420px content:

| Component | `maxWidthClass` | Figma content | Source |
|---|---|---|---|
| `layout/Footer` | `max-w-[1187px]` | 1090.79 | `239:1510` top row |
| `sections/Industries` | `max-w-[1480px]` | 1384 | `97:662-690`, 4 × 346 |
| `sections/Blog` | `max-w-[1483px]` | 1386.56 | `97:777-792` card row |
| `sections/Services` | `max-w-[1584px]` | 1488.14 | `97:601` divider artwork |
| `sections/services/ServicesGrid` | `max-w-[1587px]` | 1491 | `239:1803` divider artwork |
| `sections/services/ProcessSteps` | `max-w-[1536px]` | 1440 | `239:1833`, see below |

`ProcessSteps` also got three geometry fixes. Figma puts the four 156px circles
at x246/606/966/1326 — a 360px pitch. Solving `4W + 3G = span` with
`W + G = 360` and the circles centred (`246 = 144 + (360-156)/2`) gives
**W = 360, G = 0**: four equal 360px columns with no gap, spanning 144 → 1584.

- `lg:gap-8` → `lg:gap-0` (gap-8 shrank columns to 336px and pulled the
  connectors off the circles)
- connector `w-[calc(100%-156px+2rem)]` → `w-[calc(100%-156px)]` = exactly the
  204px Figma measures; also `h-px` flat `rgba(0,0,0,.45)` → `h-[2px]` with
  `linear-gradient(90deg,transparent,#000)` masked into 4/4 dashes, matching
  Figma's 2px stroke
- step body `max-w-[280px]` → `max-w-[223px]` (Figma boxes run 190–223px)

### Second round, same day — responsive

Figma has no responsive design to copy (see the table further down), so these
are bug fixes against the 8 widths the skill docs mandate — 360 / 402 / 768 /
1024 / 1280 / 1440 / 1727 / 2560 — not transcriptions.

| Fix | File | What was wrong |
|---|---|---|
| `whitespace-nowrap` → `whitespace-normal sm:whitespace-nowrap`, plus `max-w-full text-center` | `ui/Button.tsx` | "Get a Free Cybersecurity Assessment" and "Book Your Free Security Assessment" measure ~287px at the mobile 16px size; with `px-8` that is ~351px against the 312px a 360px viewport leaves. Both pushed the page into horizontal scroll. Every size in use has room for two lines (the 54px `md` box fits two 16px lines) |
| Stat column ratio + gutter | `services/ThreatLandscape.tsx` | `gap-16` (64px) against Figma's real 145px gutter (body 796 at x152, cards 481 at x1093 → 1093−948). The `521fr` right column was compensating for the wrong gap and rendered the cards ~55px too wide. Now `796fr_481fr` with `clamp(2rem,8.4vw,145px)` — 145/1727 = 8.4vw, the project's own scaling rule |
| Grid pinned separately from the lede | `sections/Industries.tsx` | Figma's lede box (1425) is WIDER than its cell grid (1384), so one container width cannot serve both. Section back on the 1420 default; grid pinned to `max-w-[1384px]` on its own |
| Connector geometry | `sub-service/SubServiceMatters.tsx` | `left-[calc(50%+48px)]` assumed a 96px circle, but it is 88px → 44px. And `w-[...+2rem]` assumed the `lg` gap while the connector shows from `sm`, where the gap is `gap-12` (3rem) — it was 16px short for the whole sm→lg range |
| `100vw` → `100%` | `sections/Testimonials.tsx` | `calc((100vw-694px)/2)` counts the scrollbar gutter, so the "centred" card sat a few px off on desktop |
| `inert={!open}` + `aria-expanded` + `aria-controls` | `layout/Navbar.tsx` | The mobile panel collapses to `max-h-0 opacity-0` but stays in the DOM for the transition, leaving its six links keyboard-focusable and SR-visible at **every** width, including desktop where the menu cannot be opened |

Scanned and confirmed clean: no `min-h-screen` anywhere (all `min-h-svh`);
every oversized glow / marquee / wordmark sits inside an `overflow-hidden`
parent; the 156px process circles and 260px button min-widths both clear the
312px a 360px viewport leaves.

> ⚠️ **These were derived from the measurements, not seen in a browser.** There
> is no browser automation in this environment, so nothing was visually
> confirmed at the 8 widths. `tsc --noEmit` and `next build` are clean and
> 13/13 pages generate, but a human should still eyeball `npm run dev` at 360
> and 1024 before this is called done.

### Third round, same day — section heights

**`min-h`, never `h`.** A Figma frame height is the height of that content at
1727px. A fixed `height` clips as soon as the type reflows at any other width,
so every section takes `lg:min-h-[Xpx]`: exact at the design width, free to
grow anywhere else.

16 sections now carry their measured frame height:

| Height | Sections |
|---|---|
| From the two verified spec docs | Mission&Vision 733 · Timeline 795 · Certifications 937 · VendorPartners 774 · Principles 701 · AboutCTA 524 · ThreatLandscape 692 · ServicesGrid 1058 · ProcessSteps 644 · ServiceFAQ 705 · ServiceCTA 524 |
| From code comments carrying a node id | Services (home) 992 · BlogApproach 628 · EventTypes 914 · CaseStudyFlow 948 · InfraServicesGrid 1143 · InsightAreas 751 · BlogList 908 · ServiceOverview 792 (infra) / 628 (MSP) |

Five sections also got their **real** top padding, replacing the repo's generic
`lg:py-20` (80px) with the measured first-element `y`:

ThreatLandscape 84/84 · ServicesGrid pt-61 · ProcessSteps pt-42 ·
ServiceFAQ 60/84 · Principles 52/75

Four shared components took a `minHeightClass` prop because their frame height
genuinely differs per page — `ServicesGrid`, `ServiceFAQ`, `InsightAreas`,
`BlogList`. The verified page keeps the measured default; **every unverified
page passes `""`** rather than inheriting a number that was never measured for
it. `ServiceOverview` took it as a content field instead, since both its
heights are known. Call sites passing `""`: MSP (×2), IT Infra, Blog,
Case Studies (×2), Events (×2), sub-service.

> ⚠️ **`min-h` only fixes sections that were too SHORT.** Where the current
> layout is already TALLER than the Figma frame, the min-height is a no-op and
> the section still does not match. Certifications is one: H2 + lede + two
> 275.49px rows + the current `mt-12 lg:mt-16` gaps computes past 937.
> Correcting those needs the **per-element y-offsets**, which exist only for
> the five sections listed above. Everything else needs the fetch.

### Sections still with NO measured height

All of the home page except Services — Hero, About, Partners, CTABanner,
WhyChoose, Industries, Testimonials, ContactForm, FAQ, Blog — plus all four
`sub-service/*` sections (screenshot-derived). These are untouched, still on
the generic `py-16 lg:py-20` rhythm.

### Build verification

`npx tsc --noEmit` clean, `npx next build` clean, 13/13 pages generated.

`npx eslint` could not run — it fails with `UNKNOWN: unknown error, read`
inside `node_modules/@typescript-eslint/`. `next build` also threw
`EPERM: operation not permitted, unlink` on a `.next/static` file once, cleared
by `rm -rf .next`. Both look like OneDrive placeholder-file sync on this
directory, unrelated to any code change — worth knowing before chasing them.

---

## User decision on 2026-09-22 — keep these deviations, do NOT revert

The user was shown all five and chose to keep accessibility over pixel-match.
Each is already commented in place.

| Deviation | Figma | Shipped | Reason |
|---|---|---|---|
| Touch targets | 40px CTA / 41.6px nav / 27px chip | 44px on touch, exact Figma from `lg` | WCAG target size |
| Cert sub-label | `#7B7B7B` | `#6B6B6B` | 3.88:1 on `#F5F5F5` fails WCAG AA |
| Mission photo | solid `#FF5050` fill over the image | fill omitted | would hide the photo completely; assumed a disabled layer the API still lists |
| Footer headings | Cal Sans 400 | Inter SemiBold | Cal Sans is not a Google Font and is not loaded |
| FAQ question | `rgba(0,0,0,.5)` on `#F6F6F6` | as drawn | ~4.2:1; passes as large text at 34px desktop, fails at the 17px mobile clamp |

---

## Cannot be made "100% Figma" — the design does not contain it

Not gaps in the code. Gaps in the file.

| Missing | Evidence |
|---|---|
| All animation | File searched for `reaction`, `interaction`, `transition`, `smartAnimate`, `prototype`, `trigger`, `easing`, `duration`, `onClick`, `onHover` — **0 matches file-wide**. Every transition in the build is derived from the repo's own motion vocabulary and is labelled as such |
| All responsive behaviour | Every page frame exists only at 1727px. See the iPhone-frame check above before treating this as final |
| 29 FAQ answers | Figma has the questions only; every accordion is drawn closed. Affects cybersecurity, it-infrastructure, MSP, blog, events, case-studies, sub-service |
| 21 icons | Emoji stand-ins — 8 industries, 3 insight areas, 10 sub-service. No glyphs in Figma. The 8 certification circles (`#FFB3B3`, 80.63px) are empty in the design too |
| The entire footer | `239:1510` is named *"Footer (ProposalLift — Win Upwork jobs faster)"* and carries another product's copy. The shipped footer content was **written, not designed** |

## Open items unrelated to Figma fidelity

Raised on 2026-09-22, not yet actioned:

- `/services/cybersecurity/endpoint-security` builds and has metadata but
  **nothing links to it** — `ServicesGrid` chips all point at `#contact`. The
  route is unreachable. Also only 1 of the 6 listed services has a sub-page
- `<ol>` → `<Reveal>` (a div) → `<li>` breaks list semantics in `Timeline.tsx`,
  `ProcessSteps.tsx`, `SubServiceMatters.tsx`, `CaseStudyFlow.tsx`
- `ContactForm` labels have no `htmlFor`/`id`; errors are not linked via
  `aria-describedby`; the success message is not in a live region
- `Navbar` mobile menu stays focusable when closed (`max-h-0`, no
  `hidden`/`inert`); toggle button has no `aria-expanded`
- `Stat.tsx` ignores `prefers-reduced-motion`, and its regex breaks on a
  currency prefix (`"$3.05M"` → `"0.0$3.05M"`) — latent, not live
- Dead CSS: `.text-gradient-red-black`, `.text-gradient-black-red`,
  `.text-gradient-quote`, `.text-gradient-quote-reverse` — no call sites.
  (`.text-gradient-stat-dark` was on this list and should not have been — the
  client's screenshot showed it is the home stat gradient. It is now wired up
  in `ui/Stat.tsx`. Before deleting any of the four above, check them against a
  screenshot the same way.)
- `GridRules` is duplicated byte-for-byte in `Services.tsx` and `ServicesGrid.tsx`
- `lib/data.ts` is 1,395 lines — split per page before the next page lands
- `INFRA_CTA` sits under the MSP comment header but is used by it-infrastructure
- `/api/contact` validates and `console.log`s only — no delivery or persistence
