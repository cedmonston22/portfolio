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
    highlights: ["3.83 GPA", "Dean's List (Fall 2025, Winter 2026)"],
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
    company: "The Facility CA",
    role: "Employee",
    location: "Concord, CA",
    period: "Nov 2024 — Mar 2025",
    bullets: [
      "Promoted high customer satisfaction by resolving problems with knowledgeable and friendly service.",
      "Assisted with customer requests and answered questions to improve satisfaction.",
    ],
  },
  {
    company: "Math Tutor",
    role: "Self-Employed",
    location: "Clayton, CA",
    period: "Nov 2023 — Apr 2024",
    bullets: [
      "Led one-on-one tutoring sessions in Algebra 1 and Algebra 2 for middle and high school students.",
      "Offered both remote and in-person sessions, adapting teaching approach to each student.",
    ],
  },
];
