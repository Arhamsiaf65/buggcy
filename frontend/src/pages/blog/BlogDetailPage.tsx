import { useParams, Link } from "react-router-dom";
import { useBlogQuery } from "../../services/queries";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { useUiStore } from "../../store/uiStore";
import { useEffect } from "react";

export default function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data: blog, isLoading, isError } = useBlogQuery(id || "");
  const setGlobalLoading = useUiStore((state) => state.setGlobalLoading);

  // Example of using zustand for a global loading overlay
  useEffect(() => {
    setGlobalLoading(isLoading);
    return () => setGlobalLoading(false);
  }, [isLoading, setGlobalLoading]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (isError || !blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <h2 className="text-2xl font-bold text-destructive">Blog not found</h2>
        <Link to="/blog" className="text-primary hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
    >
      <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to all posts
      </Link>

      {blog.imageUrl && (
        <div className="w-full h-64 sm:h-96 rounded-2xl overflow-hidden mb-10 shadow-lg">
          <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="space-y-4 mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags?.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          {blog.title}
        </h1>
        
        <div className="flex items-center gap-6 text-muted-foreground pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <User size={18} />
            <span className="font-medium">{blog.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span className="font-medium">{new Date(blog.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
        {/* Replace newlines with paragraph breaks for basic markdown support */}
        {blog.content.split('\\n').map((paragraph, idx) => (
          <p key={idx} className="mb-6">{paragraph}</p>
        ))}
      </div>
    </motion.article>
  );
}
