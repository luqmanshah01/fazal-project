import type {
  NavItem,
  Service,
  Testimonial,
  BlogPost,
  Milestone,
  Certification,
  Principle,
  ValueStatement,
  ThreatStat,
  SecurityService,
  ProcessStep,
  ServiceFaq,
  ServiceHeroContent,
  ServiceCtaContent,
  ServiceOverviewContent,
  InfraService,
  InsightArea,
  SubService,
} from "@/lib/types";

// Hash targets are prefixed with "/" so they resolve from any route, not just home.
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  // No submenu design exists anywhere in the Figma file, so the arrow stays
  // decorative and the item links at the first service page. `activePrefix`
  // keeps it lit on every /services/* route, as Figma draws it.
  {
    label: "Services",
    href: "/services/cybersecurity",
    hasDropdown: true,
    activePrefix: "/services",
  },
  // Figma draws "Resources" active on the Case Studies frame (341:4000), so
  // the Resources group covers those routes. No submenu design exists.
  {
    label: "Resources",
    href: "/case-studies",
    hasDropdown: true,
    activePrefix: ["/case-studies", "/events"],
  },
  { label: "Blogs", href: "/blog" },
];

export const TRUST_BADGES = [
  "Trusted by 50+ Enterprises",
  "8+ Years of Global Experience",
  "ISO 27001 Aligned Processes",
  "Pakistan's Only Partner",
];

