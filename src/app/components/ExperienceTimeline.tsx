"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

export default function ExperienceTimeline() {
  const experiences = [
    {
      title: "Mastering Skill",
      date: "2021 - 2022",
      desc: "Designing, Photo manipulation, Video Effects and Transition",
    },
    {
      title: "Capstone - BSIT",
      date: "2023-2024",
      desc: "Face Recognation In Online Voting System in Samar College.",
    },
    {
      title: "Web Dev. Projects",
      date: "2024 - 2025",
      desc: "Built PHP & React apps with MySQL.",
    },
    {
      title: "Works In LGU",
      date: "2024 - 2025",
      desc: "Position Admin Aid I.",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center py-8 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl font-bold mb-6 flex items-center gap-2"
      >
        <BriefcaseBusiness className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        Work and Experience
      </motion.h2>

      <div className="relative w-full max-w-3xl pl-8">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600" />

        {/* Experience items */}
        <div className="space-y-5">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400 border border-white/30" />

              {/* Experience card */}
              <div className="ml-6 p-5 rounded-xl bg-white/20 dark:bg-zinc-900/30 backdrop-blur-sm shadow-sm border border-transparent hover:border-blue-400 transition-all duration-300">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {exp.title}
                  </h3>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {exp.date}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
