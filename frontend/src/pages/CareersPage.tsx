import { Link } from "react-router-dom";
import { useCareersQuery } from "../services/queries";
import { MapPin, Briefcase } from "lucide-react";

export default function CareersPage() {
  const { data: careers, isLoading, isError } = useCareersQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (isError || !careers) {
    return <div className="section-pad text-center text-destructive">Failed to load careers.</div>;
  }

  return (
    <section className="section-pad">
      <div className="section-container">
        <span className="label-pill">Careers</span>
        <h1 className="text-4xl font-extrabold mt-6">Join our team</h1>
        <p className="text-muted-foreground mt-4 max-w-2xl">
          We're hiring engineers, designers, and product people.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {careers.map((career) => (
            <Link 
              key={career.id} 
              to={`/careers/${career.id}`}
              className="card-base p-6 hover:border-primary/50 transition-all group block cursor-pointer"
            >
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{career.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2 mb-4">{career.description}</p>
              
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1 bg-surface px-2 py-1 rounded-md border border-border">
                  <MapPin size={14} />
                  <span>{career.location}</span>
                </div>
                <div className="flex items-center gap-1 bg-surface px-2 py-1 rounded-md border border-border">
                  <Briefcase size={14} />
                  <span>{career.type}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
