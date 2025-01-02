"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TipCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  inView: boolean;
}

export function TipCard({ icon: Icon, title, description, index, inView }: TipCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-sm"
    >
      <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}