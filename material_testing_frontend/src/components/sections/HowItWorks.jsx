import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import submitAnim from "../../assets/images/submit.json";
import labAnim from "../../assets/images/lab-test.json";
import reportAnim from "../../assets/images/report.json";

const STEPS = [
  {
    num: "01",
    title: "Submit Your Request",
    desc: "Contact us with your project information and test requirements.",
    note: {
      text: "First time client? Please fill out our contact form or call directly for fee schedule.",
      linkLabel: "Contact Form →",
      linkTo: "/contact",
    },
    lottie: submitAnim,
  },
  {
    num: "02",
    title: "We Test Your Samples",
    desc: "Bring your samples to our lab or request on-site collection. Our certified engineers conduct tests using calibrated equipment.",
    note: null,
    lottie: labAnim,
  },
  {
    num: "03",
    title: "Receive Your Report",
    desc: "We deliver your certified test report as soon as 48 hours — digitally delivered and ready for submission to any authority.",
    note: null,
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
        >
          {/* Title Panel - Left */}
          <div className="md:w-1/3 flex items-center px-10 md:px-16 py-12 bg-white">
            <div>
              <h3
                className="font-display font-extrabold leading-tight text-primary"
                style={{
                  fontSize: "clamp(20px, 2.2vw, 28px)",
                  letterSpacing: "-0.5px",
                }}
              >
                {step.title}
              </h3>
              <div className="w-8 h-0.5 bg-accent mt-4" />
            </div>
          </div>

          {/* Content Panel - Right */}
          <div className="md:w-2/3 flex flex-col md:flex-row items-center px-10 md:px-16 py-12 bg-bg border-t md:border-t-0 md:border-l border-gray-200 gap-10">
            {/* Text */}
            <div className="flex-1 flex flex-col justify-center">
              <p
                className="font-body text-gray-600 leading-relaxed max-w-lg"
                style={{ fontSize: "clamp(14px, 1.1vw, 16px)" }}
              >
                {step.desc}
              </p>

              {step.note && (
                <div className="mt-5 flex items-start gap-3 border-l-2 border-accent/50 pl-4 py-1">
                  <p
                    className="font-body text-gray-400 leading-relaxed"
                    style={{ fontSize: "clamp(13px, 1vw, 15px)" }}
                  >
                    {step.note.text}{" "}
                    <Link
                      to={step.note.linkTo}
                      className="text-accent font-semibold hover:underline whitespace-nowrap"
                    >
                      {step.note.linkLabel}
                    </Link>
                  </p>
                </div>
              )}
            </div>

            {/* Lottie Animation */}
            <div className="shrink-0 flex items-center justify-center w-full md:w-48 lg:w-56">
              <Player
                autoplay
                loop
                src={step.lottie}
                style={{ height: "180px", width: "180px" }}
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
