"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  PanelsTopLeft,
  X,
} from "lucide-react";

const projects = [
  {
    title: "Leave Management System",
    img: "/images/leave-credits.jpg",
    desc: "A full-featured leave management system built with PHP and MySQL, designed for automated tracking and approval of employee leaves.",
  },
  {
    title: "Centralize School System",
    img: "/images/SchoolSystem.jpg",
    desc: "A dynamic web app allowing school officials to track and automate student information, including IDs and BMI.",
  },
  {
    title: "Employee Service Record System",
    img: "/images/ServiceRecords.png",
    desc: "A streamlined system for managing employee service records, with integrated salary tracking and modal-based editing features.",
  },
];

export default function RecentProjects() {
  const [current, setCurrent] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const project = projects[current];

  const showProject = (index) => {
    setCurrent((index + projects.length) % projects.length);
  };

  const showNext = () => showProject(current + 1);
  const showPrevious = () => showProject(current - 1);

  useEffect(() => {
    if (!selectedProject) return;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedProject]);

  return (
    <section
      aria-labelledby="projects-title"
      className="w-full px-4 py-8 sm:px-8 sm:py-10"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Selected work
            </p>
            <h2
              id="projects-title"
              className="flex items-center gap-2 text-2xl font-bold tracking-tight sm:text-3xl"
            >
              <PanelsTopLeft className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              Projects I&apos;ve built
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
              A closer look at a few systems I&apos;ve worked on. Select a
              project to see its image up close.
            </p>
          </div>
          <span className="text-sm font-medium tabular-nums text-zinc-500 dark:text-zinc-400">
            {String(current + 1).padStart(2, "0")}{" "}
            <span className="mx-1 text-zinc-300 dark:text-zinc-700">/</span>{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        <div className="grid overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900 md:grid-cols-[1.35fr_0.9fr]">
          <div className="group relative min-h-64 bg-zinc-100 dark:bg-zinc-950 sm:min-h-80 md:min-h-[22rem]">
            <AnimatePresence mode="wait">
              <motion.button
                key={project.img}
                type="button"
                aria-label={`View larger image of ${project.title}`}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.4 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedProject(project)}
                className="absolute inset-0 h-full w-full cursor-zoom-in text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500"
              >
                <Image
                  src={project.img}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                />
                <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-black/65 px-3 py-2 text-xs font-medium text-white opacity-100 backdrop-blur transition sm:opacity-0 sm:group-hover:opacity-100">
                  <Maximize2 size={14} />
                  View image
                </span>
              </motion.button>
            </AnimatePresence>

            <button
              type="button"
              onClick={showPrevious}
              aria-label="Show previous project"
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/45 text-white shadow-lg backdrop-blur transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronLeft size={21} />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Show next project"
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/45 text-white shadow-lg backdrop-blur transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronRight size={21} />
            </button>
          </div>

          <div className="flex flex-col justify-between p-5 sm:p-7">
            <div>
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
                Featured project
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                >
                  <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
                    {project.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            <button
              type="button"
              onClick={() => setSelectedProject(project)}
              className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-700 transition hover:gap-3 dark:text-blue-400"
            >
              Explore project image <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        <div
          className="mt-4 grid grid-cols-3 gap-3"
          aria-label="Choose a featured project"
        >
          {projects.map((item, index) => (
            <button
              key={item.img}
              type="button"
              onClick={() => showProject(index)}
              aria-label={`Show ${item.title}`}
              aria-current={index === current ? "true" : undefined}
              className={`group overflow-hidden rounded-xl border text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                index === current
                  ? "border-blue-500 ring-2 ring-blue-500/20"
                  : "border-zinc-200 hover:border-blue-300 dark:border-zinc-800 dark:hover:border-blue-700"
              }`}
            >
              <div className="relative aspect-[16/7] bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src={item.img}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 33vw, 300px"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <span
                className={`block truncate px-2 py-2 text-xs font-medium sm:px-3 sm:text-sm ${
                  index === current
                    ? "text-blue-700 dark:text-blue-300"
                    : "text-zinc-600 dark:text-zinc-400"
                }`}
              >
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProject.title} image`}
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 p-3 shadow-2xl sm:p-5"
              initial={{ scale: 0.96, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 12 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close project image"
                onClick={() => setSelectedProject(null)}
                className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <X size={20} />
              </button>
              <div className="relative h-[55vh] min-h-64 w-full sm:h-[70vh]">
                <Image
                  src={selectedProject.img}
                  alt={`${selectedProject.title} screenshot`}
                  fill
                  sizes="95vw"
                  className="object-contain"
                />
              </div>
              <p className="pt-3 text-sm font-semibold text-white">
                {selectedProject.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
