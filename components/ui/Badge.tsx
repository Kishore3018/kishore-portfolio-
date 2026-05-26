"use client";

import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "accent" | "success";
  size?: "sm" | "md";
  children: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "primary", size = "sm", className = "", ...props }, ref) => {
    const variantStyles = {
      primary: "bg-primary/20 text-primary border border-primary/30",
      secondary: "bg-dark-tertiary text-gray-300 border border-dark-tertiary",
      accent: "bg-accent/20 text-accent border border-accent/30",
      success: "bg-green-500/20 text-green-400 border border-green-500/30",
    };

    const sizeStyles = {
      sm: "px-2.5 py-1 text-xs",
      md: "px-3 py-1.5 text-sm",
    };

    return (
      <span
        ref={ref}
        className={`
          inline-block font-medium rounded-full
          ${variantStyles[variant]} ${sizeStyles[size]} ${className}
        `}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";
