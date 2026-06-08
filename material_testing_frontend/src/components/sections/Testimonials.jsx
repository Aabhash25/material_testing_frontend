import { useState } from "react";
import { TESTIMONIALS } from "../../data/siteData";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section className="bg-primary border-b border-white/10">
      {/* ── Header strip ── */}
      <div className="px-10 md:px-16 pt-16 pb-12 flex items-center gap-3">
        <div className="w-8 h-0.5 bg-accent" />
        <span className="font-ui text-accent text-xs font-semibold uppercase tracking-[3px]">
          Client Feedback
        </span>
      </div>

      {/* ── Two-column body ── */}
      <div
        className="flex flex-col md:flex-row border-t border-white/10"
        style={{ minHeight: "420px" }}
      >
        {/* LEFT — active big quote */}
        <div className="md:w-3/5 flex flex-col justify-between px-10 md:px-16 py-14 border-b md:border-b-0 md:border-r border-white/10">
          <div>
            {/* Giant quote mark */}
            <div
              className="font-display text-accent leading-none mb-8 select-none"
              style={{
                fontSize: "clamp(80px, 10vw, 120px)",
                lineHeight: "0.7",
              }}
            >
              "
            </div>

            {/* Quote text */}
            <p
              className="font-body text-white/80 leading-relaxed mb-10"
              style={{ fontSize: "clamp(16px, 2vw, 22px)" }}
            >
              {t.text}
            </p>
          </div>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent flex items-center justify-center font-display text-white font-extrabold text-xl shrink-0">
              {t.name.charAt(0)}
            </div>
            <div>
              <div className="font-ui text-white font-bold text-sm">
                {t.name}
              </div>
              <div className="font-ui text-white/40 text-xs uppercase tracking-[1.5px] mt-0.5">
                {t.role}
              </div>
            </div>
            <div className="ml-4 w-8 h-0.5 bg-accent" />
          </div>
        </div>

        {/* RIGHT — client list */}
        <div className="md:w-2/5 flex flex-col justify-center">
          <div className="px-10 md:px-12 py-6 border-b border-white/10">
            <h2
              className="font-display text-white font-extrabold leading-none"
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                letterSpacing: "-1px",
              }}
            >
              WHAT OUR
              <br />
              <span className="text-accent">CLIENTS SAY</span>
            </h2>
          </div>

          {TESTIMONIALS.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActive(i)}
              className={`w-full text-left px-10 md:px-12 py-6 border-b border-white/10 flex items-center gap-5 transition-all duration-200 group ${
                active === i ? "bg-white/5" : "hover:bg-white/3"
              }`}
            >
              {/* Active indicator */}
              <div
                className={`w-0.5 self-stretch shrink-0 transition-all duration-200 ${active === i ? "bg-accent" : "bg-transparent"}`}
              />

              {/* Avatar */}
              <div
                className={`w-10 h-10 flex items-center justify-center font-display font-extrabold text-base shrink-0 transition-all duration-200 ${
                  active === i
                    ? "bg-accent text-white"
                    : "bg-white/10 text-white/50"
                }`}
              >
                {item.name.charAt(0)}
              </div>

              <div className="flex-1 min-w-0">
                <div
                  className={`font-ui text-sm font-bold truncate transition-colors duration-200 ${active === i ? "text-white" : "text-white/50"}`}
                >
                  {item.name}
                </div>
                <div className="font-ui text-white/30 text-xs uppercase tracking-[1.5px] mt-0.5 truncate">
                  {item.role}
                </div>
              </div>

              {/* Arrow */}
              <span
                className={`font-ui text-xs transition-all duration-200 shrink-0 ${active === i ? "text-accent" : "text-white/20 group-hover:text-white/40"}`}
              >
                →
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
