import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  as?: ElementType;
  className?: string;
  /**
   * Replaces the default max-width instead of stacking with it. `cn()` is a
   * plain join, not tailwind-merge, so passing a second `max-w-*` through
   * `className` would leave both classes on the element and let CSS source
   * order pick the winner — unpredictable for two arbitrary values of the
   * same property. Sections whose Figma group is a different width pass it
   * here.
   */
  maxWidthClass?: string;
  children: ReactNode;
};

/**
 * Section shell.
 *
 * The default was 1267px, taken from the navbar pill (Figma 239:1482,
 * 1267 x 85). That is the wrong reference: the pill is the narrowest element
 * on the page, while the section groups are far wider. Measured content spans,
 * all centred on the 1727px canvas:
 *
 *   Mission & Vision  1419   (239:1548 — photo x33.4 -> card end 1452.3)
 *   Timeline          1422   (239:1564 — cards x89.41 -> 1511.34)
 *   Certifications    1420   (239:1585 — 4 x 355 cells, x242 -> 1662)
 *   Principles       ~1416   (239:1665 — accent bar x155 -> block end ~1571)
 *   Threat Landscape  1422   (239:1785 — body x152 -> stat card end 1574)
 *   FAQ rows          1389   (239:1866 — x169 -> 1558)
 *
 * 1420px is the dominant figure, so it is the default: 1420 + 96px of `lg`
 * padding = 1516px. At 1267 the padding box left only 1171px of content, which
 * rendered every one of these sections 16-27% narrower than designed.
 */
export function Container({
  as: Tag = "div",
  className,
  maxWidthClass = "max-w-[1516px]",
  children,
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full",
        maxWidthClass,
        "px-6 sm:px-8 lg:px-12",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
