import aboutIllustration from "../assets/images/Construction-amico.svg";

// ── Add your 12 lab photos here ──
import lab1 from "../assets/images/lab/01.jpeg";
import lab2 from "../assets/images/lab/02.jpeg";
import lab3 from "../assets/images/lab/03.jpeg";
import lab4 from "../assets/images/lab/04.jpeg";
import lab5 from "../assets/images/lab/05.jpeg";
import lab6 from "../assets/images/lab/06.jpeg";
import lab7 from "../assets/images/lab/07.jpeg";
import lab8 from "../assets/images/lab/08.jpeg";
import lab9 from "../assets/images/lab/09.jpeg";
import lab10 from "../assets/images/lab/10.jpeg";
import lab11 from "../assets/images/lab/11.jpeg";
import lab12 from "../assets/images/lab/12.jpeg";

const LAB_PHOTOS = [
  lab1,
  lab2,
  lab3,
  lab4,
  lab5,
  lab6,
  lab7,
  lab8,
  lab9,
  lab10,
  lab11,
  lab12,
];

const WHY_US = [
  {
    num: "01",
    title: "NABL Accredited",
    desc: "Nationally accredited laboratory meeting the highest testing standards recognized by all government and private authorities.",
  },
  {
    num: "02",
    title: "Fast Turnaround",
    desc: "Reports delivered within 24–48 hours without compromising on accuracy or detail.",
  },
  {
    num: "03",
    title: "Modern Equipment",
    desc: "Latest testing equipment calibrated to international standards — IS, ASTM, BS, and AASHTO.",
  },
  {
    num: "04",
    title: "Detailed Reports",
    desc: "Clear, comprehensive reports structured for engineers, contractors, and regulatory bodies.",
  },
];

const STATS = [
  { val: "15+", lbl: "Years Experience" },
  { val: "500+", lbl: "Projects Tested" },
  { val: "50+", lbl: "Test Types" },
];

