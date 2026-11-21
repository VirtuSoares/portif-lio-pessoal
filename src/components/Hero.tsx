"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { profile } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-4 pt-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(139,92,246,.16),transparent_28%),linear-gradient(rgba(139,92,246,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.035)_1px,transparent_1px)] bg-[size:auto,32px_32px,32px_32px]" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto w-full max-w-7xl"
      >
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/5 px-3 py-1 font-mono text-xs text-violet-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
            CHARACTER ONLINE
          </div>
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.32em] text-zinc-500">
            Level 21 • Player 01
          </p>
          <h1 className="text-balance text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
            {profile.name.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="text-gradient">{profile.name.split(" ").slice(2).join(" ")}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            {profile.role}. <span className="text-zinc-200">{profile.education.join(" + ")}</span> na {profile.university}.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-zinc-500">
            <span className="flex items-center gap-2"><MapPin size={14} className="text-violet-400" />{profile.city}</span>
            <span>{profile.work}</span>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="button-primary">
              <ArrowDown size={17} />
              START / Ver Projetos
            </a>
            <a href="/Victor-Hugo-CV.pdf" download className="button-secondary">
              <Download size={17} />
              Download CV
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
