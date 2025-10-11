"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2 } from "lucide-react";

export default function BeyondCoding() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const loadingTimer = setTimeout(() => setIsLoading(false), 1500); // 1.5s delay
    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative p-6 rounded-3xl 
                 bg-white/10 dark:bg-zinc-800/50 
                 backdrop-blur-md shadow-md border border-zinc-700/30 
                 hover:shadow-zinc-500/30 transition-colors overflow-hidden"
    >
      <h2 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold mb-3 text-zinc-900 dark:text-white">
        <Code2 className="text-blue-500" size={22} />
        Beyond Coding
      </h2>

      <AnimatePresence mode="wait">
        {isLoading ? (
          // 🔄 Loading animation (bouncing dots)
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center h-28"
          >
            <div className="flex space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-2 h-2 bg-blue-500 rounded-full"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.6,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        ) : (
          // 🌟 Actual content fades in
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Outside of programming, I enjoy playing PC games, engaging in
              physical sports, and cycling. I also love cooking different kinds
              of dishes and continuously learning new things—especially those
              that help improve my skills.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
