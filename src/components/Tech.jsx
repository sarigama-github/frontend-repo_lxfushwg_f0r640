import { motion } from "framer-motion";

export default function Tech() {
  return (
    <section id="tech" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-white text-center"
        >
          A feat of engineering
        </motion.h2>

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-8"
          >
            <h3 className="text-white font-semibold text-xl">Custom silicon</h3>
            <p className="mt-2 text-blue-100/90">
              The A‑series chip powers everything brilliantly. Designed for efficiency and speed, with advanced Neural Engine cores for on‑device intelligence.
            </p>
            <div className="mt-6 h-56 rounded-xl bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_60%)] border border-white/10" />
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-8"
          >
            <h3 className="text-white font-semibold text-xl">Display brilliance</h3>
            <p className="mt-2 text-blue-100/90">
              ProMotion with adaptive refresh up to 120Hz makes everything feel fluid. HDR brightness, true‑to‑life color, and incredible contrast.
            </p>
            <div className="mt-6 h-56 rounded-xl bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_60%)] border border-white/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
