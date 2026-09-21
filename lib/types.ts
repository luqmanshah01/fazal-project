export type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  /**
   * Route prefix(es) that mark this item active, when that is broader than
   * `href`. "Services" links at one service page but stays active across all
   * of them; "Resources" covers several unrelated routes, so it takes a list.
   */
  activePrefix?: string | string[];
};

export type Service = {
  title: string;
  description: string;
  cta: string;
  icon: string;
};

export type Testimonial = {
  quote: string;
  role: string;
  company: string;
};

export type BlogPost = {
  /** Display label on the card, e.g. "Ransomware" */
  category: string;
  /**
   * Which filter pill on the blog page this post belongs to. Figma draws the
   * pills but specifies no interaction and no post-to-pill mapping, so this
   * bucket is derived, not measured.
   */
  topic: string;
  title: string;
  cover: string;
  href: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

/* About page — content measured from Figma node 239:1464 */

export type Milestone = {
  /** e.g. "2020–2021" — en dash, as in the design */
  period: string;
  title: string;
  description: string;
};

export type Certification = {
  /** Short badge name, e.g. "ISO 27001" */
  name: string;
  /** Expanded name shown under the badge */
  fullName: string;
};

export type Principle = {
  title: string;
  description: string;
};

export type ValueStatement = {
  /** "Mission" or "Vision" */
  label: string;
  body: string;
};

/* Service page — content measured from Figma node 239:1693 */

export type ThreatStat = {
  /** e.g. "200%+" or "$3.05M" */
  value: string;
  label: string;
};

export type SecurityService = {
  /** May contain a newline; the design breaks these titles by hand */
  title: string;
  description: string;
  cta: string;
};

export type ProcessStep = {
  /** Zero-padded, as drawn: "01".."04" */
  number: string;
  /** May contain a newline */
  title: string;
  body: string;
};

export type ServiceFaq = {
  question: string;
  /**
   * Empty when the answer is not yet written. Figma contains the questions
   * only — every accordion is drawn closed with no answer behind it. Rows with
   * an empty answer render as static, non-interactive rows.
   */
  answer: string;
};

/* Shared shapes for the parameterised service-page sections. The cybersecurity
   page keeps its current copy as the default, so nothing there changes. */

export type ServiceHeroContent = {
  eyebrow: string;
  /** Rendered in the leading gradient */
  headingStart: string;
  headingMiddle: string;
  /** Rendered in the trailing gradient */
  headingEnd: string;
  lede: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta: string;
  secondaryHref: string;
  /**
   * Figma sizes the primary hero button hug-width on most frames, but fixes it
   * at 278px on Case Studies. Empty string for hug.
   */
  primaryWidthClass?: string;
  /** Figma widths differ per page; the cybersecurity outline button is 331px,
   *  the IT Infrastructure one 282px. Tailwind min-width class for lg and up. */
  secondaryWidthClass: string;
  /** Figma H1 box width — 1346px on Cybersecurity, 1012px on IT
   *  Infrastructure. This decides where the heading wraps, so it is per page. */
  headingMaxWidthClass: string;
  /** Figma lede box width — 1056px vs 1037px. */
  ledeMaxWidthClass: string;
  /**
   * Figma H1 line box / 81.028px, as an `lg:` class. Every service frame sets
   * its own: 91.05px on Cybersecurity, 78.1px on IT Infrastructure, 82px on
   * MSP, 88.1px on Blog. Only applied from lg up — the sub-1 ratios clip
   * descenders once the clamp shrinks the type on small screens.
   */
  headingLeadingClass: string;
};

export type ServiceCtaButton = {
  label: string;
  href: string;
  /** `primaryCta` is the filled button, `ghostRed` the outline */
  variant: "primaryCta" | "ghostRed";
  /**
   * Figma width for this button at lg and up. The outline button is 276.23px
   * on Cybersecurity/MSP but 230px on Case Studies.
   */
  widthClass?: string;
};

export type ServiceCtaContent = {
  heading: string;
  lede: string;
  buttons: ServiceCtaButton[];
  /** Figma H2 box width — 1163px on Cybersecurity, 895px on IT Infrastructure */
  headingMaxWidthClass: string;
  /** Figma lede box width — 711px on the service pages, 552px on Blog */
  ledeMaxWidthClass: string;
};

/* ------------------------------------------------------------------ */
/* Sub-service template — Figma node 341:4539.                         */
/*                                                                     */
/* ⚠️ Built from screenshots, not the Figma API (rate-limited). Every   */
/* geometric value in these sections is ESTIMATED and marked in the    */
/* components with an "ESTIMATED" comment. See ESTIMATED-VALUES.md.    */
/* Copy is transcribed from the screenshots and should be exact.       */
/* ------------------------------------------------------------------ */

export type SubServiceHighlight = {
  title: string;
  body: string;
  /** Emoji stand-in for the Figma icon badge */
  icon: string;
};

export type SubServiceFlowStep = {
  title: string;
  caption: string;
  icon: string;
};

export type SubServiceReason = {
  title: string;
  body: string;
  icon: string;
};

export type SubService = {
  slug: string;
  /** Hero eyebrow pill — the parent service name */
  eyebrow: string;
  /** Hero H1, split around the two gradient words */
  headingStart: string;
  headingMiddle: string;
  headingEnd: string;
  lede: string;
  primaryCta: string;
  secondaryCta: string;

  /** Section 2 — "What We Do" band */
  overviewEyebrow: string;
  overviewHeading: string;
  overviewBody: string;
  overviewChecklist: string[];
  overviewImage: { src: string; alt: string };

  /** Section 3 — two dark highlight cards */
  highlights: SubServiceHighlight[];

  /** Section 4 — "Why … Matters" flow */
  mattersHeadingStart: string;
  mattersHeadingEnd: string;
  mattersLede: string;
  mattersSteps: SubServiceFlowStep[];
  mattersClosing: string;

  /** Section 5 — "Why Choose SV Tech" */
  reasons: SubServiceReason[];
  reasonsLede: string;

  /** Section 6 — FAQ */
  faqHeadingStart: string;
  faqHeadingMiddle: string;
  faqHeadingEnd: string;
  faqs: ServiceFaq[];
};

/* Blog page — content measured from Figma node 341:4370 */

export type InsightArea = {
  /** Rendered uppercase by the design */
  title: string;
  description: string;
  icon: string;
  cta: string;
  href: string;
};

/* IT Infrastructure page — content measured from Figma node 341:3591 */

export type InfraService = {
  title: string;
  description: string;
};

/**
 * Service overview band. Geometry differs per page, so the Figma measurements
 * travel with the copy rather than being baked into the component.
 */
export type ServiceOverviewContent = {
  /** Hard-broken heading lines; the gradient word is appended after them */
  headingLines: string[];
  headingEnd: string;
  body: string;
  checklist: string[];
  image: { src: string; alt: string };
  /** Total content span — 1452px on IT Infra, 1455px on MSP */
  containerMaxWidthClass: string;
  gridColsClass: string;
  /** H2 line box / 64px — 67.2 on IT Infra, 66 on MSP */
  headingLeadingClass: string;
  headingMaxWidthClass: string;
  bodyMaxWidthClass: string;
  /** Figma box gap from H2 to body */
  bodyMarginClass: string;
  checklistMaxWidthClass: string;
  /** Photo aspect — 562x634 on IT Infra, 562x524 on MSP */
  imageAspectClass: string;
  /** Border / radius / shadow. MSP has none. */
  imageFrameClass: string;
  /** Optional wash laid over the photo. Empty string for no overlay. */
  imageOverlayClass: string;
};
