"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, PanelsTopLeft } from "lucide-react";

export default function RecentProjects() {
  const projects = [
    {
      title: "Leave Management System",
      img: "/images/leave-credits.jpg",
      desc: "A full-featured leave management system built with PHP and MySQL, designed for automated tracking and approval of employee leaves.",
    },
    {
      title: "Centralize School System",
      img: "/images/SchoolSystem.jpg",
      desc: "A dynamic web app allowing School Official to track and automate their students' information, including ID's and BMI.",
    },
    {
      title: "Employee Service Record System",
      img: "/images/ServiceRecords.png",
      desc: "A streamlined system for managing employee service records, with integrated salary tracking and modal-based editing features.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section className="w-full flex flex-col items-center justify-center py-12 px-4">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold mb-8 text-center flex items-center gap-2"
      >
        <PanelsTopLeft /> Recent Projects - Public
      </motion.h2>

      {/* Carousel */}
      <div className="relative w-full max-w-4xl flex items-center justify-center overflow-hidden">
        <div className="flex items-center justify-center w-full relative h-[20rem]">
          {projects.map((project, index) => {
            let offset = index - current;
            // Wrap around for infinite loop
            if (offset < -1) offset += projects.length;
            if (offset > 1) offset -= projects.length;

            const isCenter = offset === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{
                  opacity: isCenter ? 1 : 0.6,
                  scale: isCenter ? 1 : 0.85,
                  x: offset * 120, // Controls how much of the side image is visible
                  zIndex: isCenter ? 20 : 10,
                }}
                transition={{ duration: 0.6 }}
                className="absolute cursor-pointer"
                onClick={() => isCenter && setSelectedProject(project)}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className={`w-[280px] sm:w-[400px] md:w-[500px] h-64 sm:h-80 md:h-96 object-cover rounded-3xl shadow-lg`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 sm:left-0 -translate-y-1/2
             z-30 p-2
             text-zinc-700 dark:text-zinc-300
             hover:text-blue-500 transition"
        >
          <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 sm:right-0 -translate-y-1/2
             z-30 p-2
             text-zinc-700 dark:text-zinc-300
             hover:text-blue-500 transition"
        >
          <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
        </button>
      </div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-3 text-center max-w-2xl"
      >
        <h3 className="text-lg sm:text-xl font-semibold">
          {projects[current].title}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
          {projects[current].desc}
        </p>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-zinc-900 rounded-3xl p-6 max-w-3xl w-[90%] shadow-lg relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="w-full h-72 sm:h-96 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-zinc-700 dark:text-zinc-300">
                {selectedProject.desc}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
