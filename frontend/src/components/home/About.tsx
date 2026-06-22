const pillars = [
  { title: "Client Connection", desc: "Our relationship with clients sets us apart. We don't just build — we become a partner in your growth." },
  { title: "Cross-functional Teams", desc: "Collaboration across departments defines our strategy. Developers, engineers, and product minds working as one unit." },
  { title: "Ongoing Development", desc: "Agile execution with structured delivery. We ship continuously using systems we've refined across real projects." },
  { title: "Enterprise Experience", desc: "Leadership with Fortune 500 background brings scalable engineering practices to every product we build." },
];

export default function About() {
  return (
    <section id="about" className="bg-surface section-pad">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div className="space-y-6">
            <span className="label-pill">Why buggcy</span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}>
              A team that builds with{" "}
              <span className="gradient-text">intent</span> and precision
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We specialize in building scalable digital products and engineering systems
              that support real business growth. Our team blends technical depth with
              product thinking.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You don't just get developers — you get engineers who understand
              architecture, performance, and long-term product success.
            </p>
            <a href="#contact" className="btn-primary inline-flex mt-2">Work With Us</a>
          </div>

          {/* RIGHT */}
          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <div key={p.title}
                className="group card-base card-hover relative p-6 overflow-hidden">
                <div className="card-accent-bar" />

                {/* Number */}
                <span className="text-xs font-bold tracking-widest mb-3 block"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  0{i + 1}
                </span>

                <h3 className="font-semibold text-foreground mb-2"
                  style={{ fontFamily: "var(--font-display)" }}>
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
