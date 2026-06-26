import { Link } from "react-router-dom";

// Replace image URLs with your own assets once available
const SERVICES = [
  {
    id: "soil",
    cat: "Soil & Aggregate",
    title: "Soil & Aggregate Physical & Strength Testing",
    desc: "We evaluate soil and aggregate materials to determine engineering properties essential for foundations, pavements, and earthwork design.",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Oedometer.jpg",
    imgCredit: {
      author: "Deryck Chan",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Oedometer.jpg",
    },

    tests: [
      "Grain Size Analysis (Sieve & Hydrometer)",
      "Atterberg Limits",
      "Standard & Modified Proctor Compaction",
      "California Bearing Ratio (CBR)",
      "Direct Shear and Triaxial Shear Tests",
      "Unconfined Compressive Strength (UCS)",
      "Specific Gravity and Moisture Content",
      "Relative Density and Consolidation Tests",
      "Aggregate Gradation, Abrasion, and Soundness",
    ],
  },
  {
    id: "concrete",
    cat: "Concrete",
    title: "Fresh & Hardened Concrete Testing",
    desc: "Our concrete testing services ensure compliance with mix design specifications, structural performance requirements, and durability standards.",
    img: "/california-bearing-ratio-test.jpg",
    tests: [
      "Slump Test",
      "Air Content Test",
      "Temperature Measurement",
      "Unit Weight and Yield",
      "Concrete Sampling and Cylinder Casting",
      "Compressive Strength",
      "Flexural Strength",
      "Splitting Tensile Strength",
      "Modulus of Elasticity",
      "Rapid Chloride Permeability (RCPT)",
    ],
  },
  {
    id: "rock",
    cat: "Rock",
    title: "Rock Testing & Characterization",
    desc: "Our rock testing services assess rock strength, durability, and deformation to support engineering decisions for foundations, slopes, excavations, and underground structures.",
    img: "https://images.unsplash.com/photo-1780342333689-2a76cfdb0152?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tests: [
      "Uniaxial Compressive Strength (UCS) Testing",
      "Triaxial Compressive Strength Testing",
      "Point Load Strength Index Testing",
      "Brazilian Tensile Strength Testing",
      "Slake Durability Testing",
      "Porosity and Absorption Testing",
      "Direct Shear Strength Testing of Rock Joints",
      "Modulus of Elasticity and Deformation Testing",
    ],
  },
  {
    id: "asphalt",
    cat: "Bitumen & Asphalt",
    title: "Bitumen & Asphalt Mix Testing",
    desc: "We provide comprehensive asphalt and bituminous material testing for pavement design, production control, and performance evaluation.",
    tests: [
      "Asphalt Binder Penetration, Softening Point, and Viscosity",
      "Marshall Stability and Flow",
      "Superpave Mix Design Testing",
      "Asphalt Content by Ignition Method",
      "Gradation Analysis of Hot Mix Asphalt",
      "Bulk Specific Gravity and Density",
      "Indirect Tensile Strength",
      "Moisture Susceptibility Testing",
    ],
  },
  {
    id: "water",
    cat: "Water & Drainage",
    title: "Water Drainage & Permeability Testing",
    desc: "Our hydraulic and permeability testing services evaluate infiltration, drainage capacity, and water movement through soils and materials.",
    img: "https://images.unsplash.com/photo-1526898943670-92bfa9f94c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0ZXIlMjBwZXJtBWFiaWxpdHklMjBkcmFpbmFnZSUyMHRlc3R8ZW58MHx8MHx8fDA%3D",
    tests: [
      "Constant Head and Falling Head Permeability",
      "Infiltration Rate Testing",
      "Soil Hydraulic Conductivity",
      "Porosity and Void Ratio Evaluation",
      "Filter Media Testing",
      "Permeable Pavement Testing",
    ],
  },
];

const STANDARDS = [
  { code: "ASTM", full: "American Society for Testing and Materials" },
  { code: "DOT Standards", full: "Department of Transportation" },
  { code: "AASHTO", full: "American Assoc. of State Highway Officials" },
];

export default function Services() {
  return (
    <div className="pt-24">
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
              Comprehensive material testing across six disciplines — soil,
              concrete, rock, asphalt, drainage, and environmental — delivered
              with precision and speed.
            </p>
          </div>

          {/* Stat strip */}
          <div className="flex gap-10 md:gap-14 shrink-0">
            {[
              { val: "6", lbl: "Disciplines" },
              { val: "50+", lbl: "Test Types" },
              { val: "4", lbl: "Standards" },
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

      {/* ── ALTERNATING SERVICE ROWS ── */}
      {SERVICES.map((service, index) => {
        const isEven = index % 2 === 0;
        const num = String(index + 1).padStart(2, "0");

        return (
          <section
            key={service.id}
            className={`flex flex-col md:flex-row border-b border-gray-200 md:items-stretch ${
              isEven ? "bg-white" : "bg-bg"
            }`}
          >
            {/* Image panel - Increased container to a solid 460px height on desktop */}
            <div
              className={`relative overflow-hidden w-full md:w-1/2 h-64 md:h-140 ${
                isEven ? "md:order-1" : "md:order-2"
              }`}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: isEven
                    ? "linear-gradient(135deg, rgba(26,35,50,0.3) 0%, rgba(26,35,50,0.05) 100%)"
                    : "linear-gradient(225deg, rgba(26,35,50,0.3) 0%, rgba(26,35,50,0.05) 100%)",
                }}
              />
              {/* Category badge */}
              <div
                className={`absolute top-5 font-ui text-white text-[11px] font-bold uppercase tracking-[2px] bg-accent px-3 py-1.5 ${
                  isEven ? "left-5" : "right-5"
                }`}
              >
                {service.cat}
              </div>
              {/* Ghost number */}
              <div
                className={`absolute bottom-3 font-display font-extrabold leading-none select-none pointer-events-none ${
                  isEven ? "right-5" : "left-5"
                }`}
                style={{
                  fontSize: "clamp(64px, 8vw, 96px)",
                  color: "rgba(255,255,255,0.1)",
                  letterSpacing: "-2px",
                }}
              >
                {num}
              </div>
              {service.imgCredit && (
                <a
                  href={service.imgCredit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 left-2 bg-black/50 text-white/70 text-[10px] font-ui px-2 py-0.5 rounded hover:text-white transition-colors z-10"
                >
                  © {service.imgCredit.author}
                </a>
              )}
            </div>

            {/* Content panel */}
            <div
              className={`w-full md:w-1/2 flex flex-col justify-center px-8 py-12 md:px-12 lg:px-16 ${
                isEven ? "md:order-2" : "md:order-1"
              }`}
            >
              {/* Title */}
              <h2
                className="font-display text-primary font-extrabold leading-tight mb-3"
                style={{
                  fontSize: "clamp(22px, 2.6vw, 30px)",
                  letterSpacing: "-0.5px",
                }}
              >
                {service.title}
              </h2>

              {/* Accent divider */}
              <div className="w-10 h-0.5 bg-accent mb-4" />

              {/* Description */}
              <p className="font-body text-gray-500 text-sm leading-relaxed mb-6 max-w-md">
                {service.desc}
              </p>

              {/* Tests — 2 column grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                {service.tests.map((test, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 py-2 border-b border-gray-100 last:border-0"
                  >
                    <div className="w-1 h-1 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span className="font-ui text-primary text-xs font-medium leading-snug">
                      {test}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

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
