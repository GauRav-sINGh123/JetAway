"use client";

interface SectionHeadingProps {
  number: string;
  title: string;
  centered?: boolean;
}

export function SectionHeading({ number, title, centered = false }: SectionHeadingProps) {
  return (
    <div className={`flex items-center gap-4 ${centered ? 'justify-center' : ''}`}>
      <span className="text-sm font-medium text-gray-400">{number}</span>
      <span className="text-sm tracking-wider">{title}</span>
    </div>
  );
}