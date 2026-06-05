const path = require("path");
const fs = require("fs");

const root = path.resolve(__dirname, "..");
const requiredFiles = [
  "index.html",
  "package.json",
  "vite.config.js",
  "tailwind.config.js",
  "src/main.jsx",
  "src/App.jsx",
  "src/index.css",
  "public/data/cards.json",
  "public/data/promotions.json",
  "public/data/categories.json",
  "public/data/partners.json"
];

for (const file of requiredFiles) {
  const fullPath = path.join(root, file);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Missing required file: ${file}`);
  }
}

const cards = JSON.parse(fs.readFileSync(path.join(root, "public/data/cards.json"), "utf8"));
const promotions = JSON.parse(fs.readFileSync(path.join(root, "public/data/promotions.json"), "utf8"));
const categories = JSON.parse(fs.readFileSync(path.join(root, "public/data/categories.json"), "utf8"));
const partners = JSON.parse(fs.readFileSync(path.join(root, "public/data/partners.json"), "utf8"));

if (!Array.isArray(cards) || cards.length < 1) throw new Error("cards.json is empty");
if (!Array.isArray(promotions) || promotions.length < 1) throw new Error("promotions.json is empty");
if (!Array.isArray(categories) || categories.length !== 6) throw new Error("categories.json should contain 6 quick groups");
if (!Array.isArray(partners) || partners.length < 1) throw new Error("partners.json is empty");

const cardIds = new Set(cards.map((card) => card.id));
for (const card of cards) {
  for (const key of ["id", "name", "type", "tier", "organization", "image", "promotionIds"]) {
    if (!(key in card)) throw new Error(`Card ${card.id || card.name} missing ${key}`);
  }
  const imagePath = path.join(root, "public", card.image.replace(/^\//, ""));
  if (!fs.existsSync(imagePath)) throw new Error(`Missing card image: ${card.image}`);
}

for (const promotion of promotions) {
  for (const key of ["id", "title", "status", "startDate", "endDate", "image", "cardIds"]) {
    if (!(key in promotion)) throw new Error(`Promotion ${promotion.id || promotion.title} missing ${key}`);
  }
  const imagePath = path.join(root, "public", promotion.image.replace(/^\//, ""));
  if (!fs.existsSync(imagePath)) throw new Error(`Missing promotion image: ${promotion.image}`);
  for (const cardId of promotion.cardIds) {
    if (!cardIds.has(cardId)) throw new Error(`Promotion ${promotion.id} references unknown card ${cardId}`);
  }
}

console.log(`OK: ${cards.length} cards, ${promotions.length} promotions, ${categories.length} categories, ${partners.length} partners.`);
