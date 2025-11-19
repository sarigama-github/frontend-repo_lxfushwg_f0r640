import { Menu, Smartphone, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl/80 bg-slate-900/40 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 grid place-items-center shadow-[0_10px_30px_-10px_rgba(59,130,246,0.7)]">
            <Smartphone className="text-white" size={18} />
          </div>
          <span className="text-white font-semibold tracking-tight">iPhone Studio</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-blue-100/90">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#design" className="hover:text-white transition">Design</a>
          <a href="#colors" className="hover:text-white transition">Colors</a>
          <a href="#tech" className="hover:text-white transition">Tech</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:inline-flex px-4 py-2 rounded-xl bg-white text-slate-900 text-sm font-medium hover:bg-blue-50 transition shadow-sm">
            Buy
          </button>
          <button className="md:hidden p-2 rounded-xl hover:bg-white/10 transition">
            <Menu className="text-white" size={20} />
          </button>
          <button className="p-2 rounded-xl hover:bg-white/10 transition">
            <ShoppingCart className="text-white" size={20} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
