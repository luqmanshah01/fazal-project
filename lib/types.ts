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
