import { useParams, Link } from "react-router-dom";
import { useServiceQuery } from "../services/queries";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data: service, isLoading, isError } = useServiceQuery(id || "");

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (isError || !service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <h2 className="text-2xl font-bold text-destructive">Service not found</h2>
        <Link to="/services" className="text-primary hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative py-24 sm:py-32 bg-primary/5 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Link to="/services" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to services
          </Link>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
          >
            {service.title}
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            {service.description}
          </motion.p>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold">Service Details</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              {service.detailedContent || service.description}
            </div>
          </div>

          <div className="bg-card text-card-foreground rounded-2xl p-8 shadow-lg border border-border/50 h-fit">
            <h3 className="text-2xl font-bold mb-6">Key Features</h3>
            <ul className="space-y-4">
              {service.features.map((feature, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                  <span className="text-muted-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>
            <button className="w-full mt-8 bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-xl font-semibold transition-colors">
              Request Service
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
