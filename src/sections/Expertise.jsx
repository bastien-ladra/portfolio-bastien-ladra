import { Cloud, Code2, Layers3, ShieldCheck } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { expertise } from "../data/content";

const icons = [ShieldCheck, Cloud, Layers3, Code2];

export default function Expertise() {
  return (
    <section id="expertise" className="section-block border-y border-white/5 bg-white/[0.015]">
      <div className="site-shell">
        <SectionHeading
          eyebrow="Expertise"
          title="What I can bring to an engineering team."
          description="A practical mix of secure delivery, cloud security, software supply-chain controls and infrastructure automation."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {expertise.map((group, index) => {
            const Icon = icons[index];
            return (
              <article key={group.title} className="panel p-6 sm:p-7">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/5 text-cyan-300">
                  <Icon size={21} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-slate-100">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{group.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tech-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
