"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  // Start in LIGHT mode
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-4 right-4 z-50 
                 p-3 rounded-full 
                 bg-zinc-200 dark:bg-zinc-800 
                 text-zinc-800 dark:text-zinc-200 
                 shadow-md hover:scale-110 transition-transform duration-200"
      aria-label="Toggle Theme"
    >
      {/* Show icon for the mode you will switch TO */}
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
