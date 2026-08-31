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

function checkHtml(path) {
  const html = read(path);
  requirePattern(path, html, /<html\s+lang=["'][^"']+["']/i, "missing html lang attribute");
  requirePattern(path, html, /<meta\s+name=["']viewport["']/i, "missing viewport metadata");
  requirePattern(path, html, /<meta\s+name=["']description["']/i, "missing meta description");
  requirePattern(path, html, /<title>[^<]+<\/title>/i, "missing document title");
  requirePattern(path, html, /<main(?:\s|>)/i, "missing main landmark");
  requirePattern(path, html, /<h1(?:\s|>)/i, "missing primary heading");
  rejectPattern(path, html, /placeholder/i, "placeholder content must not be published");
  rejectPattern(path, html, /href=["']http:\/\//i, "unencrypted external link detected");
  checkAnchors(path, html);
}

checkHtml("index.html");
checkHtml("public/resume.html");
checkHtml("public/case-study-secure-api.html");

const indexPage = read("src/pages/Index.jsx");
requirePattern("src/pages/Index.jsx", indexPage, /className=["']skip-link["']/, "missing keyboard skip link");
requirePattern("src/pages/Index.jsx", indexPage, /id=["']main-content["']/, "missing main-content skip target");

const content = read("src/data/content.js");
requirePattern("src/data/content.js", content, /caseStudyHref/, "flagship project must link to its case study");
requirePattern("src/data/content.js", content, /7\.2\/10/, "verified OpenSSF evidence is missing");

const projectCard = read("src/components/ProjectCard.jsx");
requirePattern("src/components/ProjectCard.jsx", projectCard, /Read engineering case study/, "case-study CTA is missing");

const publicResume = read("public/resume.html");
rejectPattern("public/resume.html", publicResume, /06\s*77\s*60\s*26\s*07/, "public resume exposes a phone number");
rejectPattern("public/resume.html", publicResume, /33440|33240|Cubzac|Ambar[eè]s/i, "public resume exposes home-location details");

const caseStudy = read("public/case-study-secure-api.html");
requirePattern("public/case-study-secure-api.html", caseStudy, /What this project does not claim/, "case study must state limitations");
requirePattern("public/case-study-secure-api.html", caseStudy, /Research question/, "case study must include the secure-MLOps research bridge");

if (failures.length) {
  console.error("Portfolio quality checks failed:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Portfolio quality checks passed.");
