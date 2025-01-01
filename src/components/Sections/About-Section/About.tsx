"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <SectionHeading number="02" title="ABOUT" />
            <h2 className="text-4xl md:text-5xl mt-4 mb-6">
              Embark on journeys that inspire and transform
            </h2>
            <p className="text-gray-600 mb-8">
              Our travel blog is your gateway to explore the world’s hidden gems, iconic destinations, 
              and unforgettable experiences. From serene landscapes to bustling cities, we bring you 
              stories and guides that ignite your wanderlust and make your travels truly memorable.
            </p>
            <Button variant="outline" size="lg">
              DISCOVER MORE
            </Button>
          </div>
          <div className="relative h-[600px]">
            <Image
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
              alt="Traveler exploring a scenic mountain"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
