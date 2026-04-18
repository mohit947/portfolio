"use client";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const EXPERIENCES = [
  {
    company: "Expora",
    role: "Software Engineer II",
    period: "Aug 2023 – Present",
    type: "Full-time",
    companyType: "Product-based Startup",
    current: true,
    color: "#00ff88",
    highlights: [
      "Architected and built applications from scratch, designing scalable system architecture and leading technical decisions.",
      "Led full-stack architecture for scalable SaaS applications, driving key technical decisions around system design, performance, and maintainability.",
      "Reduced API response times by 30% by architecting optimized Django & GraphQL backends with efficient data flow patterns.",
      "Built and owned reusable component libraries and design systems, ensuring UI consistency across all dashboards.",
      "Drove end-to-end feature delivery — from requirement analysis to production — while mentoring interns and collaborating cross-functionally.",
      "Established coding standards, led code reviews, and promoted best practices to improve code quality across the team.",
      "Leveraged AI-assisted development tools to accelerate delivery cycles and improve engineering efficiency.",
    ],
    stack: ["Next.js", "React", "Django", "GraphQL", "AWS", "TypeScript", "Tailwind"],
  },
  {
    company: "Toothsi",
    role: "Software Engineer I",
    period: "Jun 2022 – Jul 2023",
    type: "Full-time",
    companyType: "Product-based Startup",
    current: false,
    color: "#7c3aed",
    highlights: [
      "Developed and maintained customer-facing web applications using React and Next.js, improving user engagement by 20%.",
      "Built a reusable React component library, reducing feature delivery time by 30% and standardizing UI consistency.",
      "Implemented SSR and SEO best practices (meta tags, structured data, performance optimization) for improved search visibility.",
      "Debugged complex frontend/backend issues, reducing production defects by 25% and improving system stability.",
      "Worked cross-functionally with design, product, and QA teams to deliver high-quality features, reducing post-release bugs by 30%.",
    ],
    stack: ["React", "Next.js", "NestJS", "REST API", "Redux", "Storybook"],
  },
  {
    company: "Toothsi",
    role: "Software Developer Intern",
    period: "Jun 2021 – Jun 2022",
    type: "Internship",
    companyType: "Product-based Startup",
    current: false,
    color: "#f59e0b",
    highlights: [
      "Built frontend features using React and integrated backend APIs for internal dashboards.",
      "Gained hands-on experience with production deployments, CI/CD workflows, and real-world software development.",
      "Contributed to QA by validating features, identifying defects, and ensuring stable production releases.",
      "Collaborated with engineers and stakeholders to gather requirements and deliver well-tested features on time.",
    ],
    stack: ["React", "JavaScript", "Git", "CSS3"],
  },
];

export default function Experience() {
  const sectionRef = useIntersectionObserver(0.05);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-accent opacity-[0.03] blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-14">
          <div className="section-tag mb-4">where I&apos;ve worked</div>
          <h2 className="section-title text-4xl lg:text-5xl">
            Work <span className="text-accent">Experience</span>
          </h2>
        </div>

        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-[#7c3aed] to-transparent" />

          <div className="space-y-14">
            {EXPERIENCES.map((exp, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} relative`}
              >
                <div
                  className="absolute -left-8 md:-left-12 top-1 w-3 h-3 rounded-full border-2 border-bg"
                  style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}66` }}
                />

                <div className="bg-surface border border-[#1a1a2e] rounded-xl p-6 md:p-8 card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3
                          className="font-display font-bold text-white text-xl"
                          style={{ fontFamily: "Syne, sans-serif" }}
                        >
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/30 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse inline-block" />
                            current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className="font-mono text-sm font-semibold"
                          style={{ color: exp.color }}
                        >
                          {exp.company}
                        </span>
                        <span className="text-[#1a1a2e]">·</span>
                        <span className="font-mono text-xs text-white px-2 py-0.5 bg-bg rounded border border-[#1a1a2e]">
                          {exp.type}
                        </span>
                        <span className="font-mono text-xs text-muted px-2 py-0.5 bg-bg rounded border border-[#1a1a2e]">
                          {exp.companyType}
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-muted bg-bg px-3 py-1.5 rounded border border-[#1a1a2e]">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1a1a2e]">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-bg border border-[#1a1a2e] text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 reveal">
          <div className="section-tag mb-8">education</div>
          <div className="bg-surface border border-[#1a1a2e] rounded-xl p-6 md:p-8 card-hover">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3
                  className="font-display font-bold text-white text-xl mb-1"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  B.Tech — Computer Science & Engineering
                </h3>
                <span className="font-mono text-sm text-accent">GLA University</span>
              </div>
              <span className="font-mono text-xs text-muted bg-bg px-3 py-1.5 rounded border border-[#1a1a2e]">
                Aug 2018 – May 2022
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
