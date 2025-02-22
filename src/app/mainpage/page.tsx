"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = Array.from({ length: 20 }, (_, i) => ({
  src: `/Images/${i + 1}${[9, 20].includes(i + 1) ? ".JPG" : ".jpeg"}`,
  description: `A timeless piece from our Lingerie Collection - ${i + 1}`,
}));

export default function MainPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="p-10 bg-gradient-to-r from-[#bebebe] dark:from-[#fc883f] dark:via-[#1d2d33] via-primary dark:to-[#fc883f] to-[#bebebe] min-h-screen">
      <h1 className="text-5xl font-bold text-center text-white mb-10">
        Lingerie Collection
      </h1>

      {/* Elegant Self-Defining Paragraph */}
      <p className="text-lg text-center text-white opacity-80 max-w-2xl mx-auto mb-10">
        Indulge in timeless elegance with our vintage-inspired lingerie
        collection. Each piece is crafted to celebrate femininity, grace, and
        sophistication, blending classic aesthetics with modern comfort. 
      </p>

      <div className="grid grid-cols md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map(({ src, description }, index) => (
          <motion.div
            key={index}
            className="relative cursor-pointer border-2 border-primary rounded-lg shadow-lg overflow-hidden p-4 bg-white/10 dark:bg-black/20 backdrop-blur-sm transition-all flex flex-col"
            whileHover={{ scale: 1.05 }} // **Subtle hover effect**
            animate={{ y: [-3, 3, -3] }} // **Floating animation**
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Image - Now truly dynamic height */}
            <div className="relative w-full rounded-lg overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={src}
                  alt={`Lingerie ${index + 1}`}
                  width={0}
                  height={0} // **Removed fixed height**
                  className="rounded-lg w-full h-[21rem] " // **Let image define height naturally**
                />
              </motion.div>
            </div>

            {/* Description */}
            <p className="mt-3 text-sm text-white text-center opacity-80">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-4">
              <motion.button
                className="py-2 px-4 bg-gradient-to-r text-white dark:text-black from-[#fc883f] to-[#1d2d33] dark:from-[#bebebe] dark:to-primary text-sm font-semibold rounded-full shadow-md transition-all hover:scale-105"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
              >
                View Details
              </motion.button>

              <motion.button
                className="py-2 px-4 bg-gradient-to-r text-white dark:text-black from-[#fc883f] to-[#1d2d33] dark:from-[#bebebe] dark:to-primary text-sm font-semibold rounded-full shadow-md transition-all hover:scale-105"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
              >
                Shop Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-lg z-50"
          onClick={() => setSelectedImage(null)}
        >
          <Image
            src={selectedImage}
            alt="Selected"
            width={800}
            height={1000}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
