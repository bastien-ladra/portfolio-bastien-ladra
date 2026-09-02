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

function requireCount(path, content, pattern, minimum, message) {
  const matches = content.match(pattern) ?? [];
  if (matches.length < minimum) failures.push(`${path}: ${message}`);
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

function checkPdf(path) {
  const full = join(root, path);
  if (!existsSync(full)) {
    failures.push(`${path}: file is missing`);
    return;
  }

  const pdf = readFileSync(full);
  if (pdf.length < 8_000) failures.push(`${path}: PDF is unexpectedly small`);
  if (pdf.subarray(0, 5).toString("ascii") !== "%PDF-") failures.push(`${path}: invalid PDF signature`);
}

checkHtml("index.html", { renderedContent: false });
checkHtml("public/resume.html");
checkHtml("public/case-study-secure-api.html");
checkHtml("public/case-study-secure-api-fr.html");
checkPdf("public/Bastien_Ladra_CV_Public_FR_2026.pdf");
checkPdf("public/Bastien_Ladra_Resume_Public_EN_2026.pdf");

const rootHtml = read("index.html");
requirePattern("index.html", rootHtml, /<html\s+lang=["']fr["']/i, "French must be the initial document language");
requirePattern("index.html", rootHtml, /hreflang=["']fr["']/i, "French hreflang is missing");
requirePattern("index.html", rootHtml, /hreflang=["']en["']/i, "English hreflang is missing");

const indexPage = read("src/pages/Index.jsx");
requirePattern("src/pages/Index.jsx", indexPage, /className=["']skip-link["']/, "missing keyboard skip link");
requirePattern("src/pages/Index.jsx", indexPage, /id=["']main-content["']/, "missing main-content skip target");
requirePattern("src/pages/Index.jsx", indexPage, /storedLanguage === ["']en["'] \? ["']en["'] : ["']fr["']/, "French must remain the default language");
requirePattern("src/pages/Index.jsx", indexPage, /portfolio-language/, "language preference must be persisted");
requirePattern("src/pages/Index.jsx", indexPage, /<Experience[^>]+language=\{language\}/, "experience section must receive the active language");
requirePattern("src/pages/Index.jsx", indexPage, /<Contact[^>]+language=\{language\}/, "localized recruiter contact actions are missing");
requirePattern("src/pages/Index.jsx", indexPage, /<Research[^>]+language=\{language\}/, "localized research evidence routing is missing");

const navbar = read("src/components/Navbar.jsx");
requirePattern("src/components/Navbar.jsx", navbar, /\["fr", "en"\]/, "FR/EN language selector is missing");
requirePattern("src/components/Navbar.jsx", navbar, /aria-pressed/, "language selector must expose its active state");
requirePattern("src/components/Navbar.jsx", navbar, /Bastien_Ladra_CV_Public_FR_2026\.pdf/, "French PDF resume CTA is missing");
requirePattern("src/components/Navbar.jsx", navbar, /Bastien_Ladra_Resume_Public_EN_2026\.pdf/, "English PDF resume CTA is missing");
requirePattern("src/components/Navbar.jsx", navbar, /download=\{resumePdf\}/, "persistent resume CTA must download the localized PDF");
requirePattern("src/components/Navbar.jsx", navbar, /aria-haspopup=["']true["']/, "mobile menu trigger must expose popup semantics");
requirePattern("src/components/Navbar.jsx", navbar, /menuButtonRef/, "mobile menu must retain a trigger focus reference");
requirePattern("src/components/Navbar.jsx", navbar, /mobileNavigationRef/, "mobile menu must retain a navigation focus reference");
requirePattern("src/components/Navbar.jsx", navbar, /requestAnimationFrame\(\(\) => menuButtonRef\.current\?\.focus\(\)\)/, "Escape must restore focus to the mobile menu trigger");
requirePattern("src/components/Navbar.jsx", navbar, /querySelector\(["']a["']\)\?\.focus\(\)/, "opening the mobile menu must move focus into navigation");

const hero = read("src/sections/Hero.jsx");
requirePattern("src/sections/Hero.jsx", hero, /RecruiterProofPanel/, "hero must surface recruiter proof panel");
requirePattern("src/sections/Hero.jsx", hero, /Télécharger le CV/, "French recruiter resume CTA is missing");
requirePattern("src/sections/Hero.jsx", hero, /Download resume/, "English recruiter resume CTA is missing");
requirePattern("src/sections/Hero.jsx", hero, /download=\{resumePdf\}/, "hero resume CTA must trigger a direct PDF download");
requireCount("src/sections/Hero.jsx", hero, /target=["']_blank["']/g, 2, "expected external recruiter profile links are missing");
requireCount("src/sections/Hero.jsx", hero, /rel=["']noopener noreferrer["']/g, 2, "external hero links must prevent opener access");

const contact = read("src/sections/Contact.jsx");
requirePattern("src/sections/Contact.jsx", contact, /profile\.email/, "contact section must expose the public email address");
requirePattern("src/sections/Contact.jsx", contact, /Écrire par e-mail/, "French direct email CTA is missing");
requirePattern("src/sections/Contact.jsx", contact, /Connect on LinkedIn/, "English LinkedIn CTA is missing");
requireCount("src/sections/Contact.jsx", contact, /target=["']_blank["']/g, 3, "expected external contact links are missing");
requireCount("src/sections/Contact.jsx", contact, /rel=["']noopener noreferrer["']/g, 3, "external contact links must prevent opener access");

const experience = read("src/sections/Experience.jsx");
requirePattern("src/sections/Experience.jsx", experience, /getExperienceKind/, "experience section must use explicit classification metadata");
requirePattern("src/sections/Experience.jsx", experience, /professionalExperiences/, "professional experience must be separated explicitly");
requirePattern("src/sections/Experience.jsx", experience, /academicExperience/, "academic project must remain visible separately");
requirePattern("src/sections/Experience.jsx", experience, /Projet académique · Epitech/, "French academic-project label is missing");
requirePattern("src/sections/Experience.jsx", experience, /Academic project · Epitech/, "English academic-project label is missing");
requirePattern("src/sections/Experience.jsx", experience, /présentée séparément des expériences professionnelles/, "French employment boundary must be explicit");
requirePattern("src/sections/Experience.jsx", experience, /shown separately from professional employment/, "English employment boundary must be explicit");
rejectPattern("src/sections/Experience.jsx", experience, /toUpperCase\(\)\.includes\(["']EPITECH EIP["']\)/, "experience type must not be inferred from display text");

const experienceTaxonomy = read("src/data/experienceTaxonomy.js");
requirePattern("src/data/experienceTaxonomy.js", experienceTaxonomy, /"NEHS Digital — Projet DRIM-M": "professional"/, "NEHS Digital must be classified as professional");
requirePattern("src/data/experienceTaxonomy.js", experienceTaxonomy, /GSOI: "professional"/, "GSOI must be classified as professional");
requirePattern("src/data/experienceTaxonomy.js", experienceTaxonomy, /"ASTEK Digital Cloud Factory": "professional"/, "ASTEK must be classified as professional");
requirePattern("src/data/experienceTaxonomy.js", experienceTaxonomy, /"EPITECH EIP": "academic"/, "Epitech EIP must be classified as academic");

const recruiterProofPanel = read("src/components/RecruiterProofPanel.jsx");
requirePattern("src/components/RecruiterProofPanel.jsx", recruiterProofPanel, /Des preuves avant les buzzwords/, "French recruiter proof positioning is missing");
requirePattern("src/components/RecruiterProofPanel.jsx", recruiterProofPanel, /Evidence before buzzwords/, "English recruiter proof positioning is missing");
requirePattern("src/components/RecruiterProofPanel.jsx", recruiterProofPanel, /Production experience/, "proof panel must keep production experience visible");

const content = read("src/data/content.js");
requirePattern("src/data/content.js", content, /fr:\s*\{/, "French portfolio content is missing");
requirePattern("src/data/content.js", content, /en:\s*\{/, "English portfolio content is missing");
requirePattern("src/data/content.js", content, /Spécialiste DevSecOps & Cybersécurité/, "French recruiter positioning is missing");
requirePattern("src/data/content.js", content, /DevSecOps & Cybersecurity Specialist/, "English recruiter positioning is missing");
requirePattern("src/data/content.js", content, /Titre RNCP d'Expert en Technologies de l'Information/, "exact French RNCP qualification is missing");
requirePattern("src/data/content.js", content, /French RNCP title: Expert in Information Technologies/, "English RNCP qualification is missing");
rejectPattern("src/data/content.js", content, /Diplômé d'Epitech|Ingénieur DevSecOps & Cybersécurité|DevSecOps & Cybersecurity Engineer/, "RNCP title must not be presented as an engineering degree");
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

const research = read("src/sections/Research.jsx");
requirePattern("src/sections/Research.jsx", research, /research\.hypothesis/, "research hypothesis must be explicit");
requirePattern("src/sections/Research.jsx", research, /research\.workstreams/, "research workstreams must be visible");
requirePattern("src/sections/Research.jsx", research, /case-study-cybersoc/, "research section must link to public AI-security evidence");
requirePattern("src/sections/Research.jsx", research, /language === ["']fr["']/, "research evidence link must follow the active language");

requirePattern("src/data/content.js", content, /Axe exploratoire · objectif doctoral/, "French doctoral research status is missing");
requirePattern("src/data/content.js", content, /Exploratory track · doctoral objective/, "English doctoral research status is missing");
requirePattern("src/data/content.js", content, /Modéliser les menaces/, "French research method is missing");
requirePattern("src/data/content.js", content, /Model the threats/, "English research method is missing");

const projectCard = read("src/components/ProjectCard.jsx");
requirePattern("src/components/ProjectCard.jsx", projectCard, /copy\.caseStudy/, "localized case-study CTA is missing");
requirePattern("src/components/ProjectCard.jsx", projectCard, /copy\.challenge/, "localized project impact labels are missing");
requirePattern("src/components/ProjectCard.jsx", projectCard, /projectProofs/, "project cards must surface verified evidence");
requirePattern("src/components/ProjectCard.jsx", projectCard, /Private training repository|Dépôt de formation privé/, "private evidence boundary must be explicit");
requirePattern("src/components/ProjectCard.jsx", projectCard, /case-study-secure-api-fr|replace\(["']\.html["'],\s*["']-fr\.html["']\)/, "French case-study routing is missing");
requireCount("src/components/ProjectCard.jsx", projectCard, /target=["']_blank["']/g, 2, "expected project source links are missing");
requireCount("src/components/ProjectCard.jsx", projectCard, /rel=["']noopener noreferrer["']/g, 2, "external project links must prevent opener access");

const projectProofs = read("src/data/projectProofs.js");
requirePattern("src/data/projectProofs.js", projectProofs, /3,9 → 7,2/, "French OpenSSF proof is missing");
requirePattern("src/data/projectProofs.js", projectProofs, /3\.9 → 7\.2/, "English OpenSSF proof is missing");
requirePattern("src/data/projectProofs.js", projectProofs, /workflows de sécurité/, "flagship workflow proof is missing");
requirePattern("src/data/projectProofs.js", projectProofs, /public repository/, "public evidence traceability note is missing");

const publicResume = read("public/resume.html");
requirePattern("public/resume.html", publicResume, /data-language=["']fr["']/, "French public resume is missing");
requirePattern("public/resume.html", publicResume, /data-language=["']en["']/, "English public resume is missing");
requirePattern("public/resume.html", publicResume, /data-switch=["']fr["']/, "resume FR switch is missing");
requirePattern("public/resume.html", publicResume, /data-switch=["']en["']/, "resume EN switch is missing");
requirePattern("public/resume.html", publicResume, /3<\/strong><b>expériences pro/, "French resume must prioritize professional experience as a recruiter metric");
requirePattern("public/resume.html", publicResume, /3<\/strong><b>professional roles/, "English resume must prioritize professional experience as a recruiter metric");
rejectPattern("public/resume.html", publicResume, /06\s*77\s*60\s*26\s*07/, "public resume exposes a phone number");
rejectPattern("public/resume.html", publicResume, /33440|33240|Cubzac|Ambar[eè]s/i, "public resume exposes home-location details");
rejectPattern("public/resume.html", publicResume, /github\.com\/Bastien-Lup\/secure-api-devsecops/, "public resume contains a stale repository URL");
requirePattern("public/resume.html", publicResume, /Titre RNCP d’Expert en Technologies de l’Information, niveau bac\+5/, "French public resume must state the exact RNCP qualification");
requirePattern("public/resume.html", publicResume, /French RNCP title Expert in Information Technologies, bac\+5 level/, "English public resume must state the RNCP qualification");
rejectPattern("public/resume.html", publicResume, /INGÉNIEUR DEVSECOPS|CYBERSECURITY ENGINEER|Ingénieur cybersécurité|Cybersecurity engineer/, "public resume must not imply an engineering degree");

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
