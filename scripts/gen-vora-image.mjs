import sharp from "sharp";
import { writeFileSync } from "node:fs";

const W = 1600;
const H = 1000;

// Vora "V" mark paths (from brand/vora-mark.svg, viewBox 0 0 960 720), scaled + translated.
const markScale = 0.62;
const markX = 150;
const markY = H / 2 - (720 * markScale) / 2;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2a0a4a"/>
      <stop offset="55%" stop-color="#3c096c"/>
      <stop offset="100%" stop-color="#1a0b2e"/>
    </linearGradient>
    <linearGradient id="voraGrad" gradientUnits="userSpaceOnUse" x1="155.81" y1="35.81" x2="155.81" y2="684.19">
      <stop offset="0%" stop-color="#b985f0"/>
      <stop offset="100%" stop-color="#7B2CBF"/>
    </linearGradient>
    <radialGradient id="glow" cx="22%" cy="42%" r="60%">
      <stop offset="0%" stop-color="#9B5DE5" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#9B5DE5" stop-opacity="0"/>
    </radialGradient>
    <filter id="soft" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="14"/>
    </filter>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- concentric "listening" rings behind the mark -->
  <g transform="translate(${markX + 360 * markScale} ${H / 2}) ">
    <circle r="${380 * markScale}" fill="none" stroke="#9B5DE5" stroke-opacity="0.18" stroke-width="3"/>
    <circle r="${480 * markScale}" fill="none" stroke="#9B5DE5" stroke-opacity="0.12" stroke-width="3"/>
    <circle r="${600 * markScale}" fill="none" stroke="#9B5DE5" stroke-opacity="0.07" stroke-width="3"/>
  </g>

  <!-- Vora mark -->
  <g transform="translate(${markX} ${markY}) scale(${markScale})">
    <g filter="url(#soft)" opacity="0.5">
      <path fill="#9B5DE5" d="m155.80971 143.87486c0 -59.68273 48.382416 -108.065155 108.06517 -108.065155l432.24762 0c28.660645 0 56.14746 11.385403 76.413635 31.651554c20.266113 20.266144 31.65155 47.752937 31.65155 76.4136l0 432.24762c0 59.68274 -48.382446 108.065186 -108.065186 108.065186l-432.24762 0c-59.682755 0 -108.06517 -48.382446 -108.06517 -108.065186z"/>
    </g>
    <path fill="url(#voraGrad)" d="m155.80971 143.87486c0 -59.68273 48.382416 -108.065155 108.06517 -108.065155l432.24762 0c28.660645 0 56.14746 11.385403 76.413635 31.651554c20.266113 20.266144 31.65155 47.752937 31.65155 76.4136l0 432.24762c0 59.68274 -48.382446 108.065186 -108.065186 108.065186l-432.24762 0c-59.682755 0 -108.06517 -48.382446 -108.06517 -108.065186z"/>
    <path fill="#ffffff" d="m598.6903 129.66554l-97.19687 208.41206l50.467194 182.24149l204.67456 -425.2336z"/>
    <path fill="#ffffff" d="m203.3622 154.64305l151.40422 27.102356l167.2887 359.81366l-99.06561 60.747986z"/>
    <path fill="#ffffff" d="m517.3646 531.3663l14.393738 28.929138c7.949402 15.977173 -8.859314 40.499268 -37.543335 54.771667c-28.684021 14.272461 -58.381287 12.890503 -66.33069 -3.086609l-14.393707 -28.929138z"/>
  </g>

  <!-- Text block -->
  <g font-family="Inter, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif">
    <text x="700" y="392" font-size="170" font-weight="800" letter-spacing="-6" fill="#ffffff">vora</text>
    <text x="704" y="470" font-size="44" font-weight="600" letter-spacing="0.5" fill="#C9A9F0">Voice control for any website</text>
    <text x="704" y="528" font-size="30" font-weight="400" fill="#9B86C0">Speak naturally — Claude reads the page and acts.</text>

    <!-- status pills -->
    <g transform="translate(704 588)" font-size="26" font-weight="600">
      <g>
        <rect x="0" y="0" rx="20" ry="20" width="190" height="44" fill="#9B5DE5" fill-opacity="0.18" stroke="#9B5DE5" stroke-opacity="0.5"/>
        <circle cx="26" cy="22" r="7" fill="#9B5DE5"/>
        <text x="44" y="31" fill="#D9C4F5">Listening</text>
      </g>
      <g transform="translate(210 0)">
        <rect x="0" y="0" rx="20" ry="20" width="180" height="44" fill="#FFB347" fill-opacity="0.16" stroke="#FFB347" stroke-opacity="0.45"/>
        <circle cx="26" cy="22" r="7" fill="#FFB347"/>
        <text x="44" y="31" fill="#F0D8B0">Thinking</text>
      </g>
      <g transform="translate(410 0)">
        <rect x="0" y="0" rx="20" ry="20" width="195" height="44" fill="#4ADE80" fill-opacity="0.16" stroke="#4ADE80" stroke-opacity="0.45"/>
        <circle cx="26" cy="22" r="7" fill="#4ADE80"/>
        <text x="44" y="31" fill="#BFEFCF">Executing</text>
      </g>
    </g>

    <text x="704" y="708" font-size="24" font-weight="500" fill="#6B6577">Chrome Extension · React · TypeScript · Claude API</text>
  </g>
</svg>`;

const out = new URL("../public/projects/vora.png", import.meta.url);
const buf = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync(out, buf);
console.log("wrote", out.pathname, (buf.length / 1024).toFixed(0) + "KB");
