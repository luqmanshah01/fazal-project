# Estimated values — sub-service template

**Why this file exists:** the Figma API hit a 429 rate limit on 2026‑09‑17
(retry after ~42h, Viewer/Collaborator seat tier). Node `341:4539` could not be
fetched, so the sub-service template was built from screenshots instead.

**Copy is exact** — transcribed from the screenshots.
**Geometry is not** — every value below is a visual estimate, not a measurement.

## How to clear this file

Once the Figma API is available:

```bash
grep -rn "ESTIMATED" components/sections/sub-service app/services/cybersecurity/\[slug\]
```

Then fetch node `341:4539`, replace each value with the measured one, and
delete this file.

---

## Route decision (needs confirmation)

Built at **`/services/cybersecurity/[slug]`** — e.g.
`/services/cybersecurity/endpoint-security`.

Chosen because Endpoint Security is one of the six sub-services listed on the
Cybersecurity page, and `/services/cybersecurity` already exists as a static
route. The alternative was a flat `/services/endpoint-security`. This was
raised three times and never confirmed, so the hierarchical option was taken.

---

## Known content issues in the design

| Where | Issue |
|---|---|
| Hero | Eyebrow reads "Vulnerability Assessment & Penetration Testing" but the heading reads "Endpoint Security" — two different sub-services. Reproduced as drawn. |
| Overview image | ✅ Resolved — client supplied the real 562x733 export. |
| FAQ | All four answers are empty — Figma draws every accordion closed, same as every other page in this file. |

---

## Estimated values by section

### Hero — `app/services/cybersecurity/[slug]/page.tsx`
| Value | Estimate | Note |
|---|---|---|
| `headingMaxWidthClass` | `max-w-[900px]` | H1 box width unknown |
| `ledeMaxWidthClass` | `max-w-[720px]` | |
| `headingLeadingClass` | `lg:leading-[1.1]` | Every other page measures a distinct line box here |
| `secondaryWidthClass` | `lg:min-w-[260px]` | |
| Gradient stops | reused `csHeroStart` / `blogHeroEnd` | Actual stops not measured |

### Section 2 — `SubServiceOverview.tsx`
| Value | Estimate |
|---|---|
| Container | `max-w-[1340px]`, cols `1fr / 0.8fr`, gap 80px |
| Eyebrow pill | `#FFEDED` fill, 13px type, no border |
| Heading | `clamp(1.75rem, 2.9vw, 44px)`, solid `#FF5050`, leading 1.15 |
| Body / checklist | 17px |
| Image | aspect `562/733` — matches the supplied asset exactly, not estimated. Radius 20px ESTIMATED |

### Section 3 — `SubServiceHighlights.tsx`
| Value | Estimate |
|---|---|
| Stripe texture | 1px white lines every 6px at 7% opacity |
| Red glows | 45vw wide, `blur(140px)`, 40% opacity, both edges |
| Card | radius 28px, `white/[0.04]` fill, `white/15` border |
| Icon badge | 96px white circle, 40px glyph, overlapping the card top |
| Title | `clamp(1.5rem, 2.2vw, 38px)` |
| Body | 17px, `white/75`, justified |
| Column gap | 52px |

### Section 4 — `SubServiceMatters.tsx`
| Value | Estimate |
|---|---|
| Heading | `clamp(1.75rem, 3.1vw, 48px)` |
| Lede / closing | 17px, `max-w-[860px]` / `max-w-[820px]` |
| Step circle | 88px, `#FFEDED`, 34px glyph |
| Step title / caption | 17px / 12px |
| Connector | 3px dash, 9px pitch, 35% black, `▶` arrowhead |

### Section 5 — `SubServiceReasons.tsx`
| Value | Estimate |
|---|---|
| Background | `radial-gradient(120% 90% at 50% 0%, #fff 38%, #ffe9e9 100%)` |
| Card | radius 16px, 1px `brand-red/60` border, `#FBFBFB` fill |
| Icon | 40px glyph |
| Title / body | 17px / 14px |
| Grid | 4-up at lg, 20px gap |

### Section 7 — CTA (`SUB_SERVICE_CTA` in `lib/data.ts`)
| Value | Estimate |
|---|---|
| `headingMaxWidthClass` | `max-w-[900px]` |
| Heading line break | after "Open Door." — read off the screenshot |
| Lede | none in this design; `ServiceCTA` now skips it when empty |

---

## Icons

All icons are **emoji stand-ins** (🛡️ 📱 💻 🌐 🗄️ 🧭 ⚙️ 👁️). The design uses
custom illustrated icons that could not be exported. Replace with the real
assets when the API is available.
