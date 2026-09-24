import { Head } from "vite-react-ssg";
import Hero from "../components/sections/Hero";
// import Stats from "../components/sections/Stats";
import HowItWorks from "../components/sections/HowItWorks";
// import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import SEO from "../components/SEO";

const SERVICE_STATES = [
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

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ssnmaterialtesting.com/#business",
  name: "SSN Material Testing Laboratory",
  url: "https://ssnmaterialtesting.com/",
  image: "https://ssnmaterialtesting.com/ssn-preview.jpg",
  telephone: "+1-470-504-5962",
  email: "contact@ssnmaterialtesting.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6500 McDonough Dr, Suite E-04",
    addressLocality: "Norcross",
    addressRegion: "GA",
    postalCode: "30093",
    addressCountry: "US",
  },
  areaServed: SERVICE_STATES.map((name) => ({
    "@type": "State",
    name,
  })),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "07:00",
    closes: "16:00",
  },
};

export default function Home() {
  return (
    <>
      <SEO
        title="Construction Materials Testing Lab in Georgia | SSN"
        description="Soil, concrete, asphalt and aggregate testing for contractors and engineers in Georgia and nearby states. Call (470) 504-5962 or request a quote."
        path="/"
      />
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(localBusiness)}
        </script>
      </Head>
      <Hero />
      {/* <Stats /> */}
      <HowItWorks />
      {/* <Testimonials /> */}
      <CTA />
    </>
  );
}
