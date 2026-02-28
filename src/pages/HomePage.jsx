import Header from "../components/Header";
import AppGrid from "../components/AppGrid";
import Footer from "../components/Footer";
import apps from "../data/apps";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-surface-50">
        <AppGrid apps={apps} />
      </main>
      <Footer />
    </div>
  );
}
