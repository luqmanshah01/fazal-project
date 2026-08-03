import { cn } from "@/lib/utils";

type TrustBadgeProps = {
  children: string;
  className?: string;
};

export function TrustBadge({ children, className }: TrustBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-3 py-1 text-[10px] font-light tracking-tight text-white",
        className,
      )}
    >
      {children}
    </span>
  );
}
