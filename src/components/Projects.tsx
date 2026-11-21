"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Radio } from "lucide-react";
import { projects } from "@/data/portfolioData";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Quest Log // 04 active missions" title="Projetos concluídos" description="Missões selecionadas com objetivos, stack e resultados práticos." />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-[0_20px_60px_rgba(139,92,246,.08)]"
            >
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-violet-400">{project.subtitle}</p>
                  <h3 className="mt-2 text-xl font-bold text-white">{project.title}</h3>
                </div>
                <span className="rounded border border-violet-500/20 bg-violet-500/10 px-2 py-1 font-mono text-[9px] text-violet-300">
                  {project.difficulty}
                </span>
              </div>
              <p className="min-h-24 text-sm leading-7 text-zinc-400">{project.description}</p>
              <div className="my-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded bg-zinc-900 px-2 py-1 font-mono text-[10px] text-zinc-400">{tech}</span>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-white/[0.06] pt-4">
                <span className="flex items-center gap-2 font-mono text-[10px] text-emerald-400">
                  <Radio size={12} />
                  {project.status}
                </span>
                <div className="flex gap-2">
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="icon-link"><GitBranch size={16} /></a>}
                  {project.deploy && <a href={project.deploy} target="_blank" rel="noreferrer" aria-label="Deploy" className="icon-link"><ExternalLink size={16} /></a>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
