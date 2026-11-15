import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('out');

if (!fs.existsSync(outDir)) {
  console.log('[inline-css] out directory not found, skipping.');
  process.exit(0);
}

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(getHtmlFiles(full));
    } else if (file.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const htmlFiles = getHtmlFiles(outDir);
let totalInlined = 0;

for (const htmlPath of htmlFiles) {
  let html = fs.readFileSync(htmlPath, 'utf8');

  // Prevent double processing if script is rerun
  if (html.includes('id="__next_inlined_css"')) {
    continue;
  }

  // Match Next.js CSS stylesheet links:
  // e.g. <link rel="stylesheet" href="/_next/static/chunks/04akjy1i1rtla.css" data-precedence="next"/>
  const cssLinkRegex = /<link\s+rel="stylesheet"\s+href="(\/_next\/static\/chunks\/[^"]+\.css)"(?:\s+data-precedence="([^"]+)")?[^>]*\/?>/g;

  let replacedInThisFile = 0;
  const newHtml = html.replace(cssLinkRegex, (fullMatch, cssHref, precedence) => {
    const precedenceAttr = precedence || 'next';
    const diskCssPath = path.join(outDir, cssHref.replace(/^\//, '').replace(/\//g, path.sep));

    if (!fs.existsSync(diskCssPath)) {
      console.warn(`[inline-css] CSS file not found on disk: ${diskCssPath}`);
      return fullMatch;
    }

    let cssContent = fs.readFileSync(diskCssPath, 'utf8');

    // Rewrite relative font/asset URLs (e.g. ../media/ -> /_next/static/media/)
    cssContent = cssContent.replace(/\.\.\/media\//g, '/_next/static/media/');

    // Inlined styles for immediate frame-0 render + deferred link for caching & React hydration
    const replacement =
      `<style id="__next_inlined_css">${cssContent}</style>` +
      `<link rel="stylesheet" href="${cssHref}" data-precedence="${precedenceAttr}" media="print" onload="this.media='all'"/>` +
      `<noscript><link rel="stylesheet" href="${cssHref}"/></noscript>`;

    replacedInThisFile++;
    totalInlined++;
    console.log(`[inline-css] Inlined ${cssHref} (${(cssContent.length / 1024).toFixed(1)} KB) into ${path.relative(outDir, htmlPath)}`);
    return replacement;
  });

  if (replacedInThisFile > 0) {
    fs.writeFileSync(htmlPath, newHtml, 'utf8');
  }
}

console.log(`[inline-css] Finished: optimized ${totalInlined} stylesheet link(s) into inline critical CSS.`);
