import { Link } from "react-router-dom";

const LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white/60">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">⚗</span>
            <div>
              <div className="font-display text-white font-bold text-lg tracking-widest">
                SSN
              </div>
              <div className="font-ui text-accent text-[10px] tracking-[2px] uppercase">
                Material Testing
              </div>
            </div>
          </div>
          <p className="font-body text-sm leading-relaxed text-white/50 max-w-xs">
            Independent material testing laboratory delivering accurate,
            reliable results for construction projects.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-white font-bold text-sm tracking-widest uppercase mb-5">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            {LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="font-body text-sm text-white/50 hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-white font-bold text-sm tracking-widest uppercase mb-5">
            Contact Us
          </h4>
          <ul className="flex flex-col gap-3 font-body text-sm text-white/50">
            <li>📍 6500 McDonough Dr, Suite E-04, Norcross, Georgia 30093</li>
            <li>
              📞{" "}
              <a
                href="tel:4705045962"
                className="hover:text-accent transition-colors duration-200"
              >
                (470) 504-5962
              </a>
            </li>
            <li>
              ✉️{" "}
              <a
                href="mailto:ssnmaterialtesting@gmail.com"
                className="hover:text-accent transition-colors duration-200"
              >
                ssnmaterialtesting@gmail.com
              </a>
            </li>
            <li>🕐 Mon–Fri: 9:00 AM – 5:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 px-6 text-center font-ui text-xs text-white/30">
        © {new Date().getFullYear()} SSN Material Testing. All rights reserved.
      </div>
    </footer>
  );
}
