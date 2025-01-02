"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const featuredPosts = [
  {
    title: "Hidden Gems of Bali",
    excerpt: "Discover secret waterfalls and ancient temples off the tourist trail",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    category: "Adventure"
  },
  {
    title: "Tokyo After Dark",
    excerpt: "Exploring the vibrant nightlife and food scene of Japan's capital",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    category: "City Life"
  },
  {
    title: "Patagonian Dreams",
    excerpt: "A journey through South America's most stunning landscapes",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    category: "Nature"
  }
];

interface FeaturedGridProps {
  inView: boolean;
}

export function FeaturedGrid({ inView }: FeaturedGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {featuredPosts.map((post, index) => (
        <motion.div
          key={post.title}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group cursor-pointer"
        >
          <div className="relative h-[300px] mb-4">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover rounded-lg transition-transform group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-sm">
              {post.category}
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <Button variant="link" className="p-0 h-auto font-semibold">
            Read More →
          </Button>
        </motion.div>
      ))}
    </div>
  );
}