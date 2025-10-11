"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Code2, X } from "lucide-react";

const techStacks = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "PHP",
  "MySQL",
  "Next.js",
  "Node.js",
  "Firebase",
  "React",
  "Tailwind CSS",
  "Bootstrap",
  "Git",
  "GitHub",
  "Express.js",
  "Figma",
  "Vite",
  "REST API",
];

export default function TechStackCarousel() {
  const controls = useAnimation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 25,
        ease: "linear",
      },
    });
  }, [controls]);

  const handleMouseEnter = () => controls.stop();
  const handleMouseLeave = () =>
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 25,
        ease: "linear",
      },
    });

  return (
    <section className="w-full sm:w-[600px] mx-auto flex flex-col justify-center px-8 py-0 ">
      {/* Header with Icon and Button */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 tracking-tight">
            Tech Stack
          </h2>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="text-sm px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200/50 dark:hover:bg-zinc-700/40 transition-all duration-300"
        >
          View All
        </button>
      </div>

      {/* Scrolling Carousel with blurred edges */}
      <div
        className="relative overflow-hidden rounded-xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Left/Right fade effect */}
        <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-white/90 dark:from-zinc-900/90 pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white/90 dark:from-zinc-900/90 pointer-events-none z-10"></div>

        <motion.div
          className="flex gap-8 whitespace-nowrap py-2"
          animate={controls}
        >
          {techStacks.concat(techStacks).map((tech, i) => (
            <div
              key={i}
              className="flex-shrink-0 text-zinc-700 dark:text-zinc-300 text-sm sm:text-base font-medium tracking-wide"
            >
              <span
                className="px-6 py-3 rounded-full 
                            bg-white/10 dark:bg-zinc-800/60 
                            text-zinc-800 dark:text-zinc-100 
                            border border-zinc-300/30 dark:border-zinc-700/50 
                            hover:border-blue-500 hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] 
                            transition-all duration-300 font-medium backdrop-blur-sm"
              >
                {tech}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-6 w-[90%] sm:w-[500px] relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-zinc-100 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              All Tech Stacks
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {techStacks.map((tech, i) => (
                <div
                  key={i}
                  className="text-center px-3 py-2 rounded-lg border border-zinc-300/40 dark:border-zinc-700/40 bg-white/10 dark:bg-zinc-800/30 text-zinc-800 dark:text-zinc-100 text-sm hover:bg-white/20 dark:hover:bg-zinc-700/50 transition-all duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
