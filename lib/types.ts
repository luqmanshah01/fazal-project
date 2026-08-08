export type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
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
  category: string;
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
