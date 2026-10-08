import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/ssn.webp";
import { CONTACT_INFO } from "../../data/siteData";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  // { label: "Our Team", path: "/team" },
];

const PHONE_HREF = "tel:+14705045962";

const PhoneIcon = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1z" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg py-3 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="SSN Corporation"
            className="h-15 w-auto object-contain"
            style={{ filter: "brightness(1.1) saturate(1.2)" }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `font-ui text-sm font-semibold uppercase tracking-wider transition-colors duration-200
                ${isActive ? "text-accent" : "text-white/80 hover:text-white"}`
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* Phone */}
          <a
            href={PHONE_HREF}
            aria-label={`Call ${CONTACT_INFO.phone}`}
            className="flex items-center gap-2 font-ui text-sm font-semibold text-white/80 hover:text-accent transition-colors duration-200"
          >
            <PhoneIcon className="w-4 h-4 text-accent" />
            <span className="hidden lg:inline">{CONTACT_INFO.phone}</span>
          </a>

          {/* Contact CTA */}
          <Link
            to="/contact"
            className="font-ui text-sm font-bold uppercase tracking-wider bg-accent hover:bg-accent/90 text-white px-5 py-2.5 rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile: call button + hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <a
            href={PHONE_HREF}
            aria-label={`Call ${CONTACT_INFO.phone}`}
            className="w-9 h-9 flex items-center justify-center bg-accent text-white rounded"
          >
            <PhoneIcon className="w-4 h-4" />
          </a>
          <button
            className="flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `font-ui text-sm font-semibold uppercase tracking-wider
                ${isActive ? "text-accent" : "text-white/80"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 font-ui text-sm font-semibold text-white/80"
          >
            <PhoneIcon className="w-4 h-4 text-accent" />
            {CONTACT_INFO.phone}
          </a>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="font-ui text-sm font-bold uppercase tracking-wider bg-accent text-white px-5 py-3 rounded text-center"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
