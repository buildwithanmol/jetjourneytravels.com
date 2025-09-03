import { WhyChooseUs } from "@/components/custom/choose-us";
import { Hero } from "@/components/custom/hero";
import { HomeAbout } from "@/components/custom/home-about";
import { HomeServices } from "@/components/custom/home-services";
import path from "node:path";
import fs from "node:fs";
import { AirwaysMarquee } from "@/components/custom/airways-marquee";
import { HotelsService } from "@/components/custom/hotels-service";
import { CorporateTravelSection } from "@/components/custom/corporate-travel-service";

export default async function Home() {
  const logos_dir = path.join(process.cwd(), "public", "logos");
  const hotels_dir = path.join(process.cwd(), "public", "hotels");
  const hotels_images_dir = path.join(process.cwd(), "public", "hotels-images");
  
  const files = fs
    .readdirSync(logos_dir)
    .filter((file) => /\.(png|jpg|jpeg|svg)$/.test(file));
  const hotels_data = fs
    .readdirSync(hotels_dir)
    .filter((file) => /\.(png|jpg|jpeg|svg)$/.test(file));
  const hotels_images_data = fs
    .readdirSync(hotels_images_dir)
    .filter((file) => /\.(png|jpg|jpeg|svg|avif)$/.test(file));
  const files_data = JSON.stringify(files);
  const hotels_data_json = JSON.stringify(hotels_data);
  const hotels_images_json = JSON.stringify(hotels_images_data);

  return (
    <section className="space-y-10 md:space-y-20">
      <Hero />
      <AirwaysMarquee files={files_data} />      
      <HomeAbout />
      <HotelsService files={hotels_data_json} hotels={hotels_images_json} />
      <WhyChooseUs />
      <HomeServices />
      <CorporateTravelSection />
    </section>
  );
}