// Names read off the logo artwork — the files are numbered, not labelled.
export const PARTNERS = [
  { src: "/images/partners/partner-1.png", alt: "Adamjee Insurance logo" },
  { src: "/images/partners/partner-2.png", alt: "Nayatel logo" },
  { src: "/images/partners/partner-3.png", alt: "LOLC logo" },
  { src: "/images/partners/partner-4.png", alt: "Unity Foods Limited logo" },
  { src: "/images/partners/partner-5.png", alt: "Interloop logo" },
  { src: "/images/partners/partner-6.png", alt: "PARCO logo" },
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

/**
 * Figma 97:662-690 lays these out 4 x 2 reading across, each cell 346 x 132
 * with a 62.55px #FFEDED circle carrying an emoji glyph (nodes 341:3571-3578).
 */
export const INDUSTRIES = [
  { label: "Banking & Financial Services", icon: "🏦" },
  { label: "Oil, Gas &\nEnergy", icon: "⚡" },
  { label: "Telecom &\nISPs", icon: "📡" },
  { label: "Healthcare & Pharma", icon: "🏥" },
  { label: "Manufacturing & Industrial", icon: "🏭" },
  { label: "Government & Public Sector", icon: "🏛️" },
  { label: "Education\n& Universities", icon: "🎓" },
  { label: "Retail &\nE-Commerce", icon: "🛍️" },
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
    topic: "Cybersecurity",
    title: "How to Protect Your Business from Ransomware in Pakistan",
    cover: "/images/blog/blog-cover.png",
    href: "#",
  },
  {
    category: "VAPT",
    topic: "Cybersecurity",
    title: "VAPT vs. Vulnerability Scan: What Pakistani Enterprises Should Know",
    cover: "/images/blog/blog-cover.png",
    href: "#",
  },
  {
    category: "Compliance",
    topic: "Managed Services",
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
    { label: "Case Studies", href: "/case-studies" },
  ],
  // Route-prefixed so they resolve from /about and /services too, not just home.
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/#contact" },
    { label: "Careers", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

/* ------------------------------------------------------------------ */
/* About page — all copy verbatim from Figma node 239:1464.            */
/* Several strings have missing punctuation in the design (e.g.        */
/* "parachuting in we are"). Left as-is pending designer confirmation. */
/* ------------------------------------------------------------------ */

export const ABOUT_HERO = {
  eyebrow: "Who We Are",
  headingStart: "Pakistan's",
  headingMiddle: "Most Trusted Cybersecurity & IT Solutions Company",
  headingEnd: "Since 2017",
  lede: "SV Tech is Pakistan's premier enterprise cybersecurity & IT solutions company, headquartered in Rawalpindi. Founded in 2017, we have spent 8+ years building a reputation for world-class security expertise, trusted by Pakistan's leading enterprises across energy, finance, telecom, and manufacturing.",
  primaryCta: "Get a Free Security Audit",
  secondaryCta: "View Our Services",
} as const;

export const MISSION_VISION: ValueStatement[] = [
  {
    label: "Mission",
    body: "To empower Pakistan's enterprises with enterprise-grade cybersecurity solutions, managed IT infrastructure, and digital transformation strategies built on global standards, delivered with local understanding.",
  },
  {
    label: "Vision",
    body: "To be recognized as Pakistan's most innovative and reliable cybersecurity and IT services partner the company enterprises call first when security, scale, or transformation matters.",
  },
];

export const MILESTONES: Milestone[] = [
  {
    period: "2017",
    title: "Founded",
    description:
      "SV Engineering & Sourcing established in Rawalpindi with a mission to bring enterprise-grade IT and cybersecurity expertise to Pakistan's growing enterprise sector.",
  },
  {
    period: "2018–2019",
    title: "First Enterprise Clients",
    description:
      "Onboarded first major enterprise clients in the energy and financial sectors, delivering network security infrastructure and IT managed services.",
  },
  {
    period: "2020–2021",
    title: "Vendor Partnerships",
    description:
      "Secured authorized partner status with global cybersecurity leaders including CrowdStrike, Palo Alto Networks, Fortinet, and SentinelOne among the first in Pakistan to do so.",
  },
  {
    period: "2022–2023",
    title: "Digital Transformation Practice",
    description:
      "Launched dedicated digital transformation and cloud migration practice, helping enterprises modernize legacy infrastructure and adopt cloud-first strategies.",
  },
  {
    period: "2024–2025",
    title: "SOC & VAPT Launch",
    description:
      "Launched Pakistan's most advanced enterprise SOC-as-a-Service and VAPT practice, servicing clients in banking, telecom, and oil & gas with 24/7 threat coverage.",
  },
  {
    period: "2026",
    title: "Today",
    description:
      "Serving 50+ enterprises across Pakistan with a full stack of cybersecurity, IT infrastructure, and digital transformation services and growing.",
  },
];

export const CERTIFICATIONS: Certification[] = [
  { name: "CISSP", fullName: "Certified Information Systems Security Professional" },
  { name: "CEH", fullName: "Certified Ethical Hacker" },
  { name: "Security+", fullName: "CompTIA Security+" },
  { name: "CCNP Security", fullName: "Cisco CCNP Security" },
  { name: "PCNSE", fullName: "Palo Alto Networks PCNSE" },
  { name: "CCFA", fullName: "CrowdStrike Certified Falcon Administrator" },
  { name: "ISO 27001", fullName: "Lead Implementer & Auditor" },
  { name: "Azure Security", fullName: "Microsoft Azure Security Engineer" },
];

export const PRINCIPLES: Principle[] = [
  {
    title: "Security First",
    description:
      "Every recommendation, every deployment, every strategy starts with the question: is this secure? We never compromise on protection to save cost or time.",
  },
  {
    title: "Radical Transparency",
    description:
      "We tell you what you need to hear, not what you want to hear. Our assessments are honest, our reports are clear, and our recommendations are conflict-free.",
  },
  {
    title: "Continuous Innovation",
    description:
      "The threat landscape evolves daily. So do we. Our team invests in continuous learning, certification, and research to stay ahead of attackers so your business stays protected.",
  },
  {
    title: "Local Commitment",
    description:
      "We are not a global firm parachuting in we are a Pakistani company with deep roots, long-term relationships, and a genuine stake in Pakistan's digital future.",
  },
];

export const ABOUT_CTA = {
  heading: "Ready to Work With Pakistan's Most Trusted Cybersecurity Team?",
  lede: "Whether you need a one-time security audit, a complete managed security overhaul, or a strategic IT transformation roadmap we are ready to help.",
  primaryCta: "Schedule a Free Consultation",
  secondaryCta: "View Our Services",
} as const;

/**
 * Verbatim from Figma node 239:1572, at the user's instruction to follow the
 * design exactly.
 *
 * ⚠️ This is byte-identical to the Mission & Vision heading above, so the page
 * now shows "Our Mission, Vision & Values" twice — once over the mission cards
 * and again over the company timeline. Figma renders it at 59.02px here versus
 * 72.21px there, which is the only difference. Almost certainly a copy-paste
 * slip in the design; change these three strings to fix it.
 */
export const TIMELINE_HEADING = {
  start: "Our",
  middle: "Mission, Vision &",
  end: "Values",
} as const;

/**
 * Client / partner logos — Figma node 239:1621, three marquee rows.
 *
 * Names were read off the logo artwork itself, because Figma names these
 * layers "image 172", "Picture1e", "Asset 3@3x 2" and so on.
 *
 * ⚠️ CONTENT MISMATCH IN THE DESIGN: the section heading reads "Authorized
 * Partner of the World's Leading Cybersecurity Vendors" and the lede talks
 * about vendor certifications — but not one of these 28 logos is a security
 * vendor. There is no CrowdStrike, Palo Alto Networks, Fortinet or
 * SentinelOne. They are all customer organisations (healthcare, government,
 * education, FMCG, automotive, finance). Either the heading or the logo set
 * is wrong in Figma. Flagged, not silently corrected.
 *
 * Row 2 slot 1 repeats row 1 slot 9 (LOLC); that is how the design has it.
 */
const logo = (file: string, name: string) => ({
  src: `/images/about/vendors/${file}`,
  alt: `${name} logo`,
});

export const VENDOR_ROWS = [
  [
    logo("r1-01.png", "Dubai Judicial Institute"),
    logo("r1-02.png", "Sharjah Golf & Shooting Club"),
    logo("r1-03.png", "Marine Systems"),
    logo("r1-04.png", "Liaquat National Hospital and Medical College"),
    logo("r1-05.png", "Prime Healthcare Group"),
    logo("r1-06.png", "Zakat House Kuwait"),
    logo("r1-07.png", "Al Ain University"),
    logo("r1-08.png", "Galadari Motor Driving Centre"),
    logo("r1-09.png", "LOLC"),
  ],
  [
    logo("r1-09.png", "LOLC"),
    logo("r2-02.png", "Infomineo"),
    logo("r2-03.png", "Al Khayyat Investments"),
    logo("r2-04.png", "Samra"),
    logo("r2-05.png", "Adamjee Insurance"),
    logo("r2-06.png", "Dubai Air Wing"),
    logo("r2-07.svg", "Khaadi"),
    logo("r2-08.png", "Philip Morris International"),
    logo("r2-09.png", "Mastercard"),
    logo("r2-10.png", "Nayatel"),
  ],
  [
    logo("r3-01.png", "GSME"),
    logo("r3-02.png", "Ghitha"),
    logo("r3-03.png", "NRTC Fresh"),
    logo("r3-04.png", "Nike"),
    logo("r3-05.png", "Levi's"),
    logo("r3-06.png", "Mazda"),
    logo("r3-07.png", "Dow"),
    logo("r3-08.png", "Kraft Heinz"),
    logo("r3-09.png", "Rockwell Automation"),
    logo("r3-10.png", "Tiffany & Co."),
  ],
];

/* ------------------------------------------------------------------ */
/* Cybersecurity service page — copy verbatim from Figma node 239:1693 */
/* Several strings have missing or doubled punctuation in the design   */
/* ("catastrophic  yet", "a matter of if it is a matter of when",      */
/* "modular you can engage us"). Left as-is pending confirmation.      */
/* ------------------------------------------------------------------ */

export const SERVICE_HERO: ServiceHeroContent = {
  eyebrow: "Enterprise-Grade Protection for Pakistan's Businesses",
  headingStart: "Cybersecurity",
  headingMiddle: "Services in Pakistan 360° Protection for Your",
  headingEnd: "Enterprise",
  lede: "In today's threat landscape, a cyberattack is not a matter of if it is a matter of when. SV Tech delivers a full spectrum of enterprise cybersecurity services in Pakistan, from proactive threat hunting and 24/7 SOC monitoring to penetration testing, endpoint protection, and regulatory compliance all backed by certified experts and global vendor partnerships.",
  primaryCta: "Get a Free Cybersecurity Assessment",
  primaryHref: "#contact",
  secondaryCta: "See All Services",
  secondaryHref: "/#services",
  secondaryWidthClass: "lg:min-w-[331px]",
  headingMaxWidthClass: "max-w-[1346px]",
  ledeMaxWidthClass: "max-w-[1056px]",
  headingLeadingClass: "lg:leading-[1.124]", // 91.05 / 81.028
};

export const THREAT_INTRO = [
  "Pakistani businesses face a rapidly growing cyber threat landscape. Financial institutions, energy companies, and telecom operators in Pakistan have all been targeted by sophisticated threat actors many of whom exploit unpatched systems, weak access controls, and unmonitored network traffic.",
  "For most Pakistani businesses, a single breach can be catastrophic  yet the majority still operate without a formal cybersecurity strategy.",
];

export const THREAT_STATS: ThreatStat[] = [
  {
    value: "200%+",
    label:
      "Increase in ransomware attacks across South Asia between 2022 and 2024.",
  },
  {
    value: "$3.05M",
    label:
      "Average cost of a data breach for a mid-sized enterprise in Asia Pacific, per incident.",
  },
];

export const SECURITY_SERVICES: SecurityService[] = [
  {
    title: "Vulnerability Assessment\n& Penetration Testing",
    description:
      "Our CREST-methodology VAPT service systematically identifies vulnerabilities across your network, web applications, and cloud infrastructure then delivers a prioritized remediation roadmap.",
    cta: "Request a VAPT Quote",
  },
  {
    title: "SOC as a Service 24/7 Security Monitoring",
    description:
      "Round-the-clock threat detection, analysis, and incident response without the cost of building an in-house SOC. Powered by SIEM platforms and global threat intelligence.",
    cta: "Explore SOC Services",
  },
  {
    title: "Endpoint Security\n& Protection",
    description:
      "Next-generation EDR from CrowdStrike and SentinelOne, combined with Zero Trust access policies, to eliminate lateral movement across every device on your network.",
    cta: "Secure Your Endpoints",
  },
  {
    title: "Firewall & Network\nSecurity",
    description:
      "Perimeter firewall deployment and management, IDS/IPS, network segmentation, VPN architecture, and SD-WAN security across Palo Alto, Fortinet, Cisco, and SonicWall.",
    cta: "Secure Your Network",
  },
  {
    title: "Email Security\n& Anti-Phishing",
    description:
      "Over 90% of cyberattacks begin with a phishing email. Multi-layer protection combining gateway filtering, sandboxing, DMARC/DKIM/SPF, and user awareness training.",
    cta: "Stop Phishing Attacks",
  },
  {
    title: "Compliance &\nRisk Management",
    description:
      "Achieve and maintain compliance with ISO 27001, PCI-DSS, NIST CSF, and local SBP/SECP cybersecurity regulations through formal risk assessments and audit preparation.",
    cta: "Start Compliance Journey",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Risk\nAssessment",
    body: "We start with a no-obligation security assessment of your current environment mapping your attack surface, identifying gaps, and scoring your risk posture against industry benchmarks.",
  },
  {
    number: "02",
    title: "Custom Security\nStrategy",
    body: "Our team designs a cybersecurity roadmap tailored to your industry, size, and threat profile prioritizing high-impact, quick-win improvements alongside long-term strategic initiatives.",
  },
  {
    number: "03",
    title: "Deployment &\nIntegration",
    body: "We implement security solutions with minimal disruption to your operations. All deployments are tested, documented, and handed over with full staff training.",
  },
  {
    number: "04",
    title: "Ongoing Monitoring\n& Support",
    body: "Cybersecurity is not a one-time project. We provide continuous monitoring, quarterly reviews, threat intelligence updates, and 24/7 incident response support.",
  },
];

/**
 * ⚠️ Figma contains the four questions and nothing else — every accordion is
 * drawn closed and there is no answer copy anywhere in the frame. Answers are
 * left empty rather than invented; rows with an empty answer render as static
 * rows. Fill these in and they become interactive automatically.
 */
export const SERVICE_FAQS: ServiceFaq[] = [
  {
    question: "What is the difference between VAPT and a cybersecurity audit?",
    answer: "",
  },
  {
    question: "How long does a cybersecurity engagement with SV Tech take?",
    answer: "",
  },
  { question: "Can SV Tech work with our existing security tools?", answer: "" },
  {
    question:
      "Do you provide cybersecurity services to SMEs or only large enterprises?",
    answer: "",
  },
];

export const SERVICE_CTA: ServiceCtaContent = {
  heading:
    "Your Business Deserves Enterprise-Grade Cybersecurity. Let's Build It Together.",
  lede: "Talk to a certified cybersecurity consultant no jargon, no sales pressure. Just an honest assessment of your risk and a clear path forward.",
  buttons: [
    {
      label: "Book Your Free Security Assessment",
      href: "/#contact",
      variant: "primaryCta",
    },
    // A phone number, so it links with tel: rather than to a route.
    {
      label: "Call: +92 51 517 2233",
      href: "tel:+925115172233",
      variant: "ghostRed",
    },
  ],
  headingMaxWidthClass: "max-w-[1163px]",
  ledeMaxWidthClass: "max-w-[711px]",
};

/* ------------------------------------------------------------------ */
/* IT Infrastructure page — copy verbatim from Figma node 341:3591.    */
/*                                                                     */
/* Four content defects exist in the design and are reproduced as-is   */
/* per sign-off on 2026-09-14:                                         */
/*   1. hero secondary button reads "Speak to an Export" (Expert)      */
/*   2. INFRA_SERVICES[4] body repeats its own title                   */
/*   3. INFRA_PROCESS_STEPS[1] is titled "Custom Security Strategy"    */
/*      but its body describes an infrastructure roadmap               */
/*   4. INFRA_SERVICES[5] body has a trailing space                    */
/* ------------------------------------------------------------------ */

export const INFRA_HERO: ServiceHeroContent = {
  eyebrow: "Enterprise-Grade Protection for Pakistan's Businesses",
  headingStart: "Managed",
  headingMiddle:
    "IT Infrastructure Services in Pakistan Built for Security, Scale, &",
  headingEnd: "Uptime",
  lede: "SV Tech delivers IT infrastructure services in Pakistan that keep enterprise networks, servers, and cloud systems running without interruption. Our infrastructure teams monitor, manage, and secure your technology environment 24/7. Enterprises across Pakistan rely on SV Tech to reduce downtime, strengthen security, and scale IT operations with confidence.",
  primaryCta: "Get a Free Assessment",
  primaryHref: "#contact",
  // Figma typo, kept verbatim — see defect 1 above.
  secondaryCta: "Speak to an Export",
  secondaryHref: "/#contact",
  secondaryWidthClass: "lg:min-w-[282px]",
  // H1 box is 1012 x 235 at (358, 313) — three lines at the 78.1px line box.
  headingMaxWidthClass: "max-w-[1012px]",
  ledeMaxWidthClass: "max-w-[1037px]",
  headingLeadingClass: "lg:leading-[0.964]", // 78.1 / 81.028
};

export const INFRA_OVERVIEW: ServiceOverviewContent = {
  headingLines: ["IT Infrastructure", "Services in Pakistan,", "Managed "],
  headingEnd: "End-to-End",
  body: "SV Tech manages IT infrastructure end-to-end for enterprises across Pakistan, covering network design, server management, and cloud integration, backed by certified engineers and global delivery standards. SV Tech offers both fully managed and co-managed infrastructure models, working independently or alongside your existing IT staff.",
  checklist: [
    "24/7 proactive infrastructure monitoring and management",
    "Fully managed or co-managed IT infrastructure models",
    "Certified engineers with enterprise-grade tools and platforms",
    "Rapid issue detection and resolution before disruption occurs",
  ],
  image: {
    src: "/images/it-infrastructure/overview-photo.png",
    alt: "SV Tech engineers working in an enterprise data centre in Pakistan",
  },
  // Copy at x152 (widest run 870), photo 562 wide at x1042 -> 1452 span
  containerMaxWidthClass: "max-w-[1452px]",
  gridColsClass: "lg:grid-cols-[870fr_562fr]",
  headingLeadingClass: "leading-[1.05]", // 67.2 / 64
  headingMaxWidthClass: "max-w-[620px]",
  bodyMaxWidthClass: "max-w-[729px]",
  bodyMarginClass: "lg:mt-[53px]",
  checklistMaxWidthClass: "max-w-[870px]",
  imageAspectClass: "aspect-[562/634]",
  imageFrameClass: "rounded-[35px] border-2 border-brand-red shadow-card",
  imageOverlayClass: "",
};

export const INFRA_SERVICES_INTRO = {
  headingStart: "Complete",
  headingMiddle: "IT Infrastructure Services in Pakistan. One Partner,",
  headingEnd: "Every Layer",
  lede: "SV Tech's IT infrastructure services in Pakistan cover networks, servers, cloud environments, data centers, security, and ongoing support. Each service is delivered under a single point of accountability, eliminating the need to manage multiple vendors.",
} as const;

export const INFRA_SERVICES: InfraService[] = [
  {
    title: "IT Infrastructure Outsourcing",
    description:
      "SV Tech takes full ownership of your IT infrastructure, from assessment to daily operations. Our outsourcing model reduces overhead while ensuring enterprise-grade reliability.",
  },
  {
    title: "Cloud IT Infrastructure",
    description:
      "SV Tech designs and manages cloud infrastructure across hybrid and multi-cloud environments. We optimize performance and cost while keeping systems secure.",
  },
  {
    title: "Data Center Solutions",
    description:
      "SV Tech provides data center infrastructure covering storage, backup, and networking. Our data center services in Pakistan are built for enterprise uptime and disaster recovery.",
  },
  {
    title: "IT Operations Management",
    description:
      "SV Tech delivers continuous IT operations support, including patching and performance monitoring. Issues are resolved before they impact business continuity.",
  },
  {
    title: "Cybersecurity & Compliance",
    // Body repeats the title in Figma — see defect 2 above.
    description:
      "Cybersecurity & Compliance SV Tech integrates cybersecurity directly into your IT infrastructure. Threat monitoring and compliance frameworks protect your environment at every layer.",
  },
  {
    title: "Strategic IT Support",
    // Trailing space is in Figma — see defect 4 above.
    description:
      "SV Tech provides on-demand IT support and infrastructure consulting. Our support scales with your business as technology needs evolve. ",
  },
];

export const INFRA_PROCESS_HEADING = {
  start: "How",
  middle: "SV Tech Delivers IT Infrastructure Services in",
  end: "Pakistan",
} as const;

export const INFRA_PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Risk\nAssessment",
    body: "SV Tech begins every engagement with a no-obligation assessment of your existing IT infrastructure. We map your network, identify performance gaps, and benchmark your environment against industry standards.",
  },
  {
    number: "02",
    // Title is the cybersecurity page's, verbatim — see defect 3 above.
    title: "Custom Security\nStrategy",
    body: "SV Tech builds an infrastructure roadmap tailored to your industry, business size, and growth plans. High-impact improvements are prioritized alongside long-term infrastructure goals.",
  },
  {
    number: "03",
    title: "Deployment &\nIntegration",
    body: "SV Tech implements infrastructure solutions with minimal disruption to daily operations. Every deployment is tested, documented, and handed over with complete staff training.",
  },
  {
    number: "04",
    title: "Ongoing Monitoring\n& Support",
    body: "SV Tech provides continuous infrastructure monitoring, 24/7 incident response, and quarterly performance reviews. IT infrastructure management is delivered as an ongoing partnership, not a one-time project.",
  },
];

