"use client";

import { useInView } from "react-intersection-observer";
import { SectionHeading } from "@/components/ui/section-heading";
import { TipCard } from "./TipCard";
import { Compass, CreditCard, Camera, Globe } from "lucide-react";

const tips = [
  {
    icon: Compass,
    title: "Plan Your Route",
    description: "Research and plan your itinerary to make the most of your time and budget."
  },
  {
    icon: CreditCard,
    title: "Smart Budgeting",
    description: "Learn how to manage your money wisely while traveling abroad."
  },
  {
    icon: Camera,
    title: "Capture Memories",
    description: "Tips for taking better travel photos and preserving your experiences."
  },
  {
    icon: Globe,
    title: "Local Culture",
    description: "Respect and embrace local customs for a more authentic experience."
  }
];

export function TravelTipsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionHeading number="05" title="TRAVEL TIPS" centered />
          <h2 className="text-4xl md:text-5xl mt-4 mb-6">Expert Advice</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip, index) => (
            <TipCard key={tip.title} {...tip} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}