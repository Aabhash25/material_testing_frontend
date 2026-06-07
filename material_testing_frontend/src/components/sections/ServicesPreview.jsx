import { Link } from "react-router-dom";
import { SERVICES } from "../../data/siteData";

export default function ServicesPreview() {
  return (
    <section className="bg-bg py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="font-ui text-accent text-xs font-semibold uppercase tracking-[3px]">
              What We Test
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="font-display font-extrabold text-primary leading-none"
              style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
            >
              OUR SERVICES
            </h2>
            <Link
              to="/services"
              className="font-ui text-sm font-bold uppercase tracking-wider text-accent hover:text-accent-light transition-colors duration-200 flex items-center gap-2"
            >
              View All Services →
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-100 rounded-lg p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-orange-50 rounded-lg flex items-center justify-center text-2xl mb-5">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-primary font-bold text-2xl mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-body text-gray-500 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Tests list */}
              <ul className="flex flex-col gap-2">
                {service.tests.map((test, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 font-ui text-xs text-gray-600 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {test}
                  </li>
                ))}
              </ul>

              {/* Hover accent line */}
              <div className="mt-6 w-0 group-hover:w-full h-0.5 bg-accent transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
