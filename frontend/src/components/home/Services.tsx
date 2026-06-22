import {
  Code2,
  Smartphone,
  Cloud,
  ShoppingCart,
  Landmark,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "From Frontend to Backend to Full-stack, we fast-track your project delivery to create experiences beyond your expectations.",
    tags: ["React", "Node.js", "Next.js"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Native and cross-platform mobile apps built for performance, usability, and scale across iOS and Android.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    desc: "From Big Data to DevOps, we streamline your infrastructure so your team can focus on shipping great software.",
    tags: ["AWS", "Docker", "CI/CD"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    desc: "Custom e-commerce platforms designed for retail — including real-time inventory and scalable architecture.",
    tags: ["Shopify", "Custom", "Headless"],
  },
  {
    icon: Landmark,
    title: "Fintech & Banking",
    desc: "We build secure financial systems for banks, exchanges, and brokers with scalable APIs and architecture.",
    tags: ["Trading", "Accounting", "APIs"],
  },
  {
    icon: GraduationCap,
    title: "EdTech Solutions",
    desc: "Educational platforms built for modern learning experiences and scalable remote education systems.",
    tags: ["E-learning", "LMS", "Video"],
  },
];

export default function Services() {
  return (
    <section className="section-pad relative overflow-hidden">
      {/* Glow Background */}
      <div className="hero-glow glow-violet w-96 h-96 -top-20 -left-20" />
      <div className="hero-glow glow-cyan w-80 h-80 bottom-0 right-0" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="label-pill">What We Do</span>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-5">
            Services built for scale
          </h2>

          <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
            Our focus areas cover a wide range of software and web development —
            whatever your business needs, we’ve got you covered.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;

            return (
              <div
                key={s.title}
                className="
                  group
                  card-base
                  card-hover
                  relative
                  overflow-hidden
                  p-7
                "
              >
                <div className="card-accent-bar" />

                {/* Top Hover Line */}
                <div className="absolute top-0 left-0 w-full h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-primary to-transparent" />

                {/* Icon */}
                <div
                  className="
                    w-14 h-14
                    rounded-2xl
                    bg-surface
                    border border-border
                    flex items-center justify-center
                    mb-5
                    transition-all duration-300
                    group-hover:scale-110
                    group-hover:border-primary/40
                  "
                >
                  <Icon
                    className="text-primary transition-transform duration-300 group-hover:rotate-6"
                    size={26}
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="
                        text-xs px-3 py-1 rounded-full
                        border border-border
                        bg-surface
                        text-muted-foreground
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Glow */}
                <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity glow-violet" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}