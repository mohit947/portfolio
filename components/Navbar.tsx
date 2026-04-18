"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

const resumeAnchor = process.env.NEXT_PUBLIC_RESUME_LINK;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-4 backdrop-blur-xl border-b border-[#1a1a2e] bg-[rgba(8,8,18,0.85)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-mono text-accent text-sm">~/</span>
            <span
              className="font-display font-bold text-white text-lg tracking-tight"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              mohit
              <span className="text-accent">.</span>
              jalan
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`nav-link text-sm ${
                  active === href.slice(1) ? "!text-accent" : ""
                }`}
              >
                <span className="text-accent opacity-60 text-xs mr-1">./</span>
                {label}
              </a>
            ))}
            <a
              href={resumeAnchor}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline !py-2 !px-4 text-xs ml-4"
              onClick={(e) => {
                e.preventDefault();
                window.open(resumeAnchor, "_blank", "noopener,noreferrer");
              }}
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
              </svg>
              resume
            </a>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-accent transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-accent transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-accent transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`mobile-menu fixed inset-0 z-40 bg-[#080812] flex flex-col items-center justify-center gap-8 ${
          menuOpen ? "open" : ""
        }`}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="font-mono text-2xl text-muted hover:text-accent transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <span className="text-accent">./</span>
            {label}
          </a>
        ))}
        <a
          href={resumeAnchor}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-4"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
            window.open(resumeAnchor, "_blank", "noopener,noreferrer");
          }}
        >
          download resume
        </a>
      </div>
    </>
  );
}
