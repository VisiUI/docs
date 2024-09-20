"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, Linkedin, ArrowRight } from "lucide-react";

type FooterProps = {
  companyName: string;
  description: string;
  links: { name: string; url: string }[];
  contact: {
    address: string;
    email: string;
    phone: string;
  };
  socialLinks: { platform: string; url: string }[];
  subscriptionPlaceholder: string;
  subscribeButtonText: string;
  copyrightText: string;
};

export default function Footer({
  companyName,
  description,
  links,
  contact,
  socialLinks,
  subscriptionPlaceholder,
  subscribeButtonText,
  copyrightText,
}: FooterProps) {
  const icons = {
    Instagram: Instagram,
    Twitter: Twitter,
    Facebook: Facebook,
    Linkedin: Linkedin,
  };

  return (
    <footer className="bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 text-white p-6 sm:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white">{companyName}</h2>
            <p className="text-xs sm:text-sm opacity-75">{description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3"
          >
            <h3 className="text-base sm:text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-1 text-white">
              {links.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href={link.url} className="text-xs sm:text-sm hover:text-yellow-300 transition-colors duration-200 flex items-center text-white no-underline">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-3"
          >
            <h3 className="text-base sm:text-lg font-semibold text-white">Contact Us</h3>
            <p className="text-xs sm:text-sm">{contact.address}</p>
            <p className="text-xs sm:text-sm">{contact.email}</p>
            <p className="text-xs sm:text-sm">{contact.phone}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-y-3 flex flex-col items-center mb-8"
        >
          <h3 className="text-base sm:text-lg font-semibold text-white">Stay Connected</h3>
          <div className="flex space-x-3 ">
            {socialLinks.map(({ platform, url }, index) => {
              const IconComponent = icons[platform as keyof typeof icons];
              return (
                <motion.a
                  key={index}
                  href={url}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white bg-opacity-20 p-1.5 sm:p-2 rounded-full hover:bg-opacity-30 transition-all duration-200"
                >
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </motion.a>
              );
            })}
          </div>

          <form className="mt-3 w-full max-w-md">
            <div className="flex overflow-hidden rounded-md">
              <input
                type="email"
                placeholder={subscriptionPlaceholder}
                className="bg-white bg-opacity-20 text-white placeholder-gray-300 px-3 py-1 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-xs sm:text-sm flex-grow"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-purple-900 px-3 py-1 sm:px-4 sm:py-2 font-semibold hover:bg-yellow-300 transition-colors duration-200 text-xs sm:text-sm"
              >
                {subscribeButtonText}
              </motion.button>
            </div>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="pt-6 border-t border-white border-opacity-20 text-center"
        >
          <p className="text-xs sm:text-sm opacity-75">{copyrightText}</p>
        </motion.div>
      </div>
    </footer>
  );
}
