import logo from "../../assets/logo.png";


const links = {
  Services: ["Web Development", "Mobile Apps", "DevOps & Cloud", "E-commerce", "Fintech", "EdTech"],
  Industries: ["Retail", "Travel & Tourism", "Food & Grocery", "Finance", "Education", "On-Demand"],
  Company: ["About Us", "Portfolio", "Careers", "Blog", "Contact"],
};

const socials = ["LinkedIn", "Twitter", "Instagram", "GitHub"];

export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="section-container py-16 space-y-12">

        <div className="grid md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
             <img className="h-10" src={logo} alt="" />
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-sm text-sm">
              Turning your digital ideas into scalable products. We build software systems
              designed for performance, growth, and long-term stability.
            </p>
            <a href="mailto:contact@buggcy.com"
              className="inline-flex text-sm font-medium gradient-text hover:opacity-80 transition">
              contact@buggcy.com
            </a>
          </div>

          {/* Link groups */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group} className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                {group}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Buggcy. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <a key={social} href="#"
                className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
