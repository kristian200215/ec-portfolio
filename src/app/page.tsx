"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import TechStackCarousel from "./components/TechStackCarousel";
import ExperienceTimeline from "./components/ExperienceTimeline";
import AboutSection from "./components/AboutSection";
import RecentProjects from "./components/RecentProjects";
import BeyondCoding from "./components/BeyondCoding";
import Recommendations from "./components/Recommendations";
import RecentCertifications from "./components/RecentCertifications";
import Footer from "./components/Footer";
import ShowcaseCarousel from "./components/ShowcaseCarousel";

import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  Facebook,
  GalleryHorizontalEnd,
  Github,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

/* =========================
   Email Modal
========================= */
function EmailModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("kristianmontero15@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="email-modal-title"
            onClick={(event) => event.stopPropagation()}
            className="bg-white dark:bg-zinc-900 rounded-3xl p-8 w-full max-w-sm shadow-2xl border border-zinc-200 dark:border-zinc-700 relative flex flex-col items-center text-center"
          >
            <button
              onClick={onClose}
              aria-label="Close email dialog"
              className="absolute top-4 right-4 text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white text-lg font-bold"
            >
              ✕
            </button>

            <Mail size={40} className="text-blue-500 mb-4" />
            <h2
              id="email-modal-title"
              className="text-2xl font-bold mb-2 text-zinc-900 dark:text-zinc-100"
            >
              Get in Touch!
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-6">
              Email me here:{" "}
              <span className="font-semibold text-blue-500">
                kristianmontero15@gmail.com
              </span>
            </p>

            <button
              onClick={handleCopy}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow-md transition-all"
            >
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

/* =========================
   Social Links
========================= */
function Socials() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex gap-4 mt-3 sm:mt-0 flex-wrap justify-center sm:justify-start">
        <a
          href="https://github.com/kristian200215"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub profile"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:scale-110 transition"
        >
          <Github size={20} />
        </a>

        <a
          href="https://www.facebook.com/Kristian152002"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Facebook profile"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-blue-600 hover:text-white hover:scale-110 transition"
        >
          <Facebook size={20} />
        </a>

        <button
          onClick={() => setIsModalOpen(true)}
          aria-label="Show email contact options"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-red-500 hover:text-white hover:scale-110 transition"
        >
          <Mail size={20} />
        </button>
      </div>

      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

/* =========================
   Home Page
========================= */
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col items-center px-4 py-6 sm:px-6 transition-colors duration-500">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-200/50 via-zinc-50 to-transparent dark:from-blue-950/50 dark:via-zinc-950 dark:to-transparent"
      />
      <header className="relative z-10 max-w-6xl w-full mb-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500 to-cyan-300 opacity-70 blur-sm"
            />
            <Image
              src="/profile1.jpg"
              alt="Ephraim Christian B. Montero"
              width={112}
              height={112}
              priority
              className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full border-4 border-white dark:border-zinc-900 object-cover shadow-xl"
            />
          </div>

          <div className="text-center sm:text-left">
            <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-3 py-1 text-xs font-medium text-blue-700 shadow-sm dark:border-blue-900 dark:bg-zinc-900/70 dark:text-blue-300">
              <Sparkles size={14} />
              Software Engineer
            </p>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Ephraim Christian B. Montero{" "}
              <BadgeCheck size={19} className="inline text-blue-500" />
            </h1>
            <p className="mt-2 flex items-center justify-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400 sm:justify-start">
              <MapPin size={15} />
              Tarangnan, Samar, Philippines
            </p>
          </div>
        </div>
        <Socials />
      </header>

      <section className="relative z-10 w-full max-w-6xl px-1 sm:px-0 flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-zinc-200/80 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                Welcome to my portfolio
              </p>
              <h2 className="mt-3 max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                I build useful digital experiences that make work easier.
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-zinc-600 dark:text-zinc-300">
                Explore the systems, skills, and experiences behind my work in
                software development.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  Explore my work <ArrowDown size={16} />
                </a>
                <a
                  href="#showcase"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-semibold transition hover:border-blue-400 hover:text-blue-600 dark:border-zinc-700 dark:hover:text-blue-400"
                >
                  Showcase <GalleryHorizontalEnd size={16} />
                </a>
                <a
                  href="mailto:kristianmontero15@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-semibold transition hover:border-blue-400 hover:text-blue-600 dark:border-zinc-700 dark:hover:text-blue-400"
                >
                  Get in touch <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
            <AboutSection />
            <TechStackCarousel />
          </div>
          <ExperienceTimeline />
        </div>

        <div
          id="projects"
          className="scroll-mt-8 rounded-3xl border border-zinc-200/80 bg-white/60 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40"
        >
          <RecentProjects />
        </div>

        <div className="rounded-3xl border border-zinc-200/80 bg-white/60 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40 sm:p-8">
          <ShowcaseCarousel />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
          <BeyondCoding />
          <Recommendations />
        </div>

        <RecentCertifications />
      </section>

      <div className="relative z-10 w-full max-w-6xl">
        <Footer />
      </div>
    </main>
  );
}
