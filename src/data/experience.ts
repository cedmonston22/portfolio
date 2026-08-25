export interface Education {
  school: string;
  degree: string;
  location: string;
  year: string;
  highlights: string[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
}

export const education: Education[] = [
  {
    school: "California Polytechnic State University",
    degree: "B.S. Computer Science",
    location: "San Luis Obispo, CA",
    year: "2029",
    highlights: ["3.82 GPA", "President's List (2025–2026)"],
  },
  {
    school: "Clayton Valley Charter High School",
    degree: "",
    location: "Clayton, CA",
    year: "2025",
    highlights: [
      "AP Scholar with Honors",
      "Scholastic Athlete Award (4 Years)",
      "NCS 2nd Team All-League (Baseball)",
    ],
  },
];

export const experience: Experience[] = [
  {
    company: "Spread Goodness",
    role: "Software Engineering Intern",
    location: "Remote · Santa Barbara, CA",
    period: "May 2026 — Present",
    bullets: [
      "Built regression test suites for critical user flows using Docker containers and the Firebase emulator.",
      "Designed and implemented seed data generation to simulate realistic user states, enabling consistent, repeatable test runs.",
      "Wrote test scripts with Playwright, integrated with GitHub Actions to run automated regression checks on every change.",
    ],
  },
  {
    company: "Math Tutor",
    role: "Self-Employed",
    location: "Hybrid · Clayton, CA",
    period: "Nov 2023 — Apr 2024",
    bullets: [
      "Helped students improve grades through structured one-on-one sessions in Algebra 1 and Algebra 2.",
      "Tracked student grades on a graph to give them a visual representation of their growth.",
      "Adapted teaching approach to individual learning styles, delivering sessions both remotely and in-person.",
    ],
  },
];
