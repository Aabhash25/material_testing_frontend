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
            Trusted material testing laboratory delivering accurate, reliable
            results for construction projects.
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
            <li>📍 5540 Centerview Dr, Ste #304 Raleigh, NC 27606</li>
            <li>📞 (919) 703-0222</li>
            <li>✉️ contact@ssncorporation.com</li>
            <li>🕐 Mon–Sat: 8am – 6pm</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 px-6 text-center font-ui text-xs text-white/30">
        © {new Date().getFullYear()} SSN Material Testing. All rights reserved.
      </div>
    </footer>
  );
}
