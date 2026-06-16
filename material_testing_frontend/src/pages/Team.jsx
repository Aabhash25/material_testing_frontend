const TEAM = [
  {
    name: "Madan Neupane",
    role: "Lab Director",
    email: "madan@ssnlab.com",
    description:
      "Leads the laboratory operations with extensive expertise in geotechnical and construction material testing. Ensures every report meets the highest standards of accuracy and certification.",
    photo: "",
  },
  {
    name: "Sudhikkya",
    role: "EIT · Senior Lab Technician",
    email: "sudhikkya@ssnlab.com",
    description:
      "Engineer in Training with hands-on experience running soil, concrete, and asphalt tests. Brings precision and technical rigor to every sample processed in our facility.",
    photo: null,
  },
  {
    name: "Prasika",
    role: "Office Manager",
    email: "prasika@ssnlab.com",
    description:
      "Keeps operations running smoothly — from client coordination and report delivery to scheduling and compliance. The backbone of our day-to-day workflow.",
    photo: null,
  },
  {
    name: "Sathvik",
    role: "Engineer-in-Training · Site Inspector",
    email: "sathvik@ssnlab.com",
    description:
      "Performs on-site inspections and field testing for construction projects. Combines academic training with real-world field experience to deliver reliable site assessments.",
    photo: null,
  },
];

function Avatar({ member }) {
  if (member.photo) {
    return (
      <img
        src={member.photo}
        alt={member.name}
        className="w-40 h-40 rounded-full object-cover object-top mb-5"
      />
    );
  }
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
  return (
    <div className="w-40 h-40 rounded-full bg-gray-100 flex items-center justify-center mb-5 shrink-0">
      <span className="font-display text-primary font-extrabold text-4xl uppercase">
        {initials}
      </span>
    </div>
  );
}

export default function Team() {
  return (
    <main className="bg-white min-h-screen">
      {/* ── Header ── */}
      <div className="bg-primary text-white px-10 md:px-16 pt-36 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="font-ui text-accent text-xs font-semibold uppercase tracking-[3px]">
              The People Behind the Lab
            </span>
          </div>
          <h1
            className="font-display text-white font-extrabold leading-none"
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              letterSpacing: "-1.5px",
            }}
          >
            OUR TEAM
          </h1>
          <p className="font-body text-white/50 text-sm mt-4 max-w-xl leading-relaxed">
            A dedicated group of engineers, technicians, and professionals
            committed to delivering accurate, certified material testing results
            for every project.
          </p>
        </div>
      </div>

      {/* ── Team Grid ── */}
      <div className="px-10 md:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center text-center"
              >
                <Avatar member={member} />
                <span className="font-ui text-accent text-[11px] font-semibold uppercase tracking-[2px] mb-1">
                  {member.role}
                </span>
                <h3 className="font-display text-primary font-extrabold uppercase text-lg mb-2">
                  {member.name}
                </h3>
                <p className="font-body text-gray-400 text-sm leading-relaxed mb-3">
                  {member.description}
                </p>
                <a
                  href={`mailto:${member.email}`}
                  className="font-ui text-sm font-semibold text-accent hover:underline"
                >
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="border-t border-gray-200 bg-gray-50 px-10 md:px-16 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-0.5 bg-accent" />
              <span className="font-ui text-accent text-xs font-semibold uppercase tracking-[3px]">
                Work With Us
              </span>
            </div>
            <p className="font-display text-primary font-extrabold text-xl uppercase tracking-tight">
              Ready to get your project tested?
            </p>
          </div>
          <a
            href="/contact"
            className="font-ui text-xs font-bold uppercase tracking-wider bg-accent hover:bg-accent/90 text-white px-8 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg shrink-0"
          >
            Contact Us →
          </a>
        </div>
      </div>
    </main>
  );
}
