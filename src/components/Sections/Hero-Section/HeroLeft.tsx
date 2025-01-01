"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroLeft() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full lg:w-1/2 px-4 lg:px-16 py-20 lg:py-0 flex items-center  "
    >
      <div className="max-w-2xl mb-4 md:mb-8 ">
        <h1 className="text-7xl font-playfair ">
        Explore today, <br /> embrace the journey.
        </h1>
        <p className="text-lg lg:text-xl mb-12 text-gray-600 mt-4">
        Discover breathtaking destinations, insider tips, and travel stories that ignite your wanderlust.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-black text-white hover:bg-black/90 text-sm tracking-wider">
            BROWSE MORE
          </Button>
          <Button size="lg" variant="outline" className="text-sm tracking-wider">
            CONTACT
          </Button>
        </div>
      </div>
    </motion.div>
  );
}