import { motion } from "framer-motion";

const colors = [
  { name: "Midnight", from: "from-slate-800", to: "to-slate-900" },
  { name: "Starlight", from: "from-yellow-50", to: "to-amber-100" },
  { name: "Blue", from: "from-blue-600", to: "to-indigo-700" },
  { name: "(PRODUCT)RED", from: "from-red-600", to: "to-rose-700" },
];

export default function Colors() {
  return (
    <section id="colors" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-white text-center"
        >
          Pick your finish
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {colors.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur group"
            >
              <div className={`h-40 rounded-xl bg-gradient-to-br ${c.from} ${c.to} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition opacity-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_40%)]" />
              </div>
              <div className="mt-4 text-center text-blue-100/90 font-medium">{c.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
