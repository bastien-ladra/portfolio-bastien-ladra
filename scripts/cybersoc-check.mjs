import { existsSync, readFileSync } from "node:fs";

const failures = [];

function read(path) {
  if (!existsSync(path)) {
    failures.push(`${path}: file is missing`);
    return "";
  }
  return readFileSync(path, "utf8");
}

function requireText(path, content, text, message) {
  if (!content.includes(text)) failures.push(`${path}: ${message}`);
}

const projectData = read("src/data/cyberSocProject.js");
const proofs = read("src/data/projectProofs.js");
const projectsSection = read("src/sections/Projects.jsx");
const fr = read("public/case-study-cybersoc-fr.html");
const en = read("public/case-study-cybersoc.html");
const sitemap = read("public/sitemap.xml");

requireText("src/data/cyberSocProject.js", projectData, "https://github.com/bastien-ladra/CyberSOC-AI-Lab", "public repository URL is missing");
requireText("src/data/cyberSocProject.js", projectData, "case-study-cybersoc.html", "case-study route is missing");
requireText("src/data/cyberSocProject.js", projectData, "Trois scénarios contrôlés", "French bounded outcome is missing");
requireText("src/data/cyberSocProject.js", projectData, "Three controlled scenarios", "English bounded outcome is missing");
requireText("src/data/projectProofs.js", proofs, '"CyberSOC-AI-Lab"', "CyberSOC evidence card is missing");
requireText("src/data/projectProofs.js", proofs, "≥ 90 %", "French CI coverage gate evidence is missing");
requireText("src/data/projectProofs.js", proofs, "CycloneDX + Trivy", "container/SBOM evidence is missing");
requireText("src/sections/Projects.jsx", projectsSection, "cyberSocProject", "CyberSOC is not included in selected projects");

requireText("public/case-study-cybersoc-fr.html", fr, "Ce que ce projet ne prétend pas", "French limitations section is missing");
requireText("public/case-study-cybersoc-fr.html", fr, "décision humaine", "French human-decision boundary is missing");
requireText("public/case-study-cybersoc-fr.html", fr, "PROMPT_INJECTION_ATTEMPT", "French prompt-injection evidence is missing");
requireText("public/case-study-cybersoc-fr.html", fr, "Gouvernance", "French governance evidence is missing");

requireText("public/case-study-cybersoc.html", en, "What this project does not claim", "English limitations section is missing");
requireText("public/case-study-cybersoc.html", en, "human validates", "English human-decision boundary is missing");
requireText("public/case-study-cybersoc.html", en, "PROMPT_INJECTION_ATTEMPT", "English prompt-injection evidence is missing");
requireText("public/case-study-cybersoc.html", en, "Governance", "English governance evidence is missing");

requireText("public/sitemap.xml", sitemap, "case-study-cybersoc-fr.html", "French CyberSOC case study is missing from sitemap");
requireText("public/sitemap.xml", sitemap, "case-study-cybersoc.html", "English CyberSOC case study is missing from sitemap");

for (const [path, html] of [
  ["public/case-study-cybersoc-fr.html", fr],
  ["public/case-study-cybersoc.html", en],
]) {
  if (!/<html\s+lang=["'][^"']+["']/i.test(html)) failures.push(`${path}: missing html lang`);
  if (!/<meta\s+name=["']description["']/i.test(html)) failures.push(`${path}: missing meta description`);
  if (!/<main(?:\s|>)/i.test(html)) failures.push(`${path}: missing main landmark`);
  if (!/<h1(?:\s|>)/i.test(html)) failures.push(`${path}: missing h1`);
  if (/href=["']http:\/\//i.test(html)) failures.push(`${path}: insecure external link detected`);
}

if (failures.length) {
  console.error("CyberSOC portfolio checks failed:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("CyberSOC portfolio checks passed.");
