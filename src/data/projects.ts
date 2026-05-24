export interface Project {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  demoVideo?: string;
  githubUrl?: string;
  liveUrl?: string;
  appUrl?: string;
  caseStudy: {
    problem: string;
    approach: string;
    technicalHighlights: string[];
    results: string[];
    role: string;
    timeline: string;
  };
}

export const projects: Project[] = [
  {
    slug: "mustang-market",
    title: "Mustang Market",
    description:
      "Peer-to-peer marketplace for Cal Poly students enabling secure buying and selling of campus items. Features real-time messaging, image uploads, and listing management. Grew to 875+ registered users with active daily listings and organic campus-wide adoption.",
    techStack: ["Next.js", "TypeScript", "Firebase", "Firestore"],
    image: "/projects/mustang-market.png",
    liveUrl: "https://www.mustang-market.com/login",
    appUrl: "https://apps.apple.com/us/app/mustang-market/id6759310029",
    caseStudy: {
      problem:
        "Cal Poly students relied on fragmented channels — GroupMe chats, Instagram stories, dorm bulletin boards — to buy and sell items. There was no centralized, trusted platform designed specifically for campus commerce.",
      approach:
        "I built a dedicated marketplace web app with Cal Poly email authentication to ensure trust, real-time messaging for buyer-seller communication, and a clean listing system with image uploads. Then wrapped it as a native iOS app for mobile access.",
      technicalHighlights: [
        "Firebase Auth with .edu email restriction for campus-only access and trust",
        "Firestore real-time listeners for instant messaging and live listing updates",
        "Image upload pipeline with compression and Firebase Storage",
        "Next.js SSR for SEO and fast initial page loads",
        "iOS App Store deployment via native wrapper with push notifications",
      ],
      results: [
        "875+ registered users with organic campus adoption",
        "Active daily listings across multiple categories",
        "Published on the iOS App Store",
        "Word-of-mouth growth without paid marketing",
      ],
      role: "Product Manager & Team Lead — product direction, roadmap, full-stack development, App Store deployment, and community growth",
      timeline: "Jan 2026 — Current",
    },
  },
  {
    slug: "vora",
    title: "Vora",
    description:
      "A Chrome extension built at a hackathon to help people who cannot use a mouse or keyboard navigate the web by voice. Users speak a request in plain language, Vora reads the current page, uses Claude to interpret the intent, performs the action, and reports back, with subtle animations indicating when it is listening, thinking, and responding.",
    techStack: ["Chrome Extension", "React", "TypeScript", "Web Speech API", "Claude API"],
    image: "/projects/vora.png",
    githubUrl: "https://github.com/cedmonston22/vora",
    caseStudy: {
      problem:
        "People with motor disabilities are locked out of huge parts of the web — every site assumes a mouse and keyboard. Existing voice tools are brittle: they break on \"Vora\" itself (the Web Speech API constantly mishears it as \"nora\", \"bora\", \"flora\", or splits it across two words), they don't adapt to how an individual actually speaks, and they don't give clear feedback about whether they heard you. We had one day at a hackathon to build something that actually worked end-to-end.",
      approach:
        "We built a Manifest V3 extension with three contexts: a React side panel that owns voice I/O and the state machine, a stateless service worker that runs the AI pipeline (DOM read → Claude → typed action), and a content script that executes actions on the page. I built the initial MVP, then went deep on the two parts that make or break a voice agent: the activation layer — wake-word detection, the speech-recognition buffering pipeline, and a learning buffer that adapts to a user's mispronunciations — and the conversational UI that talks back to you with animated speaking states and a live transcript.",
      technicalHighlights: [
        "Wake-word gate tolerant of Web Speech mishearings: a curated phonetic alias list (\"vore-uh\", \"nora\", \"bora\", \"flora\"…) plus an edit-distance-≤1 fuzzy match on the first spoken token, so \"Vora\" — a word the recognizer routinely garbles — still triggers reliably",
        "Mispronunciation learning buffer: the extension accumulates per-user aliases over time, so words and commands it repeatedly mishears for that specific user get folded into the recognition vocabulary and matched on future utterances",
        "Speech-recognition buffering pipeline: merges interim + final transcripts into a single utterance, flushes after a short silence so natural pauses are respected, with a hard cap as a safety net for run-on speech, and carries forward the best confidence score for the low-confidence re-prompt path",
        "Conversational talk-back UI: TTS readback of every result plus an animated \"speaking halo\", a pulsing status indicator, a live mic-level visualizer, and a transcript panel that streams words as you speak — distinct visual states for listening, thinking, executing, and confirming",
        "Claude (claude-sonnet-4-6) turns the transcript + a structured snapshot of the page's interactive elements into one typed browser action; destructive actions (submit, delete, pay…) get a spoken read-back and wait for a yes/no before executing, and sensitive fields like passwords are never read or filled",
      ],
      results: [
        "Built end-to-end in a single-day hackathon with a 3-person team",
        "Working voice loop on any site: speech → DOM read → Claude → action, with spoken feedback",
        "Did not place at the hackathon — but shipped a complete, accessibility-first voice agent",
        "Open source on GitHub",
      ],
      role: "Co-creator (3-person hackathon team) — built the initial MVP, then owned the voice activation layer (wake-word detection, recognition buffering, mispronunciation learning buffer) and the conversational talk-back UI with its animated speaking states and live transcript",
      timeline: "May 2026 — Hackathon project",
    },
  },
  {
    slug: "linkedin-games-solver",
    title: "LinkedIn Games Solver",
    description:
      "Chrome extension (Manifest V3) that automatically solves LinkedIn's daily puzzle games — Queens, Zip, Tango, and Patches. Parses each board directly from the DOM, runs a pure TypeScript backtracking solver, and injects the solution via the Chrome Debugger API to dispatch trusted mouse events that bypass LinkedIn's isTrusted checks.",
    techStack: ["TypeScript", "Chrome Extension", "Vitest", "Manifest V3"],
    image: "/projects/linkedin-games-solver-v2.png",
    githubUrl: "https://github.com/cedmonston22/Linkedin-Games-Solver",
    caseStudy: {
      problem:
        "LinkedIn ships four daily puzzle games but provides no way to verify or study optimal solutions. Writing a solver that actually works inside the page is non-trivial: LinkedIn checks event.isTrusted on every click so standard dispatchEvent calls are silently ignored, and the DOM is obfuscated with rebuild-hashed class names that break naive parsers every time a new bundle ships.",
      approach:
        "I built a Manifest V3 extension with a content script per game. Each game has an independent parser (DOM → typed board state), a pure backtracking solver (zero browser dependency, fully unit-tested), and an injector that drives the UI. LinkedIn clicks go through a background service worker that uses chrome.debugger to dispatch trusted mouse events. Zip paths are drawn via mousePressed → mouseMoved → mouseReleased drags. Parsers derive structural info from stable signals (cell count, aria-labels) instead of obfuscated CSS hashes, so they survive LinkedIn rebuilds.",
      technicalHighlights: [
        "Four independent backtracking solvers (Queens, Zip, Tango, Patches) written as pure functions with full Vitest coverage",
        "Chrome Debugger API integration to dispatch event.isTrusted mouse events that LinkedIn actually accepts",
        "Parsers derive grid size from cell count (sqrt) and use aria-labels + geometric fallbacks — resilient to LinkedIn's obfuscated class-name rebuilds",
        "Multi-site support: separate content scripts for LinkedIn and archivedqueens.com with site-appropriate input methods (debugger vs. plain mousedown)",
        "Drag-based input synthesis for Zip paths and Patches rectangles via sequenced mousePressed/moved/released events",
      ],
      results: [
        "All four LinkedIn games solve end-to-end",
        "22 passing unit tests across solvers and parsers",
        "Adaptable parser architecture that survives LinkedIn bundle rebuilds",
        "Open source on GitHub",
      ],
      role: "Solo developer — extension architecture, solver algorithms, DOM parsing, and Debugger API integration",
      timeline: "April 2026 — Complete",
    },
  },
  {
    slug: "intake",
    title: "Intake",
    description:
      "AI-powered nutrition and supplement scanner app that lets users scan any food or supplement label with their camera and instantly receive a personalized ingredient breakdown. Uses Gemini 2.5 Flash Vision for single-call label analysis, scoring products on Safety, Dosing, and Transparency at ~$0.002 per scan.",
    techStack: ["React Native", "Expo", "Supabase", "Gemini AI"],
    image: "/projects/intake.png",
    liveUrl: "https://intake-landing.vercel.app/",
    appUrl: "https://testflight.apple.com/join/TvSsMYsf",
    caseStudy: {
      problem:
        "Supplement labels are dense, misleading, and hard to evaluate. Most consumers can't tell if a product is properly dosed, contains risky fillers, or hides behind proprietary blends. Existing apps either require manual entry or give vague, unhelpful feedback.",
      approach:
        "I built a camera-first mobile app that uses Gemini 2.5 Flash Vision to analyze supplement and nutrition labels in a single API call. The AI extracts every ingredient, cross-references dosing against clinical research, and returns a structured breakdown with Safety, Dosing, and Transparency scores — all in under 15 seconds.",
      technicalHighlights: [
        "Single-call Vision API architecture — one image in, full structured analysis out, averaging ~$0.002 per scan",
        "Supabase backend with PostgreSQL for user scan history, saved products, and personalized flagging",
        "Custom prompt engineering to ensure consistent, structured JSON responses from Gemini across diverse label formats",
        "React Native + Expo for cross-platform mobile with native camera integration",
      ],
      results: [
        "Currently in active development",
        "Sub-15-second analysis time per scan",
        "Cost-optimized to ~$0.002 per API call",
        "Designed for scale with Supabase edge functions",
      ],
      role: "Solo developer — design, architecture, AI integration, and mobile development",
      timeline: "March 2026 — April 2026",
    },
  },
  {
    slug: "envision-wardrobe",
    title: "ENVISION Wardrobe",
    description:
      "iOS wardrobe management app taken from concept to TestFlight deployment with 90+ beta users. Features AI-powered clothing analysis via Groq's Llama 4 Vision API, automatically detecting garment categories, colors, patterns, and brands from user photos.",
    techStack: ["React Native", "Expo", "Firebase", "Groq AI", "TypeScript"],
    image: "/projects/envision.png",
    appUrl: "https://testflight.apple.com/join/gv57D16y",
    caseStudy: {
      problem:
        "People own dozens of clothing items but struggle to remember what they have, leading to redundant purchases and underused wardrobes. Manual wardrobe tracking apps require tedious data entry that kills adoption.",
      approach:
        "I eliminated the data entry barrier by integrating Groq's Llama 4 Vision API — users snap a photo and the AI automatically detects the garment category, colors, patterns, and brand. The app organizes everything into a visual wardrobe with filtering and outfit planning.",
      technicalHighlights: [
        "Groq Llama 4 Vision API integration for real-time clothing analysis from photos",
        "Firebase backend with Firestore for real-time wardrobe sync across devices",
        "Custom image processing pipeline to optimize photos before AI analysis",
        "TestFlight deployment pipeline with automated builds via Expo EAS",
      ],
      results: [
        "90+ beta users on TestFlight",
        "Concept to TestFlight in under 2 months",
        "Positive user feedback on AI accuracy and ease of use",
        "Preparing for App Store launch",
      ],
      role: "Solo developer — end-to-end product design, development, and deployment",
      timeline: "November 2025 — Jan 2026",
    },
  },
];