export const INFRA_FAQ_HEADING = {
  start: "Your",
  middle: "Questions About IT Infrastructure Services in Pakistan,",
  end: "Answered",
} as const;

/**
 * ⚠️ As on the cybersecurity page, Figma contains the six questions and nothing
 * else — every accordion is drawn closed with no answer copy in the frame.
 * Answers are left empty rather than invented, so the rows render as static,
 * non-interactive rows. Fill one in and it becomes a real accordion with no
 * further change to the component.
 */
export const INFRA_FAQS: ServiceFaq[] = [
  { question: "What are IT Infrastructure Services?", answer: "" },
  {
    question:
      "Does SV Tech provide IT infrastructure outsourcing in Pakistan?",
    answer: "",
  },
  {
    question: "Does SV Tech provide cloud IT infrastructure services?",
    answer: "",
  },
  { question: "Does SV Tech provide data center solutions?", answer: "" },
  {
    question:
      "Does SV Tech provide 24/7 IT infrastructure monitoring and support?",
    answer: "",
  },
  {
    question: "Can SV Tech work alongside our existing IT team?",
    answer: "",
  },
];

/* ------------------------------------------------------------------ */
/* Sub-service template — Figma node 341:4539.                         */
/*                                                                     */
/* ⚠️ BUILT FROM SCREENSHOTS, not the Figma API (rate-limited until     */
/* ~2026-09-19). Copy below is transcribed from the screenshots and     */
/* should be exact. Every GEOMETRIC value in the components is         */
/* ESTIMATED — see ESTIMATED-VALUES.md for the full list to verify     */
/* once the API is available again.                                    */
/*                                                                     */
/* ⚠️ The hero eyebrow reads "Vulnerability Assessment & Penetration    */
/* Testing" while the heading reads "Endpoint Security" — two          */
/* different sub-services. Reproduced as drawn; likely a design slip.  */
/* ------------------------------------------------------------------ */

