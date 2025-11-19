import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Colors from "./components/Colors";
import Tech from "./components/Tech";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100/90 selection:bg-blue-500/30 selection:text-white">
      {/* Soft grid/pattern */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.15] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

      <Navbar />
      <Hero />
      <Features />
      <Colors />
      <Tech />

      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/70 text-sm">Inspired by the craftsmanship of great smartphones.</p>
          <div className="flex items-center gap-6 text-sm text-blue-200/70">
            <a className="hover:text-white transition" href="#features">Features</a>
            <a className="hover:text-white transition" href="#colors">Colors</a>
            <a className="hover:text-white transition" href="#tech">Tech</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
