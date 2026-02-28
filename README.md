# FTLSoft — Apps Preview

A modern, responsive website to showcase your apps across all platforms.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Adding a New App

Edit `src/data/apps.js` and add a new entry to the array:

```js
{
  id: "unique-id",
  name: "My New App",
  tagline: "Short one-liner",
  description: "A sentence or two about the app.",
  icon: "🎉",               // emoji or image URL
  platforms: ["ios", "web"], // ios | android | web | macos | windows | linux
  color: "from-blue-500 to-cyan-600",  // Tailwind gradient
  links: {
    appStore: "https://...",
    playStore: "https://...",
    web: "https://...",
    github: "https://...",
  },
  tags: ["Category"],
}
```

## Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy anywhere (Vercel, Netlify, GitHub Pages, etc.).

## Tech Stack

- **React 19** + **Vite 6** — fast dev & build
- **Tailwind CSS 4** — utility-first styling
- **Framer Motion** — smooth animations
- **Lucide React** — beautiful icons
