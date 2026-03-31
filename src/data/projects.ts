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
      timeline: "2025 — In Development",
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
      timeline: "2025 — Beta on TestFlight",
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
      timeline: "2025 — Complete",
    },
  },
  {
    slug: "mustang-market",
    title: "Mustang Market",
    description:
      "Peer-to-peer marketplace for Cal Poly students enabling secure buying and selling of campus items. Features real-time messaging, image uploads, and listing management. Grew to 750+ registered users with active daily listings and organic campus-wide adoption.",
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
        "750+ registered users with organic campus adoption",
        "Active daily listings across multiple categories",
        "Published on the iOS App Store",
        "Word-of-mouth growth without paid marketing",
      ],
      role: "Solo developer — full-stack development, App Store deployment, and community growth",
      timeline: "2024–2025 — Live",
    },
  },
];
