import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import submitAnim from "../../assets/images/submit.json";
import labAnim from "../../assets/images/lab-test.json";
import reportAnim from "../../assets/images/report.json";

const STEPS = [
  {
    num: "01",
    title: "Submit Your Request",
    desc: "Contact us with your project details and material type. We'll confirm the required tests and provide a quick quote within hours.",
    detail: [
      "Fill out our contact form or call directly",
      "Specify material type and project scope",
      "Receive quote within a few hours",
    ],
    lottie: submitAnim,
  },
  {
    num: "02",
    title: "We Test Your Samples",
    desc: "Bring your samples to our lab or request on-site collection. Our certified engineers conduct tests using calibrated equipment.",
    detail: [
      "Drop off or we collect from site",
      "Tests run by certified engineers",
      "Equipment calibrated to IS, ASTM & BS standards",
    ],
    lottie: labAnim,
  },
  {
    num: "03",
    title: "Receive Your Report",
    desc: "Get a detailed, authority-accepted test report within 24–48 hours — digitally delivered and ready for submission.",
    detail: [
      "Report delivered in 24–48 hours",
      "Accepted by all government bodies",
      "Digital copy + hard copy available",
    ],
    lottie: reportAnim,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-bg border-b border-gray-200">
      {/* Section header */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="font-ui text-accent text-xs font-semibold uppercase tracking-[3px]">
              Our Testing Process
            </span>
          </div>
          <h2
            className="font-display text-primary font-extrabold leading-none"
            style={{
              fontSize: "clamp(32px, 4.5vw, 56px)",
              letterSpacing: "-1.5px",
            }}
          >
            FROM SAMPLE <span className="text-accent">TO REPORT</span>
          </h2>
        </div>
        <p className="font-body text-gray-400 text-sm leading-relaxed max-w-xs md:text-right">
          From sample submission to certified report — a straightforward
          three-step process.
        </p>
      </div>

      {/* Steps */}
      {STEPS.map((step) => (
        <div
          key={step.num}
          className="flex flex-col md:flex-row border-t border-gray-200"
          style={{ minHeight: "320px" }}
        >
          {/* Number Panel - Left */}
          <div className="md:w-1/3 flex items-center px-10 md:px-16 py-10 bg-white">
            <div>
              <div
                className="font-display font-extrabold leading-none mb-3 text-gray-100"
                style={{
                  fontSize: "clamp(64px, 8vw, 96px)",
                  letterSpacing: "-3px",
                }}
              >
                {step.num}
              </div>
              <h3
                className="font-display font-extrabold leading-tight text-primary"
                style={{
                  fontSize: "clamp(18px, 2vw, 26px)",
                  letterSpacing: "-0.5px",
                }}
              >
                {step.title}
              </h3>
              <div className="w-8 h-0.5 bg-accent mt-4" />
            </div>
          </div>

          {/* Content Panel - Right with Lottie */}
          <div className="md:w-2/3 flex flex-col md:flex-row px-10 md:px-16 py-10 bg-bg border-t md:border-t-0 md:border-l border-gray-200 gap-10">
            {/* Text Content */}
            <div className="flex-1 flex flex-col justify-center">
              <p className="font-body text-gray-500 text-sm leading-relaxed mb-8 max-w-lg">
                {step.desc}
              </p>
              <div className="flex flex-col gap-3">
                {step.detail.map((d, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-4 h-px bg-accent mt-2 flex-shrink-0" />
                    <span className="font-ui text-primary text-xs font-medium leading-snug">
                      {d}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lottie Animation — inside the content panel */}
            <div className="flex-shrink-0 flex items-center justify-center w-full md:w-56 lg:w-64">
              <Player
                autoplay
                loop
                src={step.lottie}
                style={{ height: "200px", width: "200px" }}
              />
            </div>
          </div>
        </div>
      ))}

      {/* CTA Strip */}
      <div className="border-t border-gray-200 bg-white px-10 md:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-ui text-primary font-bold text-sm uppercase tracking-wider mb-1">
            Ready to get started?
          </p>
          <p className="font-body text-gray-400 text-xs">
            Our team will help you identify the right tests for your project.
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            to="/services"
            className="font-ui text-xs font-bold uppercase tracking-wider border border-gray-200 hover:border-primary text-gray-500 hover:text-primary px-7 py-3.5 transition-all duration-200"
          >
            View Services
          </Link>
          <Link
            to="/contact"
            className="font-ui text-xs font-bold uppercase tracking-wider bg-accent hover:bg-accent-light text-white px-7 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
