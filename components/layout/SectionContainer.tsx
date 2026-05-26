"use client";

import React from "react";

interface SectionContainerProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export const SectionContainer = ({
  id,
  children,
  className = "",
}: SectionContainerProps) => {
  return (
    <section
      id={id}
      className={`min-h-screen w-full py-20 px-4 md:px-8 lg:px-12 flex items-center justify-center ${className}`}
    >
      <div className="max-w-6xl w-full">{children}</div>
    </section>
  );
};
