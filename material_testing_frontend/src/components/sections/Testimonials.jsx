import { TESTIMONIALS } from "../../data/siteData";

export default function Testimonials() {
  return (
    <section className="bg-primary py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="font-ui text-accent text-xs font-semibold uppercase tracking-[3px]">
              Client Feedback
            </span>
            <div className="w-8 h-0.5 bg-accent" />
          </div>
          <h2
            className="font-display font-extrabold text-white leading-none"
            style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
          >
            WHAT OUR CLIENTS SAY
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="font-display text-accent text-6xl leading-none mb-4">
                "
              </div>

              {/* Text */}
              <p className="font-body text-white/70 text-sm leading-relaxed mb-8">
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-white/10 pt-6">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-display text-white font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-ui text-white text-sm font-semibold">
                    {t.name}
                  </div>
                  <div className="font-ui text-white/40 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
