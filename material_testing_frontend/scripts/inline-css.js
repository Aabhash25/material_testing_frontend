import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const htmlPath = path.join(distDir, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf-8');

const cssLinkMatch = html.match(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/);

if (cssLinkMatch) {
  const cssPath = path.join(distDir, cssLinkMatch[1]);
  const cssContent = fs.readFileSync(cssPath, 'utf-8');
  html = html.replace(cssLinkMatch[0], `<style>${cssContent}</style>`);
  fs.writeFileSync(htmlPath, html);
  console.log('✅ Inlined CSS into index.html');
} else {
  console.log('⚠️ No CSS link found to inline — check the regex or build output');
}