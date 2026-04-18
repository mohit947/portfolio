"use client";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { SiReact, SiTypescript, SiTailwindcss, SiRedux, SiCypress, SiPython, SiGraphql, SiNestjs, SiPostgresql, SiDocker, SiGit, SiN8N } from "react-icons/si";
import {
  FaAws} from "react-icons/fa";
import {TbApi} from "react-icons/tb"

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    icon: "◈",
    color: "#00ff88",
    skills: [
      { name: "React / Next.js", Icon: SiReact, level: 95 },
      { name: "TypeScript / JavaScript (ES6+)", Icon: SiTypescript, level: 92 },
      { name: "Tailwind CSS / CSS3", Icon: SiTailwindcss, level: 88 },
      { name: "Redux / State Management", Icon: SiRedux, level: 85 },
      { name: "Cypress (Testing)", Icon: SiCypress, level: 78 },
    ],
  },
  {
    title: "Backend",
    icon: "◉",
    color: "#7c3aed",
    skills: [
      { name: "Django / Python", Icon: SiPython, level: 90 },
      { name: "GraphQL API", Icon: SiGraphql, level: 87 },
      { name: "REST API Design", Icon: TbApi, level: 93 },
      { name: "NestJS / Node.js", Icon: SiNestjs, level: 78 },
      { name: "PostgreSQL / MySQL", Icon: SiPostgresql, level: 85 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "◎",
    color: "#f59e0b",
    skills: [
      { name: "AWS (EC2, S3, Lambda)", Icon: FaAws, level: 80 },
      { name: "Docker / Containerization", Icon: SiDocker, level: 82 },
      { name: "CI/CD Pipelines", Icon: SiGit, level: 85 },
      { name: "Git / GitHub", Icon: SiGit, level: 95 },
      { name: "n8n (Workflow Automation)", Icon: SiN8N, level: 75 },
    ],
  },
];

export default function Skills() {
  const sectionRef = useIntersectionObserver(0.1);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding relative bg-surface"
    >
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="reveal mb-14">
          <div className="section-tag mb-4">what I work with</div>
          <h2 className="section-title text-4xl lg:text-5xl">
            Tech <span className="text-accent">Stack</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {SKILL_CATEGORIES.map(({ title, icon, color, skills }, ci) => (
            <div
              key={title}
              className={`reveal reveal-delay-${ci + 1} bg-bg border border-[#1a1a2e] rounded-xl p-6 card-hover`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-2xl font-mono"
                  style={{ color }}
                >
                  {icon}
                </span>
                <h3
                  className="font-display font-bold text-white text-lg"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {title}
                </h3>
              </div>

              <div className="space-y-3">
                {skills.map(({ name, Icon }) => (
                  <div
                    key={name}
                    className="skill-item rounded-2xl border border-[#161828] bg-[#090b17]/80 p-4 transition-all duration-300 hover:border-accent/50 hover:bg-[#0c1130]"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5"
                        style={{ color }}
                      >
                        <Icon size={24} />
                      </span>
                      <p className="font-medium text-white">{name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
    ))}
        </div>
      </div>
    </section>
  );
}
