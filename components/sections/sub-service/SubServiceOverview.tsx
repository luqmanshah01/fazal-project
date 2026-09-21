import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

/**
 * "What We Do" band — Figma node 341:4539, section 2.
 *
 * Copy left, photo right. Differs from the service-page ServiceOverview in
 * three ways, so it is its own component: there is an eyebrow pill, the
 * heading is SOLID #FF5050 rather than black with one gradient word, and the
 * photo carries no red border or shadow — just a rounded crop.
 *
 * ⚠️ BUILT FROM A SCREENSHOT — every geometric value is ESTIMATED.
 * See ESTIMATED-VALUES.md.
 */
export function SubServiceOverview({
  eyebrow,
  heading,
  body,
  checklist,
  image,
}: {
  eyebrow: string;
  heading: string;
  body: string;
  checklist: string[];
  image: { src: string; alt: string };
}) {
  return (
    // Figma 341:4585 fills this section #F9F9F9, not white — confirmed from
    // the API, not the screenshot (the two are visually indistinguishable).
    <section id="what-we-do" className="w-full bg-surface-soft py-16 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1340px] grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:gap-20 lg:px-12">
        <div>
          <Reveal>
            {/* ESTIMATED: pale pink pill, ~13px type */}
            <span className="inline-flex items-center rounded-full bg-step-ring-outer px-4 py-1.5 text-[13px] font-normal tracking-tight text-ink-500">
              {eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            {/*
              Heading is solid #FF5050 here, not the black-plus-gradient-word
              treatment used on the service pages.
              ESTIMATED: ~44px on a tight line box.
            */}
            <h2 className="mt-6 whitespace-pre-line font-sans text-[clamp(1.75rem,2.9vw,44px)] font-extrabold leading-[1.15] tracking-tight text-brand-red">
              {heading}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[620px] text-base leading-relaxed text-ink-muted-70 lg:text-[17px]">
              {body}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-8 space-y-2">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-base leading-relaxed text-ink-muted-70 lg:text-[17px]"
                >
                  <span aria-hidden="true" className="text-brand-red">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          {/* Asset is 562 x 733, so the frame matches it exactly and the photo
              is never cropped. ESTIMATED: ~20px radius, no border or shadow. */}
          <div className="relative mx-auto aspect-[562/733] w-full max-w-[562px] overflow-hidden rounded-[20px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1023px) 100vw, 562px"
              className="object-cover object-center"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
