"use client";

import "./globals.css";
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

import { useState } from "react";
import {
  Github,
  Facebook,
  Mail,
  MapPin,
  BadgeCheck,
  BriefcaseBusiness,
} from "lucide-react";

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
    setTimeout(() => setCopied(false), 2000); // revert after 2 seconds
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 backdrop-blur-sm transition-opacity">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-zinc-900 rounded-3xl p-8 w-11/12 sm:w-96 shadow-2xl border border-zinc-200 dark:border-zinc-700 relative flex flex-col items-center text-center"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white text-lg font-bold"
            >
              ✕
            </button>

            <Mail size={40} className="text-blue-500 mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">
              Get in Touch!
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-6">
              Email me here:{" "}
              <span className="font-semibold text-blue-500">
                kristianmontero15@gmail.com
              </span>
            </p>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function Socials() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex gap-4 mt-3 sm:mt-0">
        <a
          href="https://github.com/kristian200215"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:text-black dark:hover:text-white transition transform hover:scale-110"
          title="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.facebook.com/Kristian152002"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-blue-600 hover:text-white transition transform hover:scale-110"
          title="Facebook"
        >
          <Facebook size={20} />
        </a>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-red-500 hover:text-white transition transform hover:scale-110"
          title="Message Me"
        >
          <Mail size={20} />
        </button>
      </div>

      {/* Email Modal */}
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 flex flex-col items-center px-6 py-6 transition-colors duration-500">
      {/* Header */}
      <header className="max-w-6xl w-full mb-5 flex flex-col sm:flex-row sm:justify-between items-center sm:items-start gap-4 sm:gap-0">
        {/* Left: Profile + Info */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full border-4 border-zinc-300 dark:border-zinc-700 shadow-lg"
          />
          <div className="text-center sm:text-left">
            <h1 className="mt-4 text-2xl sm:text-3xl font-bold">
              Ephraim Christian B. Montero{" "}
              <BadgeCheck size={16} className="inline text-blue-500" />
            </h1>

            <p className="flex items-center justify-center sm:justify-start text-zinc-500 dark:text-zinc-400 gap-1">
              <MapPin size={16} />
              Tarangnan, Samar, Philippines
            </p>
            <p className="text-zinc-600 dark:text-zinc-300 text-xl">
              Software Engineer / Gamer
            </p>
          </div>
        </div>

        {/* Socials */}
        <Socials />
      </header>

      <section className="grid gap-6 sm:grid-cols-2 max-w-6xl w-full">
        {/* About + Experience Row */}
        <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="flex flex-col gap-6">
            <AboutSection />
            <TechStackCarousel />
          </div>
          <ExperienceTimeline />
        </div>
        <div className="sm:col-span-2 flex justify-center">
          <div className="w-full max-w-4xl">
            <RecentProjects />
          </div>
        </div>
        <div className="col-span-full">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
            <BeyondCoding />
            <Recommendations />
          </div>
        </div>
        <div className="col-span-full">
          <RecentCertifications />
        </div>
      </section>
      <Footer />
    </main>
  );
}
