import fs from "fs";
import path from "path";
import { renderPage } from "./src/render";

import "module-alias/register";
import moduleAlias from "module-alias";

moduleAlias.addAlias("@", path.resolve(__dirname, "src"));







import IndexPage from "./src/pages/index";

// Ensure output directory exists
const distDir = path.resolve("_dist");
fs.mkdirSync(distDir, { recursive: true });

// Copy static files (like CSS)
fs.cpSync("public", distDir, { recursive: true });

// Render and write HTML
const html = renderPage(IndexPage());
fs.writeFileSync(path.join(distDir, "index.html"), html);

console.log("✅ Build complete: dist/index.html");
