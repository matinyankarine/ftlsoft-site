import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Clock, Shield, ExternalLink } from "lucide-react";
import apps from "../data/apps";
import PlatformBadge from "../components/PlatformBadge";
import AppIcon from "../components/AppIcon";

function linkLabel(key) {
  const map = {
    appStore: "App Store",
    playStore: "Google Play",
    web: "Website",
    github: "GitHub",
  };
  return map[key] ?? key;
}

export default function AppDetail() {
  const { id } = useParams();
  const app = apps.find((a) => a.id === id);

  if (!app) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-surface-50">
        <p className="text-lg text-surface-700">App not found.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all apps
        </Link>
      </div>
    );
  }

  const hasLinks = app.links && Object.keys(app.links).length > 0;

  return (
    <div className="min-h-screen bg-surface-50">
      {/* Hero */}
      <div className={`relative overflow-hidden bg-gradient-to-br ${app.color}`}>
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            All apps
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center text-white sm:flex-row sm:text-left sm:gap-6"
          >
            <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl bg-white/20 text-5xl backdrop-blur-sm shadow-lg">
              <AppIcon icon={app.icon} name={app.name} className="h-full w-full rounded-2xl" />
            </div>
            <div className="mt-4 sm:mt-0">
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                {app.name}
              </h1>
              <p className="mt-2 text-lg text-white/80">{app.tagline}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Left column — app details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 space-y-8"
          >
            <div>
              <h2 className="text-xl font-bold text-surface-900">About</h2>
              <p className="mt-3 leading-relaxed text-surface-700">
                {app.description}
              </p>
            </div>

            {app.tags?.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-surface-900">Categories</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {app.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h2 className="text-xl font-bold text-surface-900">Platforms</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {app.platforms.map((p) => (
                  <PlatformBadge key={p} platform={p} />
                ))}
              </div>
            </div>

            {hasLinks && (
              <div>
                <h2 className="text-xl font-bold text-surface-900">Download & Links</h2>
                <div className="mt-3 flex flex-wrap gap-3">
                  {Object.entries(app.links).map(([key, url]) => (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-surface-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-surface-700"
                    >
                      {linkLabel(key)}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Right column — contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl border border-surface-200 bg-white p-6 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-surface-900">Contact Us</h2>
              <p className="text-sm text-surface-700/70">
                Need help with {app.name}? We&apos;re here for you!
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-surface-900">Email</h3>
                    <a
                      href="mailto:matinyan.karine95@gmail.com"
                      className="text-sm text-primary-600 hover:text-primary-700 transition-colors break-all"
                    >
                      matinyan.karine95@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-surface-900">Response Time</h3>
                    <p className="text-sm text-surface-700/70">
                      We typically respond within 24–48 hours
                    </p>
                  </div>
                </div>

                {app.privacyPolicy && (
                  <a
                    href={app.privacyPolicy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-surface-200 p-4 transition-colors hover:bg-surface-50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-surface-900">Privacy Policy</h3>
                      <p className="text-sm text-surface-700/70">
                        View {app.name}&apos;s privacy policy
                      </p>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
