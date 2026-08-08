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
