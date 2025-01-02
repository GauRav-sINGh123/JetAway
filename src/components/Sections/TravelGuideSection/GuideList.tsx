"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";

const guides = [
  {
    title: "Ultimate Guide to Southeast Asia",
    duration: "2 weeks",
    location: "Multiple Countries",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b"
  },
  {
    title: "Europe by Train",
    duration: "3 weeks",
    location: "Europe",
    image: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd"
  },
  {
    title: "Iceland Road Trip",
    duration: "10 days",
    location: "Iceland",
    image: "https://images.unsplash.com/photo-1520681363578-a9da93c7b8b7"
  }
];

interface GuidesListProps {
  inView: boolean;
}

export function GuidesList({ inView }: GuidesListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {guides.map((guide, index) => (
        <motion.div
          key={guide.title}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group cursor-pointer"
        >
          <div className="relative h-[250px] mb-4">
            <Image
              src={guide.image}
              alt={guide.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{guide.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{guide.location}</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-black font-medium group-hover:gap-2 transition-all">
            <span>Read Guide</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}