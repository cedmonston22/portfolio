export interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  appUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Intake",
    description:
      "AI-powered nutrition and supplement scanner app that lets users scan any food or supplement label with their camera and instantly receive a personalized ingredient breakdown. Uses Gemini 2.5 Flash Vision for single-call label analysis, scoring products on Safety, Dosing, and Transparency at ~$0.002 per scan.",
    techStack: ["React Native", "Expo", "Supabase", "Gemini AI"],
    image: "/projects/intake.png",
    liveUrl: "https://intake-landing.vercel.app/",
    appUrl: "https://testflight.apple.com/join/TvSsMYsf",
  },
  {
    title: "ENVISION Wardrobe",
    description:
      "iOS wardrobe management app taken from concept to TestFlight deployment with 90+ beta users. Features AI-powered clothing analysis via Groq's Llama 4 Vision API, automatically detecting garment categories, colors, patterns, and brands from user photos.",
    techStack: ["React Native", "Expo", "Firebase", "Groq AI", "TypeScript"],
    image: "/projects/envision.png",
    appUrl: "https://testflight.apple.com/join/gv57D16y",
  },
  {
    title: "NoteSeq",
    description:
      "Real-time collaborative note-taking app inspired by Notion and Logseq. Features block-based WYSIWYG editing powered by TipTap, live multiplayer cursors via Yjs CRDT, bidirectional backlinks, an interactive knowledge graph, daily journals, and a full import/export system.",
    techStack: ["Next.js", "Convex", "TipTap", "Yjs", "Tailwind CSS"],
    image: "/projects/noteseq.png",
    githubUrl: "https://github.com/cedmonston22/noteseq",
  },
  {
    title: "Mustang Market",
    description:
      "Peer-to-peer marketplace for Cal Poly students enabling secure buying and selling of campus items. Features real-time messaging, image uploads, and listing management. Grew to 700+ registered users with active daily listings and organic campus-wide adoption.",
    techStack: ["Next.js", "TypeScript", "Firebase", "Firestore"],
    image: "/projects/mustang-market.png",
    liveUrl: "https://www.mustang-market.com/login",
    appUrl: "https://apps.apple.com/us/app/mustang-market/id6759310029",
  },
];
