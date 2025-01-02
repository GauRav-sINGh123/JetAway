"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const destinations = [
  {
    name: "Santorini",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e"
  },
  {
    name: "Kyoto",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e"
  },
  {
    name: "Machu Picchu",
    country: "Peru",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1"
  },
  {
    name: "Amalfi Coast",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e"
  }
];

interface DestinationGridProps {
  inView: boolean;
}

export function DestinationGrid({ inView }: DestinationGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {destinations.map((destination, index) => (
        <motion.div
          key={destination.name}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group cursor-pointer relative h-[400px] overflow-hidden rounded-lg"
        >
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover transition-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-semibold">{destination.name}</h3>
            <p className="text-white/80">{destination.country}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}