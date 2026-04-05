# Kian Andrei James — Portfolio

A fast, clean React + TypeScript portfolio. No heavy 3D, no bloat — just sharp design and smooth animations.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

---

## ✏️ How to Update Content (Blog-Post Style)

All content lives in `src/data/`. You never need to touch the components.

### Add a New Project → `src/data/projects.ts`

Copy this block and fill it in:

```ts
{
  id: 3,                          // increment from last project
  title: 'My New Project',
  period: 'Jan 2026 – Present',
  type: 'MERN',                   // short badge label
  category: 'Web',                // 'Web' | 'Mobile' | 'API'
  summary: 'One paragraph shown on the card.',
  highlights: [
    'Key thing you built',
    'Another achievement',
  ],
  stack: ['React', 'Node.js', 'MongoDB'],
  status: 'In Progress',          // 'Completed' | 'In Progress'
  githubUrl: 'https://github.com/Kian-James/my-project',  // optional
  liveUrl: 'https://my-project.vercel.app',               // optional
},
```

### Update Personal Info → `src/data/me.ts`
### Update Skills → `src/data/skills.ts`
### Update Certifications → `src/data/certifications.ts`

---

## 📁 Project Structure

```
src/
├── components/         # UI components (don't need to edit these)
│   ├── Nav.tsx / .module.css
│   ├── Hero.tsx / .module.css
│   ├── Skills.tsx / .module.css
│   ├── Projects.tsx / .module.css
│   ├── ProjectModal.tsx / .module.css
│   ├── Certifications.tsx / .module.css
│   ├── Contact.tsx / .module.css
│   └── Footer.tsx / .module.css
├── data/               # ✏️ EDIT THESE to update your portfolio
│   ├── me.ts           # Name, email, location, school
│   ├── projects.ts     # Your projects (add like blog posts)
│   ├── skills.ts       # Technical skills
│   └── certifications.ts
├── hooks/
│   └── useInView.ts    # Scroll animation hook
├── types/
│   └── index.ts        # TypeScript interfaces
├── App.tsx
├── main.tsx
└── index.css
```

---

## 🌐 Deploying to Vercel (Free)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deploys on every push.

## 🌐 Deploying to Netlify (Free)

```bash
npm run build
# drag the dist/ folder to netlify.com/drop
```

---

## 🛠️ Tech Stack

- **React 18** + **TypeScript**
- **Vite** — lightning-fast dev server & build
- **CSS Modules** — scoped styles, no class conflicts
- **IntersectionObserver** — scroll-triggered animations (no library needed)
- **Google Fonts** — Syne (display) + DM Sans (body) + DM Mono (code)