export const SUB_SERVICES: SubService[] = [
  {
    slug: "endpoint-security",
    eyebrow: "Vulnerability Assessment & Penetration Testing",
    headingStart: "Endpoint",
    // Screenshot breaks the H1 after "Security":
    //   line 1  Endpoint Security
    //   line 2  Services in Pakistan
    headingMiddle: "Security\nServices in",
    headingEnd: "Pakistan",
    lede: "Business endpoints are a critical part of the modern IT environment. Laptops, servers, and mobile devices connect employees to applications, networks, and business information, making them an important part of an organization's security strategy.",
    primaryCta: "Get a Free Assessment",
    secondaryCta: "Speak to an Expert",

    overviewEyebrow: "What We Do",
    overviewHeading: "Protecting\nBusiness Endpoints",
    overviewBody:
      "SV Tech provides Endpoint Security services in Pakistan to help organizations strengthen protection across connected devices. Our approach focuses on improving endpoint visibility, identifying suspicious activity, supporting advanced threat detection, and reducing risks associated with compromised devices.",
    overviewChecklist: [
      "Protection of business devices",
      "Advanced threat detection",
      "Mobile device management",
      "Identification of suspicious endpoint activity",
      "Improved security visibility",
      "Reduction of endpoint-related risks",
    ],
    // Supplied by the client as a direct export — 562 x 733.
    overviewImage: {
      src: "/images/sub-services/endpoint-security-overview.png",
      alt: "Laptop, desktop, phone and server on a desk, each showing a padlock shield, with a map of Pakistan and the Islamabad skyline behind",
    },

    highlights: [
      {
        title: "Advanced Threat Detection",
        body: "Modern threats can behave differently from traditional malware. SV Tech's endpoint security approach emphasizes detecting suspicious behavior and potential threats rather than relying only on basic protection. Better endpoint visibility can help security teams understand what is happening across connected devices and investigate unusual activity before it develops into a larger incident.",
        icon: "🛡️",
      },
      {
        title: "Mobile Device Management",
        body: "Mobile endpoints can introduce additional security considerations when employees access business resources away from traditional office environments. SV Tech helps organizations manage mobile devices as part of a broader endpoint security strategy.",
        icon: "📱",
      },
    ],

    mattersHeadingStart: "Why Endpoint Security",
    mattersHeadingEnd: "Matters",
    mattersLede:
      "A compromised endpoint can become an entry point into wider business systems. Strong endpoint controls add an important layer between users and critical infrastructure and complement network security, email security, and security monitoring.",
    mattersSteps: [
      { title: "Endpoint", caption: "Protected & monitored", icon: "💻" },
      { title: "Network", caption: "Layered defense", icon: "🌐" },
      { title: "Critical Systems", caption: "Business infrastructure", icon: "🗄️" },
    ],
    mattersClosing:
      "SV Tech can assess your current endpoint environment and help identify practical opportunities to improve protection.",

    reasonsLede:
      "SV Tech takes a structured approach based on the organization's existing technology environment and security requirements.",
    reasons: [
      {
        title: "Structured Approach",
        body: "Built around your existing technology environment and security requirements.",
        icon: "🧭",
      },
      {
        title: "Practical Improvements",
        body: "Focused on real, actionable security gains not generic checklists.",
        icon: "⚙️",
      },
      {
        title: "Better Visibility",
        body: "Clear insight into what's happening across every connected device.",
        icon: "👁️",
      },
      {
        title: "Stronger Protection",
        body: "Consistent, layered protection across your entire business endpoint fleet.",
        icon: "🛡️",
      },
    ],

    faqHeadingStart: "Frequently",
    // Screenshot breaks after "Asked":
    //   line 1  Frequently Asked
    //   line 2  Questions Endpoint Security
    faqHeadingMiddle: "Asked\nQuestions Endpoint",
    faqHeadingEnd: "Security",
    faqs: [
      { question: "What is Endpoint Security?", answer: "" },
      {
        question: "Does SV Tech provide mobile device management?",
        answer: "",
      },
      { question: "Why is endpoint security important?", answer: "" },
      {
        question: "Can Endpoint Security support advanced threat detection?",
        answer: "",
      },
    ],
  },
];

