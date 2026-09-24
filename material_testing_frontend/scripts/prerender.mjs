import puppeteer from "puppeteer";
import { createServer } from "http";
import handler from "serve-handler";
import fs from "fs";
import path from "path";

// Add every route you want search engines to see as real HTML
const routes = ["/", "/about", "/services", "/contact"];

const DIST_DIR = path.resolve("dist");
const PORT = 5005;

async function main() {
  // 1. Serve the built site locally
//   const server = createServer((req, res) => handler(req, res, { public: DIST_DIR }));
const server = createServer((req, res) =>
  handler(req, res, {
    public: DIST_DIR,
    rewrites: [{ source: "**", destination: "/index.html" }],
  })
);
  await new Promise((resolve) => server.listen(PORT, resolve));

  // 2. Launch a headless browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const route of routes) {
    const url = `http://localhost:${PORT}${route}`;
    console.log("Prerendering:", url);

    await page.goto(url, { waitUntil: "networkidle0" });
    const html = await page.content();

    // Figure out where to save it: "/" -> dist/index.html, "/about" -> dist/about/index.html
    const outDir = route === "/" ? DIST_DIR : path.join(DIST_DIR, route);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), html);
  }

  await browser.close();
  server.close();
  console.log("Done prerendering.");
}

main();