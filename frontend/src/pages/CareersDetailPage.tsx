import { useParams, Link } from "react-router-dom";
import { useCareerQuery } from "../services/queries";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Briefcase, Building } from "lucide-react";

export default function CareerDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data: career, isLoading, isError } = useCareerQuery(id || "");

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (isError || !career) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <h2 className="text-2xl font-bold text-destructive">Position not found</h2>
        <Link to="/careers" className="text-primary hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Careers
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 min-h-screen"
    >
      <Link to="/careers" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to open positions
      </Link>

      <div className="bg-card text-card-foreground rounded-3xl p-8 sm:p-12 shadow-xl border border-border/50">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">{career.title}</h1>
            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>{career.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={18} />
                <span>{career.type}</span>
              </div>
              {career.department && (
                <div className="flex items-center gap-2">
                  <Building size={18} />
                  <span>{career.department}</span>
                </div>
              )}
            </div>
          </div>
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-md">
            Apply Now
          </button>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-4">About the Role</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {career.description}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Requirements</h2>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground text-lg">
              {career.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
