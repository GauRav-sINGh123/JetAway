"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Diamond } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md"
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Diamond className="h-6 w-6" />
          <span className="text-xl font-semibold">RESORT</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-gray-600 transition-colors">
            HOME
          </Link>
          <Link href="/about" className="hover:text-gray-600 transition-colors">
            ABOUT
          </Link>
          <Link href="/blog" className="hover:text-gray-600 transition-colors">
            BLOG
          </Link>
          <Link href="/locations" className="hover:text-gray-600 transition-colors">
            LOCATIONS
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="default" className="bg-black text-white">
             Login
            </Button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}