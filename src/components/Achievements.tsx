"use client";

import { motion } from "framer-motion";
import { GraduationCap, Medal, Trophy } from "lucide-react";
import { achievements } from "@/data/portfolioData";
import SectionHeading from "./SectionHeading";

export default function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-16 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Achievements // Trophy room" title="Conquistas desbloqueadas" description="Formação acadêmica e certificações que ampliam meu arsenal." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.article
              key={achievement.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex gap-4 rounded-xl border border-white/[0.07] bg-gradient-to-br from-white/[0.035] to-transparent p-5"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-amber-400/20 bg-amber-400/[0.07] text-amber-300">
                {achievement.type === "formação" ? <GraduationCap size={21} /> : index % 2 ? <Medal size={21} /> : <Trophy size={21} />}
              </span>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-violet-400">{achievement.type} desbloqueada</p>
                <h3 className="mt-2 text-sm font-bold leading-5 text-white">{achievement.title}</h3>
                <p className="mt-2 text-xs text-zinc-500">{achievement.institution} • {achievement.year}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
