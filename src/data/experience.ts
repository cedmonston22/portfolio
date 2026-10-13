export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  techStack: string[];
  bullets: string[];
}

export const experience: Experience[] = [
  {
    company: "Cal Poly DxHub",
    role: "Software Engineering Intern",
    location: "San Luis Obispo, CA",
    period: "Oct 2026 — Present",
    techStack: [],
    bullets: [],
  },
  {
    company: "Mustang Market",
    role: "Co-Founder & Full Stack Developer",
    location: "San Luis Obispo, CA",
    period: "Mar 2026 — Present",
    techStack: ["TypeScript", "React", "Next.js", "Expo", "Firebase"],
    bullets: [
      "Launched a Cal Poly student marketplace, growing to 1,000+ users (400+ app downloads) via campus events and campaigns",
      "Engineered a listing pipeline integrating image uploads, Groq Vision auto-tagging, and input validation across 100+ listings",
      "Integrated Azure AD SSO with Cal Poly's identity provider to authenticate and gate the marketplace to verified students",
    ],
  },
  {
    company: "Spread Goodness",
    role: "Software Engineering Intern",
    location: "Remote · Santa Barbara, CA",
    period: "May 2026 — Sep 2026",
    techStack: ["JavaScript", "React", "Playwright", "Docker", "Firebase"],
    bullets: [
      "Built Playwright regression suites for two critical user flows, automatically validating pull requests from 20+ developers",
      "Designed seed data generation to simulate realistic user states, enabling consistent, repeatable test runs",
      "Developed reusable authentication fixtures for six permission levels, eliminating redundant logins across Playwright test runs",
    ],
  },
];
