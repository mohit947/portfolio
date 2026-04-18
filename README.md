# Mohit Kumar Jalan — Portfolio

A high-performance, SEO-optimized personal portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Features a modern design with animations, contact form, and deployment-ready setup.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with custom animations and cursor effects
- **SEO Optimized**: Meta tags, structured data, sitemap, robots.txt, and dynamic OG images
- **Contact Form**: Integrated email functionality using Nodemailer
- **Performance**: Fast loading with Next.js optimizations and Tailwind CSS
- **PWA Ready**: Progressive Web App manifest for mobile installation
- **Type-Safe**: Full TypeScript implementation
- **Customizable**: Easy to update content via environment variables

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Icons**: React Icons
- **Fonts**: JetBrains Mono, Syne, DM Sans
- **Email**: Nodemailer (Gmail)
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + animations
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── opengraph-image.tsx # Dynamic OG image
│   └── api/
│       └── contact/
│           └── route.ts    # Contact form API
├── components/
│   ├── Cursor.tsx          # Custom cursor
│   ├── Navbar.tsx          # Sticky navbar
│   ├── Hero.tsx            # Hero section with typewriter
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills with animated bars
│   ├── Experience.tsx      # Work timeline
│   ├── Projects.tsx        # Featured projects
│   ├── Contact.tsx         # Contact form + methods
│   ├── JsonLd.tsx          # Structured data for SEO
│   └── ExitIntentLayer.tsx # Exit intent modal
├── public/
│   ├── manifest.json       # PWA manifest
│   ├── robots.txt          # SEO robots
│   └── icon.svg            # Favicon
├── lib/
│   └── contact.ts          # Contact utilities
├── .env.example            # Environment variables template
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Fill in your values in `.env.local`

5. Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or issues, please open an issue on GitHub or contact via the portfolio contact form.
