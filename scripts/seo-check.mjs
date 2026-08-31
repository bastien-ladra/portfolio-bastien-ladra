import { readFileSync } from "node:fs";

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
];

for (const [pattern, message] of checks) {
  if (!pattern.test(html)) failures.push(message);
}

if (failures.length) {
  console.error("Portfolio SEO checks failed:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Portfolio SEO checks passed.");