export const SUB_SERVICE_CTA: ServiceCtaContent = {
  heading:
    "Every Unprotected Endpoint Is an Open Door.\nLet SV Tech Lock Every One of Them.",
  lede: "",
  buttons: [
    { label: "Request a Quote", href: "/#contact", variant: "primaryCta" },
  ],
  headingMaxWidthClass: "max-w-[900px]",
  ledeMaxWidthClass: "max-w-[711px]",
};

/* ------------------------------------------------------------------ */
/* Events page — copy verbatim from Figma node 341:4190.               */
/*                                                                     */
/* ⚠️ Two gaps in the design:                                          */
/*   1. all three event cards are placeholder lorem ("Category name" / */
/*      "Details about the event or name of the event Details about    */
/*      the event or") and there is no real event data anywhere, so    */
/*      the placeholders are rendered as drawn                         */
/*   2. the closing CTA button reads "Book Your Free Security          */
/*      Assessment" — the Cybersecurity label, on an Events page       */
/*                                                                     */
/* Every gradient word on this page matches an existing key, so no new */
/* gradients were added.                                               */
/* ------------------------------------------------------------------ */

export const EVENTS_HERO: ServiceHeroContent = {
  eyebrow: "Enterprise-Grade Protection for Pakistan's Businesses",
  headingStart: "Connecting,",
  headingMiddle: "Learning, and Leading at Technology",
  headingEnd: "Events",
  lede: "The SV Tech Events page brings together upcoming and past events connected with IT infrastructure, cybersecurity, managed services, digital transformation, and related technology topics.",
  primaryCta: "Explore Upcoming Events",
  primaryHref: "#upcoming-events",
  secondaryCta: "Talk to Our Team",
  secondaryHref: "/#contact",
  secondaryWidthClass: "lg:min-w-[331px]",
  headingMaxWidthClass: "max-w-[1026px]",
  ledeMaxWidthClass: "max-w-[952px]",
  headingLeadingClass: "lg:leading-[1.087]", // 88.1 / 81.028
};

export const EVENT_TYPES_INTRO = {
  headingStart: "What",
  headingRest: "You'll Find Here",
  lede: "The events library features upcoming events, exhibitions, conferences, webinars, speaking engagements, and selected past-event highlights. Each published event includes its verified date, location or online format, topic, and SV Tech's role.",
} as const;

/**
 * Figma 341:4332 — six blocks in a 3 x 2 grid, each with a 5.95px #FF5050
 * vertical rule 154.82px tall on its left edge. Columns at x 33.35 / 525.2 /
 * 1067.06, rows at y 10.72 / 263.19 within a 1439.82 x 400.15 group.
 */
