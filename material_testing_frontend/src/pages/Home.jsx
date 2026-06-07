import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import ServicesPreview from "../components/sections/ServicesPreview";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <Testimonials />
      <CTA />
    </>
  );
}
