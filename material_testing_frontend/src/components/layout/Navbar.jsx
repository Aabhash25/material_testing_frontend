import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? "bg-primary shadow-lg py-3" : "bg-transparent py-5"}`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          {/* <span className="text-3xl">⚗</span> */}
          <div className="w-9 h-9 bg-accent rounded flex items-center justify-center">
            <span className="font-display text-white font-black text-sm">
              SSN
            </span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-white font-bold text-xl tracking-widest">
              SSN
            </div>
            <div className="font-ui text-accent text-[10px] tracking-[2px] uppercase">
              Material Testing
            </div>
          </div>
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
          <Link
            to="/contact"
            className="font-ui text-sm font-bold uppercase tracking-wider bg-accent hover:bg-accent-light text-white px-5 py-2.5 rounded transition-all duration-200 hover:-translate-y-0.5"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
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
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="font-ui text-sm font-bold uppercase tracking-wider bg-accent text-white px-5 py-3 rounded text-center"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
