// SPDX-License-Identifier: MIT
// Fortune Cookie Wisdom for Developers — one original line.
// The program writes exactly one line of fortune-cookie wisdom to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default ./entry.txt).
// Deterministic: no clock, no randomness, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The line: a tired developer's truth (the skipped comment) turned into
// a small mystery with a 2 a.m. sting in its tail — and the fortune's
// advice is the fix itself. One balanced sentence, one breath.
const FORTUNE =
  "The comment you skip tonight is the mystery your future self will solve at 2 a.m. — write it kindly.";

const MAX_CHARS = 120;

function main(): void {
  const chars = [...FORTUNE];
  if (chars.length < 1 || chars.length > MAX_CHARS) {
    throw new Error(`fortune must be 1-${MAX_CHARS} characters, got ${chars.length}`);
  }
  if (FORTUNE.trim().length === 0) {
    throw new Error("fortune must not be whitespace only");
  }
  if (FORTUNE.includes("\n")) {
    throw new Error("fortune must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  const target = outDir ? join(outDir, "entry.txt") : "./entry.txt";
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, FORTUNE, "utf8");
}

main();
