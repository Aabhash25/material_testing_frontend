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
      <div className="max-w-7xl mx-auto px-10 py-20 flex flex-col md:flex-row md:justify-between gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-accent rounded px-2 py-1">
              <div className="font-display text-white font-black text-xl tracking-widest">
                SSN
              </div>
            </div>
            <div>
              <div className="font-display text-white font-bold text-base leading-tight">
                SSN Material
              </div>
              <div className="font-ui text-accent text-[10px] tracking-[2px] uppercase">
                Testing Lab
              </div>
            </div>
          </div>

          <p className="font-body text-sm leading-relaxed text-white/50 max-w-xs">
            Independent material testing laboratory delivering accurate and
            reliable results for construction projects across Georgia.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-white font-bold text-sm tracking-widest uppercase mb-6">
            Contact Us
          </h4>

          <ul className="flex flex-col gap-4 font-body text-sm text-white/50">
            <li className="flex items-start gap-3">
              <span className="mt-0.5">📍</span>
              <span>
                6500 McDonough Dr, Suite E-04, Norcross, Georgia 30093
              </span>
            </li>

            <li className="flex items-center gap-3">
              <span>📞</span>
              <a
                href="tel:4705045962"
                className="hover:text-accent transition-colors duration-200"
              >
                (470) 504-5962
              </a>
            </li>

            <li className="flex items-center gap-3">
              <span>✉️</span>
              <a
                href="mailto:ssnmaterialtesting@gmail.com"
                className="hover:text-accent transition-colors duration-200"
                style={{ wordBreak: "break-all" }}
              >
                ssnmaterialtesting@gmail.com
              </a>
            </li>

            <li className="flex items-center gap-3">
              <span>🕐</span>
              <span>Mon–Fri: 7:00 AM – 4:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-white font-bold text-sm tracking-widest uppercase mb-6">
            Quick Links
          </h4>

          <ul className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="font-body text-sm text-white/50 hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-3 h-0.5 bg-accent/40 group-hover:bg-accent transition-all duration-200 inline-block" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 px-6 text-center font-ui text-xs text-white/30">
        © {new Date().getFullYear()} SSN Material Testing. All rights reserved.
      </div>
    </footer>
  );
}
