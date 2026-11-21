"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const sections = [
  { id: "hero", label: "Start", level: 1 },
  { id: "projects", label: "Quests", level: 2 },
  { id: "skills", label: "Skills", level: 3 },
  { id: "achievements", label: "Awards", level: 4 },
  { id: "hobbies", label: "Inventory", level: 5 },
  { id: "comms", label: "Comms", level: 6 },
];

export default function Navbar() {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      document.documentElement.dataset.theme = savedTheme;
      window.setTimeout(() => setTheme(savedTheme), 0);
    }

    const updateStatus = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setXp(maxScroll > 0 ? Math.min((scrollTop / maxScroll) * 100, 100) : 0);

      let current = 1;
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= window.innerHeight * 0.45) {
          current = section.level;
        }
      });
      setLevel(current);
    };

    updateStatus();
    window.addEventListener("scroll", updateStatus, { passive: true });
    window.addEventListener("resize", updateStatus);
    return () => {
      window.removeEventListener("scroll", updateStatus);
      window.removeEventListener("resize", updateStatus);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-violet-500/15 bg-[#09090b]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="mr-auto flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-violet-400/40 bg-violet-500/10 font-mono text-sm font-bold text-violet-300 shadow-[0_0_18px_rgba(139,92,246,.18)]">
            VH
          </span>
          <div className="hidden sm:block">
            <p className="font-mono text-sm font-bold leading-none text-white">VIRTU<span className="text-violet-400">SOARES</span></p>
            <p className="mt-1 font-mono text-[10px] tracking-[0.18em] text-zinc-500">PLAYER STATUS</p>
          </div>
        </a>

        <div className="hidden w-44 items-center gap-3 md:flex">
          <span className="font-mono text-xs font-bold text-violet-300">LV.{level}</span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-zinc-800">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-400"
              animate={{ width: `${xp}%` }}
              transition={{ duration: 0.15 }}
            />
          </div>
          <span className="font-mono text-[10px] text-zinc-500">{Math.round(xp)}%</span>
        </div>

        <div className="hidden items-center gap-1 lg:flex">
          {sections.slice(1).map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="rounded-md px-3 py-2 font-mono text-xs text-zinc-400 transition hover:bg-violet-500/10 hover:text-violet-300"
            >
              {section.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={`Ativar tema ${theme === "dark" ? "claro" : "escuro"}`}
          title={`Ativar tema ${theme === "dark" ? "claro" : "escuro"}`}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-white/10 text-zinc-300 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-300"
        >
          {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
        </button>
      </div>
    </nav>
  );
}
