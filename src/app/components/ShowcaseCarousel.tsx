"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, GalleryHorizontalEnd } from "lucide-react";

const showcaseItems = [
  {
    title: "Bahay ES Uniform",
    category: "Graphic design · Uniform concept",
    description:
      "A custom school uniform concept for Bahay Elementary School, pairing a clean front-and-back presentation with school colors and identity.",
    image: "/images/bahay-es-uniform.jpg",
    imageAlt: "Front and back uniform concept for Bahay Elementary School",
  },
  {
    title: "Tyhan Riders Jersey",
    category: "Apparel design · Team jersey",
    description:
      "A bold blue-and-black riding jersey concept featuring custom team graphics and coordinated front-and-back styling.",
    image: "/images/qwe.jpg",
    imageAlt: "Blue Tyhan Riders long-sleeve jersey design",
  },
  {
    title: "PESO Tarangnan Uniform",
    category: "Apparel design · Public employment service",
    description:
      "A maroon-and-white uniform concept created for the Public Employment Service Office in Tarangnan.",
    image: "/images/PESO.jpg",
    imageAlt: "Maroon and white PESO Tarangnan uniform design",
  },
  {
    title: "Bonga ES Uniform",
    category: "Apparel design · School uniform",
    description:
      "A school uniform concept for Bonga Elementary School, combining its blue and yellow palette with its school identity.",
    image: "/images/BongaES.jpg",
    imageAlt: "Blue, yellow, and white Bonga Elementary School uniform design",
  },
  {
    title: "Samar Division NTS Uniform",
    category: "Apparel design · Education",
    description:
      "A maroon-and-gold uniform concept for Samar Division non-teaching staff, presented with coordinated front and back views.",
    image: "/images/SDO_NTSuniform.jpg",
    imageAlt: "Maroon and gold Samar Division NTS uniform design",
  },
  {
    title: "TNHS Alumni Batch 1993",
    category: "Apparel design · Alumni homecoming",
    description:
      "A colorful homecoming shirt concept celebrating the 1993 batch of TNHS alumni.",
    image: "/images/Alumni TNHS 1993.jpg",
    imageAlt: "Colorful TNHS Batch 1993 alumni homecoming shirt design",
  },
  {
    title: "PESO Fiesta Uniform",
    category: "Apparel design · Fiesta concept",
    description:
      "A blue-and-white PESO uniform concept for the upcoming fiesta, themed around unity, service, and progress.",
    image: "/images/Design for T-shirt.png",
    imageAlt: "Blue and white PESO Tarangnan fiesta uniform design",
  },
];

export default function ShowcaseCarousel() {
  const [current, setCurrent] = useState(0);
  const item = showcaseItems[current];

  const showSlide = (index: number) => {
    setCurrent((index + showcaseItems.length) % showcaseItems.length);
  };

  const showPrevious = () => showSlide(current - 1);
  const showNext = () => showSlide(current + 1);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current]);

  return (
    <section
      id="showcase"
      aria-labelledby="showcase-heading"
      className="scroll-mt-8"
    >
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            <GalleryHorizontalEnd size={17} />
            Selected work
          </p>
          <h2
            id="showcase-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Showcase
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
            A visual collection of custom uniform, apparel, and graphic design
            concepts. Use the arrows, thumbnails, or keyboard to browse.
          </p>
        </div>
        <p
          className="text-sm font-medium tabular-nums text-zinc-500 dark:text-zinc-400"
          aria-live="polite"
          aria-atomic="true"
        >
          {String(current + 1).padStart(2, "0")}{" "}
          <span className="mx-1 text-zinc-300 dark:text-zinc-700">/</span>{" "}
          {String(showcaseItems.length).padStart(2, "0")}
        </p>
      </div>

      <div
        className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-200 shadow-xl shadow-zinc-900/10 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/30"
        aria-roledescription="carousel"
        aria-label="Portfolio showcase"
      >
        <div className="relative h-[55vh] min-h-[360px] max-h-[760px] sm:h-[68vh]">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-zinc-100 to-zinc-300 dark:from-zinc-700 dark:via-zinc-900 dark:to-black"
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={item.image}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.015 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              role="group"
              aria-roledescription="slide"
              aria-label={`${current + 1} of ${showcaseItems.length}: ${item.title}`}
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                loading={current === 0 ? "eager" : "lazy"}
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-contain p-3 sm:p-6"
              />
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={showPrevious}
            aria-label="Show previous work"
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/50 text-white shadow-lg backdrop-blur transition hover:scale-105 hover:bg-black/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-5 sm:h-12 sm:w-12"
          >
            <ArrowLeft size={21} />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Show next work"
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/50 text-white shadow-lg backdrop-blur transition hover:scale-105 hover:bg-black/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-5 sm:h-12 sm:w-12"
          >
            <ArrowRight size={21} />
          </button>

          <div className="absolute inset-x-0 bottom-0 z-[1] bg-gradient-to-t from-black/80 via-black/35 to-transparent px-5 pb-5 pt-20 text-white sm:px-8 sm:pb-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200 sm:text-sm">
                  {item.category}
                </p>
                <h3 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
                  {item.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div
        className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4"
        aria-label="Choose a showcase item"
      >
        {showcaseItems.map((showcaseItem, index) => (
          <button
            key={showcaseItem.image}
            type="button"
            onClick={() => showSlide(index)}
            aria-label={`Show ${showcaseItem.title}`}
            aria-current={index === current ? "true" : undefined}
            className={`group overflow-hidden rounded-xl border bg-white text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-zinc-900 ${
              index === current
                ? "border-blue-500 ring-2 ring-blue-500/20"
                : "border-zinc-200 hover:border-blue-300 dark:border-zinc-800 dark:hover:border-blue-700"
            }`}
          >
            <div className="relative aspect-[16/8] bg-zinc-100 dark:bg-zinc-950">
              <Image
                src={showcaseItem.image}
                alt=""
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <span
              className={`block truncate px-3 py-2.5 text-xs font-medium sm:text-sm ${
                index === current
                  ? "text-blue-700 dark:text-blue-300"
                  : "text-zinc-600 dark:text-zinc-400"
              }`}
            >
              {showcaseItem.title}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
