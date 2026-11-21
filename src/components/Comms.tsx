import { GitBranch, Link as LinkedIcon, Mail } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Comms() {
  return (
    <section id="comms" className="scroll-mt-16 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center [&>p:last-child]:mx-auto">
          <SectionHeading eyebrow="Comms // Open channel" title="Vamos conversar" description="Aberto a oportunidades, projetos e novas conexões." />
        </div>
        <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-3">
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
      </div>
    </section>
  );
}
