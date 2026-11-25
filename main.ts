import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry for "Make the AI Judge Laugh: Office Jokes".
// The brief wants a real joke that turns somewhere unexpected and
// rings true about the office. The spirit-animal setup promises
// something personal, then lands on the office printer — jammed,
// on fire, ignored until needed. Everyone in an office has lived
// that exact printer, and HR has heard it before.
const MAX_CHARS = 200;
const MESSAGE =
  "I told HR my spirit animal is the office printer: mostly jammed, occasionally on fire, and everyone ignores me until they need me.";

function main(): void {
  if (MESSAGE.length > MAX_CHARS) {
    throw new Error(`entry too long: ${MESSAGE.length} chars (max ${MAX_CHARS})`);
  }
  console.log(`entry OK (${MESSAGE.length} chars)`);
  console.log(MESSAGE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", MESSAGE, "utf8");
}

main();
