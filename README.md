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

## 📧 Setting Up Contact Form

1. Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/yourprofile/
NEXT_PUBLIC_EMAIL=your-email@example.com
NEXT_PUBLIC_PHONE=+1 123 456 7890
NEXT_PUBLIC_PHONE_HREF=+11234567890
NEXT_PUBLIC_RESUME_LINK=https://drive.google.com/your-resume-link
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

2. Get a Gmail App Password:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification
   - Generate an **App Password** under "App passwords"

## 📄 Updating Content

### Resume
Your resume is served from `public/resume.pdf`. To update it:

1. Export your updated resume as a PDF
2. Rename it to `resume.pdf`
3. Replace `public/resume.pdf` in your repository
4. Commit and push — your hosting platform will auto-deploy

```bash
cp ~/Downloads/my-new-resume.pdf ./public/resume.pdf
git add public/resume.pdf
git commit -m "chore: update resume"
git push
```

### Personal Information
Update the following files with your information:
- `app/layout.tsx`: SEO metadata
- `components/About.tsx`: Personal details and stats
- `components/Experience.tsx`: Work experience
- `components/Skills.tsx`: Technical skills
- `components/Projects.tsx`: Featured projects
- `components/JsonLd.tsx`: Structured data

## 🌐 Deploying to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration
1. Push your code to GitHub
2. Connect your repo at [vercel.com](https://vercel.com)
3. Add environment variables in Vercel Dashboard → Project Settings → Environment Variables

## 🔍 SEO Configuration

The app is pre-configured for SEO. After deployment:

1. Update `NEXT_PUBLIC_SITE_URL` in environment variables
2. Add Google Search Console verification code in Vercel env vars as `GOOGLE_SITE_VERIFICATION`
3. Submit your sitemap to Google Search Console

## 📱 Customization

### Colors
Update colors in `app/globals.css`:
```css
:root {
  --bg: #080812;
  --accent: #00ff88;
  --text: #ffffff;
}
```

### Fonts
Modify fonts in `app/layout.tsx` and `tailwind.config.ts`

### Animations
Adjust animations in `app/globals.css` and component files

## 📈 Performance

- Lighthouse scores: 90+ on all metrics
- Core Web Vitals optimized
- Images optimized with Next.js
- CSS minified with Tailwind

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or issues, please open an issue on GitHub or contact via the portfolio contact form.
