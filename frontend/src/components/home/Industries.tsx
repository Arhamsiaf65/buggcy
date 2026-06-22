import {
  ShoppingCart,
  Plane,
  UtensilsCrossed,
  Landmark,
  GraduationCap,
  Car,
} from "lucide-react";

const industries = [
  {
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    desc: "Fast, scalable commerce platforms that improve buyer journeys and streamline seller operations.",
  },
  {
    icon: Plane,
    title: "Travel & Tourism",
    desc: "Booking systems, customer portals, and operational tools for modern travel businesses.",
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Grocery",
    desc: "End-to-end delivery and inventory platforms powering modern grocery ecosystems.",
  },
  {
    icon: Landmark,
    title: "Finance & Banking",
    desc: "Secure, scalable financial systems with high-performance APIs and compliance-first architecture.",
  },
  {
    icon: GraduationCap,
    title: "Education & E-learning",
    desc: "Learning platforms that enable scalable, accessible, and structured digital education.",
  },
  {
    icon: Car,
    title: "On-Demand Services",
    desc: "Marketplace and service platforms powering real-time delivery and service economies.",
  },
];

export default function Industries() {
  return (
    <section className="section-pad relative overflow-hidden">
      {/* Background glow */}
      <div className="hero-glow glow-violet w-96 h-96 -top-20 -left-20" />
      <div className="hero-glow glow-cyan w-80 h-80 bottom-0 right-0" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="label-pill mb-5">
            Industries
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
            We build for real-world scale
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Through custom software development, we help companies across
            multiple industries design systems that are scalable, reliable,
            and performance-driven.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
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

                {/* Icon */}
                <div
                  className="
                    mb-5
                    w-14 h-14
                    rounded-2xl
                    flex items-center justify-center
                    bg-surface
                    border border-border
                    transition-all duration-300
                    group-hover:scale-110
                    group-hover:border-primary/40
                  "
                >
                  <Icon
                    size={28}
                    className="text-primary transition-transform duration-300 group-hover:rotate-6"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {industry.desc}
                </p>

                {/* Hover glow */}
                <div
                  className="
                    absolute
                    -right-20
                    -top-20
                    w-40
                    h-40
                    rounded-full
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                    glow-violet
                  "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}