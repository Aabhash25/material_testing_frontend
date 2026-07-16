import { Link } from "react-router-dom";
import logo from "../../assets/images/ssn.webp";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
        {/* Brand */}
        <div>
          <div className="mb-6">
            <img
              src={logo}
              alt="SSN Material Testing"
              className="h-16 w-auto object-contain"
            />
          </div>

          <p className="font-body text-sm leading-relaxed text-white/50 max-w-xs">
            Independent material testing laboratory delivering accurate and
            reliable results for construction projects across South Atlantic
            States.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-white font-bold text-sm tracking-widest uppercase mb-6">
            Contact Us
          </h4>

          <ul className="flex flex-col gap-5 font-body text-sm text-white/50">
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
                className="hover:text-accent transition-colors duration-200 break-all"
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

          <ul className="flex flex-col gap-5">
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

        {/* Follow Us */}
        <div>
          <h4 className="font-display text-white font-bold text-sm tracking-widest uppercase mb-6">
            Follow Us
          </h4>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/ssn-material-testing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white transition-all duration-300"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61591476885717"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all duration-300"
            >
              <FaFacebookF size={18} />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/ssncorporation/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-[#E4405F] hover:border-[#E4405F] hover:text-white transition-all duration-300"
            >
              <FaInstagram size={18} />
            </a>
          </div>

          <p className="mt-5 text-sm text-white/50 max-w-xs">
            Follow us on social media for updates, project highlights, and
            company news.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-6 text-center font-ui text-xs text-white/30">
        © {new Date().getFullYear()} SSN Material Testing. All rights reserved.
      </div>
    </footer>
  );
}
