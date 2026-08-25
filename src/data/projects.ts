export interface Project {
  slug: string;
  title: string;
  /** Plain-language summary of what the project is — no jargon, no implementation. */
  description: string;
  /** Short verifiable facts rendered as a single meta line under the title. */
  meta: string[];
  /** Exactly three technical highlights — what I personally built. */
  highlights: [string, string, string];
  techStack: string[];
  /** Optional: a row renders full-width until its screenshot exists. */
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  appUrl?: string;
  devpostUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "mustang-market",
    title: "Mustang Market",
    description:
      "A buy-and-sell marketplace made just for Cal Poly students. You sign in with your school account, so everyone you're trading with is a verified classmate rather than an anonymous stranger. It runs on the web and on iPhone, and around 900 students have signed up.",
    meta: ["900+ users", "iOS App Store", "Product Manager & Team Lead", "Jan 2026 — Current"],
    highlights: [
      "Wired up Cal Poly SSO through Microsoft Azure AD so account creation is restricted to verified calpoly.edu identities",
      "Built a Groq-backed moderation step into listing creation that flags and blocks unwanted images and descriptions before a listing goes live",
      "Wrote the image pipeline on the Firebase SDK — HEIC/HEIF to JPG conversion, compression, and Cloud Storage upload — so iPhone photos stop failing client-side",
    ],
    techStack: ["Next.js", "TypeScript", "Firebase", "Azure AD", "Groq AI"],
    image: "/projects/mustang-market.png",
    liveUrl: "https://www.mustang-market.com/login",
    appUrl: "https://apps.apple.com/us/app/mustang-market/id6759310029",
  },
  {
    slug: "llm-evaluation-pipeline",
    title: "LLM Evaluation Pipeline",
    description:
      "A system for figuring out which AI model actually answers a question best. It sends the same prompts to several models at once, keeps every response searchable, and lets people read the answers side by side and rate them.",
    // TODO: role + timeline still needed — not stated on the resume.
    meta: ["3 models benchmarked", "Event-driven on AWS Lambda"],
    highlights: [
      "Built an event-driven benchmarking pipeline on AWS Lambda and Amazon MQ, using Python asyncio to evaluate three models concurrently",
      "Designed the search and caching layer over Elasticsearch and Redis, supporting real-time aggregates and targeted cache invalidation",
      "Built an RLHF-style annotation UI in Next.js that persists human ratings to Redis and Elasticsearch for model benchmarking",
    ],
    techStack: ["Python", "AWS Lambda", "Amazon MQ", "Elasticsearch", "Redis", "Next.js"],
  },
  {
    slug: "vora",
    title: "Vora",
    description:
      "A Chrome extension that lets you use the web entirely by voice, built in 13 hours at Kiro Hacks for people who can't use a mouse or keyboard. Say what you want in plain English and it finds the right thing on the page and does it, reading back anything risky before it acts.",
    meta: ["Kiro Hacks", "3-person team", "Voice activation & talk-back UI", "May 2026"],
    highlights: [
      "Built a wake-word gate that survives Web Speech mishearings, using phonetic aliases, fuzzy matching, and a per-user buffer of learned mispronunciations",
      "Wrote the transcript pipeline that merges interim and final speech results into one utterance, flushing on a short silence so natural pauses don't cut a request off",
      "Used Claude to turn each transcript plus a snapshot of the page's interactive elements into a single typed browser action, with spoken confirmation before destructive ones",
    ],
    techStack: ["Chrome Extension", "React", "TypeScript", "Web Speech API", "Claude API"],
    image: "/projects/vora.png",
    githubUrl: "https://github.com/cedmonston22/vora",
    devpostUrl: "https://devpost.com/software/vora-soh32i",
  },
  {
    slug: "envision-wardrobe",
    title: "ENVISION Wardrobe",
    description:
      "An iOS app that turns your closet into a digital wardrobe and picks outfits for you. Take a photo of a piece of clothing and it fills in the details on its own — no typing anything in. Went from an idea to 90+ TestFlight testers in under two months.",
    meta: ["90+ TestFlight users", "Solo developer", "Nov 2025 — Jan 2026"],
    highlights: [
      "Wrote the outfit engine that scores candidate combinations on color harmony, pattern compatibility, clothing fit, and current weather",
      "Integrated Groq Llama 4 Vision to auto-detect an item's type, colors, patterns, brand, and name from a single photo",
      "Self-hosted background removal on Google Cloud Run with rembg and Docker, eliminating per-image API costs entirely",
    ],
    techStack: ["React Native", "Expo", "Firebase", "Groq AI", "Cloud Run", "Docker"],
    image: "/projects/envision.png",
    appUrl: "https://testflight.apple.com/join/gv57D16y",
  },
];
