import { Head } from "vite-react-ssg";

export const FAQS = [
  {
    q: "What construction materials do you test?",
    a: "We test soil and aggregate, concrete, rock, asphalt and bitumen, and perform water drainage and permeability testing. Each service has its own page with the list of tests and the ASTM/AASHTO methods.",
  },
  {
    q: "Where is your laboratory located?",
    a: "Our laboratory is at 6500 McDonough Dr, Suite E-04, Norcross, Georgia 30093, in the Atlanta metro area.",
  },
  {
    q: "Which states do you serve?",
    a: "We serve projects in Georgia, Texas, Florida, Alabama, Tennessee, North Carolina, South Carolina, Virginia and West Virginia.",
  },
  {
    q: "How do I submit samples for testing?",
    a: "Contact us with your project information and test requirements. You can then bring your samples to our lab or request on-site collection.",
  },
  {
    q: "How long does it take to get test results?",
    a: "Reports can be ready in as little as 48 hours, depending on the test type and sample volume. Some tests, such as concrete cylinder breaks at specified ages, follow a fixed schedule. Call us to confirm timing for your project.",
  },
  {
    q: "How much does testing cost?",
    a: "Pricing depends on the tests and the number of samples. Contact us for our fee schedule or a quote for your project.",
  },
  {
    q: "How are test reports delivered?",
    a: "Reports are delivered digitally, so they are ready to share with your engineer or project team.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function FAQ() {
  return (
    <section className="relative w-full bg-primary text-white py-12 md:py-16 overflow-hidden">
      <Head>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Head>

      {/* same accent edge and dotted texture as the hero */}
      <div className="absolute left-0 top-0 h-full w-1 bg-accent" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-0.5 bg-accent" />
          <span className="font-ui text-accent text-xs font-semibold uppercase tracking-[3px]">
            FAQ
          </span>
        </div>

        <h2
          className="font-display text-white font-extrabold leading-tight mb-8"
          style={{ fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-1px" }}
        >
          FREQUENTLY ASKED <span className="text-accent">QUESTIONS</span>
        </h2>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {FAQS.map(({ q, a }) => (
            <details key={q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-bold text-white text-base md:text-lg hover:text-accent transition-colors">
                {q}
                <span className="text-accent text-2xl leading-none transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="font-body text-white/70 text-sm md:text-base leading-relaxed mt-3 pr-8">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
