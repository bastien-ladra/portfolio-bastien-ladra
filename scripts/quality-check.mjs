import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const failures = [];

function read(path) {
  const full = join(root, path);
  if (!existsSync(full)) {
    failures.push(`${path}: file is missing`);
    return "";
  }
  return readFileSync(full, "utf8");
}

function requirePattern(path, content, pattern, message) {
  if (!pattern.test(content)) failures.push(`${path}: ${message}`);
}

function rejectPattern(path, content, pattern, message) {
  if (pattern.test(content)) failures.push(`${path}: ${message}`);
}

function checkAnchors(path, html) {
  const ids = new Set([...html.matchAll(/\sid=["']([^"']+)["']/g)].map((match) => match[1]));
  const anchors = [...html.matchAll(/href=["']#([^"']+)["']/g)].map((match) => match[1]);
  for (const target of anchors) {
    if (!ids.has(target)) failures.push(`${path}: internal anchor #${target} has no matching id`);
  }
}

function checkHtml(path, { renderedContent = true } = {}) {
  const html = read(path);
  requirePattern(path, html, /<html\s+lang=["'][^"']+["']/i, "missing html lang attribute");
  requirePattern(path, html, /<meta\s+name=["']viewport["']/i, "missing viewport metadata");
  requirePattern(path, html, /<meta\s+name=["']description["']/i, "missing meta description");
  requirePattern(path, html, /<title>[^<]+<\/title>/i, "missing document title");
  if (renderedContent) {
    requirePattern(path, html, /<main(?:\s|>)/i, "missing main landmark");
    requirePattern(path, html, /<h1(?:\s|>)/i, "missing primary heading");
    checkAnchors(path, html);
  }
  rejectPattern(path, html, /placeholder/i, "placeholder content must not be published");
  rejectPattern(path, html, /href=["']http:\/\//i, "unencrypted external link detected");
}

checkHtml("index.html", { renderedContent: false });
checkHtml("public/resume.html");
checkHtml("public/case-study-secure-api.html");
checkHtml("public/case-study-secure-api-fr.html");

const rootHtml = read("index.html");
requirePattern("index.html", rootHtml, /<html\s+lang=["']fr["']/i, "French must be the initial document language");
requirePattern("index.html", rootHtml, /hreflang=["']fr["']/i, "French hreflang is missing");
requirePattern("index.html", rootHtml, /hreflang=["']en["']/i, "English hreflang is missing");

const indexPage = read("src/pages/Index.jsx");
requirePattern("src/pages/Index.jsx", indexPage, /className=["']skip-link["']/, "missing keyboard skip link");
requirePattern("src/pages/Index.jsx", indexPage, /id=["']main-content["']/, "missing main-content skip target");
requirePattern("src/pages/Index.jsx", indexPage, /storedLanguage === ["']en["'] \? ["']en["'] : ["']fr["']/, "French must remain the default language");
requirePattern("src/pages/Index.jsx", indexPage, /portfolio-language/, "language preference must be persisted");

const navbar = read("src/components/Navbar.jsx");
requirePattern("src/components/Navbar.jsx", navbar, /\["fr", "en"\]/, "FR/EN language selector is missing");
requirePattern("src/components/Navbar.jsx", navbar, /aria-pressed/, "language selector must expose its active state");

const content = read("src/data/content.js");
requirePattern("src/data/content.js", content, /fr:\s*\{/, "French portfolio content is missing");
requirePattern("src/data/content.js", content, /en:\s*\{/, "English portfolio content is missing");
requirePattern("src/data/content.js", content, /Ingénieur DevSecOps & Cybersécurité/, "French recruiter positioning is missing");
requirePattern("src/data/content.js", content, /DevSecOps & Cybersecurity Engineer/, "English recruiter positioning is missing");
requirePattern("src/data/content.js", content, /caseStudyHref/, "flagship project must link to its case study");
requirePattern("src/data/content.js", content, /7\.2\/10/, "verified OpenSSF evidence is missing");
requirePattern(
  "src/data/content.js",
  content,
  /https:\/\/github\.com\/bastien-ladra\/secure-api-devsecops/,
  "flagship project must use the canonical repository URL",
);
rejectPattern(
  "src/data/content.js",
  content,
  /github\.com\/Bastien-Lup\/secure-api-devsecops/,
  "stale pre-transfer repository URL detected",
);

const projectCard = read("src/components/ProjectCard.jsx");
requirePattern("src/components/ProjectCard.jsx", projectCard, /copy\.caseStudy/, "localized case-study CTA is missing");
requirePattern("src/components/ProjectCard.jsx", projectCard, /copy\.challenge/, "localized project impact labels are missing");
requirePattern("src/components/ProjectCard.jsx", projectCard, /case-study-secure-api-fr|replace\(["']\.html["'],\s*["']-fr\.html["']\)/, "French case-study routing is missing");

const publicResume = read("public/resume.html");
requirePattern("public/resume.html", publicResume, /data-language=["']fr["']/, "French public resume is missing");
requirePattern("public/resume.html", publicResume, /data-language=["']en["']/, "English public resume is missing");
requirePattern("public/resume.html", publicResume, /data-switch=["']fr["']/, "resume FR switch is missing");
requirePattern("public/resume.html", publicResume, /data-switch=["']en["']/, "resume EN switch is missing");
rejectPattern("public/resume.html", publicResume, /06\s*77\s*60\s*26\s*07/, "public resume exposes a phone number");
rejectPattern("public/resume.html", publicResume, /33440|33240|Cubzac|Ambar[eè]s/i, "public resume exposes home-location details");
rejectPattern("public/resume.html", publicResume, /github\.com\/Bastien-Lup\/secure-api-devsecops/, "public resume contains a stale repository URL");

const caseStudy = read("public/case-study-secure-api.html");
requirePattern("public/case-study-secure-api.html", caseStudy, /What this project does not claim/, "case study must state limitations");
requirePattern("public/case-study-secure-api.html", caseStudy, /Research question/, "case study must include the secure-MLOps research bridge");
requirePattern(
  "public/case-study-secure-api.html",
  caseStudy,
  /https:\/\/github\.com\/bastien-ladra\/secure-api-devsecops/,
  "case study must link to the canonical source repository",
);
rejectPattern(
  "public/case-study-secure-api.html",
  caseStudy,
  /github\.com\/Bastien-Lup\/secure-api-devsecops/,
  "case study contains a stale pre-transfer repository URL",
);

const frenchCaseStudy = read("public/case-study-secure-api-fr.html");
requirePattern("public/case-study-secure-api-fr.html", frenchCaseStudy, /Ce que ce projet ne prétend pas/, "French case study must state limitations");
requirePattern("public/case-study-secure-api-fr.html", frenchCaseStudy, /Question de recherche/, "French case study must include the research bridge");
requirePattern(
  "public/case-study-secure-api-fr.html",
  frenchCaseStudy,
  /https:\/\/github\.com\/bastien-ladra\/secure-api-devsecops/,
  "French case study must link to the canonical source repository",
);

if (failures.length) {
  console.error("Portfolio quality checks failed:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Portfolio quality checks passed.");
