import { existsSync, readFileSync } from "node:fs";

const html = readFileSync("index.html", "utf8");
const failures = [];

const checks = [
  [/<script\s+type=["']application\/ld\+json["']>/i, "missing JSON-LD structured data"],
  [/["']@type["']\s*:\s*["']Person["']/i, "structured data must describe a Person"],
  [/Bastien Ladra/, "structured data must contain the public name"],
  [/Ingénieur DevSecOps & Cybersécurité/, "structured data must contain the recruiter-facing role"],
  [/https:\/\/github\.com\/bastien-ladra/, "GitHub profile must be present in structured data"],
  [/https:\/\/www\.linkedin\.com\/in\/bastienladra/, "LinkedIn profile must be present in structured data"],
  [/Epitech/, "education signal must be present in structured data"],
  [/Software Supply Chain Security/, "supply-chain expertise must be present in structured data"],
  [/rel=["']icon["'][^>]+favicon\.svg/i, "favicon reference is missing"],
];

for (const [pattern, message] of checks) {
  if (!pattern.test(html)) failures.push(message);
}

for (const file of ["public/favicon.svg", "public/robots.txt", "public/sitemap.xml"]) {
  if (!existsSync(file)) failures.push(`${file} is missing`);
}

if (existsSync("public/robots.txt")) {
  const robots = readFileSync("public/robots.txt", "utf8");
  if (!/Sitemap:\s+https:\/\/bastien-ladra\.github\.io\/portfolio-bastien-ladra\/sitemap\.xml/i.test(robots)) {
    failures.push("robots.txt does not advertise the canonical sitemap");
  }
}

if (existsSync("public/sitemap.xml")) {
  const sitemap = readFileSync("public/sitemap.xml", "utf8");
  for (const path of ["resume.html", "case-study-secure-api-fr.html", "case-study-secure-api.html"]) {
    if (!sitemap.includes(path)) failures.push(`sitemap.xml is missing ${path}`);
  }
}

if (failures.length) {
  console.error("Portfolio SEO checks failed:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Portfolio SEO checks passed.");