export const EVENT_TYPES = [
  {
    title: "Upcoming Events",
    description: "Confirmed events with verified dates and details.",
  },
  {
    title: "Exhibitions",
    description: "Industry exhibitions and technology showcases.",
  },
  {
    title: "Conferences",
    description: "Sector conferences across IT and cybersecurity.",
  },
  {
    title: "Webinars",
    description: "Online sessions on relevant technology topics.",
  },
  {
    title: "Speaking Engagements",
    description: "Panels, talks, and presentations by SV Tech.",
  },
  {
    title: "Past Event Highlights",
    description: "Recaps and insights from events SV Tech has attended.",
  },
];

export const EVENTS_LIST_INTRO = {
  headingStart: "Upcoming",
  headingEnd: "Events",
  lede: "New events are added here only after SV Tech confirms participation, so this section always reflects verified announcements.",
} as const;

export const EVENTS_FILTERS = [
  "All",
  "Upcoming",
  "Past Events",
  "Webinars",
  "Speaking Engagements",
];

/**
 * ⚠️ Placeholder cards, verbatim from Figma — see gap 1 above. Unlike the Blog
 * page there is no real event data anywhere in the file to substitute, so the
 * design's own filler is rendered. Replace these with real events.
 */
export const EVENTS: BlogPost[] = [
  {
    category: "Category name",
    topic: "Upcoming",
    title:
      "Details about the event or name of the event Details about the event or",
    cover: "/images/blog/blog-cover.png",
    href: "#",
  },
  {
    category: "Category name",
    topic: "Upcoming",
    title:
      "Details about the event or name of the event Details about the event or",
    cover: "/images/blog/blog-cover.png",
    href: "#",
  },
  {
    category: "Category name",
    topic: "Upcoming",
    title:
      "Details about the event or name of the event Details about the event or",
    cover: "/images/blog/blog-cover.png",
    href: "#",
  },
];

export const EVENTS_FAQ_HEADING = {
  start: "Frequently",
  middle: "Asked Questions",
  end: "",
} as const;

/**
 * These are the questions the Case Studies frame also carries — Figma appears
 * to have pasted this block there. They belong here.
 */
export const EVENTS_FAQS: ServiceFaq[] = [
  { question: "What type of events does SV Tech participate in?", answer: "" },
  { question: "Where will SV Tech events take place?", answer: "" },
  { question: "Can businesses connect with SV Tech at events?", answer: "" },
];

export const EVENTS_CTA: ServiceCtaContent = {
  heading: "Stay Connected With SV Tech",
  lede: "Follow this page for updates about SV Tech's participation in technology and cybersecurity events. Event organizers can contact SV Tech to discuss participation.",
  // Label is the Cybersecurity CTA's, verbatim — see gap 2 above.
  buttons: [
    {
      label: "Book Your Free Security Assessment",
      href: "/#contact",
      variant: "primaryCta",
      widthClass: "lg:min-w-[380px]",
    },
  ],
  headingMaxWidthClass: "max-w-[827px]",
  ledeMaxWidthClass: "max-w-[719px]",
};

/* ------------------------------------------------------------------ */
/* Case Studies page — copy verbatim from Figma node 341:3962.         */
/*                                                                     */
/* Three design defects are reproduced as-is:                          */
/*   1. hero reads "Real-Word" (typo for "Real-World")                 */
/*   2. the flow heading reads "Form Challenge to Solution" (for       */
/*      "From")                                                        */
/*   3. all three FAQ questions are about EVENTS, not case studies —   */
/*      the Events page FAQ appears to have been pasted in             */
/*                                                                     */
/* The "Case Study Categories" cards are byte-identical to the Blog    */
/* page's "Insights Across Core Areas", so INSIGHT_AREAS is reused.    */
/* ------------------------------------------------------------------ */

export const CASE_STUDY_HERO: ServiceHeroContent = {
  eyebrow: "Enterprise-Grade Protection for Pakistan's Businesses",
  // Figma typo, kept verbatim — see defect 1 above.
  headingStart: "Real-Word",
  // Hard line break after "Technology" in Figma (341:3973)
  headingMiddle: "Technology\nSuccess",
  headingEnd: "Stories",
  lede: "Technology decisions are easier to understand when you can see how they work in real business environments. The SV Tech Case Studies section is designed to showcase selected projects, challenges, solutions, and outcomes across IT infrastructure, cybersecurity, managed services, and digital transformation.",
  primaryCta: "Start Your Project",
  primaryHref: "/#contact",
  secondaryCta: "View All Case Studies",
  secondaryHref: "#case-study-categories",
  primaryWidthClass: "lg:min-w-[278px]",
  secondaryWidthClass: "lg:min-w-[281px]",
  headingMaxWidthClass: "max-w-[1346px]",
  ledeMaxWidthClass: "max-w-[952px]",
  headingLeadingClass: "lg:leading-[1.087]", // 88.1 / 81.028
};

export const CASE_STUDY_FLOW_INTRO = {
  // Figma typo, kept verbatim — see defect 2 above.
  headingStart: "Form",
  headingMiddle: "Challenge to",
  headingEnd: "Solution",
  lede: "Each case study should explain the client's challenge, the technology environment, objectives, work performed, and resulting outcome. This gives prospective clients a practical view of how SV Tech approaches technology projects.",
} as const;

/**
 * Figma 341:4093 draws the hexagons, cards and dashed arc as one flattened
 * 1295.45 x 513 SVG, with the type positioned on top. The five steps sit on an
 * arc — 01 and 05 lowest, 03 highest — so each carries its own vertical
 * offset as a percentage of the artwork height.
 */
export const CASE_STUDY_FLOW_STEPS = [
  {
    number: "01",
    title: "The Challenge",
    body: "What the client was facing the problem, constraint, or risk that prompted the engagement.",
  },
  {
    number: "02",
    title: "The Environment",
    body: "The technology environment the work was performed within systems, scale, and context.",
  },
  {
    number: "03",
    title: "The Objectives",
    body: "What success needed to look like for the client, defined before work began.",
  },
  {
    number: "04",
    title: "The Work Performed",
    body: "The specific approach, services, and steps SV Tech carried out to meet the objectives.",
  },
  {
    number: "05",
    title: "The Outcome",
    body: "The resulting outcome reported plainly, and only where it can be verified.",
  },
];

export const CASE_STUDY_FAQ_HEADING = {
  start: "Frequently",
  middle: "Asked Questions",
  end: "",
} as const;

