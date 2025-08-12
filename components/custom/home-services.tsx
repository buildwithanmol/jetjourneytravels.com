import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function HomeServices() {
  const services = [
    {
      title: "Hotel Booking",
      img: "/background/service-air.png",
      rotation: "md:-rotate-6 md:mt-6",
    },
    {
      title: "Air Ticketing",
      img: "/background/service-air.png",
      rotation: "rotate-0",
    },
    {
      title: "Corporate Travel",
      img: "/background/service-air.png",
      rotation: "md:rotate-6 md:mt-6",
    },
  ];

  return (
    <div className="space-y-10">
      <h1 className="font-black text-3xl text-center">
        {" "}
        Our Services
      </h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`group flex flex-col  cusor-pointer  items-center ${service.rotation}`}
          >
            {/* Image */}
            <div className="overflow-hidden rounded-2xl w-full">
              <Image
                src={service.img}
                width={350}
                height={350}
                alt={service.title}
                className="object-cover w-full h-auto"
              />
            </div>

            {/* Title */}
            <div className="flex items-center gap-2 mt-[-20px] px-6 py-2 rounded-lg text-white font-semibold text-lg shadow-md bg-gradient-to-r from-primary to-secondary">
              {service.title}{" "}
              <ArrowRight className="group-hover:translate-x-2 transition-all" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
