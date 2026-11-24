import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The word grandma would text about AI: "Brainbox" — her era's word for a
// clever person, and a box with a brain is exactly what the machine is.
const word = "Brainbox";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word, "utf8");
