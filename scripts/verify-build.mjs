import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const failures = [];

if (!existsSync(dist)) {
  failures.push("dist/: production build output is missing");
}

function walk(directory) {
  if (!existsSync(directory)) return [];

  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const cssFiles = walk(dist).filter((path) => extname(path) === ".css");

if (cssFiles.length === 0) {
  failures.push("dist/: no generated CSS asset found");
}

const css = cssFiles.map((path) => readFileSync(path, "utf8")).join("\n");

if (/@tailwind\b/.test(css)) {
  failures.push("dist CSS still contains @tailwind directives; Tailwind was not compiled");
}

if (/@apply\b/.test(css)) {
  failures.push("dist CSS still contains @apply directives; PostCSS/Tailwind processing failed");
}

// These selectors are defined through Tailwind @apply in src/index.css. Their
// presence proves that the component layer was actually transformed.
for (const selector of [".site-shell", ".button-primary", ".project-card"]) {
  if (!css.includes(selector)) {
    failures.push(`dist CSS is missing expected generated selector ${selector}`);
  }
}

// Tailwind preflight is another useful signal that the base layer was emitted.
if (!css.includes("box-sizing:border-box") && !css.includes("box-sizing: border-box")) {
  failures.push("dist CSS does not appear to contain Tailwind preflight output");
}

if (failures.length) {
  console.error("Production build verification failed:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Production build verification passed (${cssFiles.length} CSS asset(s)).`);
