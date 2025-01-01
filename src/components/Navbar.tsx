"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Diamond, Menu, X } from 'lucide-react';
import { Button } from "./ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md"
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Diamond className="h-6 w-6" />
          <span className="text-xl font-semibold">Jetways</span>
        </Link>
        
        {/* Desktop Menu */}
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/" className="hover:text-gray-600 transition-colors" onClick={toggleMenu}>
              HOME
            </Link>
            <Link href="/about" className="hover:text-gray-600 transition-colors" onClick={toggleMenu}>
              ABOUT
            </Link>
            <Link href="/blog" className="hover:text-gray-600 transition-colors" onClick={toggleMenu}>
              BLOG
            </Link>
            <Link href="/locations" className="hover:text-gray-600 transition-colors" onClick={toggleMenu}>
              LOCATIONS
            </Link>
            <Button variant="default" className="bg-black text-white w-full" onClick={toggleMenu}>
              Login
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

