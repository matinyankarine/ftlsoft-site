export default function Footer() {
  return (
    <footer className="border-t border-surface-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-8 text-sm text-surface-700/60 sm:flex-row sm:justify-between">
        <span>&copy; {new Date().getFullYear()} FTLSoft. All rights reserved.</span>
        <span>Crafted with care.</span>
      </div>
    </footer>
  );
}
