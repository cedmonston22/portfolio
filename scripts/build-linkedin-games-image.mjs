import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import sharp from "sharp";

const solverIconsRoot = resolve(
  "C:/Users/cgedm/documents/github/linkedin-games-solver/test-extension/icons"
);

const CANVAS_W = 1600;
const CANVAS_H = 1000;
const ICON_SIZE = 380;
const GAP = 60;

const tiles = [
  { name: "Queens", file: "queens.svg" },
  { name: "Zip", file: "zip.svg" },
  { name: "Tango", file: "tango.svg" },
  { name: "Patches", file: "patches.svg" },
];

// Center a 2x2 grid of icons with GAP between them.
const gridW = ICON_SIZE * 2 + GAP;
const gridH = ICON_SIZE * 2 + GAP;
const gridLeft = (CANVAS_W - gridW) / 2;
const gridTop = (CANVAS_H - gridH) / 2;
const COL_X = [gridLeft + ICON_SIZE / 2, gridLeft + ICON_SIZE * 1.5 + GAP];
const ROW_Y = [gridTop + ICON_SIZE / 2, gridTop + ICON_SIZE * 1.5 + GAP];

// Force sharp to treat SVGs at a sensible density so raster size matches ICON_SIZE.
async function rasterizeIcon(svgPath) {
  const svg = readFileSync(svgPath, "utf8");
  // Replace width/height with ICON_SIZE so sharp renders at the correct resolution.
  const resized = svg
    .replace(/\bwidth="[^"]+"/, `width="${ICON_SIZE}"`)
    .replace(/\bheight="[^"]+"/, `height="${ICON_SIZE}"`);
  return sharp(Buffer.from(resized), { density: 300 })
    .resize(ICON_SIZE, ICON_SIZE, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
}

const base = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${CANVAS_W}" height="${CANVAS_H}" viewBox="0 0 ${CANVAS_W} ${CANVAS_H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#15151a"/>
      <stop offset="1" stop-color="#0c0c10"/>
    </linearGradient>
  </defs>
  <rect width="${CANVAS_W}" height="${CANVAS_H}" fill="url(#bg)"/>
</svg>`;

const baseBuffer = await sharp(Buffer.from(base)).png().toBuffer();

const iconBuffers = await Promise.all(
  tiles.map((t) => rasterizeIcon(resolve(solverIconsRoot, t.file)))
);

const composites = iconBuffers.map((buf, i) => {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const cx = COL_X[col];
  const cy = ROW_Y[row];
  return {
    input: buf,
    left: Math.round(cx - ICON_SIZE / 2),
    top: Math.round(cy - ICON_SIZE / 2),
  };
});

const outPath = resolve("public/projects/linkedin-games-solver-v2.png");
await sharp(baseBuffer).composite(composites).png().toFile(outPath);
console.log(`wrote ${outPath}`);
