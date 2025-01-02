"use client";

import { useInView } from "react-intersection-observer";
import { SectionHeading } from "@/components/ui/section-heading";
import { GalleryGrid } from "./GalleryGrid";

export function GallerySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionHeading number="06" title="GALLERY" centered />
          <h2 className="text-4xl md:text-5xl mt-4 mb-6">Captured Moments</h2>
        </div>
        <GalleryGrid inView={inView} />
      </div>
    </section>
  );
}