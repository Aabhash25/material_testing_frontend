import { Head } from "vite-react-ssg";
import Hero from "../components/sections/Hero";
// import Stats from "../components/sections/Stats";
import HowItWorks from "../components/sections/HowItWorks";
// import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import SEO from "../components/SEO";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SSN Material Testing Laboratory",
  url: "https://ssnmaterialtesting.com/",
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
        title="Material Testing Lab in Georgia | SSN Material Testing"
        description="Certified soil, concrete, asphalt and aggregate testing for contractors and engineers in GA and 8 nearby states. Reports in as little as 48 hours."
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
