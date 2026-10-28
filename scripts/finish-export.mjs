import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
const root = process.cwd();
await rm(resolve(root, "docs"), { recursive: true, force: true });
await mkdir(resolve(root, "docs"), { recursive: true });
await cp(resolve(root, "out"), resolve(root, "docs"), { recursive: true });
await writeFile(resolve(root, "docs/.nojekyll"), "");
console.log("GitHub Pages export ready: docs/");
