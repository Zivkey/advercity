import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  dark = false,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {label && (
        <p
          className={cn(
            "mb-6 text-xs font-semibold uppercase tracking-[0.3em]",
            dark ? "text-white/60" : "text-primary"
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "text-4xl font-black tracking-tight sm:text-5xl",
          dark ? "text-white" : "text-dark"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mx-auto mt-6 max-w-lg text-lg",
            dark ? "text-white/60" : "text-text-secondary"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
