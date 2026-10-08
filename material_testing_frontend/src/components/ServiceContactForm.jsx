import { useState } from "react";
import emailjs from "@emailjs/browser";
import { CONTACT_INFO } from "../data/siteData";

const inputClass =
  "w-full bg-white border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent/30 focus:outline-none px-4 py-3 font-body text-sm text-primary placeholder:text-gray-400 transition-colors";

const Icon = ({ d }) => (
  <span className="w-9 h-9 shrink-0 bg-accent/10 text-accent flex items-center justify-center">
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d={d} />
    </svg>
  </span>
);

const PHONE_ICON =
  "M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1z";
const MAIL_ICON =
  "M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v.5l8 5 8-5V6H4zm16 3l-8 5-8-5v9h16V9z";
const CLOCK_ICON =
  "M12 2a10 10 0 100 20 10 10 0 000-20zm1 5v5.4l3.6 2.1-.8 1.3L11 13V7h2z";

export default function ServiceContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    if (form.website) return; // honeypot

    // Same fields your Contact page sends, so the existing templates keep working.
    // phone isn't collected here; service records which page the lead came from.
    const templateParams = {
      name: form.name,
      email: form.email,
      phone: "Not provided",
      service: `Service page: ${window.location.pathname}`,
      source: `Service page – ${window.location.pathname}`,
      message: form.message,
    };

    try {
      setStatus("sending");

      // Email 1 — notification to you
      await emailjs.send(
        "service_lnsm9xy",
        "template_72v2quc",
        templateParams,
        "lld37b4B0gl48sfH_",
      );

      // Email 2 — thank-you email to the visitor
      await emailjs.send(
        "service_lnsm9xy",
        "template_jni9tya",
        templateParams,
        "lld37b4B0gl48sfH_",
      );

      // TODO: add Google Ads conversion tracking here once it's set up.

      setStatus("sent");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section
      id="request-testing"
      className="bg-white py-14 px-6 border-b border-gray-200"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Left: heading + contact details */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="font-ui text-accent text-xs font-semibold uppercase tracking-[3px]">
              Get In Touch
            </span>
          </div>
          <h2
            className="font-display text-primary font-extrabold leading-none mb-4"
            style={{
              fontSize: "clamp(28px, 3.6vw, 44px)",
              letterSpacing: "-0.5px",
            }}
          >
            REQUEST <span className="text-accent">TESTING</span>
          </h2>
          <p className="font-body text-gray-500 text-base leading-relaxed mb-8 max-w-sm">
            Tell us about your project and we'll confirm the tests you need and
            get back to you quickly.
          </p>

          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-3">
              <Icon d={PHONE_ICON} />
              <a
                href="tel:+14705045962"
                className="font-ui text-primary text-sm font-semibold hover:text-accent transition-colors"
              >
                {CONTACT_INFO.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Icon d={MAIL_ICON} />
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="font-ui text-primary text-sm font-semibold hover:text-accent transition-colors break-all"
              >
                {CONTACT_INFO.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Icon d={CLOCK_ICON} />
              <span className="font-ui text-gray-500 text-sm">
                {CONTACT_INFO.hours}
              </span>
            </li>
          </ul>
        </div>

        {/* Right: form */}
        <div className="bg-bg border border-gray-200 border-t-2 border-t-accent p-6 sm:p-8 shadow-sm">
          {status === "sent" ? (
            <div className="text-center py-10">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
                </svg>
              </div>
              <h3 className="font-display text-primary font-extrabold text-xl mb-1">
                Thank you
              </h3>
              <p className="font-body text-gray-500 text-sm">
                We'll be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  required
                  placeholder="Name"
                  aria-label="Name"
                  className={inputClass}
                  value={form.name}
                  onChange={set("name")}
                  autoComplete="name"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                  className={inputClass}
                  value={form.email}
                  onChange={set("email")}
                  autoComplete="email"
                />
              </div>
              <textarea
                required
                rows={4}
                placeholder="Tell us about your project"
                aria-label="Message"
                className={`${inputClass} resize-none`}
                value={form.message}
                onChange={set("message")}
              />
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
                value={form.website}
                onChange={set("website")}
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="font-ui text-sm font-bold uppercase tracking-wider bg-accent hover:bg-accent-light disabled:opacity-60 text-white px-8 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                {status === "sending" ? "Sending…" : "Send Request"}
              </button>
              {status === "error" && (
                <p className="font-body text-xs text-red-600 text-center">
                  Something went wrong. Please call {CONTACT_INFO.phone}.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
