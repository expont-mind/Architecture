"use client";

import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#111111] py-8 sm:py-12 px-4">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6 sm:gap-8">
        <div className="flex items-center justify-between">
          <p className="text-white font-medium text-lg sm:text-xl">
            MALINOWSKIEGO
          </p>

          <div className="flex gap-3 sm:gap-4">
            <Link href="https://www.instagram.com/" target="_blank">
              <div className="p-2 sm:p-2.5 border border-gray-300 rounded-full hover:bg-white hover:text-black transition-all duration-200 cursor-pointer">
                <Instagram
                  size={18}
                  strokeWidth={1}
                  className="sm:w-5 sm:h-5"
                />
              </div>
            </Link>
            <Link href="https://www.facebook.com/" target="_blank">
              <div className="p-2 sm:p-2.5 border border-gray-300 rounded-full hover:bg-white hover:text-black transition-all duration-200 cursor-pointer">
                <Facebook size={18} strokeWidth={1} className="sm:w-5 sm:h-5" />
              </div>
            </Link>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white opacity-50"></div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-4 md:gap-6">
          <p className="text-white text-xs sm:text-sm font-light">
            © 2025 Malinowskiego. All rights reserved.
          </p>

          <p className="text-white text-xs sm:text-sm font-light">
            Powered by <span className="font-bold">Expont Mind</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
