"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroRight() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full lg:w-1/2 h-[400px] lg:h-screen relative"
    >
      <Image
        src={"https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2074&auto=format&fit=crop"}
        alt={"Luxury resort view"}
        fill
        className="object-cover rounded-r-lg"
        priority
      />
    </motion.div>
  );
}