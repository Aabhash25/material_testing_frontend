import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-primary flex items-center">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />

      <div className="relative max-w-6xl mx-auto px-6 py-32">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="font-ui text-accent text-xs font-semibold uppercase tracking-[3px]">
              Certified Material Testing Lab
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-white font-extrabold leading-none mb-6"
            style={{ fontSize: "clamp(48px, 8vw, 88px)" }}
          >
            PRECISION <br />
            <span className="text-accent">TESTING.</span> <br />
            TRUSTED <br />
            RESULTS.
          </h1>

          {/* Subtext */}
          <p className="font-body text-white/60 text-lg leading-relaxed mb-10 max-w-xl">
            SSN Material Testing Laboratory provides accurate, reliable testing
            for concrete, soil, steel, asphalt, and more — serving construction
            projects across Nepal.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/services"
              className="font-ui text-sm font-bold uppercase tracking-wider bg-accent hover:bg-accent-light text-white px-8 py-4 rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              View Our Services
            </Link>
            <Link
              to="/contact"
              className="font-ui text-sm font-bold uppercase tracking-wider border border-white/30 hover:border-white text-white/80 hover:text-white px-8 py-4 rounded transition-all duration-200"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-bg to-transparent" />
    </section>
  );
}
