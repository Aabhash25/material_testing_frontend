import { Link } from "react-router-dom";

const STATS = [
  { val: "48hrs", lbl: "As Soon As", sub: "Report Delivery" },
  { val: "Experienced", lbl: "", sub: "Professionals" },
  { val: "Full-Fledged", lbl: "", sub: "Equipment Set" },
  { val: "1,600", lbl: "Sq. Ft.", sub: "Facility" },
];

const LAB = {
  name: "Main Testing Laboratory",
  address: "6500 McDonough Dr, Suite E-04",
  city: "Norcross, Georgia 30093",
  phone: "(470) 504-5962",
  hours: "Mon – Fri: 9:00 AM – 5:00 PM",
  mapSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.0!2d-84.2005!3d33.9416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a6b1b1b1b1b1%3A0x0!2s6500%20McDonough%20Dr%2C%20Norcross%2C%20GA%2030093!5e0!3m2!1sen!2sus!4v1700000000000",
};

const PinIcon = () => (
  <svg
    className="w-4 h-4 text-accent mt-0.5 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 14 6 14s6-8.75 6-14c0-3.314-2.686-6-6-6z"
    />
    <circle cx="12" cy="8" r="2" fill="currentColor" stroke="none" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    className="w-4 h-4 text-accent mt-0.5 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.18 21 3 13.82 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"
    />
  </svg>
);

const ClockIcon = () => (
  <svg
    className="w-4 h-4 text-accent mt-0.5 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline
      points="12 6 12 12 16 14"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function CTA() {
  return (
    <section className="bg-white border-t border-gray-200">
      {/* ── Top stat strip ── */}
      {/* ── Top stat strip ── */}
      <div className="border-b border-gray-200 bg-accent px-10 md:px-16 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s, i) => (
          <div
            key={s.lbl}
            className={`flex flex-col gap-1 ${
              i !== STATS.length - 1
                ? "md:border-r md:border-white/30 md:pr-8"
                : ""
            }`}
          >
            <span className="font-ui text-white/70 text-xs font-semibold uppercase tracking-[2px]">
              {s.lbl}
            </span>
            <span className="font-display text-white font-extrabold text-3xl leading-none">
              {s.val}
            </span>
            <span className="font-ui text-white/70 text-xs uppercase tracking-[1.5px]">
              {s.sub}
            </span>
          </div>
        ))}
      </div>

      {/* ── Main body ── */}
      <div className="flex flex-col md:flex-row">
        {/* Left — headline */}
        <div className="md:w-3/5 px-10 md:px-16 py-16 md:border-r border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-accent"></div>
            <span className="font-ui text-accent text-xs font-semibold uppercase tracking-[3px]">
              Get Started Today
            </span>
          </div>
          <h2
            className="font-display text-primary font-extrabold leading-none mb-6"
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              letterSpacing: "-1.5px",
            }}
          >
            NEED GEO-MATERIAL &
            <br />
            CONSTRUCTIOIN MATERIAL TESTING SERVICES?
          </h2>
          <p className="font-body text-gray-500 text-sm leading-relaxed max-w-md">
            Accurate, certified test reports delivered fast. We serve
            contractors, engineers, and government projects across South
            Atlantic Region.
          </p>
        </div>

        {/* Right — actions */}
        <div className="md:w-2/5 flex flex-col justify-center px-10 md:px-16 py-16 gap-4 border-t md:border-t-0 border-gray-200">
          <Link
            to="/contact"
            className="font-ui text-xs font-bold uppercase tracking-wider bg-accent hover:bg-accent-light text-white px-8 py-4 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Contact Us
          </Link>
          <Link
            to="/services"
            className="font-ui text-xs font-bold uppercase tracking-wider border border-gray-200 hover:border-primary text-gray-500 hover:text-primary px-8 py-4 text-center transition-all duration-200"
          >
            View All Services
          </Link>
          <p className="font-ui text-gray-400 text-xs text-center">
            Reports as soon as 48 hours
          </p>
        </div>
      </div>

      {/* ── Lab Location ── */}
      <div className="border-t border-gray-200">
        {/* Section label */}
        <div className="px-10 md:px-16 pt-10 pb-6 flex items-center gap-3">
          <div className="w-8 h-0.5 bg-accent"></div>
          <span className="font-ui text-accent text-xs font-semibold uppercase tracking-[3px]">
            See us in maps
          </span>
        </div>

        {/* Map + Info card */}
        <div className="relative w-full h-105 md:h-`120">
          {/* Embedded Google Map */}
          <iframe
            title="Lab Location"
            src={LAB.mapSrc}
            className="absolute inset-0 w-full h-full"
            style={{ border: 0, filter: "grayscale(30%) contrast(1.05)" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Overlay info card */}
          <div className="absolute top-6 left-6 md:left-10 bg-white border border-gray-200 shadow-xl p-6 max-w-xs w-full">
            <div className="w-8 h-0.5 bg-accent mb-4"></div>

            <h3 className="font-display text-primary font-extrabold text-lg uppercase tracking-tight leading-tight mb-4">
              {LAB.name}
            </h3>

            {/* Address */}
            <div className="flex gap-3 mb-3">
              <PinIcon />
              <div>
                <p className="font-body text-gray-700 text-sm leading-snug">
                  {LAB.address}
                </p>
                <p className="font-body text-gray-700 text-sm leading-snug">
                  {LAB.city}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-3 mb-3">
              <PhoneIcon />
              <a
                href={`tel:${LAB.phone.replace(/\D/g, "")}`}
                className="font-body text-gray-700 text-sm hover:text-accent transition-colors"
              >
                {LAB.phone}
              </a>
            </div>

            {/* Hours */}
            <div className="flex gap-3 mb-5">
              <ClockIcon />
              <p className="font-body text-gray-500 text-xs leading-relaxed">
                {LAB.hours}
              </p>
            </div>

            {/* Directions CTA */}
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(
                LAB.address + " " + LAB.city,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-ui text-xs font-bold uppercase tracking-wider bg-accent hover:bg-accent-light text-white px-5 py-3 inline-block transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              Get Directions &#8594;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
