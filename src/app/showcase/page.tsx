import Link from "next/link";
import { ArrowUpLeft, Home } from "lucide-react";
import ShowcaseCarousel from "../components/ShowcaseCarousel";

export default function ShowcasePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-50 px-4 py-6 text-zinc-900 transition-colors dark:bg-zinc-950 dark:text-zinc-100 sm:px-8 sm:py-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-200/50 via-zinc-50 to-transparent dark:from-blue-950/40 dark:via-zinc-950 dark:to-transparent"
      />

      <div className="relative mx-auto max-w-7xl">
        <header className="mb-7 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-sm font-semibold transition hover:border-blue-400 hover:text-blue-600 dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:text-blue-400"
          >
            <Home size={16} />
            <span>Home</span>
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
          >
            <ArrowUpLeft size={16} />
            Project details
          </Link>
        </header>

        <ShowcaseCarousel />
      </div>
    </main>
  );
}
