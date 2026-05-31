import { existsSync, readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";

const requiredFiles = [
  "index.html",
  "src/main.js",
  "src/styles.css",
  "src/data/cards.js",
  "src/data/promotions.js",
  "src/data/customerSegments.js",
  "src/components/dashboard.js",
  "src/components/cardCatalog.js",
  "src/components/promotions.js",
  "src/components/compare.js",
  "src/components/advisor.js",
];

const missingFiles = requiredFiles.filter((file) => !existsSync(file));
if (missingFiles.length) {
  console.error(`Missing files:\n${missingFiles.join("\n")}`);
  process.exit(1);
}

for (const file of requiredFiles.filter((file) => file.endsWith(".js"))) {
  const content = readFileSync(file, "utf8");
  if (!content.trim()) {
    console.error(`${file} is empty`);
    process.exit(1);
  }

  const syntaxCheck = spawnSync(process.execPath, ["--check", file], { encoding: "utf8" });
  if (syntaxCheck.status !== 0) {
    console.error(syntaxCheck.stderr || syntaxCheck.stdout);
    process.exit(syntaxCheck.status || 1);
  }
}

console.log("Static project check passed.");
