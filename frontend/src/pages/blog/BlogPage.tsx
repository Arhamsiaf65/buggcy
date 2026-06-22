export default function BlogPage() {
  return (
    <section className="section-pad">
      <div className="section-container">
        <span className="label-pill">Blog</span>
        <h1 className="text-4xl font-extrabold mt-6">Our Insights</h1>
        <p className="text-muted-foreground mt-4 max-w-2xl">
          Read about engineering, product, and design topics from our team.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="card-base p-6">
            <h3 className="text-lg font-semibold">Building scalable web apps</h3>
            <p className="text-sm text-muted-foreground mt-2">Patterns and practices for robust systems.</p>
          </div>
          <div className="card-base p-6">
            <h3 className="text-lg font-semibold">Designing for conversion</h3>
            <p className="text-sm text-muted-foreground mt-2">Design techniques that improve engagement.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
