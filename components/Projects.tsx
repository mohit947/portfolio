"use client";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const PROJECTS = [
  {
    title: "Expora SaaS Platform",
    description:
      "Led the full-stack architecture and development of a scalable B2B SaaS platform. Designed reusable component libraries, built GraphQL APIs, and reduced API response times by 30% through optimization.",
    tags: ["Next.js", "React", "Django", "GraphQL", "AWS", "TypeScript"],
    metrics: ["30% faster APIs", "Multi-tenant", "Design System"],
    icon: "◈",
    color: "#00ff88",
    type: "Professional",
  },
  {
    title: "Customer Engagement Platform",
    description:
      "Built customer-facing web applications at Toothsi with SSR, SEO optimization, and a shared component library. Improved user engagement by 20% and reduced time-to-feature by 30%.",
    tags: ["Next.js", "React", "SSR", "SEO", "Redux", "Node.js"],
    metrics: ["20% engagement ↑", "30% faster dev", "SEO optimized"],
    icon: "◉",
    color: "#7c3aed",
    type: "Professional",
  },
  {
    title: "Design System & Component Library",
    description:
      "Architected and built a scalable design system and reusable component library from scratch, used across multiple products. Standardized UI patterns, reduced defects, and accelerated team velocity.",
    tags: ["React", "TypeScript", "Tailwind", "Storybook", "Figma"],
    metrics: ["Cross-product", "Standardized UI", "Team velocity ↑"],
    icon: "◎",
    color: "#f59e0b",
    type: "Internal Tool",
  },
  {
    title: "Workflow Automation Engine",
    description:
      "Built automation workflows using n8n to streamline repetitive business processes, reducing manual work. Integrated with third-party APIs, Slack, and databases to create end-to-end pipelines.",
    tags: ["n8n", "REST APIs", "PostgreSQL", "Docker", "AWS"],
    metrics: ["Automated pipelines", "API integrations", "Zero manual ops"],
    icon: "⬡",
    color: "#06b6d4",
    type: "Internal Tool",
  },
];

export default function Projects() {
  const sectionRef = useIntersectionObserver(0.1);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding relative bg-surface"
    >
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="reveal mb-14">
          <div className="section-tag mb-4">what I&apos;ve built</div>
          <h2 className="section-title text-4xl lg:text-5xl">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl text-sm leading-relaxed">
            A selection of impactful projects I&apos;ve led or contributed to across
            my professional journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} group relative bg-bg border border-[#1a1a2e] rounded-xl p-6 card-hover overflow-hidden`}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at top left, ${project.color}08, transparent 70%)`,
                }}
              />

              <div className="relative flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span
                    className="text-2xl font-mono"
                    style={{ color: project.color }}
                  >
                    {project.icon}
                  </span>
                  <span
                    className="font-mono text-xs px-2 py-0.5 rounded border"
                    style={{
                      color: project.color,
                      borderColor: `${project.color}40`,
                      background: `${project.color}10`,
                    }}
                  >
                    {project.type}
                  </span>
                </div>
                
              </div>

              <h3
                className="font-display font-bold text-white text-lg mb-3 group-hover:text-accent transition-colors"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {project.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.metrics.map((m) => (
                  <span
                    key={m}
                    className="font-mono text-xs px-2.5 py-1 rounded-full"
                    style={{
                      color: project.color,
                      background: `${project.color}12`,
                      border: `1px solid ${project.color}30`,
                    }}
                  >
                    {m}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1a1a2e]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-1 bg-surface border border-[#1a1a2e] rounded text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal">
        </div>
      </div>
    </section>
  );
}
