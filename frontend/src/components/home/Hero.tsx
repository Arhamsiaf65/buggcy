import { motion } from "framer-motion";
import icons from "../../assets/icons.webp";

/* ---------------- DATA ---------------- */
const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "6+", label: "Industries Served" },
  { value: "100%", label: "Client Focused" },
];

/* ---------------- ANIMATIONS ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* ---------------- HERO ---------------- */
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10" />

      <div className="section-container section-pad relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-7"
          >
            <motion.span variants={fadeUp} className="label-pill">
              Software Development Agency
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight"
            >
              From ideas to scalable {""}
              <span className="gradient-text">digital</span> experiences
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-lg max-w-xl leading-relaxed"
            >
              We design and build high-performance web and mobile solutions.
              From MVPs to enterprise systems engineered for growth.
            </motion.p>

            <motion.div variants={fadeUp} className="flex gap-4 flex-wrap">
              <a href="#contact" className="btn-primary">
                Let's Talk
              </a>

              <a href="#portfolio" className="btn-ghost">
                View Work
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex gap-10 pt-6 border-t border-border"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold gradient-text">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="hidden md:flex justify-center items-cente"
          >
            <img
              src={icons}
              alt="Technology icons"
              className="w-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
