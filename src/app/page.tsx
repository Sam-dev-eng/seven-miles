import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { FeaturedProperties } from "@/components/sections/featured-properties";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <FeaturedProperties />
      <Testimonials />
      <CTA />
    </>
  );
}
