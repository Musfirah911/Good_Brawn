"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-stone-300 dark:bg-stone-900 py-10 dark:text-white text-stone-600 text-center">
      
      {/* Brand Name */}
      <motion.h2
        className="text-4xl font-bold tracking-wider mb-3 dark:text-primary text-stone-900"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Good<span className="text-primary dark:text-white">Brawn</span>
      </motion.h2>

      {/* Navigation Links */}
      <nav className="flex justify-center space-x-6 text-lg font-semibold opacity-80">
        <Link href="/" className="hover:text-primary transition-all">Home</Link>
        <Link href="/mainpage" className="hover:text-primary transition-all">Collection</Link>
        <Link href="/about" className="hover:text-primary transition-all">About</Link>
        <Link href="/contact" className="hover:text-primary transition-all">Contact</Link>
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center mt-5 space-x-4">
        <motion.a href="#" className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all"
          whileHover={{ scale: 1.1 }}
        >
          <FaInstagram size={22} />
        </motion.a>
        <motion.a href="#" className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all"
          whileHover={{ scale: 1.1 }}
        >
          <FaFacebookF size={22} />
        </motion.a>
        <motion.a href="#" className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all"
          whileHover={{ scale: 1.1 }}
        >
          <FaTwitter size={22} />
        </motion.a>
      </div>

      {/* Copyright */}
      <p className="mt-6 text-sm opacity-70">
        &copy; {new Date().getFullYear()} <span className="text-primary ">GoodBrawn </span>. All Rights Reserved.
      </p>

    </footer>
  );
}
