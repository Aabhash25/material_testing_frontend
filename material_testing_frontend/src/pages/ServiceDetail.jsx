import { Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import SEO from "../components/SEO";
import { SERVICES, CONTACT_INFO } from "../data/siteData";

const STATES = [
  "Texas",
  "Florida",
  "Georgia",
  "Alabama",
  "Tennessee",
  "North Carolina",
  "South Carolina",
  "Virginia",
  "West Virginia",
];

const STEPS = [
  {
    title: "Tell us about your project",
    text: "Share the tests you need, the specifications that apply, and your timeline.",
  },
  {
    title: "We confirm the scope",
    text: "We review the requirements with you and confirm the tests, standards and sample needs.",
  },
  {
    title: "Testing in our lab",
    text: "Your samples are tested in our Norcross, Georgia laboratory.",
  },
  {
    title: "Receive your report",
    text: "Reports can be ready in as little as 48 hours, depending on the test.",
  },
];

function Label({ children, light = false }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-0.5 bg-accent" />
      <span className="font-ui text-accent text-xs font-semibold uppercase tracking-[3px]">
        {children}
      </span>
    </div>
  );
}

export default function ServiceDetail({ service }) {
  const others = SERVICES.filter((s) => s.slug !== service.slug);
  const tests = service.tests;
  const url = `https://ssnmaterialtesting.com/services/${service.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.seoDescription,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: "SSN Material Testing Laboratory",
      url: "https://ssnmaterialtesting.com/",
      telephone: "+1-470-504-5962",
    },
    areaServed: STATES.map((name) => ({ "@type": "State", name })),
  };

  return (
    <div className="pt-24">
      <SEO
        title={service.seoTitle}
        description={service.seoDescription}
        path={`/services/${service.slug}`}
      />
      <Head>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>

      {/* ── HERO ── */}
      {/* ── HERO ── */}
      <section className="bg-primary py-20 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 85% 15%, rgba(249,115,22,0.13) 0%, transparent 55%)",
          }}
        />
        <div
          className={`max-w-6xl mx-auto relative grid grid-cols-1 gap-12 items-center ${
            service.image ? "md:grid-cols-2" : ""
          }`}
        >
          <div>
            <nav className="font-ui text-xs text-white/40 mb-8 flex items-center gap-2 flex-wrap">
              <Link to="/" className="hover:text-accent transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                to="/services"
                className="hover:text-accent transition-colors"
              >
                Services
              </Link>
              <span>/</span>
              <span className="text-white/70">{service.name}</span>
            </nav>

            <Label>Testing Service</Label>
            <h1
              className="font-display text-white font-extrabold leading-none mb-6"
              style={{ fontSize: "clamp(30px, 4.2vw, 54px)" }}
            >
              {service.name.toUpperCase()}
            </h1>
            <p className="font-body text-white/60 text-base leading-relaxed max-w-xl mb-8">
              {service.intro}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                to="/contact"
                className="font-ui text-sm font-bold uppercase tracking-wider bg-accent hover:bg-accent-light text-white px-8 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Request Testing
              </Link>
              <a
                href="tel:+14705045962"
                className="font-ui text-sm font-bold uppercase tracking-wider border border-white/20 text-white hover:border-accent hover:text-accent px-8 py-4 transition-all duration-200"
              >
                Call {CONTACT_INFO.phone}
              </a>
            </div>

            <div className="flex gap-10 md:gap-14">
              {[
                { val: String(tests.length), lbl: "Test Types" },
                { val: String(STATES.length), lbl: "States Served" },
              ].map((s) => (
                <div key={s.lbl}>
                  <div
                    className="font-display text-accent font-extrabold leading-none"
                    style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
                  >
                    {s.val}
                  </div>
                  <div className="font-ui text-white/40 text-xs uppercase tracking-[2px] mt-1">
                    {s.lbl}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {service.image && (
            <div className="relative">
              <img
                src={service.image}
                alt={service.alt ?? service.name}
                className="w-full object-cover shadow-2xl"
                style={{ aspectRatio: "4 / 3" }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(26,35,50,0.25) 0%, rgba(26,35,50,0.03) 100%)",
                }}
              />
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-accent/40 -z-10 pointer-events-none" />
              {service.imgCredit && (
                <a
                  href={service.imgCredit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 left-2 bg-black/50 text-white/70 text-[10px] font-ui px-2 py-0.5 hover:text-white transition-colors"
                >
                  © {service.imgCredit.author} · {service.imgCredit.license}
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="bg-white py-20 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <Label>Overview</Label>
            <h2
              className="font-display text-primary font-extrabold leading-tight mb-6"
              style={{
                fontSize: "clamp(26px, 3.2vw, 40px)",
                letterSpacing: "-0.5px",
              }}
            >
              ABOUT OUR{" "}
              <span className="text-accent">{service.name.toUpperCase()}</span>
            </h2>
            <div className="flex flex-col gap-4">
              {service.overview?.map((p, i) => (
                <p
                  key={i}
                  className="font-body text-gray-500 text-base leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            {service.image && (
              <img
                src={service.image}
                alt={service.alt ?? service.name}
                className="w-full h-56 object-cover mb-6"
              />
            )}
            <div className="bg-bg border border-gray-200 p-8">
              <div className="font-ui text-gray-400 text-[10px] uppercase tracking-[3px] mb-5">
                Commonly Used For
              </div>
              <ul className="flex flex-col gap-4">
                {service.usedFor.map((u) => (
                  <li key={u} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" fill="white" className="w-3 h-3">
                        <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
                      </svg>
                    </span>
                    <span className="font-ui text-primary text-sm font-medium leading-snug">
                      {u}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTS ── */}
      <section className="bg-bg py-20 px-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <Label>What Falls Under It</Label>
          <h2
            className="font-display text-primary font-extrabold leading-none mb-10"
            style={{
              fontSize: "clamp(26px, 3.2vw, 40px)",
              letterSpacing: "-0.5px",
            }}
          >
            WHAT'S <span className="text-accent">INCLUDED</span>
          </h2>

          <div className="flex flex-col">
            {tests.map((t, i) => (
              <article
                key={t.name}
                className="flex gap-5 sm:gap-8 py-8 border-t border-gray-200 first:border-t-0"
              >
                <span className="font-display text-accent font-extrabold text-3xl leading-none w-12 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-primary font-extrabold text-xl leading-tight mb-2">
                    {t.name}
                  </h3>
                  {t.method && (
                    <div className="inline-block mb-3 font-ui text-[11px] font-semibold tracking-wide text-accent bg-orange-50 px-2 py-0.5">
                      {t.method}
                    </div>
                  )}
                  <p className="font-body text-gray-500 text-base leading-relaxed">
                    {t.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="font-body text-gray-400 text-xs mt-6">
            Methods shown are the governing ASTM / AASHTO standards. If your
            project specifies a different standard or a state DOT method, tell
            us and we'll confirm.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-white py-20 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <Label>Process</Label>
          <h2
            className="font-display text-primary font-extrabold leading-none mb-12"
            style={{
              fontSize: "clamp(26px, 3.2vw, 40px)",
              letterSpacing: "-0.5px",
            }}
          >
            HOW IT <span className="text-accent">WORKS</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((s, i) => (
              <div key={s.title} className="relative">
                <div
                  className="font-display text-accent font-extrabold leading-none mb-3"
                  style={{ fontSize: "48px", opacity: 0.25 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-primary font-extrabold text-lg leading-tight mb-2">
                  {s.title}
                </h3>
                <div className="w-8 h-0.5 bg-accent mb-3" />
                <p className="font-body text-gray-500 text-sm leading-relaxed">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER SERVICES ── */}
      <section className="bg-bg py-20 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <Label>Explore More</Label>
          <h2
            className="font-display text-primary font-extrabold leading-none mb-10"
            style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              letterSpacing: "-0.5px",
            }}
          >
            OTHER TESTING <span className="text-accent">SERVICES</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {others.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="bg-white border border-gray-200 p-6 hover:border-accent/40 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
              >
                <h3 className="font-display text-primary font-extrabold text-lg leading-tight mb-2">
                  {s.name}
                </h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed mb-4">
                  {s.summary}
                </p>
                <span className="font-ui text-accent text-xs font-bold uppercase tracking-wider">
                  View tests →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="font-display text-white font-extrabold leading-none mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            NEED{" "}
            <span className="text-accent">{service.name.toUpperCase()}</span>?
          </h2>
          <p className="font-body text-white/60 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Tell us about your project and we'll help you choose the right
            tests.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link
              to="/contact"
              className="font-ui text-sm font-bold uppercase tracking-wider bg-accent hover:bg-accent-light text-white px-10 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Contact Us
            </Link>
            <a
              href="tel:+14705045962"
              className="font-ui text-sm font-bold uppercase tracking-wider border border-white/20 text-white hover:border-accent hover:text-accent px-10 py-4 transition-all duration-200"
            >
              {CONTACT_INFO.phone}
            </a>
          </div>
          <div className="font-ui text-white/40 text-xs leading-relaxed">
            {CONTACT_INFO.address}
            <br />
            {CONTACT_INFO.hours}
          </div>
        </div>
      </section>
    </div>
  );
}
