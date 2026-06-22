import { motion } from "framer-motion";
import { CheckCircle2, Rocket, Code, Globe2 } from "lucide-react";

const highlights = [
  { title: "Global Reach", desc: "Serving clients across the globe from Oslo, Norway to Pakistan.", icon: Globe2 },
  { title: "Innovative Solutions", desc: "We design, engineer, and develop top-tier software solutions.", icon: Code },
  { title: "Tech-savvy Environment", desc: "A perfect blend of designers, engineers, and business minds.", icon: Rocket },
  { title: "Unmatched Services", desc: "Second-to-none engineering and support to solve technical challenges.", icon: CheckCircle2 },
];

export default function About() {
  return (
    <section className="bg-surface section-pad relative overflow-hidden pt-32">
      {/* Ambient background glows */}
      <div className="hero-glow glow-violet w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2 opacity-20" />
      <div className="hero-glow glow-cyan w-[400px] h-[400px] bottom-0 right-0 opacity-20" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Header Section */}
          <div className="text-center space-y-6">
            <span className="label-pill mx-auto">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Your Outsourcing <br />
              <span className="gradient-text">Software Development</span> Partners
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Turning your digital dreams into reality with cutting-edge technology and a passion for excellence.
            </p>
          </div>

          {/* Main Content Body */}
          <div className="grid md:grid-cols-2 gap-12 mt-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 text-muted-foreground leading-relaxed text-lg"
            >
              <p>
                Based in Oslo, Norway we at <strong>buggcy</strong> aim to grab the leading position as an outsourcing software development company. We develop innovative software solutions for enterprises located all across the globe, helping them grow their business by increasing their online presence. 
              </p>
              <p>
                For several years, we have been building software products using a team of designers and business people. The combined efforts of this team create a tech-savvy environment with an acute business sense. At <strong>buggcy</strong>, we work to be at the front of web-based business initiatives.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.title} className="card-base p-6 space-y-4 hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{h.title}</h3>
                      <p className="text-sm leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
