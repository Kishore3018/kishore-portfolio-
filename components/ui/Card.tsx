"use client";

import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ hover = true, className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`
          bg-dark-secondary/50 border border-dark-tertiary/50 rounded-xl p-6
          backdrop-blur-sm transition-all duration-300
          ${hover ? "hover-lift" : ""}
          ${className}
        `}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";
