// src/components/Footer.jsx
"use client";

export default function Footer() {
  return (
    <footer className="mt-10 w-full border-t border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-center">
        <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
          © {new Date().getFullYear()} Ephraim Christian B. Montero. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
