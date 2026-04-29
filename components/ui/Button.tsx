import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost" | "white-outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  outline:
    "border border-dark text-dark hover:bg-dark hover:text-white",
  ghost: "text-primary hover:bg-primary/10",
  "white-outline":
    "border border-white text-white hover:bg-white hover:text-dark",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-6 py-3 text-sm",
  md: "px-10 py-4 text-base",
  lg: "px-10 py-4 text-base sm:px-12 sm:py-5 sm:text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-display font-normal uppercase tracking-wider transition-all duration-300 cursor-pointer",
    variantStyles[variant],
    sizeStyles[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
