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
      "Peer-to-peer marketplace for Cal Poly students enabling secure buying and selling of campus items. Features real-time messaging, image uploads, and listing management. Grew to 830+ registered users with active daily listings and organic campus-wide adoption.",
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
        "830+ registered users with organic campus adoption",
        "Active daily listings across multiple categories",
        "Published on the iOS App Store",
        "Word-of-mouth growth without paid marketing",
      ],
      role: "Product Manager & Team Lead — product direction, roadmap, full-stack development, App Store deployment, and community growth",
      timeline: "Jan 2026 — Current",
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
  {
    slug: "noteseq",
    title: "NoteSeq",
    description:
      "Real-time collaborative note-taking app inspired by Notion and Logseq. Features block-based WYSIWYG editing powered by TipTap, live multiplayer cursors via Yjs CRDT, bidirectional backlinks, an interactive knowledge graph, daily journals, and a full import/export system.",
    techStack: ["Next.js", "Convex", "TipTap", "Yjs", "Tailwind CSS"],
    image: "/projects/noteseq.png",
    githubUrl: "https://github.com/cedmonston22/noteseq",
    caseStudy: {
      problem:
        "Existing note-taking tools force a tradeoff: Notion has great collaboration but weak linking, Logseq has powerful bidirectional links but no real-time multiplayer. I wanted both — a tool where teams can collaborate live while building a connected knowledge base.",
      approach:
        "I combined TipTap's block-based WYSIWYG editor with Yjs CRDTs for conflict-free real-time collaboration, layered on top of Convex for reactive data sync. Bidirectional backlinks and an interactive knowledge graph let users see how their notes connect.",
      technicalHighlights: [
        "Yjs CRDT integration for conflict-free real-time collaboration with live multiplayer cursors",
        "TipTap block-based editor with custom extensions for backlinks and embeds",
        "Interactive knowledge graph visualization showing connections between notes",
        "Convex reactive backend — zero-latency UI updates without manual cache management",
        "Full import/export system supporting Markdown and JSON formats",
      ],
      results: [
        "Fully functional collaborative editor with real-time sync",
        "Knowledge graph with bidirectional link traversal",
        "Daily journal system with automatic date linking",
        "Open source on GitHub",
      ],
      role: "Solo developer — architecture, real-time sync, editor customization, and UI design",
      timeline: "Feb 2026 — Complete",
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
];
