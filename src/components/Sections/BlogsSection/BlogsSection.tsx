"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionHeading } from "@/components/ui/section-heading";
import { BlogCard } from "./BlogCard";

const travelBlogs = [
  {
    title: "Exploring the Amalfi Coast",
    description: "Discover the breathtaking cliffs, vibrant towns, and serene beaches of Italy's iconic coastline.",
    image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b"
  },
  {
    title: "Adventures in the Sahara Desert",
    description: "Uncover the mysteries of endless dunes and magical sunsets on a desert safari.",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b"
  },
  {
    title: "A Journey Through Kyoto",
    description: "Immerse yourself in the rich history and beautiful temples of Japan's cultural capital.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
  }
];

export function BlogsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <SectionHeading number="01" title="TRAVEL BLOGS" centered />
            <h2 className="text-4xl md:text-5xl mt-4 mb-6">
              Discover Inspiring Destinations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dive into captivating stories, travel tips, and breathtaking visuals from explorers around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {travelBlogs.map((blog, index) => (
              <BlogCard key={blog.title} blog={blog} index={index} inView={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
