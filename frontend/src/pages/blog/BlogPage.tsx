import { Link } from "react-router-dom";
import { useBlogsQuery } from "../../services/queries";

export default function BlogPage() {
  const { data: blogs, isLoading, isError } = useBlogsQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (isError || !blogs) {
    return <div className="section-pad text-center text-destructive">Failed to load blogs.</div>;
  }

  return (
    <section className="section-pad">
      <div className="section-container">
        <span className="label-pill">Blog</span>
        <h1 className="text-4xl font-extrabold mt-6">Our Insights</h1>
        <p className="text-muted-foreground mt-4 max-w-2xl">
          Read about engineering, product, and design topics from our team.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <Link 
              key={blog.id} 
              to={`/blog/${blog.id}`}
              className="card-base p-6 hover:border-primary/50 transition-all group block cursor-pointer"
            >
              {blog.imageUrl && (
                <div className="w-full h-40 rounded-xl overflow-hidden mb-4">
                  <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
              )}
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{blog.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{blog.content}</p>
              <div className="mt-4 flex items-center text-xs text-muted-foreground gap-4">
                <span>{blog.author}</span>
                <span>{new Date(blog.date).toLocaleDateString()}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
