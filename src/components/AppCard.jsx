import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PlatformBadge from "./PlatformBadge";
import AppIcon from "./AppIcon";

export default function AppCard({ app, index }) {
  return (
    <Link to={`/app/${app.id}`} className="block">
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative flex flex-col overflow-hidden rounded-2xl border border-surface-200 bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer"
      >
        <div className={`h-1.5 bg-gradient-to-r ${app.color}`} />

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div className="flex items-start gap-4">
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${app.color} text-2xl shadow-md`}
            >
              <AppIcon icon={app.icon} name={app.name} className="h-full w-full rounded-xl" />
            </div>
            <div className="min-w-0">
              <h3 className="text-lg font-bold leading-tight text-surface-900 truncate">
                {app.name}
              </h3>
              <p className="mt-0.5 text-sm text-surface-700/70">{app.tagline}</p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-surface-700">
            {app.description}
          </p>

          {app.tags?.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {app.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-primary-50 px-2 py-0.5 text-xs font-medium text-primary-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex-1" />

          <div className="flex flex-wrap gap-1.5">
            {app.platforms.map((p) => (
              <PlatformBadge key={p} platform={p} />
            ))}
          </div>

          <div className="border-t border-surface-100 pt-4">
            <span className="text-xs font-semibold text-primary-600 group-hover:text-primary-700 transition-colors">
              View details & contact &rarr;
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
