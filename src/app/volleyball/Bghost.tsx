"use client";
import { motion } from "framer-motion";



export default function VideoSection() {
 

  return (
    <section
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/img/volley-banner.webp')" }}
    >
      {/* Overlay dark effect */}
      <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-40 left-25 leading-tight tracking-tight z-10 flex flex-col items-start justify-center  text-left text-white px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-4xl md:text-[120px] font-semibold mb-0"
                >
                    Your Volleyball Court <br /> is Here



                </motion.h2>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-4xl md:text-[120px] font-semibold mb-0"
                >
                   
                </motion.h2>
            </div>
   </section>
  );
}
