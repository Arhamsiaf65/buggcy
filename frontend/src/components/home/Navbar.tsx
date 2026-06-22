import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact Us", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-[0_1px_20px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="section-container h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display font-bold text-xl text-foreground tracking-tight flex items-center gap-2"
        >
          <img className="w-full h-8" src={logo} />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex btn-primary text-sm px-5 py-2"
        >
          Let's Talk
        </a>

        {/* Mobile button */}
        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="section-container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground py-1"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary text-sm text-center mt-2"
              onClick={() => setOpen(false)}
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
