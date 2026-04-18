export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohit Kumar Jalan",
    url: process.env.NEXT_PUBLIC_SITE_URL || "",
    email: process.env.NEXT_PUBLIC_EMAIL,
    telephone: process.env.NEXT_PUBLIC_PHONE_HREF,
    jobTitle: "Full-Stack Software Engineer",
    description:
      "Full-stack software engineer with ~5 years of experience specializing in Next.js, React, and Django. Building scalable SaaS products and high-performance web applications.",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "GLA University",
      sameAs: "https://www.gla.ac.in",
    },
    worksFor: {
      "@type": "Organization",
      name: "Expora",
    },
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Django",
      "Python",
      "GraphQL",
      "REST API",
      "AWS",
      "Docker",
      "PostgreSQL",
    ],
    sameAs: [
      process.env.NEXT_PUBLIC_GITHUB_URL,
      process.env.NEXT_PUBLIC_LINKEDIN_URL,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
