"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { skillCategories } from "@/data/portfolioData";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Skill Tree // Attribute points" title="Atributos do personagem" description="Especialidades distribuídas por área de atuação." />
        <div className="grid gap-5 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-white/[0.07] bg-[#0d0d10] p-6"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-lg border border-violet-500/25 bg-violet-500/10 text-violet-300">
                  <Cpu size={20} />
                </span>
                <span className="font-mono text-xs text-zinc-500">ATTR_{index + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-white">{category.title}</h3>
              <div className="mt-5 flex items-end justify-between">
                <span className="font-mono text-xs text-zinc-500">DOMÍNIO</span>
                <span className="font-mono text-2xl font-bold text-violet-300">{category.level}%</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${category.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.12 }}
                  className="h-full rounded-full bg-gradient-to-r from-violet-700 via-violet-500 to-fuchsia-400"
                />
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="rounded-md border border-white/[0.06] px-2.5 py-1.5 font-mono text-[11px] text-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
