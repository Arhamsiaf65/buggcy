import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import b_logo from "../../assets/black-logo.png";

const links = {
  Services: ["Web Development", "Mobile Apps", "DevOps & Cloud"],
  Industries: ["Retail", "Travel & Tourism", "Finance"],
  Company: ["About Us", "Careers", "Contact"],
};

const socials = ["LinkedIn", "Twitter", "GitHub"];

export default function Footer() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    const syncTheme = () => {
      setDarkMode(localStorage.getItem("theme") === "dark");
    };

    window.addEventListener("theme-change", syncTheme);
    window.addEventListener("storage", syncTheme);

    return () => {
      window.removeEventListener("theme-change", syncTheme);
      window.removeEventListener("storage", syncTheme);
    };
  }, []);

  return (
    <footer className="border-t border-border bg-background">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <img src={darkMode ? logo : b_logo} className="h-10" alt="logo" />

            <p className="text-sm text-muted-foreground">
              Building scalable software products.
            </p>

            <Link to="/contact" className="text-sm gradient-text">
              contact@buggcy.com
            </Link>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-sm font-semibold">{group}</h4>
              <ul className="mt-3 space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <Link to="/" className="text-sm text-muted-foreground">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border my-8" />

        <div className="flex justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()}</p>

          <div className="flex gap-2">
            {socials.map((s) => (
              <a key={s} href="#">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
