"use client";

import { motion } from "framer-motion";
import { BookOpen, Gamepad2, HeartPulse, Popcorn } from "lucide-react";
import { hobbies } from "@/data/portfolioData";
import SectionHeading from "./SectionHeading";

const icons = [Gamepad2, HeartPulse, BookOpen, Popcorn];

export default function Hobbies() {
  return (
    <section id="hobbies" className="scroll-mt-16 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Side Quests // Inventory" title="Fora da tela" description="Interesses que dão contexto ao meu gameplay fora do código." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hobbies.map((hobby, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={hobby.title}
                whileHover={{ y: -6, borderColor: "rgba(168,85,247,.5)" }}
                className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-6 transition"
              >
                <Icon size={24} className="text-violet-400" />
                <h3 className="mt-5 text-base font-bold text-white">{hobby.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-500">{hobby.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
