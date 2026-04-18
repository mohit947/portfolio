"use client";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const FACTS = [
  { icon: "🎓", text: "B.Tech CSE from GLA University (2022)" },
  { icon: "🏢", text: "Currently @ Expora as Software Engineer II" },
  { icon: "⚡", text: "Specialize in full-stack SaaS architecture" },
  { icon: "🛠", text: "Fan of clean code & design systems" },
  { icon: "🤖", text: "Leverage AI tools to 50x engineering output" },
  { icon: "🌐", text: "Built for scale, optimized for performance" },
];

export default function About() {
  const sectionRef = useIntersectionObserver(0.15);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-900 opacity-[0.04] blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-14">
          <div className="section-tag mb-4">who I am</div>
          <h2 className="section-title text-4xl lg:text-5xl">
            About <span className="text-accent">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <p className="text-muted leading-relaxed text-base reveal reveal-delay-1">
              A passionate full-stack software engineer with nearly{" "}
              <span className="text-white font-medium">5 years of experience</span>{" "}
              crafting scalable SaaS applications. Specializes in end-to-end development
              across the entire stack — from pixel-perfect React/Next.js interfaces
              to robust Django/GraphQL backends.
            </p>
            <p className="text-muted leading-relaxed text-base reveal reveal-delay-2">
              At <span className="text-accent font-medium">Expora</span>, I lead
              full-stack architecture decisions, mentor engineers, and have driven
              a{" "}
              <span className="text-white font-medium">30% reduction in API response times</span>{" "}
              through thoughtful backend optimization. I care deeply about
              developer experience, code quality, and systems that scale.
            </p>
            <p className="text-muted leading-relaxed text-base reveal reveal-delay-3">
              Previously at <span className="text-white font-medium">Toothsi</span>,
              I improved user engagement by 20%, built a reusable React component
              library that cut feature delivery time by 30%, and implemented
              best-in-class SSR & SEO strategies.
            </p>

            
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FACTS.map(({ icon, text }, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} bg-surface border border-[#1a1a2e] rounded-lg p-4 card-hover`}
              >
                <span className="text-2xl block mb-3">{icon}</span>
                <p className="text-muted text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-[#1a1a2e]">
          {[
            { number: "~5", label: "Years Experience" },
            { number: "2", label: "Companies" },
            { number: "3+", label: "Production Apps" },
            { number: "∞", label: "Curiosity" },
          ].map(({ number, label }) => (
            <div key={label} className="text-center reveal">
              <div
                className="text-4xl font-bold text-accent mb-2 font-mono"
                style={{ fontFamily: "JetBrains Mono, Fira Code, SF Mono, Monaco, Inconsolata, Roboto Mono, monospace" }}
              >
                {number}
              </div>
              <div className="text-muted text-sm font-mono">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
