import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Contact from "../sections/Contact";
import Credentials from "../sections/Credentials";
import Experience from "../sections/Experience";
import Expertise from "../sections/Expertise";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Research from "../sections/Research";
import { portfolioContent } from "../data/content";

function getInitialLanguage() {
  const params = new URLSearchParams(window.location.search);
  const queryLanguage = params.get("lang");
  if (queryLanguage === "fr" || queryLanguage === "en") return queryLanguage;

  const storedLanguage = window.localStorage.getItem("portfolio-language");
  return storedLanguage === "en" ? "en" : "fr";
}

export default function Index() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const content = portfolioContent[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = content.copy.metaTitle;
    window.localStorage.setItem("portfolio-language", language);

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", content.copy.metaDescription);

    const url = new URL(window.location.href);
    if (language === "en") url.searchParams.set("lang", "en");
    else url.searchParams.delete("lang");
    window.history.replaceState({}, "", url);
  }, [language, content.copy.metaDescription, content.copy.metaTitle]);

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100">
      <a href="#main-content" className="skip-link">
        {content.copy.skipToContent}
      </a>
      <Navbar
        profile={content.profile}
        navItems={content.navItems}
        language={language}
        onLanguageChange={setLanguage}
        copy={content.copy}
      />
      <main id="main-content">
        <Hero
          profile={content.profile}
          recruiterSignals={content.recruiterSignals}
          language={language}
          copy={content.copy}
        />
        <Projects projects={content.projects} language={language} copy={content.copy.projects} />
        <Experience experiences={content.experiences} copy={content.copy.experience} />
        <Expertise expertise={content.expertise} copy={content.copy.expertise} />
        <Credentials
          credentials={content.credentials}
          currentProgram={content.currentProgram}
          languages={content.languages}
          copy={content.copy.credentials}
        />
        <Research research={content.research} copy={content.copy.research} />
      </main>
      <Contact profile={content.profile} copy={content.copy.contact} language={language} />
    </div>
  );
}
