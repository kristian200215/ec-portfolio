"use client";

import { motion } from "framer-motion";
import { Code2, MessageCircle } from "lucide-react";

export default function BeyondAndRecommendations() {
  return (
    <section className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-6 my-8">
      {/* Beyond Coding Card (Wider on left) */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="p-6 rounded-3xl 
                   bg-white/10 dark:bg-zinc-800/50 
                   backdrop-blur-md shadow-md border border-zinc-700/30 
                   hover:shadow-zinc-500/30 transition-colors"
      >
        <h2 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold mb-3 text-zinc-900 dark:text-white">
          <Code2 className="text-blue-500" size={22} />
          Beyond Coding
        </h2>
        <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
          Outside of programming, I enjoy exploring creative pursuits such as
          photography, design, and content creation. I also help manage our
          family’s small beach resort — Panapucan Waas — where I blend tech
          solutions with real-world management.
        </p>
      </motion.div>

      {/* Recommendations Card (Narrower on right) */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="p-6 rounded-3xl 
                   bg-white/10 dark:bg-zinc-800/50 
                   backdrop-blur-md shadow-md border border-zinc-700/30 
                   hover:shadow-zinc-500/30 transition-colors"
      >
        <h2 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold mb-3 text-zinc-900 dark:text-white">
          <MessageCircle className="text-green-500" size={22} />
          Recommendations
        </h2>
        <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed italic">
          “Kristian consistently delivers high-quality work with efficiency and
          professionalism. His ability to adapt and learn new technologies is
          impressive — a reliable teammate and a great problem solver.”
        </p>
        <p className="mt-3 text-zinc-500 dark:text-zinc-400 text-sm">
          — Former Project Collaborator
        </p>
      </motion.div>
    </section>
  );
}
