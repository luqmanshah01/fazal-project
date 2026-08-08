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
} from "@/lib/types";

// Hash targets are prefixed with "/" so they resolve from any route, not just home.
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services/cybersecurity", hasDropdown: true },
  { label: "Resources", href: "/#resources", hasDropdown: true },
  { label: "Blogs", href: "/#blog" },
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
  // Route-prefixed so they resolve from /about and /services too, not just home.
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/#blog" },
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

export const SERVICE_HERO = {
  eyebrow: "Enterprise-Grade Protection for Pakistan's Businesses",
  headingStart: "Cybersecurity",
  headingMiddle: "Services in Pakistan 360° Protection for Your",
  headingEnd: "Enterprise",
  lede: "In today's threat landscape, a cyberattack is not a matter of if it is a matter of when. SV Tech delivers a full spectrum of enterprise cybersecurity services in Pakistan, from proactive threat hunting and 24/7 SOC monitoring to penetration testing, endpoint protection, and regulatory compliance all backed by certified experts and global vendor partnerships.",
  primaryCta: "Get a Free Cybersecurity Assessment",
  secondaryCta: "See All Services",
} as const;

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

export const SERVICE_CTA = {
  heading:
    "Your Business Deserves Enterprise-Grade Cybersecurity. Let's Build It Together.",
  lede: "Talk to a certified cybersecurity consultant no jargon, no sales pressure. Just an honest assessment of your risk and a clear path forward.",
  primaryCta: "Book Your Free Security Assessment",
  secondaryCta: "Call: +92 51 517 2233",
  phoneHref: "tel:+925115172233",
} as const;
