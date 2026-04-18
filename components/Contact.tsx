"use client";

import { useState } from "react";
import { sendContactEmail } from "@/lib/contact";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const getContactMethods = () => [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: process.env.NEXT_PUBLIC_EMAIL,
    href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    label: "GitHub",
    value: process.env.NEXT_PUBLIC_GITHUB_URL?.replace('https://', ''),
    href: process.env.NEXT_PUBLIC_GITHUB_URL,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    value: process.env.NEXT_PUBLIC_LINKEDIN_URL?.replace('https://', ''),
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: process.env.NEXT_PUBLIC_PHONE,
    href: `tel:${process.env.NEXT_PUBLIC_PHONE_HREF}`,
  },
];

export default function Contact() {
  const sectionRef = useIntersectionObserver(0.1);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const CONTACT_METHODS = getContactMethods();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      await sendContactEmail({
        name: form.name,
        email: form.email,
        message: `I would love to connect. Message:\n\n${form.message}`,
      });
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMsg(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again."
      );
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-accent opacity-[0.04] blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="reveal mb-14 text-center">
          <div className="section-tag mb-4 justify-center">get in touch</div>
          <h2 className="section-title text-4xl lg:text-5xl">
            Let&apos;s <span className="text-accent">Connect</span>
          </h2>
          <p className="text-muted mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Whether you have an opportunity, a project idea, or just want to chat
            about tech — my inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="reveal reveal-delay-1 space-y-6">
            <div className="space-y-3">
              {CONTACT_METHODS.filter(m => m.value).map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href?.startsWith("http") ? "_blank" : undefined}
                  rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 bg-surface border border-[#1a1a2e] rounded-lg card-hover group"
                >
                  <span className="text-muted group-hover:text-accent transition-colors">
                    {icon}
                  </span>
                  <div>
                    <div className="font-mono text-xs text-muted mb-0.5">{label}</div>
                    <div className="text-sm text-white group-hover:text-accent transition-colors">
                      {value}
                    </div>
                  </div>
                  <svg
                    className="w-4 h-4 text-muted ml-auto group-hover:text-accent group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <div className="terminal-border">
              <div className="terminal-header">
                <div className="terminal-dot bg-[#ff5f57]" />
                <div className="terminal-dot bg-[#ffbd2e]" />
                <div className="terminal-dot bg-[#28c840]" />
                <span className="ml-4 text-muted font-mono text-xs">
                  ~/send-message
                </span>
              </div>

              <form
                onSubmit={handleSubmit}
                className="bg-[#080812] p-6 space-y-5"
              >
                <div>
                  <label className="font-mono text-xs text-muted block mb-2">
                    <span className="text-accent">$</span> name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    placeholder="Your name"
                    className="w-full bg-surface border border-[#1a1a2e] rounded px-4 py-3 text-white text-sm font-mono placeholder:text-[#3d3d5c] focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-muted block mb-2">
                    <span className="text-accent">$</span> email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder="your@email.com"
                    className="w-full bg-surface border border-[#1a1a2e] rounded px-4 py-3 text-white text-sm font-mono placeholder:text-[#3d3d5c] focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-muted block mb-2">
                    <span className="text-accent">$</span> message
                  </label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className="w-full bg-surface border border-[#1a1a2e] rounded px-4 py-3 text-white text-sm font-mono placeholder:text-[#3d3d5c] focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                {status === "success" && (
                  <div className="p-3 bg-accent/10 border border-accent/30 rounded font-mono text-xs text-accent">
                    ✓ Message sent! I&apos;ll get back to you soon.
                  </div>
                )}

                {status === "error" && (
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded font-mono text-xs text-red-400">
                    ✕ {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full justify-center"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="w-4 h-4 spinner" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      sending...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      send_message()
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
