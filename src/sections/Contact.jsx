import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/content";

export default function Contact() {
  return (
    <footer id="contact" className="section-block pb-10">
      <div className="site-shell">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.045] to-cyan-300/[0.025] p-8 sm:p-12">
          <p className="eyebrow">Contact</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                Looking for a DevSecOps or cloud security engineer?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
                I am always interested in conversations where secure delivery, cloud infrastructure and pragmatic security engineering matter.
              </p>
            </div>
            <a href={`mailto:${profile.email}`} className="button-primary whitespace-nowrap">
              Contact me <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-white/5 pt-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. Built with React.</p>
          <div className="flex items-center gap-4">
            <a href={profile.github} target="_blank" rel="noreferrer" className="footer-link" aria-label="GitHub">
              <Github size={18} aria-hidden="true" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="footer-link" aria-label="LinkedIn">
              <Linkedin size={18} aria-hidden="true" />
            </a>
            <a href={`mailto:${profile.email}`} className="footer-link" aria-label="Email">
              <Mail size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
