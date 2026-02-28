/**
 * App catalog — add, remove, or reorder entries here.
 *
 * Each app object:
 *   name        – display name
 *   tagline     – short one-liner
 *   description – a sentence or two about the app
 *   icon        – emoji or URL to an icon image
 *   platforms   – array of: "ios" | "android" | "web" | "macos" | "windows" | "linux"
 *   color       – tailwind gradient classes used for the card accent
 *   links       – object with optional keys: appStore, playStore, web, github
 *   privacyPolicy – URL to the app's privacy policy page
 *   tags        – freeform labels for filtering
 */

const apps = [
  {
    id: "app-1",
    name: "Mindora",
    tagline: "Your AI-powered personal dictionary",
    description:
      "Learn new words, phrases, and definitions with ease. Mindora is your AI-powered personal dictionary.",
    icon: new URL("../AppIcons/mindora.png", import.meta.url).href,
    platforms: ["ios"],
    color: "from-indigo-500 to-purple-600",
    links: {
      appStore: "#https://apps.apple.com/am/app/mindora-build-your-vocab/id6758560477",
      // playStore: "#",
      // web: "#",
    },
    privacyPolicy: "https://docs.google.com/document/d/1z3iJz0-G4--uzib7ixlQ-BgkF9A1uIQdaHlH8cOQbgA/edit?tab=t.0",
    tags: ["Productivity", "Dictionary"],
  },
  // {
  //   id: "app-2",
  //   name: "PixelSnap",
  //   tagline: "Capture & annotate screenshots",
  //   description:
  //     "Take pixel-perfect screenshots, annotate them instantly, and share with your team in one click.",
  //   icon: "📸",
  //   platforms: ["macos", "windows"],
  //   color: "from-pink-500 to-rose-600",
  //   links: {
  //     web: "#",
  //   },
  //   tags: ["Design", "Utilities"],
  // },
  // {
  //   id: "app-3",
  //   name: "CloudVault",
  //   tagline: "Encrypted cloud storage",
  //   description:
  //     "End-to-end encrypted file storage with zero-knowledge architecture. Your files, truly private.",
  //   icon: "🔒",
  //   platforms: ["ios", "android", "web", "macos", "windows"],
  //   color: "from-emerald-500 to-teal-600",
  //   links: {
  //     appStore: "#",
  //     playStore: "#",
  //     web: "#",
  //   },
  //   tags: ["Security", "Cloud"],
  // },
];

export default apps;
