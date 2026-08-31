import { readFileSync } from "node:fs";

const navbar = readFileSync("src/components/Navbar.jsx", "utf8");
const hero = readFileSync("src/sections/Hero.jsx", "utf8");
const contact = readFileSync("src/sections/Contact.jsx", "utf8");
const failures = [];

const checks = [
  [navbar, /mailto:\$\{profile\.email\}/, "fixed navigation must expose direct email contact"],
  [navbar, /Écrire par e-mail/, "navigation must include the French email action"],
  [navbar, /Email me/, "navigation must include the English email action"],
  [navbar, /Bastien_Ladra_CV_Public_FR_2026\.pdf/, "navigation must keep the French PDF CV"],
  [navbar, /Bastien_Ladra_Resume_Public_EN_2026\.pdf/, "navigation must keep the English PDF resume"],
  [hero, /Télécharger le CV/, "hero must keep the French resume CTA"],
  [hero, /Download resume/, "hero must keep the English resume CTA"],
  [contact, /mailto:\$\{profile\.email\}/, "contact section must expose direct email contact"],
  [contact, /profile\.linkedin/, "contact section must keep LinkedIn available"],
];

for (const [content, pattern, message] of checks) {
  if (!pattern.test(content)) failures.push(message);
}

if (failures.length) {
  console.error("Recruiter conversion checks failed:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Recruiter conversion checks passed.");
