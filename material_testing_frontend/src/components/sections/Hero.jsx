import { Link } from "react-router-dom";
import lab1 from "../../assets/images/lab/01.jpeg";
import lab2 from "../../assets/images/lab/02.jpeg";
import lab3 from "../../assets/images/lab/03.jpeg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary text-white">
      <div className="absolute left-0 top-0 h-full w-1 bg-accent z-20" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-28 flex flex-col lg:flex-row items-center gap-16">
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
              An independent soil / geotechnical / construction material testing
              laboratory
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
                Concrete Strength Test
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
            style={{ gridTemplateRows: "240px 160px" }}
          >
            {/* Large photo — spans full height on the left */}
            <div className="row-span-2 rounded-lg overflow-hidden relative">
              <img
                src={lab1}
                alt="Lab facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>

            {/* Top-right photo */}
            <div className="rounded-lg overflow-hidden relative">
              <img
                src={lab2}
                alt="Lab equipment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>

            {/* Bottom-right photo */}
            <div className="rounded-lg overflow-hidden relative">
              <img
                src={lab3}
                alt="Lab testing"
                className="w-full h-full object-cover"
              />
              {/* accent label */}
              <div className="absolute inset-0 bg-primary/10" />
              <div className="absolute bottom-3 left-3 bg-accent px-2.5 py-1 rounded-sm">
                <span className="font-ui text-white text-[10px] uppercase tracking-[2px] font-semibold">
                  Our Lab
                </span>
              </div>
            </div>
          </div>

          {/* thin accent line below */}
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
  );
}
