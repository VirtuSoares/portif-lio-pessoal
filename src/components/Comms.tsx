"use client";

import { FormEvent, useState } from "react";
import { Check, GitBranch, Link as LinkedIcon, Mail, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Comms() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <section id="comms" className="scroll-mt-16 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Comms // Open channel" title="Vamos conversar" description="Aberto a oportunidades, projetos e novas conexões." />
        <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
          <div className="space-y-3">
            <a href="https://github.com/VirtuSoares" target="_blank" rel="noreferrer" className="comm-link">
              <GitBranch size={18} /><span><small>GITHUB</small>github.com/VirtuSoares</span>
            </a>
            <a href="https://www.linkedin.com/in/victor-santos-0621a3291/" target="_blank" rel="noreferrer" className="comm-link">
              <LinkedIcon size={18} /><span><small>LINKEDIN</small>LinkedIn Profile</span>
            </a>
            <a href="mailto:victorhugosoares@example.com" className="comm-link">
              <Mail size={18} /><span><small>E-MAIL</small>Enviar mensagem</span>
            </a>
          </div>
          <form onSubmit={handleSubmit} className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="field-label">Nome<input required name="name" className="field-input" placeholder="Seu nome" /></label>
              <label className="field-label">E-mail<input required type="email" name="email" className="field-input" placeholder="voce@email.com" /></label>
            </div>
            <label className="field-label mt-4">Mensagem<textarea required name="message" rows={5} className="field-input resize-none" placeholder="Digite sua mensagem..." /></label>
            <div className="mt-5 flex items-center justify-between">
              {sent ? (
                <span className="flex items-center gap-2 font-mono text-xs text-emerald-400"><Check size={14} />Mensagem enviada</span>
              ) : <span />}
              <button type="submit" className="button-primary">
                <Send size={16} />
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
