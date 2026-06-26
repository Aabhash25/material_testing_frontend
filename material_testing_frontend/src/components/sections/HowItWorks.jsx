import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const STEPS = [
  {
    num: "01",
    title: "Submit Your Request",
    desc: "Contact us with your project information and test requirements.",
  },
  {
    num: "02",
    title: "We Test Your Samples",
    desc: "Bring your samples to our lab or request on-site collection.",
  },
  {
    num: "03",
    title: "Test Results",
    desc: "We deliver the laboratory test report as soon as 48 hours — digitally delivered and ready for your use.",
  },
];

export default function HowItWorks() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      service: form.service,
      message: form.message,
    };

    try {
      await emailjs.send(
        "service_bggjqno",
        "template_shej48i",
        templateParams,
        "FfbeEFM5Nu1xMYqzD",
      );
      await emailjs.send(
        "service_bggjqno",
        "template_rlylecq",
        templateParams,
        "FfbeEFM5Nu1xMYqzD",
      );

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      }, 3000);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-white py-12 md:py-16 pb-8 md:pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="mb-10 md:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-0.5 bg-accent" />
            <span className="font-ui text-accent text-xs font-semibold uppercase tracking-[3px]">
              Our Testing Process
            </span>
          </div>
          <h2
            className="font-display text-primary font-extrabold leading-tight"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              letterSpacing: "-1px",
            }}
          >
            FROM SAMPLE <span className="text-accent">TO REPORT</span>
          </h2>
          <p
            className="font-body text-gray-600 leading-relaxed mt-3"
            style={{ fontSize: "clamp(14px, 1.2vw, 16px)" }}
          >
            From sample submission to certified report — a straightforward
            three-step process
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* LEFT: Steps */}
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-6 relative">
              {/* Vertical connector line */}
              <div className="absolute left-8 md:left-10 top-20 bottom-0 w-1 bg-linear-to-b from-accent to-accent/0 hidden lg:block" />

              {STEPS.map((step) => (
                <div
                  key={step.num}
                  className="flex gap-6 items-start relative z-10"
                >
                  <div className="shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-linear-to-br from-accent to-orange-500 flex items-center justify-center shadow-md">
                      <span className="font-display font-extrabold text-white text-2xl md:text-3xl">
                        {step.num}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 pt-2 md:pt-3">
                    <h3
                      className="font-display font-bold text-primary mb-1.5"
                      style={{
                        fontSize: "clamp(16px, 1.5vw, 18px)",
                        letterSpacing: "-0.5px",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="font-body text-gray-600 leading-relaxed mb-3"
                      style={{ fontSize: "clamp(13px, 1vw, 14px)" }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Note — below all 3 steps, inside left column */}
            <div className="mt-6 inline-block bg-accent/5 border-l-2 border-accent px-3 py-2 rounded">
              <p className="font-body text-gray-600 text-xs leading-relaxed">
                <span className="text-accent font-semibold">💡</span> First time
                client? Please fill out our contact form or call directly for
                fee schedules.{" "}
                <Link
                  to="/contact"
                  className="text-accent font-bold hover:underline"
                >
                  Contact Form →
                </Link>
              </p>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="lg:col-span-5 lg:sticky lg:top-8 lg:-mt-32">
            {submitted ? (
              <div className="bg-linear-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-50">
                <div className="text-5xl mb-3 animate-bounce">✅</div>
                <h4 className="font-display text-green-800 font-bold text-lg mb-1">
                  Success!
                </h4>
                <p className="font-body text-green-700 text-xs leading-relaxed">
                  We'll contact you within 24 hours.
                </p>
              </div>
            ) : (
              <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-7 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div>
                    <label className="font-ui text-xs font-semibold text-gray-600 mb-2 block">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 font-body text-sm text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="font-ui text-xs font-semibold text-gray-600 mb-2 block">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 font-body text-sm text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="font-ui text-xs font-semibold text-gray-600 mb-2 block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1-XXXXXXXXX"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 font-body text-sm text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="font-ui text-xs font-semibold text-gray-600 mb-2 block">
                      Service
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 font-body text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200 bg-white appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 12 12'%3E%3Cpath fill='%23FF6B35' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 8px center",
                        paddingRight: "28px",
                      }}
                    >
                      <option value="">Select service</option>
                      <option>Concrete Testing</option>
                      <option>Soil Testing</option>
                      <option>Steel & Rebar Testing</option>
                      <option>Asphalt & Bitumen Testing</option>
                      <option>Water Quality Testing</option>
                      <option>Aggregate Testing</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-ui text-xs font-semibold text-gray-600 mb-2 block">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 font-body text-sm text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-linear-to-r from-accent to-orange-500 hover:from-orange-500 hover:to-accent text-white font-ui text-sm font-bold py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 mt-2"
                  >
                    {loading ? "Sending..." : "Send →"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