/**
 * ⚠️ These three questions are about EVENTS, not case studies — see defect 3.
 * Figma also contains no answers; every accordion is drawn closed.
 */
export const CASE_STUDY_FAQS: ServiceFaq[] = [
  { question: "What type of events does SV Tech participate in?", answer: "" },
  { question: "Where will SV Tech events take place?", answer: "" },
  { question: "Can businesses connect with SV Tech at events?", answer: "" },
];

export const CASE_STUDY_CTA: ServiceCtaContent = {
  heading: "Work With SV Tech",
  lede: "If your organization is facing an IT infrastructure, cybersecurity, managed services, or digital transformation challenge, speak with SV Tech about the requirements and outcomes you want to achieve.",
  buttons: [
    { label: "Talk to Our Team", href: "/#contact", variant: "primaryCta" },
    {
      label: "Call: +92 51 517 2233",
      href: "tel:+925115172233",
      variant: "ghostRed",
      // 230 x 40 here, against 276.23 on Cybersecurity/MSP
      widthClass: "lg:min-w-[230px]",
    },
  ],
  headingMaxWidthClass: "max-w-[1163px]",
  ledeMaxWidthClass: "max-w-[711px]",
};

/* ------------------------------------------------------------------ */
/* Blog page — copy verbatim from Figma node 341:4370, except the post */
/* cards: Figma fills all three with placeholder lorem ("Blog name" /  */
/* "Details about the blog or name of the blog Details about the blog  */
/* or"), so the real BLOG_POSTS above are used instead.                */
/*                                                                     */
/* ⚠️ Figma puts the shield icon on IT Infrastructure and the monitor   */
/* icon on Cybersecurity — they look swapped, but are reproduced as    */
/* drawn.                                                              */
/* ------------------------------------------------------------------ */

export const BLOG_HERO: ServiceHeroContent = {
  eyebrow: "Enterprise-Grade Protection for Pakistan's Businesses",
  headingStart: "IT,",
  headingMiddle: "Cybersecurity & Technology",
  headingEnd: "Insights",
  lede: "The SV Tech Blog provides practical insights into cybersecurity, IT infrastructure, managed services, digital transformation, cloud technology, and the technology challenges businesses face.",
  primaryCta: "Explore Our Blogs",
  primaryHref: "#blog-list",
  secondaryCta: "Talk to our Team",
  secondaryHref: "/#contact",
  secondaryWidthClass: "lg:min-w-[273px]",
  // H1 box is 715 x 177 at (506, 367) on an 88.1px line box
  headingMaxWidthClass: "max-w-[715px]",
  ledeMaxWidthClass: "max-w-[639px]",
  headingLeadingClass: "lg:leading-[1.087]", // 88.1 / 81.028
};

export const INSIGHT_AREAS: InsightArea[] = [
  {
    title: "IT Infrastructure",
    description:
      "Infrastructure management, cloud IT infrastructure, data center solutions, IT operations, and modernization.",
    icon: "🛡️",
    cta: "Explore IT Infrastructure Services",
    href: "/services/it-infrastructure",
  },
  {
    title: "Cybersecurity",
    description:
      "Security assessment, penetration testing, network security, endpoint security, monitoring, & data protection.",
    icon: "🖥️",
    cta: "Explore Cybersecurity Services",
    href: "/services/cybersecurity",
  },
  {
    title: "Managed Services",
    description:
      "Ongoing IT management, monitoring, support, managed cybersecurity, and operational improvements.",
    icon: "⚙️",
    cta: "Explore Managed Services",
    href: "/services/managed-service-provider",
  },
];

export const BLOG_APPROACH = {
  eyebrow: "Our Approach",
  headingStart: "Practical",
  headingRest: "Technology Knowledge",
  body: "SV Tech content focuses on useful explanations rather than unnecessary technical complexity. Articles address common business questions, security risks, implementation considerations, and practical steps organizations can consider.",
  image: {
    src: "/images/blog/approach-photo.png",
    alt: "An SV Tech consultant reviewing technology documentation",
  },
} as const;

export const BLOG_LIST_INTRO = {
  headingStart: "SV Tech",
  headingEnd: "Blogs",
  lede: "Practical guidance and expert perspectives to help Pakistani enterprises stay secure, scalable, and future-ready.",
} as const;

/** Figma 341:4464 — pill row. "All" is the selected state. */
export const BLOG_FILTERS = [
  "All",
  "Cybersecurity",
  "IT Infrastructure",
  "Managed Services",
];

export const BLOG_FAQ_HEADING = {
  start: "Frequently",
  middle: "Asked Questions",
  end: "",
} as const;

/** ⚠️ Figma contains the three questions only — every accordion is drawn closed. */
export const BLOG_FAQS: ServiceFaq[] = [
  { question: "What topics does the SV Tech Blog cover?", answer: "" },
  { question: "Is the blog for technical readers only?", answer: "" },
  { question: "How often should SV Tech publish blogs?", answer: "" },
];

export const BLOG_CTA: ServiceCtaContent = {
  heading: "Have a Question We Should Cover?",
  lede: "Share your question or area of interest, and it could become a future SV Tech article.",
  buttons: [
    { label: "Suggest a Topic", href: "/#contact", variant: "primaryCta" },
  ],
  headingMaxWidthClass: "max-w-[583px]",
  ledeMaxWidthClass: "max-w-[552px]",
};

/* ------------------------------------------------------------------ */
/* Managed Service Provider page — copy verbatim from Figma 425:4124.  */
/*                                                                     */
/* Two design defects are reproduced as-is per sign-off:               */
/*   1. the closing CTA is the Cybersecurity page's CTA word for word, */
/*      so an MSP page closes by talking about cybersecurity           */
/*   2. process step 01's title carries a leading space                */
/* ------------------------------------------------------------------ */

export const MSP_HERO: ServiceHeroContent = {
  eyebrow: "Enterprise-Grade Protection for Pakistan's Businesses",
  headingStart: "Managed",
  headingMiddle:
    "Service Provider in Pakistan Outsourced IT, Security, & Support Fully",
  // "Managed" is the gradient word at both ends, with different stops.
  headingEnd: "Managed",
  lede: "SV Tech is a Managed Service Provider in Pakistan delivering outsourced IT infrastructure, cybersecurity, cloud management, and 24/7 technical support. Businesses across Pakistan rely on SV Tech to reduce downtime, control IT costs, and scale operations without building a large in-house IT team. Our managed IT services are backed by certified engineers and enterprise-grade tools.",
  primaryCta: "Get a Free IT Assessment",
  primaryHref: "#contact",
  secondaryCta: "Talk to an MSP Expert",
  secondaryHref: "/#contact",
  secondaryWidthClass: "lg:min-w-[331px]",
  // H1 box is 1279 x 246 at (199, 334) on an unusually tight 82px line box.
  headingMaxWidthClass: "max-w-[1279px]",
  ledeMaxWidthClass: "max-w-[1095px]",
  headingLeadingClass: "lg:leading-[1.012]", // 82 / 81.028
};

