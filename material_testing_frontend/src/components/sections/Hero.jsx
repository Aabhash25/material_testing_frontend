import { Link } from "react-router-dom";
import lab1 from "../../assets/images/lab/01.jpeg";
import lab2 from "../../assets/images/lab/02.jpeg";
import lab3 from "../../assets/images/lab/03.jpeg";

const CREDENTIALS = [
  {
    label: "Women Owned",
    sub: "Certified Business",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
        <path d="M12 2a5 5 0 100 10A5 5 0 0012 2zm0 12c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z" />
      </svg>
    ),
  },
  {
    label: "Georgia Sole Entity",
    sub: "SSN Corporation",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
  },
  {
    label: "Fast Turnaround",
    sub: "Reports as soon as 48 Hours",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
        <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
      </svg>
    ),
  },
  {
    label: "Lab",
    sub: "1,600 Sq. Ft. Facility",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <>
      <section
        className="relative flex items-center overflow-hidden bg-primary text-white"
        style={{ minHeight: "calc(100vh - 56px)" }}
      >
        <div className="absolute left-0 top-0 h-full w-1 bg-accent z-20" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-10 flex flex-col lg:flex-row items-center gap-10">
          {/* LEFT */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                <div className="w-10 h-0.5 bg-accent shrink-0" />
                <span className="font-ui text-accent text-xs uppercase tracking-[4px]">
                  SSN Material Testing LLC
                </span>
              </div>
              <p className="font-ui text-white/40 text-[10px] uppercase tracking-[2px] text-center lg:text-left lg:pl-13">
                An independent soil / geotechnical / construction material
                testing laboratory
              </p>
            </div>

            <h1 className="font-display font-extrabold leading-tight text-[clamp(42px,6vw,72px)] mb-6">
              Certified Material
              <br />
              Testing & <span className="text-accent">Quality Assurance</span>
            </h1>

            <p className="font-body text-white/70 text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Accurate testing for concrete, soil, asphalt, and construction
              materials.
            </p>

            <div className="mb-8 border-l-2 border-accent/40 pl-4">
              <p className="font-ui text-white/40 text-[10px] uppercase tracking-[3px] mb-3">
                What we are equipped for
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="flex items-center gap-2 border border-accent/30 bg-accent/10 px-4 py-1.5 rounded-sm text-xs font-ui text-white/80 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  Soil Index & Strength Tests
                </span>
                <span className="flex items-center gap-2 border border-accent/30 bg-accent/10 px-4 py-1.5 rounded-sm text-xs font-ui text-white/80 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  Concrete Strength Tests
                </span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 font-ui">
              <Link
                to="/contact"
                className="bg-accent text-white hover:bg-accent/90 px-7 py-3 rounded-md font-semibold uppercase tracking-wider transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* RIGHT — clean photo grid */}
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div
              className="grid grid-cols-2 gap-3"
              style={{ gridTemplateRows: "180px 120px" }}
            >
              <div className="row-span-2 rounded-lg overflow-hidden relative">
                <img
                  src={lab1}
                  alt="Lab facility"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10" />
              </div>

              <div className="rounded-lg overflow-hidden relative">
                <img
                  src={lab2}
                  alt="Lab equipment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10" />
              </div>

              <div className="rounded-lg overflow-hidden relative">
                <img
                  src={lab3}
                  alt="Lab testing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10" />
                <div className="absolute bottom-3 left-3 bg-accent px-2.5 py-1 rounded-sm">
                  <span className="font-ui text-white text-[10px] uppercase tracking-[2px] font-semibold">
                    Our Lab
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="font-ui text-white/30 text-[10px] uppercase tracking-[2px]">
                SSN Testing Facility
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Credentials bar ── */}
      <div className="bg-accent">
        {/* Mobile: 2x2 grid with hairline dividers */}
        <div className="grid grid-cols-2 gap-px bg-white/20 md:hidden">
          {CREDENTIALS.map((c, i) => (
            <div
              key={i}
              className="bg-accent flex items-center gap-3 px-5 py-5"
            >
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                {c.icon}
              </div>
              <div>
                <div className="font-display text-white font-extrabold text-xs uppercase tracking-widest leading-none">
                  {c.label}
                </div>
                <div className="font-ui text-white/70 text-[10px] uppercase tracking-[1.5px] mt-0.5">
                  {c.sub}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: original horizontal layout */}
        <div className="hidden md:flex justify-between items-center px-16 py-4 gap-4">
          {CREDENTIALS.map((c, i) => (
            <>
              <div key={i} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  {c.icon}
                </div>
                <div>
                  <div className="font-display text-white font-extrabold text-sm uppercase tracking-widest leading-none">
                    {c.label}
                  </div>
                  <div className="font-ui text-white/70 text-[10px] uppercase tracking-[2px] mt-0.5">
                    {c.sub}
                  </div>
                </div>
              </div>
              {i < CREDENTIALS.length - 1 && (
                <div className="w-px h-8 bg-white/20"></div>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
}
