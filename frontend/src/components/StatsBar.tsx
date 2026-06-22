import { motion } from "framer-motion"

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "8", label: "Industry Verticals" },
  { value: "PK & NO", label: "Global Presence" },
  { value: "AI", label: "Native Engineering" },
]

export default function StatsBar() {
  return (
    <div className="w-full border-y border-border bg-surface/50 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border/0 md:divide-border">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <div className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="font-mono text-sm text-foreground/60 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
