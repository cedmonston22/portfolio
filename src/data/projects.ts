export interface Project {
  slug: string;
  title: string;
  description?: string;
  meta: string[];
  highlights: [string, string, string];
  techStack: string[];
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
      "A buy-and-sell marketplace made just for Cal Poly students. You sign in with your school account, so everyone you're trading with is a verified classmate rather than an anonymous stranger. It runs on the web and on iPhone, and more than 1,000 students have signed up.",
    meta: ["1,000+ users", "iOS App Store", "Co-Founder & Full Stack Developer", "Mar 2026 — Present"],
    highlights: [
      "Launched a Cal Poly student marketplace, growing to 1,000+ users (400+ app downloads) via campus events and campaigns",
      "Engineered a listing pipeline integrating image uploads, Groq Vision auto-tagging, and input validation across 100+ listings",
      "Integrated Azure AD SSO with Cal Poly's identity provider to authenticate and gate the marketplace to verified students",
    ],
    techStack: ["TypeScript", "React", "Next.js", "Expo", "Firebase"],
    liveUrl: "https://www.mustang-market.com/login",
    appUrl: "https://apps.apple.com/us/app/mustang-market/id6759310029",
  },
  {
    slug: "catan-board-visualizer",
    title: "Catan Board Visualizer",
    description:
      "Take one photo of a physical Settlers of Catan board and get back a clean digital version of it, plus every player's visible score.",
    meta: [],
    highlights: [
      "Built a CV referee using YOLO11 and homography to read and regenerate a Catan board from one photo and score players",
      "Labeled 3,100+ pieces and trained 5 YOLO11 models; cut false detections 43% by targeting lighting where the model failed",
      "Raised number-token accuracy from 80% to 100% by catching the model reading terrain, not digits, and masking it out",
    ],
    techStack: ["Python", "PyTorch", "YOLO11", "OpenCV"],
    githubUrl: "https://github.com/cedmonston22/catan-board-visualizer",
  },
  {
    slug: "vision-guided-uav",
    title: "Vision Guided UAV (Simulation)",
    description: "Uses camera vision to automatically direct a drone over a moving marker.",
    meta: [],
    highlights: [
      "Built a vision-guided autonomy stack in PX4 SITL and Gazebo; closed-loop visual position hold in progress",
      "Developed real-time ArUco detection on a ROS 2 camera feed at 1.4–3.1 ms per 1280x960 frame, 99% detection at 9.4 m",
      "Traced a 4x camera frame-rate drop to UDP fragmentation; tuned kernel socket buffers to lift it from 6 to 24 Hz",
    ],
    techStack: ["Python", "PX4", "ROS 2", "Gazebo", "OpenCV", "MAVSDK"],
    githubUrl: "https://github.com/cedmonston22/vision-guided-uav",
  },
  {
    slug: "pii-cypher",
    title: "PII Cypher",
    description:
      "Batch-scrubs identifiers out of Schedule K-1s and puts them back on demand.",
    meta: [],
    highlights: [
      "Built a reversible PII tokenizer for tax PDFs, encrypting values under per-job AES-256-GCM keys, restorable on demand",
      "Benchmarked against 54 synthetic docs with 536 labeled identifiers across 6 PII types: 100% precision, 99% recall",
      "Verified redactions by comparing rasterized pages pixel by pixel at 150 DPI, catching failures text extraction misses",
    ],
    techStack: ["Python", "FastAPI", "PyMuPDF", "pdfplumber"],
    githubUrl: "https://github.com/cedmonston22/pii-cypher",
  },
  {
    slug: "envision-wardrobe",
    title: "ENVISION Wardrobe",
    description:
      "An iOS app that turns your closet into a digital wardrobe and picks outfits for you.",
    meta: [],
    highlights: [
      "Built an outfit engine scoring color harmony, pattern, clothing-fit, and weather, for 90+ TestFlight users",
      "Integrated Groq Vision API to detect clothing type, colors, patterns, brands, and upload items to a user's wardrobe from a photo",
      "Self-hosted background removal on Google Cloud using rembg and Docker, eliminating API costs",
    ],
    techStack: ["React Native", "Google Cloud", "Docker", "Expo"],
    appUrl: "https://testflight.apple.com/join/gv57D16y",
  },
];
