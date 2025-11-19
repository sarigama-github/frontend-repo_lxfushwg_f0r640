import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[700px] w-[1000px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)] blur-2xl" />
        <div className="pointer-events-none absolute -bottom-32 right-1/3 h-[500px] w-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_60%)] blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="py-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-100/80 mb-6">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            Now introducing the next iPhone experience
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.05]">
            iPhone. Beyond imagination.
          </h1>
          <p className="mt-6 text-blue-100/90 text-lg max-w-xl">
            Crafted from aerospace‑grade materials. A camera that changes the game. Blazing performance. All wrapped in a design that feels magic.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <button className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-blue-50 transition shadow-sm">
              Explore models
            </button>
            <button className="px-5 py-3 rounded-xl bg-white/10 text-white backdrop-blur hover:bg-white/15 border border-white/10 transition">
              Watch the film
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[600px]"
        >
          <div className="absolute inset-0 rounded-[28px] overflow-hidden border border-white/10 bg-black/40">
            {/* 3D iPhone with Spline */}
            <Spline scene="https://prod.spline.design/3m5vAua5jWQHc1cA/scene.splinecode" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
