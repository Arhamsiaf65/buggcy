export default function CareersPage() {
  return (
    <section className="section-pad">
      <div className="section-container">
        <span className="label-pill">Careers</span>
        <h1 className="text-4xl font-extrabold mt-6">Join our team</h1>
        <p className="text-muted-foreground mt-4 max-w-2xl">
          We're hiring engineers, designers, and product people.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="card-base p-6">
            <h3 className="text-lg font-semibold">Frontend Engineer</h3>
            <p className="text-sm text-muted-foreground mt-2">React, TypeScript, and strong UI skills.</p>
          </div>
          <div className="card-base p-6">
            <h3 className="text-lg font-semibold">Product Designer</h3>
            <p className="text-sm text-muted-foreground mt-2">Design systems and UX-driven product work.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
