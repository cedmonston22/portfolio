import type { Metadata } from "next";
import { Outfit, Space_Mono } from "next/font/google";
import "./globals.css";
import WireframeBackground from "@/components/wireframe-background";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { DRONE_INTRO_GATE } from "@/components/drone-intro-gate";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const siteUrl = "https://www.coleedmonston.me";

export const metadata: Metadata = {
  title: {
    default: "Cole Edmonston | Software Engineer",
    template: "%s | Cole Edmonston",
  },
  description:
    "Computer Science student at Cal Poly SLO working across the stack: React, React Native, Python, AWS. Creator of Mustang Market (900+ users) and ENVISION Wardrobe.",
  metadataBase: new URL(siteUrl),
  keywords: [
    "Cole Edmonston",
    "software engineer",
    "Cal Poly SLO",
    "full-stack developer",
    "backend engineer",
    "distributed systems",
    "React Native",
    "Next.js",
    "Python",
    "AWS",
    "portfolio",
  ],
  authors: [{ name: "Cole Edmonston" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Cole Edmonston",
    title: "Cole Edmonston | Software Engineer",
    description:
      "Computer Science student at Cal Poly SLO working across the stack: React, React Native, Python, AWS. Creator of Mustang Market (900+ users) and ENVISION Wardrobe.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cole Edmonston | Software Engineer",
    description:
      "Computer Science student at Cal Poly SLO working across the stack: React, React Native, Python, AWS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${outfit.variable} ${spaceMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: DRONE_INTRO_GATE }} />
        <WireframeBackground />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-bg-primary focus:font-semibold"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main" className="min-h-dvh">{children}</main>
        <Footer />
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
