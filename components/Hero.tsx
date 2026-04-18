"use client";

import { useEffect, useState } from "react";
import { sendContactEmail } from "@/lib/contact";

const ROLES = [
  "Full-Stack Engineer",
  "Next.js Frontend Dev",
  "Django Backend Dev",
];


export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [typing, setTyping] = useState(true);
  const [heroName, setHeroName] = useState("");
  const [heroEmail, setHeroEmail] = useState("");
  const [heroStatus, setHeroStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [heroError, setHeroError] = useState("");

  useEffect(() => {
    const target = ROLES[roleIndex];
    let i = displayText.length;

    if (typing) {
      if (i < target.length) {
        const t = setTimeout(() => setDisplayText(target.slice(0, i + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (i > 0) {
        const t = setTimeout(
          () => setDisplayText(target.slice(0, i - 1)),
          40
        );
        return () => clearTimeout(t);
      } else {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [displayText, typing, roleIndex]);

  const handleHeroConnect = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroName || !heroEmail) {
      setHeroStatus("error");
      setHeroError("Please enter both your name and email.");
      return;
    }

    setHeroStatus("loading");
    setHeroError("");

    try {
      await sendContactEmail({
        name: heroName,
        email: heroEmail,
        message: `Hi Mohit, I'd like to connect via the hero terminal.\nName: ${heroName}\nEmail: ${heroEmail}`,
      });
      setHeroStatus("success");
      setHeroName("");
      setHeroEmail("");
    } catch (error) {
      setHeroStatus("error");
      setHeroError(
        error instanceof Error
          ? error.message
          : "Unable to send your request. Please try again."
      );
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen grid-bg flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent opacity-[0.04] blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-600 opacity-[0.05] blur-[100px]" />
      </div>


      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className="section-tag mb-6 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              available for opportunities
            </div>

            <div
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <p className="font-mono text-muted text-sm mb-3">
                Hello, World! I&apos;m
              </p>
              <h1
                className="section-title text-5xl lg:text-6xl xl:text-7xl mb-4"
                data-text="Mohit"
              >
                Mohit
                <br />
                <span className="section-title text-7xl lg:text-6xl xl:text-7xl" style={{color: "#00ff88"}}>Kumar</span> Jalan
              </h1>
            </div>

            <div
              className="flex items-center gap-3 mb-8 h-8 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
            >
              <span className="text-muted font-mono text-sm">&gt;&gt;</span>
              <span className="font-mono text-lg text-white">
                {displayText}
                <span className="animate-cursor-blink text-accent">|</span>
              </span>
            </div>

            <p
              className="text-muted leading-relaxed text-base max-w-lg mb-10 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.45s", animationFillMode: "forwards" }}
            >
              Full-stack engineer with <span className="text-white">~5 years</span> of
              experience crafting scalable SaaS products. Transforms complex
              requirements into elegant, high-performance applications across the
              entire stack.
            </p>

            <div
              className="flex items-center gap-6 mt-10 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.65s", animationFillMode: "forwards" }}
            >
              <a
                href={process.env.NEXT_PUBLIC_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors flex items-center gap-2 font-mono text-xs"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                mohit947
              </a>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                className="text-muted hover:text-accent transition-colors flex items-center gap-2 font-mono text-xs"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {process.env.NEXT_PUBLIC_EMAIL}
              </a>
            </div>
          </div>

          <div
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            <div className="terminal-border glow relative">
              <div className="terminal-header">
                <div className="terminal-dot bg-[#ff5f57]" />
                <div className="terminal-dot bg-[#ffbd2e]" />
                <div className="terminal-dot bg-[#28c840]" />
                <span className="ml-4 text-muted font-mono text-xs">
                  ~/connect/terminal
                </span>
              </div>

              <form
                onSubmit={handleHeroConnect}
                className="bg-[#080812] p-6 font-mono text-sm min-h-[320px] space-y-5"
              >
                <div className="text-[#7c3aed] text-xs uppercase tracking-[0.3em]">
                  connect("name", "email")
                </div>

                <div>
                  <label className="text-muted text-xs font-mono mb-2 block">
                    <span className="text-accent">$</span> name
                  </label>
                  <input
                    type="text"
                    value={heroName}
                    onChange={(e) => setHeroName(e.target.value)}
                    placeholder="Your name"
                    className="w-full bg-[#0d1123] border border-[#1a1a2e] rounded px-4 py-3 text-white placeholder:text-[#3d3d5c] focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="text-muted text-xs font-mono mb-2 block">
                    <span className="text-accent">$</span> email
                  </label>
                  <input
                    type="email"
                    value={heroEmail}
                    onChange={(e) => setHeroEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-[#0d1123] border border-[#1a1a2e] rounded px-4 py-3 text-white placeholder:text-[#3d3d5c] focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                {heroStatus === "success" && (
                  <div className="p-3 bg-accent/10 border border-accent/30 rounded font-mono text-xs text-accent">
                    ✓ Connect request submitted! I&apos;ll follow up soon.
                  </div>
                )}

                {heroStatus === "error" && (
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded font-mono text-xs text-red-400">
                    ✕ {heroError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={heroStatus === "loading"}
                  className="btn-primary w-full justify-center"
                >
                  {heroStatus === "loading" ? "connecting..." : "connect()"}
                </button>

                <p className="text-muted text-xs">
                  This quick terminal sends a connection request directly.
                </p>
              </form>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { value: "~5", label: "Years Exp." },
                { value: "30%", label: "API Perf. Gain" },
                { value: "20%", label: "User Engagement ↑" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-surface border border-[#1a1a2e] rounded-lg p-4 text-center card-hover"
                >
                  <div className="font-display font-bold text-2xl text-accent mb-1 font-mono"
                    style={{ fontFamily: "JetBrains Mono, Fira Code, SF Mono, Monaco, Inconsolata, Roboto Mono, monospace" }}>
                    {value}
                  </div>
                  <div className="text-muted text-xs font-mono">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 lg:mt-24">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted hover:text-accent transition-colors animate-float"
          >
            <span className="font-mono text-xs">scroll</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
