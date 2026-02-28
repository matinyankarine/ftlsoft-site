import AppCard from "./AppCard";

export default function AppGrid({ apps }) {
  if (apps.length === 0) {
    return (
      <p className="py-20 text-center text-surface-300">
        No apps to show yet — check back soon!
      </p>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {apps.map((app, i) => (
          <AppCard key={app.id} app={app} index={i} />
        ))}
      </div>
    </section>
  );
}
