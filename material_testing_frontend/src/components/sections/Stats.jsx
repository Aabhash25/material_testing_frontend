const STATS = [
  { val: "15+", lbl: "Years in Operation" },
  { val: "5000+", lbl: "Tests Conducted" },
  { val: "50+", lbl: "Test Parameters" },
  { val: "A2LA", lbl: "Accredited Lab" },
];

export default function Stats() {
  return (
    <section className="bg-accent">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap">
        {STATS.map((stat, i) => (
          <div
            key={i}
            className="flex-1 min-w-35 flex flex-col justify-center px-8 py-10 border-r border-white/20 last:border-r-0"
          >
            <div
              className="font-display text-white font-extrabold leading-none mb-2"
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                letterSpacing: "-1px",
              }}
            >
              {stat.val}
            </div>
            <div className="font-ui text-white/70 text-xs uppercase tracking-[2.5px] leading-snug">
              {stat.lbl}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
