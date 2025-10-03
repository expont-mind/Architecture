"use client";

import {
  MapPin,
  Bus,
  School,
  ShoppingCart,
  Stethoscope,
  Pill,
  Trees,
} from "lucide-react";
import { motion } from "framer-motion";

export const Location = () => {
  const nearby = [
    {
      icon: <MapPin size={40} strokeWidth={1} opacity={0.5} />,
      label: "Warsaw Ring Road",
      distance: "3",
    },
    {
      icon: <Bus size={40} strokeWidth={1} opacity={0.5} />,
      label: "Bus Stop",
      distance: "0.4",
    },
    {
      icon: <Trees size={40} strokeWidth={1} opacity={0.5} />,
      label: "Playground",
      distance: "0.2",
    },
    {
      icon: <School size={40} strokeWidth={1} opacity={0.5} />,
      label: "Primary School",
      distance: "1.5",
    },
    {
      icon: <ShoppingCart size={40} strokeWidth={1} opacity={0.5} />,
      label: "Grocery Store",
      distance: "0.4",
    },
    {
      icon: <Stethoscope size={40} strokeWidth={1} opacity={0.5} />,
      label: "Clinic",
      distance: "0.5",
    },
    {
      icon: <Pill size={40} strokeWidth={1} opacity={0.5} />,
      label: "Pharmacy",
      distance: "0.5",
    },
    {
      icon: <Trees size={40} strokeWidth={1} opacity={0.5} />,
      label: "Woods and Lake",
      distance: "0.4",
    },
  ];

  const half = Math.ceil(nearby.length / 2);
  const firstColumn = nearby.slice(0, half);
  const secondColumn = nearby.slice(half);

  return (
    <section
      className="w-full bg-[#111111] py-16 sm:py-24 lg:py-32 px-4"
      id="location"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        <div className="w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-[600px] rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.247634!2d21.012229!3d52.229676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc66f0000001%3A0x000000000000000!2sWarsaw%20Ring%20Road!5e0!3m2!1sen!2spl!4v0000000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="block"
          ></iframe>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-6 sm:gap-8 lg:gap-10">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white">
            Location
          </p>

          <div className="w-full h-[1px] bg-white opacity-50"></div>

          <div className="w-full grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {firstColumn.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.25, delay: idx * 0.04 }}
                className="flex sm:flex-row flex-col gap-3 sm:gap-4"
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <div className="flex flex-col gap-1">
                  <p className="text-white font-medium text-lg sm:text-xl">
                    {item.label}
                  </p>
                  <p className="text-white text-sm sm:text-base font-normal">
                    <span className="font-bold text-base sm:text-lg">
                      {item.distance}
                    </span>{" "}
                    km
                  </p>
                </div>
              </motion.div>
            ))}

            {secondColumn.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.25, delay: idx * 0.04 }}
                className="flex sm:flex-row flex-col gap-3 sm:gap-4"
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <div className="flex flex-col gap-1">
                  <p className="text-white font-medium text-lg sm:text-xl">
                    {item.label}
                  </p>
                  <p className="text-white text-sm sm:text-base font-normal">
                    <span className="font-bold text-base sm:text-lg">
                      {item.distance}
                    </span>{" "}
                    km
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
