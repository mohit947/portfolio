import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import ExitIntentLayer from "@/components/ExitIntentLayer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || ""),
  title: {
    default: "Mohit Kumar Jalan — Full-Stack Engineer",
    template: "%s | Mohit Kumar Jalan",
  },
  description:
    "Full-stack software engineer with ~5 years of experience specializing in Next.js, React, and Django. Building scalable SaaS products and high-performance web applications.",
  keywords: [
    "Mohit Kumar Jalan",
    "Full Stack Developer",
    "NextJS Developer",
    "React Developer",
    "Django Developer",
    "Software Engineer",
    "Frontend Engineer",
    "Backend Engineer",
    "TypeScript",
    "GraphQL",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: "Mohit Kumar Jalan", url: process.env.NEXT_PUBLIC_SITE_URL || "" }],
  creator: "Mohit Kumar Jalan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "",
    siteName: "Mohit Kumar Jalan",
    title: "Mohit Kumar Jalan — Full-Stack Engineer",
    description:
      "Full-stack software engineer with ~5 years of experience specializing in Next.js, React, and Django.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohit Kumar Jalan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohit Kumar Jalan — Full-Stack Engineer",
    description:
      "Full-stack software engineer specializing in Next.js, React, and Django.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://mohitjalan.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Syne:wght@400..800&family=DM+Sans:ital,opsz,wght@0,9..40,100..900;1,9..40,100..900&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="noise">
        {children}
        <ExitIntentLayer />
      </body>
    </html>
  );
}
