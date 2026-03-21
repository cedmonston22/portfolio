import type { Metadata } from "next";
import { Outfit, Space_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const siteUrl = "https://coleedmonston.com";

export const metadata: Metadata = {
  title: "Cole Edmonston | Software Developer",
  description:
    "Software developer at Cal Poly SLO building full-stack web and mobile apps. Creator of Mustang Market (700+ users), ENVISION Wardrobe, and more.",
  metadataBase: new URL(siteUrl),
  keywords: [
    "Cole Edmonston",
    "software developer",
    "Cal Poly SLO",
    "full-stack developer",
    "React Native",
    "Next.js",
    "portfolio",
  ],
  authors: [{ name: "Cole Edmonston" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Cole Edmonston",
    title: "Cole Edmonston | Software Developer",
    description:
      "Software developer at Cal Poly SLO building full-stack web and mobile apps. Creator of Mustang Market (700+ users), ENVISION Wardrobe, and more.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Cole Edmonston — Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cole Edmonston | Software Developer",
    description:
      "Software developer at Cal Poly SLO building full-stack web and mobile apps.",
    images: ["/og-image.svg"],
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
      className={`${outfit.variable} ${spaceMono.variable} antialiased`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-bg-primary focus:font-semibold"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
