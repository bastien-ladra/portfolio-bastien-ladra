import Navbar from "../components/Navbar";
import Contact from "../sections/Contact";
import Credentials from "../sections/Credentials";
import Experience from "../sections/Experience";
import Expertise from "../sections/Expertise";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Research from "../sections/Research";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
        <Experience />
        <Expertise />
        <Credentials />
        <Research />
      </main>
      <Contact />
    </div>
  );
}
