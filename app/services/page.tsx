import { AirwaysMarquee } from "@/components/custom/airways-marquee";
import { CorporateTravelSection } from "@/components/custom/corporate-travel-service";
import { HotelsService } from "@/components/custom/hotels-service";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import fs from "node:fs";
import path from "node:path";

export default async function Services() {
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
    <section className="space-y-10 py-12">
      <h1 className="text-2xl md:text-3xl text-center font-bold">Services</h1>

      <ServiceCard
        image="/services/air-ticketing.png"
        title="Air Ticketing"
        description="Get access to competitive fares and real-time availability on domestic and international flights.
Whether economy, business, or first class, we secure the best routes and pricing—fast,
flexible, and fully supported. "
        href="https://wa.me/+971561628595?text=Hi%2C%20I%27m%20looking%20for%20an%20air%20ticketing%20service"
      />
      <AirwaysMarquee files={files_data} />
      <ServiceCard
        image="/services/hotel-booking.png"
        title="Hotel Booking"
        description="We partner with trusted hotels worldwide to provide the perfect stay—luxury resorts, business
accommodations, or budget-friendly options. Comfort and convenience, wherever you go. "
        href="https://wa.me/+971561628595?text=Hi%2C%20I%27m%20looking%20for%20a%20hotel%20booking%20service"
        reverse
      />

      <HotelsService files={hotels_data_json} hotels={hotels_images_json} />

      <ServiceCard
        image="/services/corporate-travel.png"
        title="Corporate Travel"
        description="Efficient, cost-effective, and policy-compliant business travel management. We handle
          bookings, itineraries, group travel, and reporting—so your team stays focused on business, not
          logistics. "
        href="https://wa.me/+971561628595?text=Hi%2C%20I%27m%20looking%20for%20a%20corporate%20travel%20service"
      />

      <CorporateTravelSection />
    </section>
  );
}

function ServiceCard({
  image,
  title,
  description,
  href,
  reverse = false,
}: {
  image: string;
  title: string;
  description: string;
  href: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`grid md:grid-cols-2 grid-cols-1 gap-10 bg-white rounded-2xl`}
    >
      {/* Image Section */}
      <div
        className={`flex-shrink-0 relative ${
          reverse ? "md:order-2" : "md:order-1"
        }`}
      >
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="rounded-xl w-full object-contain aspect-square"
        />
      </div>

      {/* Content Section */}
      <div
        className={`flex flex-col justify-center text-center md:text-left ${
          reverse ? "md:order-1" : "md:order-2"
        }`}
      >
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button variant={"main"}>
          <Link href={href}>Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
