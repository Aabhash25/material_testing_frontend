import { Link } from "react-router-dom";

const STATS = [
  { val: "24–48hrs", lbl: "Report Delivery" },
  { val: "500+", lbl: "Projects Tested" },
  { val: "15+", lbl: "Years Experience" },
];

export default function CTA() {
  return (
    <section className="bg-white border-t border-gray-200">
      {/* ── Top stat strip ── */}
      <div className="border-b border-gray-200 px-10 md:px-16 py-6 flex flex-wrap gap-10 md:gap-20">
        {STATS.map((s) => (
          <div key={s.lbl} className="flex items-baseline gap-3">
            <span className="font-display text-accent font-extrabold text-2xl leading-none">
              {s.val}
            </span>
            <span className="font-ui text-gray-400 text-xs uppercase tracking-[2px]">
              {s.lbl}
            </span>
          </div>
        ))}
      </div>

      {/* ── Main body ── */}
      <div className="flex flex-col md:flex-row">
        {/* Left — headline */}
        <div className="md:w-3/5 px-10 md:px-16 py-16 md:border-r border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="font-ui text-accent text-xs font-semibold uppercase tracking-[3px]">
              Get Started Today
            </span>
          </div>
          <h2
            className="font-display text-primary font-extrabold leading-none mb-6"
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              letterSpacing: "-1.5px",
            }}
          >
            NEED A MATERIAL
            <br />
            TESTING REPORT?
          </h2>
          <p className="font-body text-gray-500 text-sm leading-relaxed max-w-md">
            Accurate, certified test reports delivered fast. We serve
            contractors, engineers, and government projects across United
            States.
          </p>
        </div>

        {/* Right — actions */}
        <div className="md:w-2/5 flex flex-col justify-center px-10 md:px-16 py-16 gap-4 border-t md:border-t-0 border-gray-200">
          <Link
            to="/contact"
            className="font-ui text-xs font-bold uppercase tracking-wider bg-accent hover:bg-accent-light text-white px-8 py-4 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get a Quote →
          </Link>
          <Link
            to="/services"
            className="font-ui text-xs font-bold uppercase tracking-wider border border-gray-200 hover:border-primary text-gray-500 hover:text-primary px-8 py-4 text-center transition-all duration-200"
          >
            View All Services
          </Link>
          <p className="font-ui text-gray-400 text-xs text-center">
            Reports delivered within 24–48 hours
          </p>
        </div>
      </div>
    </section>
  );
}
