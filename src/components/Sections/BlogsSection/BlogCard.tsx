"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface BlogCardProps {
  blog: {
    title: string;
    description: string;
    image: string;
  };
  index: number;
  inView: boolean;
}

export function BlogCard({ blog, index, inView }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group cursor-pointer"
    >
      <div className="relative h-[400px] mb-4">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover rounded-lg transition-transform group-hover:scale-105"
        />
      </div>
      <h3 className="text-2xl mb-2">{blog.title}</h3>
      <p className="text-gray-600 mb-4">{blog.description}</p>
      <Button variant="outline" size="lg">
        EXPLORE
      </Button>
    </motion.div>
  );
}