"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945", alt: "Luxury pool" },
  { url: "https://images.unsplash.com/photo-1582719508461-905c673771fd", alt: "Resort room" },
  { url: "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf", alt: "Beach view" },
  { url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", alt: "Dining area" }
];

interface GalleryGridProps {
  inView: boolean;
}

export function GalleryGrid({ inView }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <motion.div
          key={image.url}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative h-[300px] group cursor-pointer"
        >
          <Image
            src={image.url}
            alt={image.alt}
            fill
            className="object-cover rounded-lg transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
        </motion.div>
      ))}
    </div>
  );
}