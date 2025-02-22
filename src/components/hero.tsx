"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";


const images = ["/Images/01.jpg", "/Images/02.jpg"]; // Add more images if needed

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex items-center justify-center w-full h-screen px-4 md:px-8 bg-gradient-to-r from-[#bebebe] dark:from-[#fc883f] dark:via-[#1d2d33] via-stone-600 dark:to-[#fc883f] overflow-hidden">
      {/* Animated Image */}
      <motion.div
        key={currentImage}
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src={images[currentImage]}
          alt="Lingerie Model"
          width={800} // Keeps natural size
          height={900}
          quality={100}
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center dark:text-primary text-white drop-shadow-lg">
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold tracking-wider  bg-primary dark:text-primary dark:bg-black drop-shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <span className="text-stone-800 dark:text-primary">Good</span><span className="dark:text-white">Brawn</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-3xl mt-3 italic opacity-90  text-white bg-primary dark:text-white dark:bg-black drop-shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Vintage elegance, redefined.
        </motion.p>

        {/* CTA Button */}
          <motion.button
            className="mt-6 px-6 py-3 bg-primary dark:bg-black dark:text-primary text-white text-lg font-semibold rounded-full shadow-xl hover:bg-opacity-90 transition-all"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          > <span> <Link href={'/mainpage'}>Explore Collection</Link></span>
            
          </motion.button>
      </div>
    </section>
  );
}