export const MSP_OVERVIEW: ServiceOverviewContent = {
  headingLines: ["Managed Service Provider", "Services in "],
  headingEnd: "Pakistan",
  body: "SV Tech is a full-service Managed Service Provider in Pakistan, taking ownership of IT infrastructure, security, and support for client organizations. We monitor systems around the clock, resolving issues before they cause downtime.",
  checklist: [
    "24/7 remote monitoring and management (RMM)",
    "Fully managed or co-managed IT support models",
    "Predictable monthly pricing with no hidden costs",
    "Local support teams that understand Pakistan's business environment",
  ],
  image: {
    src: "/images/managed-service-provider/overview-photo.png",
    alt: "SV Tech managed services engineers supporting a client IT environment",
  },
  // Copy at x152 (widest run 768), photo 562 wide at x1045 -> 1455 span
  containerMaxWidthClass: "max-w-[1455px]",
  gridColsClass: "lg:grid-cols-[768fr_562fr]",
  headingLeadingClass: "leading-[1.031]", // 66 / 64
  headingMaxWidthClass: "max-w-[732px]",
  bodyMaxWidthClass: "max-w-[768px]",
  bodyMarginClass: "lg:mt-[35px]",
  checklistMaxWidthClass: "max-w-[666px]",
  // 562 x 524, no border or radius, with an rgba(255,80,80,.8) wash on top.
  imageAspectClass: "aspect-[562/524]",
  imageFrameClass: "",
  imageOverlayClass: "bg-[rgba(255,80,80,0.8)] mix-blend-multiply",
};

export const MSP_SERVICES_INTRO = {
  start: "What",
  middle: "Our Managed Service Provider in Pakistan",
  end: "Covers",
  lede: "SV Tech delivers managed IT services in Pakistan across infrastructure, security, cloud, and support under one accountable partner instead of multiple vendors.",
} as const;

export const MSP_SERVICES: InfraService[] = [
  {
    title: "Remote Monitoring & Management (RMM)",
    description:
      "SV Tech continuously monitors servers, networks, and endpoints to detect issues before they affect operations. Proactive alerts and automated remediation keep systems running without disruption.",
  },
  {
    title: "Managed Cybersecurity Services",
    description:
      "SV Tech protects client environments with endpoint protection, firewall management, and 24/7 threat monitoring. Our managed security services are built to meet compliance requirements and reduce cyber risk.",
  },
  {
    title: "Cloud & Microsoft 365 Management",
    description:
      "SV Tech manages cloud workloads across AWS, Azure, and Microsoft 365, including setup, migration, backup, and ongoing optimization. Businesses get scalable cloud infrastructure without managing it in-house.",
  },
  {
    title: "Help Desk & End-User Support",
    description:
      "SV Tech provides Tier-1 to Tier-3 help desk support for troubleshooting, password resets, and software issues. Employees get fast, reliable support whenever technology problems arise.",
  },
  {
    title: "Network\nManagement",
    description:
      "SV Tech designs, secures, and manages business networks, including firewalls, VPNs, and Wi-Fi infrastructure. Stable, secure connectivity is maintained across offices and branches.",
  },
  {
    title: "Backup & Disaster Recovery",
    description:
      "SV Tech implements automated backup systems and disaster recovery plans to protect business-critical data. Rapid recovery processes minimize downtime in the event of data loss or system failure.",
  },
];

export const MSP_PROCESS_HEADING = {
  start: "How",
  middle: "SV Tech Works as Your Managed Service Provider in",
  end: "Pakistan",
} as const;

export const MSP_PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    // Leading space is in Figma — see defect 2 above.
    title: " IT Assessment &\nRisk Review",
    body: "SV Tech evaluates your current IT environment, identifies vulnerabilities, and benchmarks your systems against industry standards, at no cost or obligation.",
  },
  {
    number: "02",
    title: "Custom MSP\nPlan",
    body: "SV Tech builds a managed services plan mapped to your actual risks and business goals, prioritizing critical fixes alongside long-term IT strategy.",
  },
  {
    number: "03",
    title: "Onboarding &\nDeployment",
    body: "SV Tech deploys monitoring tools, security controls, and support systems with minimal disruption to daily operations, backed by clear documentation and staff training.",
  },
  {
    number: "04",
    title: "Ongoing Management\n& Support",
    body: "SV Tech provides continuous monitoring, 24/7 incident response, and regular performance reviews, managing your IT as an ongoing partnership rather than a one-time setup.",
  },
];

export const MSP_FAQ_HEADING = {
  start: "Managed",
  middle: "Service Provider in Pakistan; The Questions We Get Asked",
  end: "Most",
} as const;

/** ⚠️ Figma contains the six questions only — every accordion is drawn closed. */
export const MSP_FAQS: ServiceFaq[] = [
  { question: "What does a Managed Service Provider actually do?", answer: "" },
  {
    question:
      "How much does it cost to hire a Managed Service Provider in Pakistan?",
    answer: "",
  },
  { question: "Can SV Tech work alongside our existing IT staff?", answer: "" },
  {
    question: "How fast does SV Tech respond when something goes down?",
    answer: "",
  },
  {
    question:
      "Does SV Tech support cloud services like Microsoft 365 and Azure?",
    answer: "",
  },
  {
    question: "What happens if we already work with another IT provider?",
    answer: "",
  },
];

export const INFRA_CTA: ServiceCtaContent = {
  heading: "Get Reliable IT Infrastructure Services in Pakistan, Let's Talk",
  lede: "Talk to SV Tech about IT infrastructure outsourcing, cloud infrastructure, data center solutions, and ongoing support built around how your organization actually operates.",
  // Figma draws a single button here, unlike the two on About and Cybersecurity.
  buttons: [
    { label: "Get In Touch", href: "/#contact", variant: "primaryCta" },
  ],
  // H2 box is 895 x 149 at (417, 125) — two lines at the 74.2px line box.
  headingMaxWidthClass: "max-w-[895px]",
  ledeMaxWidthClass: "max-w-[721px]",
};
