import type { NavItem, Service, Testimonial, BlogPost } from "@/lib/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "Resources", href: "#resources", hasDropdown: true },
  { label: "Blogs", href: "#blog" },
];

export const TRUST_BADGES = [
  "Trusted by 50+ Enterprises",
  "8+ Years of Global Experience",
  "ISO 27001 Aligned Processes",
  "Pakistan's Only Partner",
];

export const PARTNERS = [
  { src: "/images/partners/partner-1.png", alt: "Partner logo 1" },
  { src: "/images/partners/partner-2.png", alt: "Partner logo 2" },
  { src: "/images/partners/partner-3.png", alt: "Partner logo 3" },
  { src: "/images/partners/partner-4.png", alt: "Partner logo 4" },
  { src: "/images/partners/partner-5.png", alt: "Interloop" },
  { src: "/images/partners/partner-6.png", alt: "Partner logo 6" },
];

export const STATS = [
  { value: "8+", label: "Years Of\nExperience" },
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "99.9%", label: "Uptime SLA" },
];

export const SERVICES: Service[] = [
  {
    title: "Cybersecurity Solutions",
    description:
      "Comprehensive protection across your entire attack surface from endpoints to cloud. Includes threat monitoring, incident response, and security audits.",
    cta: "Explore Cybersecurity",
    icon: "solar:shield-keyhole-bold-duotone",
  },
  {
    title: "Vulnerability Assessment & Penetration Testing",
    description:
      "Identify and fix security gaps before attackers exploit them. Certified ethical hackers test your systems with real-world attack simulations.",
    cta: "Get a VAPT Assessment",
    icon: "solar:bug-bold-duotone",
  },
  {
    title: "SOC as a Service — 24/7 Monitoring",
    description:
      "Round-the-clock security operations center, without the cost of building one in-house. Real-time threat detection, alerting, and response.",
    cta: "Learn About SOC",
    icon: "solar:monitor-bold-duotone",
  },
  {
    title: "Managed IT Infrastructure",
    description:
      "Scalable, enterprise-grade IT infrastructure designed for performance, resilience, and growth. Servers, storage, and networking — fully managed.",
    cta: "View Infrastructure Services",
    icon: "solar:server-2-bold-duotone",
  },
  {
    title: "Digital Transformation & Cloud",
    description:
      "Modernize your operations with cloud migration, RPA, AI-driven analytics, and enterprise system integration — implemented by experts.",
    cta: "Start Transformation",
    icon: "solar:cloud-bold-duotone",
  },
  {
    title: "Compliance & Risk Management",
    description:
      "Meet ISO 27001, PCI-DSS, and local regulatory requirements with structured compliance frameworks, risk assessments, and audit support.",
    cta: "Achieve Compliance",
    icon: "solar:document-text-bold-duotone",
  },
];

export const WHY_US = [
  {
    title: "Global Expertise, Local Presence",
    description:
      "We bring 8+ years of international cybersecurity experience directly to Pakistan. Our team has delivered solutions across the US, Europe, and the Middle East and now brings that same expertise home.",
  },
  {
    title: "Certified Partnerships with Industry Leaders",
    description:
      "As an authorized partner of CrowdStrike, Palo Alto Networks, Fortinet, SentinelOne, and 30+ leading vendors, we deliver proven technology with expert implementation not generic off-the-shelf solutions.",
  },
  {
    title: "End-to-End Service Model",
    description:
      "We don't just sell software. We assess, design, implement, and support your entire security and IT ecosystem. One partner, full accountability — from initial audit to ongoing managed services.",
  },
  {
    title: "Proven ROI for Pakistan's Enterprises",
    description:
      "Our clients report an average 60% reduction in security incidents within 6 months. We measure success by your outcomes — uptime, threat prevention, compliance, and business continuity.",
  },
];

export const INDUSTRIES = [
  "Banking & Financial Services",
  "Oil, Gas &\nEnergy",
  "Telecom &\nISPs",
  "Healthcare & Pharma",
  "Manufacturing & Industrial",
  "Government & Public Sector",
  "Education\n& Universities",
  "Retail &\nE-Commerce",
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "SV Tech completely transformed our network security posture. Their SOC monitoring team caught a potential breach within hours something our previous vendor missed for months.",
    role: "IT Manager",
    company: "PARCO — Pakistan Refinery",
  },
  {
    quote:
      "SV Tech completely transformed our network security posture. Their SOC monitoring team caught a potential breach within hours something our previous vendor missed for months.",
    role: "CISO",
    company: "Interloop Limited",
  },
  {
    quote:
      "SV Tech completely transformed our network security posture. Their SOC monitoring team caught a potential breach within hours something our previous vendor missed for months.",
    role: "Head of IT",
    company: "Fauji Fertilizer",
  },
];

export const FAQS = [
  {
    question: "What cybersecurity services does SV Tech offer in Pakistan?",
    answer:
      "We offer end-to-end cybersecurity: threat monitoring, VAPT, SOC-as-a-Service, endpoint protection, network security, cloud security, compliance (ISO 27001, PCI-DSS), and incident response — all delivered by certified professionals with global experience.",
  },
  {
    question: "How much do cybersecurity services cost in Pakistan?",
    answer:
      "Pricing depends on scope, scale, and required coverage. We offer flexible engagement models from one-time assessments to managed monthly retainers. Contact us for a free assessment and custom quote.",
  },
  {
    question: "Does SV Tech serve businesses outside Rawalpindi/Islamabad?",
    answer:
      "Yes. We serve enterprises across Pakistan including Karachi, Lahore, Faisalabad, and Peshawar. Our SOC and remote services operate 24/7, and we deploy on-site engineers for major projects nationwide.",
  },
  {
    question: "What is a VAPT assessment and does my business need one?",
    answer:
      "VAPT (Vulnerability Assessment & Penetration Testing) uncovers exploitable weaknesses in your applications, networks, and cloud environments. Any business handling customer data, financial transactions, or intellectual property should run a VAPT annually — or after any major infrastructure change.",
  },
  {
    question: "How quickly can SV Tech respond to a cybersecurity incident?",
    answer:
      "Our SOC-as-a-Service clients get sub-15-minute alerting and response initiation. For non-clients experiencing an active incident, our emergency response team can typically be engaged within 2 hours.",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    category: "Ransomware",
    title: "How to Protect Your Business from Ransomware in Pakistan",
    cover: "/images/blog/blog-cover.png",
    href: "#",
  },
  {
    category: "VAPT",
    title: "VAPT vs. Vulnerability Scan: What Pakistani Enterprises Should Know",
    cover: "/images/blog/blog-cover.png",
    href: "#",
  },
  {
    category: "Compliance",
    title: "From Cost Center to Competitive Edge: The Strategic Value of Managed IT",
    cover: "/images/blog/blog-cover.png",
    href: "#",
  },
];

export const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "#" },
    { label: "How It Works", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Case Studies", href: "#" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};
