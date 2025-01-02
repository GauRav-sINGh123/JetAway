"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeaturedGrid } from "./FeaturedGrid";

export function FeaturedPosts() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionHeading number="01" title="FEATURED STORIES" centered />
          <h2 className="text-4xl md:text-5xl mt-4 mb-6">Latest Adventures</h2>
        </div>
        <FeaturedGrid inView={inView} />
      </div>
    </section>
  );
}