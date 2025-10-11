"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

export default function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-[650px] mx-auto my-6 p-4 sm:p-6
                 rounded-3xl bg-white/60 dark:bg-zinc-800/50 
                 backdrop-blur-md shadow-md border border-zinc-300 dark:border-zinc-700
                 flex flex-col transition-colors duration-500"
    >
      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-2 text-zinc-900 dark:text-white">
        <BriefcaseBusiness className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
        About
      </h2>

      {/* Content */}
      <div className="space-y-3 sm:space-y-4 text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
        <p>
          I am an IT Graduate and a CSC professional licensure passer with over
          2 years of coding experience. Throughout this time, I’ve developed
          various systems for our local LGU, gaining hands-on experience in
          building functional and user-friendly applications.
        </p>

        <p>
          In addition to professional projects, I have also worked on personal
          coding projects that allowed me to explore new technologies and expand
          my skill set. I enjoy solving problems through programming and
          creating systems that make processes easier and more efficient.
        </p>

        <p>
          Outside of coding, I have a passion for cooking and exploring the IT
          world. I also love designing creative visuals, including posters,
          videos, and photo edits, combining both technical and artistic skills
          in my work.
        </p>
      </div>
    </motion.section>
  );
}
