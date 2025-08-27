import { WhyChooseUs } from "@/components/custom/choose-us";
import { Hero } from "@/components/custom/hero";
import { HomeAbout } from "@/components/custom/home-about";
import { HomeServices } from "@/components/custom/home-services";
import { Testimonials } from "@/components/custom/testimonial";
export default async function Home() {
  return (
    <section className="space-y-10 md:space-y-20">
      <Hero />
      <HomeAbout />
      <WhyChooseUs />
      <HomeServices />
      {/* <Testimonials /> */}
    </section>
  );
}
