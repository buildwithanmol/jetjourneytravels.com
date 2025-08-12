import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Services() {
  return (
    <section className="space-y-10">
      <h1 className="text-2xl text-center">Services</h1>

      <ServiceCard
        image="/services/air-ticketing.png"
        title="Air Ticketing"
        description="Lorem ipsum dolor sit amet consectetur. Netus ut in netus adipiscing cursus. Morbi risus tellus placerat pulvinar augue dui. Id velit congue neque libero tortor enim egestas cursus. Euismod nulla sed convallis duis."
        href="mailto:"
      />
      <ServiceCard
        image="/services/hotel-booking.png"
        title="Hotel Booking"
        description="Lorem ipsum dolor sit amet consectetur. Netus ut in netus adipiscing cursus. Morbi risus tellus placerat pulvinar augue dui. Id velit congue neque libero tortor enim egestas cursus. Euismod nulla sed convallis duis."
        href="mailto:"
        reverse
      />
      <ServiceCard
        image="/services/corporate-travel.png"
        title="Corporate Travel"
        description="Lorem ipsum dolor sit amet consectetur. Netus ut in netus adipiscing cursus. Morbi risus tellus placerat pulvinar augue dui. Id velit congue neque libero tortor enim egestas cursus. Euismod nulla sed convallis duis."
        href="mailto:"
      />
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
