import { Link } from "react-router-dom";
import heroImage from "../../assets/images/Creative experiment-bro.svg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary text-white">
      <div className="absolute left-0 top-0 h-full w-[4px] bg-accent z-20" />
      {/* subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* glow */}
      {/* <div className="absolute w-[500px] h-[500px] bg-accent/20 blur-[140px] rounded-full -top-40 -left-40" /> */}

      {/* container */}
      <div className="relative max-w-6xl mx-auto px-6 py-28 flex flex-col lg:flex-row items-center gap-16">
        {/* LEFT */}
        <div className="flex-1 text-center lg:text-left">
          {/* label */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <div className="w-10 h-0.5 bg-accent" />
            <span className="font-ui text-accent text-xs uppercase tracking-[4px]">
              North Carolina Material Testing Lab
            </span>
          </div>

          {/* headline */}
          <h1 className="font-display font-extrabold leading-tight text-[clamp(42px,6vw,72px)] mb-6">
            Certified Material
            <br />
            Testing & <span className="text-accent">Quality Assurance</span>
          </h1>

          {/* short text ONLY */}
          <p className="font-body text-white/70 text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            Accurate testing for concrete, soil, asphalt, and construction
            materials across North Carolina.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 font-ui">
            <Link
              to="/services"
              className="bg-accent hover:bg-accent-light px-7 py-3 rounded-md font-semibold uppercase tracking-wider transition"
            >
              Request Testing
            </Link>

            <Link
              to="/contact"
              className="border border-white/30 hover:border-white px-7 py-3 rounded-md font-semibold uppercase tracking-wider transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex justify-center">
          <img
            src={heroImage}
            alt="Material Testing"
            className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
