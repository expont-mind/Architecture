"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { smoothScrollTo } from "@/utils/smoothScroll";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSmoothScroll = (sectionId) => {
    smoothScrollTo(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-sm p-3 sm:p-4"
    >
      <nav className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-white text-base sm:text-lg font-light tracking-wider hover:opacity-80 transition-opacity cursor-pointer"
          >
            MALINOWSKIEGO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 lg:gap-8 text-white text-sm font-light">
            <button
              onClick={() => handleSmoothScroll("house")}
              className="cursor-pointer tracking-wider group"
            >
              <motion.span
                whileHover={{ y: -1 }}
                transition={{ duration: 0.15 }}
                className="inline-block hover:opacity-80"
              >
                HOUSE
              </motion.span>
            </button>
            <button
              onClick={() => handleSmoothScroll("location")}
              className="cursor-pointer tracking-wider group"
            >
              <motion.span
                whileHover={{ y: -1 }}
                transition={{ duration: 0.15 }}
                className="inline-block hover:opacity-80"
              >
                LOCATION
              </motion.span>
            </button>
            <button
              onClick={() => handleSmoothScroll("contact")}
              className="cursor-pointer tracking-wider group"
            >
              <motion.span
                whileHover={{ y: -1 }}
                transition={{ duration: 0.15 }}
                className="inline-block hover:opacity-80"
              >
                CONTACT
              </motion.span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-white hover:opacity-70 transition-opacity cursor-pointer"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-6 pt-6 border-t border-white border-opacity-20"
          >
            <div className="flex flex-col gap-6 text-white text-sm font-light">
              <button
                onClick={() => handleSmoothScroll("house")}
                className="hover:opacity-70 transition-opacity cursor-pointer tracking-wider text-left"
              >
                HOUSE
              </button>
              <button
                onClick={() => handleSmoothScroll("location")}
                className="hover:opacity-70 transition-opacity cursor-pointer tracking-wider text-left"
              >
                LOCATION
              </button>
              <button
                onClick={() => handleSmoothScroll("contact")}
                className="hover:opacity-70 transition-opacity cursor-pointer tracking-wider text-left"
              >
                CONTACT
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};
