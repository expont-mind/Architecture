"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Loader } from "@/components/ui";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "" });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section className="py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="text-center"
          >
            <Send
              className="w-12 h-12 text-black mx-auto mb-8"
              strokeWidth={1}
            />
            <h2 className="text-4xl font-light text-black mb-4">
              Thank you for your message
            </h2>
            <p className="text-neutral-500 text-base font-light">
              We'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="w-full bg-white py-16 sm:py-24 lg:py-32 px-4"
      id="contact"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6 sm:gap-8 lg:gap-10">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-black">
          Contact Us
        </p>

        <div className="w-full h-[1px] bg-black opacity-50"></div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:gap-12">
            <motion.div
              className="flex gap-3 sm:gap-4 items-center"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25 }}
            >
              <Mail
                size={32}
                strokeWidth={1}
                color="black"
                className="flex-shrink-0 sm:w-10 sm:h-10"
              />

              <div className="flex flex-col gap-1">
                <p className="text-black font-medium text-lg sm:text-xl uppercase">
                  Email
                </p>
                <p className="text-black text-sm sm:text-base font-normal">
                  info@architecture.com
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-3 sm:gap-4 items-center"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: 0.05 }}
            >
              <Phone
                size={32}
                strokeWidth={1}
                color="black"
                className="flex-shrink-0 sm:w-10 sm:h-10"
              />

              <div className="flex flex-col gap-1">
                <p className="text-black font-medium text-lg sm:text-xl uppercase">
                  Phone
                </p>
                <p className="text-black text-sm sm:text-base font-normal">
                  (+1) 555 123 4567
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-3 sm:gap-4 items-center"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: 0.1 }}
            >
              <MapPin
                size={32}
                strokeWidth={1}
                color="black"
                className="flex-shrink-0 sm:w-10 sm:h-10"
              />

              <div className="flex flex-col gap-1">
                <p className="text-black font-medium text-lg sm:text-xl uppercase">
                  Address
                </p>
                <p className="text-black text-sm sm:text-base font-normal leading-relaxed">
                  123 Architecture Street Design City, DC 12345
                </p>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8">
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 sm:gap-8 lg:gap-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full outline-none px-0 py-3 sm:py-4 border-0 border-b border-neutral-200 focus:border-black focus:ring-0 transition-colors duration-200 bg-transparent text-black font-light text-sm sm:text-base"
                placeholder="NAME"
              />

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full outline-none px-0 py-3 sm:py-4 border-0 border-b border-neutral-200 focus:border-black focus:ring-0 transition-colors duration-200 bg-transparent text-black font-light text-sm sm:text-base"
                placeholder="EMAIL"
              />

              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full outline-none px-0 py-3 sm:py-4 border-0 border-b border-neutral-200 focus:border-black focus:ring-0 transition-colors duration-200 bg-transparent text-black font-light text-sm sm:text-base"
                placeholder="PHONE"
              />

              <div className="flex justify-start">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileTap={{ scale: 0.98 }}
                  className="bg-black text-white py-3 sm:py-4 px-8 sm:px-12 font-light text-sm uppercase tracking-wider hover:bg-neutral-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader size="sm" className="text-white" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};
