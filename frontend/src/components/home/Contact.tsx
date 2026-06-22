import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  service: z.string().min(1),
  message: z.string().min(20).max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-xs text-destructive mt-1">{message}</p>;
}

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-border bg-surface text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:border-primary/50 transition-all duration-200";

const infoItems = [
  { icon: "📧", text: "contact@buggcy.com" },
  { icon: "🌍", text: "Global clients · Based in Pakistan" },
  { icon: "⚡", text: "React · Node · Cloud · Mobile" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", service: "", message: "" },
  });

  async function onSubmit(_: ContactFormData) {
    await new Promise((r) => setTimeout(r, 900));
    setSent(true);
  }

  return (
    <section id="contact" className="bg-surface section-pad relative overflow-hidden">
      {/* Ambient */}
      <div className="hero-glow glow-violet w-[500px] h-[500px] bottom-0 right-0 opacity-30" />

      <div className="section-container relative z-10 space-y-16">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="label-pill mx-auto">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}>
            Let's build something <span className="gradient-text">impactful</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Whether it's a product idea or a full-scale system, we respond fast and
            focus on real engineering solutions — not sales talk.
          </p>
          <a href="mailto:contact@buggcy.com"
            className="inline-flex mt-2 border border-border px-6 py-2.5 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200">
            contact@buggcy.com
          </a>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              Start a conversation
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Share your idea, challenge, or product vision. We usually respond
              within 24 hours with clear next steps.
            </p>
            <div className="space-y-3">
              {infoItems.map((item) => (
                <div key={item.text}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div className="p-8 rounded-2xl text-center space-y-2 border"
                style={{ background: "rgba(124,58,237,0.05)", borderColor: "rgba(124,58,237,0.2)" }}>
                <p className="text-xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>Message sent 🎉</p>
                <p className="text-sm text-muted-foreground">We'll respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input {...register("name")} placeholder="Your name"
                      className={`${inputClass} ${errors.name ? "border-destructive" : ""}`} />
                    <FieldError message={errors.name?.message} />
                  </div>
                  <div>
                    <input {...register("email")} placeholder="Email address"
                      className={`${inputClass} ${errors.email ? "border-destructive" : ""}`} />
                    <FieldError message={errors.email?.message} />
                  </div>
                </div>

                <div>
                  <select {...register("service")}
                    className={`${inputClass} ${errors.service ? "border-destructive" : ""}`}>
                    <option value="">Select service</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile Development</option>
                    <option value="cloud">Cloud / DevOps</option>
                    <option value="saas">SaaS Product</option>
                    <option value="other">Other</option>
                  </select>
                  <FieldError message={errors.service?.message} />
                </div>

                <div>
                  <textarea {...register("message")} rows={5}
                    placeholder="Tell us about your project..."
                    className={`${inputClass} resize-none ${errors.message ? "border-destructive" : ""}`} />
                  <FieldError message={errors.message?.message} />
                </div>

                <button type="submit" disabled={isSubmitting}
                  className="w-full text-white font-semibold py-3 rounded-xl transition-all duration-200 disabled:opacity-60 active:scale-[0.99]"
                  style={{ background: "linear-gradient(135deg, #7C3AED 0%, #7C3AED 100%)", boxShadow: "0 0 20px rgba(124,58,237,0.3)" }}>
                  {isSubmitting ? "Sending..." : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
