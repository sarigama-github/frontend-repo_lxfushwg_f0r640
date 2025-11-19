import { motion } from "framer-motion";
import { Camera, Cpu, Battery, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Pro‑level camera",
    desc: "Capture stunning detail with advanced computational photography and larger sensors.",
  },
  { icon: Cpu, title: "A‑series chip", desc: "Next‑gen performance with incredible power efficiency and speed." },
  { icon: Battery, title: "All‑day battery", desc: "Optimized for longer life with smart power management and fast charging." },
  { icon: ShieldCheck, title: "Privacy built‑in", desc: "Your data stays yours. End‑to‑end protections at every layer." },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-white text-center"
        >
          Built to amaze
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 grid place-items-center text-white shadow-[0_10px_30px_-10px_rgba(59,130,246,0.7)]">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-blue-100/90 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
