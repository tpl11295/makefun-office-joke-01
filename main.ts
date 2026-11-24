import { mkdirSync, writeFileSync } from "node:fs";

// Make the AI Judge Laugh: Office Jokes entry — one office joke,
// a single line under 200 characters.
// Judge brief: a real joke, turns somewhere unexpected, rings true
// about the office, tight wording, fresh take.
// Chosen line: the spirit-animal setup promises something personal,
// then lands on the office printer — jammed, on fire, ignored until
// needed. Everyone in an office has lived that exact printer.
const LINE =
  "I told HR my spirit animal is the office printer: mostly jammed, occasionally on fire, and everyone ignores me until they need me.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