export default function About() {
  return (
    <div className="pt-24">
      {/* ── HERO ── */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-accent" />
              <span className="font-ui text-accent text-xs font-semibold uppercase tracking-[3px]">
                Who We Are
              </span>
            </div>
            <h1
              className="font-display text-white font-extrabold leading-none mb-6"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              ABOUT <br />
              <span className="text-accent">SSN LAB</span>
            </h1>
            <p className="font-body text-white/60 text-base leading-relaxed max-w-lg">
              SSN Material Testing Laboratory has been serving the construction
              industry in Nepal for over 15 years. We provide certified,
              accurate, and timely test reports that engineers and contractors
              trust.
            </p>
          </div>

          {/* SVG illustration */}
          <div className="flex-1 flex items-center justify-center relative">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(249,115,22,0.11) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: "clamp(220px, 28vw, 400px)",
                height: "clamp(220px, 28vw, 400px)",
                border: "1px dashed rgba(249,115,22,0.18)",
                animation: "spin 30s linear infinite",
              }}
            />
            <img
              src={aboutIllustration}
              alt="About SSN illustration"
              className="relative w-full max-w-xs md:max-w-sm drop-shadow-xl z-10"
            />
            <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <div className="bg-accent">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-center gap-10 md:gap-20">
          {STATS.map((s) => (
            <div key={s.lbl} className="flex items-baseline gap-3">
              <span className="font-display text-white font-extrabold text-3xl leading-none">
                {s.val}
              </span>
              <span className="font-ui text-white/75 text-xs uppercase tracking-[2px]">
                {s.lbl}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── LAB PHOTOS ── */}
      <section className="bg-bg border-b border-gray-200 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="font-ui text-accent text-xs font-semibold uppercase tracking-[3px]">
              Inside Our Lab
            </span>
          </div>
          <h2
            className="font-display text-primary font-extrabold leading-none mb-10"
            style={{
              fontSize: "clamp(24px, 3.5vw, 42px)",
              letterSpacing: "-1px",
            }}
          >
            OUR <span className="text-accent">FACILITY</span>
          </h2>

          {/* Photo grid — 4 cols on desktop, 2 on mobile */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {/* First photo spans 2 cols + 2 rows — hero shot */}
            <div
              className="col-span-2 row-span-2 relative overflow-hidden group"
              style={{ aspectRatio: "1 / 1" }}
            >
              <img
                src={LAB_PHOTOS[0]}
                alt="Lab facility"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Remaining 8 photos in single cells */}
            {LAB_PHOTOS.slice(1, 9).map((photo, i) => (
              <div
                key={i}
                className="relative overflow-hidden group"
                style={{ aspectRatio: "1 / 1" }}
              >
                <img
                  src={photo}
                  alt={`Lab photo ${i + 2}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}

            {/* Last row — remaining 3 photos each span wider */}
            {LAB_PHOTOS.slice(9, 12).map((photo, i) => (
              <div
                key={i + 9}
                className="relative overflow-hidden group col-span-1 md:col-span-1"
                style={{ aspectRatio: "4 / 3" }}
              >
                <img
                  src={photo}
                  alt={`Lab photo ${i + 10}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION — image left ── */}
      <section
        className="flex flex-col md:flex-row border-b border-gray-200"
        style={{ minHeight: "420px" }}
      >
        <div className="md:w-1/2 relative overflow-hidden h-56 md:h-auto">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80"
            alt="Our mission"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(26,35,50,0.5) 0%, rgba(26,35,50,0.1) 100%)",
            }}
          />
          <div className="absolute top-6 left-6 font-ui text-white text-xs font-bold uppercase tracking-[2.5px] bg-accent px-3 py-1.5">
            Mission
          </div>
          <div
            className="absolute bottom-4 right-5 font-display font-extrabold leading-none select-none pointer-events-none text-white"
            style={{
              fontSize: "clamp(72px, 10vw, 110px)",
              opacity: 0.08,
              letterSpacing: "-4px",
            }}
          >
            01
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center px-10 py-14 md:px-16 bg-white">
          <h2
            className="font-display text-primary font-extrabold leading-tight mb-4"
            style={{
              fontSize: "clamp(24px, 3vw, 38px)",
              letterSpacing: "-0.5px",
            }}
          >
            OUR MISSION
          </h2>
          <div className="w-10 h-0.5 bg-accent mb-6" />
          <p className="font-body text-gray-500 text-sm leading-relaxed max-w-md">
            To provide the construction industry with precise, reliable, and
            timely material testing services that ensure the safety and quality
            of infrastructure projects across United States.
          </p>
        </div>
      </section>

      {/* ── VISION — image right ── */}
      <section
        className="flex flex-col md:flex-row-reverse border-b border-gray-200"
        style={{ minHeight: "420px" }}
      >
        <div className="md:w-1/2 relative overflow-hidden h-56 md:h-auto">
          <img
            src="https://images.unsplash.com/photo-1590644365607-01f7b5f0e409?w=900&q=80"
            alt="Our vision"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(225deg, rgba(26,35,50,0.5) 0%, rgba(26,35,50,0.1) 100%)",
            }}
          />
          <div className="absolute top-6 right-6 font-ui text-white text-xs font-bold uppercase tracking-[2.5px] bg-accent px-3 py-1.5">
            Vision
          </div>
          <div
            className="absolute bottom-4 left-5 font-display font-extrabold leading-none select-none pointer-events-none text-white"
            style={{
              fontSize: "clamp(72px, 10vw, 110px)",
              opacity: 0.08,
              letterSpacing: "-4px",
            }}
          >
            02
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center px-10 py-14 md:px-16 bg-bg">
          <h2
            className="font-display text-primary font-extrabold leading-tight mb-4"
            style={{
              fontSize: "clamp(24px, 3vw, 38px)",
              letterSpacing: "-0.5px",
            }}
          >
            OUR VISION
          </h2>
          <div className="w-10 h-0.5 bg-accent mb-6" />
          <p className="font-body text-gray-500 text-sm leading-relaxed max-w-md">
            To be the most trusted material testing laboratory in United States,
            recognized for accuracy, integrity, and commitment to advancing
            construction quality standards.
          </p>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-bg border-b border-gray-200 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="font-ui text-accent text-xs font-semibold uppercase tracking-[3px]">
              Why SSN
            </span>
          </div>
          <h2
            className="font-display text-primary font-extrabold leading-none mb-14"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              letterSpacing: "-1px",
            }}
          >
            WHY CHOOSE <span className="text-accent">US</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
            {WHY_US.map((item) => (
              <div
                key={item.num}
                className="bg-white hover:bg-bg transition-colors duration-200 px-10 py-10 flex flex-col gap-4 group"
              >
                <div className="flex items-center gap-4">
                  <span
                    className="font-display font-extrabold leading-none text-gray-100 group-hover:text-accent/20 transition-colors duration-200 select-none"
                    style={{
                      fontSize: "clamp(40px, 5vw, 56px)",
                      letterSpacing: "-2px",
                    }}
                  >
                    {item.num}
                  </span>
                  <div className="w-px h-8 bg-gray-200" />
                  <h4
                    className="font-display text-primary font-extrabold leading-tight"
                    style={{
                      fontSize: "clamp(15px, 1.6vw, 20px)",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    {item.title}
                  </h4>
                </div>
                <div className="w-8 h-0.5 bg-accent" />
                <p className="font-body text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
