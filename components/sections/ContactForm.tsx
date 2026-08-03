"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "@iconify/react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const CONCERNS = [
  "Ransomware / Malware",
  "Data Breach Response",
  "Compliance (ISO 27001, PCI-DSS)",
  "Cloud & Network Security",
  "SOC / 24-7 Monitoring",
  "Employee Awareness Training",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrors(data.errors ?? {});
        setStatus("error");
        return;
      }
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative w-full bg-black py-16 text-white md:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="lg:pt-6">
            <Reveal>
              <p className="text-base font-medium text-brand-red md:text-lg">
                A cyberattack happens every 39 seconds, somewhere in the world
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-sans text-4xl font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
                Is Your Business Protected Against Today&apos;s Cyber Threats?
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-white/70 lg:text-lg">
                Pakistani enterprises are increasingly targeted. Don&apos;t wait
                for a breach — get a free security assessment from SV Tech&apos;s
                certified experts today.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl bg-white p-8 text-black shadow-[10px_10px_50.4px_rgba(255,80,80,0.15)] md:p-10"
              noValidate
            >
              <div className="flex flex-col gap-5">
                <Field
                  label="Full Name"
                  name="fullName"
                  placeholder="Your Name"
                  error={errors.fullName}
                />
                <Field
                  label="Company Name"
                  name="company"
                  placeholder="Your Company"
                  error={errors.company}
                />
                <Field
                  label="Business Email"
                  name="email"
                  type="email"
                  placeholder="Your@Company.com"
                  error={errors.email}
                />
                <Field
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="+92 300 0000000"
                  error={errors.phone}
                />
                <div>
                  <label className="mb-1.5 block text-sm font-normal text-black/60">
                    Biggest Security Concern
                  </label>
                  <div className="relative">
                    <select
                      name="concern"
                      defaultValue=""
                      className="w-full appearance-none rounded-md bg-ink-150 px-4 py-3.5 pr-10 text-sm text-black outline-none focus:ring-2 focus:ring-brand-red/30"
                    >
                      <option value="" disabled>
                        Select One
                      </option>
                      {CONCERNS.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    <Icon
                      icon="mdi:chevron-down"
                      className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-black/40"
                    />
                    {errors.concern ? (
                      <p className="mt-1 text-xs text-brand-red">{errors.concern}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-8 inline-flex h-14 w-full items-center justify-center rounded-md bg-brand-red text-base font-semibold text-white shadow-[inset_3.92px_4.71px_4.86px_rgba(255,255,255,0.25)] transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting"
                  ? "Submitting…"
                  : status === "success"
                    ? "Thank you — we'll be in touch."
                    : "Get My Free Security Audit"}
              </button>

              {status === "error" && !Object.keys(errors).length ? (
                <p className="mt-3 text-center text-sm text-brand-red">
                  Something went wrong — please try again.
                </p>
              ) : null}

              <p className="mt-4 text-center text-xs text-black/40">
                Your Information Will Be 100% Confidential. No Spam, Ever.
              </p>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  error?: string;
};

function Field({ label, name, type = "text", placeholder, error }: FieldProps) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-normal text-black/60">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md bg-ink-150 px-4 py-3.5 text-sm text-black placeholder:text-black/35 outline-none focus:ring-2 focus:ring-brand-red/30"
      />
      {error ? <p className="mt-1 text-xs text-brand-red">{error}</p> : null}
    </div>
  );
}
