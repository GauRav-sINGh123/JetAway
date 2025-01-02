"use client";

import { useInView } from "react-intersection-observer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionHeading number="06" title="INSTAGRAM" centered />
          <h2 className="text-4xl md:text-5xl mt-4 mb-6">Follow Our Journey</h2>
          <Button variant="outline" size="lg" className="mb-12">
            <Instagram className="w-5 h-5 mr-2" />
            @jetwaytravel
          </Button>
        </div>
      </div>
    </section>
  );
}