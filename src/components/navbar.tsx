"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
];

export default function Navbar(): React.ReactElement {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const [isInExperience, setIsInExperience] = useState(false);

  if (pathname !== menuPath) {
    setMenuPath(pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;
    const targets = ["experience", "skills"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const visible = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        }
        setIsInExperience(visible.size > 0);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (href: string): boolean => {
    if (href === "/") return pathname === "/" && !isInExperience;
    if (href === "/#experience") return pathname === "/" && isInExperience;
    return pathname.startsWith(href);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-bg-primary/80 backdrop-blur-xl border-b border-border-subtle shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-end px-6 py-5 md:px-8">
        <ul className="hidden gap-8 md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative font-mono text-xs tracking-wider uppercase transition-colors hover:text-gold after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full ${
                    active ? "text-gold after:w-full" : "text-text-muted after:w-0"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <span
            className={`absolute block h-[1.5px] w-5 bg-text-secondary transition-all duration-300 ${isOpen ? "rotate-45" : "-translate-y-1.5"}`}
          />
          <span
            className={`absolute block h-[1.5px] w-5 bg-text-secondary transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`absolute block h-[1.5px] w-5 bg-text-secondary transition-all duration-300 ${isOpen ? "-rotate-45" : "translate-y-1.5"}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-bg-primary/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => {
                const active = isActive(link.href);
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`font-mono text-lg tracking-widest uppercase transition-colors hover:text-gold ${
                        active ? "text-gold" : "text-text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
