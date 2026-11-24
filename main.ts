// The One-Line Laugh: one funny line, a single sentence, on a subject of its own.
// Node 22 standard library only: no dependencies, no network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I bought a plant to teach myself responsibility, and it died while I was reading the care instructions.";

if (LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1 to 200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
