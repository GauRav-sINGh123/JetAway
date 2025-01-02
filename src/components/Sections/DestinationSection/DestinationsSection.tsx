"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionHeading } from "@/components/ui/section-heading";
import { DestinationGrid } from "./DestinationGrid";

export function DestinationsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionHeading number="02" title="DESTINATIONS" centered />
          <h2 className="text-4xl md:text-5xl mt-4 mb-6">Popular Places</h2>
        </div>
        <DestinationGrid inView={inView} />
      </div>
    </section>
  );
}