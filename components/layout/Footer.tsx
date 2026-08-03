import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Container } from "@/components/ui/Container";
import { FOOTER_LINKS } from "@/lib/data";

const SOCIALS = [
  { icon: "mdi:linkedin", href: "#", label: "LinkedIn" },
  { icon: "mdi:twitter", href: "#", label: "Twitter" },
  { icon: "mdi:facebook", href: "#", label: "Facebook" },
  { icon: "mdi:email-outline", href: "#", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-black text-white">
      <Container className="pt-24 pb-8 md:pt-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/images/logos/logo-footer.svg"
              alt="SV Tech"
              width={181}
              height={106}
              className="h-16 w-auto"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70 lg:text-base">
              Pakistan&apos;s trusted cybersecurity and IT solutions company —
              protecting enterprises with global-grade expertise since 2017.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-brand-red hover:border-brand-red"
                >
                  <Icon icon={s.icon} className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <FooterColumn title="Product" links={FOOTER_LINKS.product} />
          <FooterColumn title="Company" links={FOOTER_LINKS.company} />
          <FooterColumn title="Legal" links={FOOTER_LINKS.legal} />
        </div>

        <div className="mt-16 flex flex-col-reverse items-center justify-between gap-6 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">SV Tech</span>. All Rights
            Reserved.
          </p>
          <p className="text-sm text-white/60">
            Rawalpindi · Islamabad · Karachi · Lahore
          </p>
        </div>
      </Container>

      <div
        aria-hidden
        className="pointer-events-none select-none w-full overflow-hidden whitespace-nowrap text-center font-inter text-[17vw] font-bold leading-[0.85] tracking-[-0.055em]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.02) 100%)",
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
