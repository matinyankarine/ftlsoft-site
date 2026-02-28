import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-primary-400)_0%,_transparent_60%)] opacity-30" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 text-center text-white sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
            <Rocket className="h-6 w-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight">FTLSoft</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
        >
          Apps built for the way
          <br />
          <span className="text-primary-200">you work & play</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/80"
        >
          A growing collection of thoughtfully crafted software — from
          productivity tools to creative utilities. Explore what we&apos;ve been
          building.
        </motion.p>
      </div>
    </header>
  );
}
