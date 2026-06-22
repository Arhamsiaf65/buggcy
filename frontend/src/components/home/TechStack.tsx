const stack = [
  { category: "Frontend", techs: ["React", "Next.js", "Vue", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", techs: ["Node.js", "Python", "Django", "Express", "GraphQL"] },
  { category: "Mobile", techs: ["React Native", "Flutter", "Swift", "Kotlin"] },
  { category: "DevOps", techs: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"] },
  { category: "Databases", techs: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase"] },
  { category: "Big Data", techs: ["Apache Kafka", "Spark", "ElasticSearch", "Data Pipelines"] },
];

const process = [
  { step: "Discovery", desc: "We dive deep into your business goals, users, and technical constraints." },
  { step: "Design", desc: "Wireframes, prototypes and UI design — validated with real users." },
  { step: "Build", desc: "Agile sprints with weekly demos. You're always in the loop." },
  { step: "Launch", desc: "Rigorous QA, CI/CD deployment, and go-live support." },
  { step: "Grow", desc: "Post-launch monitoring, optimisations, and feature roadmapping." },
];

export default function TechStack() {
  return (
    <section id="portfolio" className="bg-background section-pad">
      <div className="section-container space-y-20">

        {/* Tech Stack */}
        <div>
          <div className="mb-12 max-w-2xl">
            <span className="label-pill mb-4 block w-fit">Technology</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
              style={{ fontFamily: "var(--font-display)" }}>
              The right tool for the <span className="gradient-text">right job</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We've become experts in technologies that matter — so we can pick the right
              stack for your specific project.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stack.map((s) => (
              <div key={s.category} className="card-base p-5 hover:border-primary/30 transition-all duration-300">
                <h3 className="text-sm font-bold mb-3"
                  style={{ fontFamily: "var(--font-display)", background: "linear-gradient(135deg, #7C3AED, #06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {s.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {s.techs.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full text-muted-foreground"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(28,43,66,0.8)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div>
          <div className="mb-12 max-w-2xl">
            <span className="label-pill mb-4 block w-fit">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}>
              Our <span className="gradient-text">process</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-0 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-5 left-0 right-0 h-px z-0"
              style={{ background: "linear-gradient(90deg, #7C3AED20, #7C3AED40, #06B6D440, #06B6D420)" }} />

            {process.map((p, i) => (
              <div key={p.step} className="flex-1 relative z-10">
                <div className="md:pr-8">
                  <div className="w-10 h-10 rounded-full text-sm font-bold flex items-center justify-center mb-4 text-white"
                    style={{ background: "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)", boxShadow: "0 0 16px rgba(124,58,237,0.4)" }}>
                    {i + 1}
                  </div>
                  <h3 className="font-semibold text-foreground mb-1" style={{ fontFamily: "var(--font-display)" }}>
                    {p.step}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
