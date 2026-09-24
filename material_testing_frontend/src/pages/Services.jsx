import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { SERVICES } from "../data/siteData";

const STANDARDS = [
  { code: "ASTM", full: "American Society for Testing and Materials" },
  { code: "DOT Standards", full: "Department of Transportation" },
  { code: "AASHTO", full: "American Assoc. of State Highway Officials" },
];

export default function Services() {
  return (
    <div className="pt-24">
      <SEO
        title="Soil, Concrete, Asphalt & Aggregate Testing | SSN Lab"
        description="Soil, compaction, concrete, asphalt, aggregate, rock and drainage testing from a Georgia lab. Browse our services and request testing for your project."
        path="/services"
      />

      {/* ── HERO ── */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-accent" />
              <span className="font-ui text-accent text-xs font-semibold uppercase tracking-[3px]">
                What We Offer
              </span>
            </div>
            <h1
              className="font-display text-white font-extrabold leading-none mb-6"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              OUR TESTING <br />
              <span className="text-accent">SERVICES</span>
            </h1>
            <p className="font-body text-white/60 text-base leading-relaxed max-w-lg">
              Comprehensive material testing — soil, compaction, concrete,
              asphalt, aggregate, rock, and drainage — delivered with precision
              and speed.
            </p>
          </div>

          {/* Stat strip */}
          <div className="flex gap-10 md:gap-14 shrink-0">
            {[
              { val: String(SERVICES.length), lbl: "Testing Services" },
              { val: "40+", lbl: "Test Types" },
              { val: String(STANDARDS.length), lbl: "Standards" },
            ].map((s) => (
              <div key={s.lbl}>
                <div
                  className="font-display text-accent font-extrabold leading-none"
                  style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
                >
                  {s.val}
                </div>
                <div className="font-ui text-white/40 text-xs uppercase tracking-[2px] mt-1">
                  {s.lbl}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO LABEL ── */}
      <div className="bg-bg border-b border-gray-200 px-6 py-5">
        <div className="max-w-6xl mx-auto flex items-center gap-3">
          <div className="w-8 h-0.5 bg-accent" />
          <span className="font-ui text-accent text-xs font-semibold uppercase tracking-[3px]">
            Full Service List
          </span>
        </div>
      </div>

      {/* ── SERVICE CARDS ── */}
      <section className="bg-bg py-16 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="bg-white border border-gray-200 p-8 hover:border-accent/40 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              <div className="font-display text-accent font-extrabold text-sm mb-3">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h2 className="font-display text-primary font-extrabold text-xl leading-tight mb-3">
                {s.name}
              </h2>
              <div className="w-10 h-0.5 bg-accent mb-4" />
              <p className="font-body text-gray-500 text-sm leading-relaxed mb-5">
                {s.summary}
              </p>
              <span className="font-ui text-accent text-xs font-bold uppercase tracking-wider">
                View tests →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── STANDARDS ── */}
      <section className="bg-primary py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="shrink-0">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-accent" />
              <span className="font-ui text-accent text-xs font-semibold uppercase tracking-[3px]">
                Our Standards
              </span>
            </div>
            <h2
              className="font-display text-white font-extrabold leading-none"
              style={{ fontSize: "clamp(24px, 3vw, 38px)" }}
            >
              STANDARDS
              <br />
              WE FOLLOW
            </h2>
          </div>

          <div className="w-px h-16 bg-white/10 hidden md:block" />

          <div className="flex flex-wrap gap-3">
            {STANDARDS.map((s) => (
              <div
                key={s.code}
                className="border border-white/10 px-6 py-4 hover:border-accent/40 hover:bg-white/5 transition-all duration-200"
              >
                <div className="font-display text-accent font-extrabold text-2xl leading-none mb-1">
                  {s.code}
                </div>
                <div className="font-ui text-white/40 text-xs leading-snug">
                  {s.full}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-bg py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-display text-primary font-extrabold leading-none mb-4"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
          >
            READY TO GET <span className="text-accent">STARTED?</span>
          </h2>
          <p className="font-body text-gray-500 text-base leading-relaxed mb-8">
            Contact us today and our team will help you identify the right tests
            for your project requirements.
          </p>
          <Link
            to="/contact"
            className="font-ui text-sm font-bold uppercase tracking-wider bg-accent hover:bg-accent-light text-white px-10 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
