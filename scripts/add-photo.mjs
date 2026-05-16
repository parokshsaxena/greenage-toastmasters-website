#!/usr/bin/env node
/**
 * Usage:
 *   npm run add-photo PXL_20260418_141013969
 *   npm run add-photo IMG-20260501-WA0012.jpg
 *   npm run add-photo PXL_20260418_141013969.png   (if it's a PNG)
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));
const GALLERY_JSON = resolve(__dir, "../data/gallery.json");
const CLOUDINARY_BASE =
  "https://res.cloudinary.com/dccdfqobh/image/upload/f_auto,q_auto/Greenage-Toastmasters-Website/gallery";

function extractDate(filename) {
  const match = filename.match(/(\d{8})/);
  if (!match) return null;
  const raw = match[1];
  return `${raw.slice(0, 4)}-${raw.slice(4, 6)}-${raw.slice(6, 8)}`;
}

function run() {
  const input = process.argv[2];
  if (!input) {
    console.error("Usage: npm run add-photo <filename>");
    console.error("Example: npm run add-photo PXL_20260501_123456789");
    process.exit(1);
  }

  // Add .jpg extension if none provided
  const filename = input.includes(".") ? input : `${input}.jpg`;
  const src = `${CLOUDINARY_BASE}/${filename}`;

  const gallery = JSON.parse(readFileSync(GALLERY_JSON, "utf8"));

  // Check for duplicates
  if (gallery.some((img) => img.src === src)) {
    console.log(`⚠️  Already in gallery: ${filename}`);
    process.exit(0);
  }

  // Insert in chronological order (newest first)
  const newDate = extractDate(filename);
  const insertAt = gallery.findIndex((img) => {
    const d = extractDate(img.src.split("/").pop() ?? "");
    return !d || (newDate && d < newDate);
  });

  if (insertAt === -1) {
    gallery.push({ src });
  } else {
    gallery.splice(insertAt, 0, { src });
  }

  writeFileSync(GALLERY_JSON, JSON.stringify(gallery, null, 2) + "\n");

  const dateLabel = newDate
    ? new Date(newDate).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })
    : "unknown date";

  console.log(`✅ Added: ${filename} (${dateLabel})`);
  console.log(`   Position: #${insertAt === -1 ? gallery.length : insertAt + 1} of ${gallery.length}`);
  console.log(`\nNext steps:`);
  console.log(`   git add data/gallery.json && git commit -m "gallery: add ${filename}" && git push`);
}

run();
