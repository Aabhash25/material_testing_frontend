import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="bg-bg py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-primary rounded-2xl px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Background dot pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
          />

          {/* Accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />

          {/* Text */}
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-accent" />
              <span className="font-ui text-accent text-xs font-semibold uppercase tracking-[3px]">
                Get Started Today
              </span>
            </div>
            <h2
              className="font-display font-extrabold text-white leading-none mb-4"
              style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
            >
              NEED A MATERIAL <br />
              TESTING REPORT?
            </h2>
            <p className="font-body text-white/60 text-base max-w-md leading-relaxed">
              Contact us today and get accurate, certified test reports
              delivered fast. We serve contractors, engineers, and government
              projects across Nepal.
            </p>
          </div>

          {/* Buttons */}
          <div className="relative flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 flex-shrink-0">
            <Link
              to="/contact"
              className="font-ui text-sm font-bold uppercase tracking-wider bg-accent hover:bg-accent-light text-white px-8 py-4 rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-center"
            >
              Get a Quote
            </Link>
            <Link
              to="/services"
              className="font-ui text-sm font-bold uppercase tracking-wider border border-white/30 hover:border-white text-white/80 hover:text-white px-8 py-4 rounded transition-all duration-200 text-center"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
