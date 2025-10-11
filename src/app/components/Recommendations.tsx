"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

const recommendations = [
  {
    text: "Kristian consistently delivers high-quality work with efficiency and professionalism. His ability to adapt and learn new technologies is impressive — a reliable teammate and a great problem solver.",
    author: "— Former Project Collaborator",
  },
  {
    text: "A great communicator and always eager to help the team. His attention to detail ensures every project runs smoothly.",
    author: "— Team Leader, LGU IT Department",
  },
  {
    text: "Kristian brings creativity and technical expertise together. He can design and build functional systems that truly solve problems.",
    author: "— College Instructor",
  },
  {
    text: "Dependable, resourceful, and always ready to learn new things. Working with him is always a pleasure.",
    author: "— Co-Developer Partner",
  },
];

export default function Recommendations() {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading animation
  useEffect(() => {
    const loadingTimer = setTimeout(() => setIsLoading(false), 1500); // 1.5s loading
    return () => clearTimeout(loadingTimer);
  }, []);

  // Cycle through recommendations
  useEffect(() => {
    if (!isLoading) {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % recommendations.length);
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [isLoading]);

  const current = recommendations[index];

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
      <div className="flex flex-wrap  gap-2">
        <h2 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold mb-3 text-zinc-900 dark:text-white">
          <MessageCircle className="text-green-500" size={22} />
          Recommendations
        </h2>
        <em className="text-sm text-zinc-500 dark:text-zinc-400 not-italic">
          (AI-generated recommendations)
        </em>
      </div>

      {/* LOADING STATE */}
      <AnimatePresence mode="wait">
        {isLoading ? (
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
                  className="w-2 h-2 bg-green-500 rounded-full"
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
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed italic">
              “{current.text}”
            </p>
            <p className="mt-3 text-zinc-500 dark:text-zinc-400 text-sm">
              {current.author}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
