import { useState } from "react";
import { CONTACT_INFO } from "../data/siteData";
import contactIllustration from "../assets/images/Contact us-bro.svg";
import emailjs from "@emailjs/browser";

export default function Contact() {
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
      // Email 1 — Notification to YOU
      await emailjs.send(
        "service_bggjqno",
        "template_shej48i",
        templateParams,
        "FfbeEFM5Nu1xMYqzD",
      );

      // Email 2 — Thank-you email to USER
      await emailjs.send(
        "service_bggjqno",
        "template_rlylecq",
        templateParams,
        "FfbeEFM5Nu1xMYqzD",
      );

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-accent" />
              <span className="font-ui text-accent text-xs font-semibold uppercase tracking-[3px]">
                Reach Out
              </span>
            </div>
            <h1
              className="font-display text-white font-extrabold leading-none mb-6"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              GET IN <br />
              <span className="text-accent">TOUCH</span>
            </h1>
            <p className="font-body text-white/60 text-base leading-relaxed max-w-lg">
              Have a project that needs material testing? Fill out the form and
              our team will get back to you within 24 hours.
            </p>
          </div>

          {/* Illustration */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src={contactIllustration}
              alt="Contact illustration"
              className="w-full max-w-sm drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-bg py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <h3 className="font-display text-primary font-bold text-3xl">
              CONTACT INFO
            </h3>

            {[
              { icon: "📍", label: "Address", value: CONTACT_INFO.address },
              { icon: "📞", label: "Phone", value: CONTACT_INFO.phone },
              { icon: "✉️", label: "Email", value: CONTACT_INFO.email },
              { icon: "🕐", label: "Working Hours", value: CONTACT_INFO.hours },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white border border-gray-100 rounded-lg p-5"
              >
                <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-xl shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="font-ui text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                    {item.label}
                  </div>
                  <div className="font-body text-primary text-sm font-medium">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white border border-gray-100 rounded-lg p-10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-display text-primary font-bold text-3xl mb-3">
                  MESSAGE SENT!
                </h3>
                <p className="font-body text-gray-500 text-sm">
                  Thank you for reaching out. A confirmation email has been sent
                  to you. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      service: "",
                      message: "",
                    });
                  }}
                  className="mt-6 font-ui text-sm font-bold uppercase tracking-wider border border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded transition-all duration-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-primary font-bold text-3xl mb-8">
                  SEND A MESSAGE
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-ui text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full border border-gray-200 rounded px-4 py-3 font-body text-sm text-primary placeholder-gray-300 focus:outline-none focus:border-accent transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label className="font-ui text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 block">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        className="w-full border border-gray-200 rounded px-4 py-3 font-body text-sm text-primary placeholder-gray-300 focus:outline-none focus:border-accent transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-ui text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 block">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+977-XXXXXXXXX"
                        className="w-full border border-gray-200 rounded px-4 py-3 font-body text-sm text-primary placeholder-gray-300 focus:outline-none focus:border-accent transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label className="font-ui text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 block">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded px-4 py-3 font-body text-sm text-primary focus:outline-none focus:border-accent transition-colors duration-200"
                      >
                        <option value="">Select a service</option>
                        <option>Concrete Testing</option>
                        <option>Soil Testing</option>
                        <option>Steel & Rebar Testing</option>
                        <option>Asphalt & Bitumen Testing</option>
                        <option>Water Quality Testing</option>
                        <option>Aggregate Testing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-ui text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 block">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your project and testing requirements..."
                      className="w-full border border-gray-200 rounded px-4 py-3 font-body text-sm text-primary placeholder-gray-300 focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="font-ui text-sm font-bold uppercase tracking-wider bg-accent hover:bg-accent-light text-white px-8 py-4 rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg self-start disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message →"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
