import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  FaPlaneDeparture,
  FaHotel,
  FaPassport,
  FaShieldAlt,
  FaCar,
  FaShuttleVan,
  FaSuitcaseRolling,
  FaBriefcase,
} from "react-icons/fa";

export function HomeServices() {
  const services = [
    {
      title: "Hotel Booking",
      img: "/background/hotels.jpg",
      rotation: "md:-rotate-6 md:mt-6 w-full",
    },
    {
      title: "Air Ticketing",
      img: "/background/flights.jpeg",
      rotation: "rotate-0 w-full",
    },
    {
      title: "Corporate Travel",
      img: "/background/corporate.jpg",
      rotation: "md:rotate-6 md:mt-6 w-full",
    },
  ];

  const servicesData = [
    {
      icon: <FaSuitcaseRolling />,
      title: "Customized Travel Packages",
      description:
        "Personalized itineraries crafted to fit your interests, schedule, and budget — from luxury escapes to adventurous getaways.",
    },
    {
      icon: <FaPlaneDeparture />,
      title: "Flight Bookings & Reservations",
      description:
        "Access to competitive fares and convenient flight options worldwide, including exclusive airline partnerships.",
    },
    {
      icon: <FaHotel />,
      title: "Hotel & Accommodation Booking",
      description:
        "Handpicked hotels and accommodations to suit every preference, from budget stays to 5-star luxury resorts.",
    },
    {
      icon: <FaPassport />,
      title: "Visa Assistance & Documentation",
      description:
        "Expert support to simplify visa applications and ensure all travel documents are in order.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Travel Insurance",
      description:
        "Comprehensive travel insurance plans to protect you and your loved ones during your trip.",
    },
    {
      icon: <FaShuttleVan />,
      title: "Airport Transfers & Transportation",
      description:
        "Reliable and comfortable transfers to and from airports, hotels, and other destinations.",
    },
    {
      icon: <FaCar />,
      title: "Car Rental",
      description:
        "Flexible car rental services with a wide range of vehicles, giving you the freedom to explore at your own pace.",
    },
    {
      icon: <FaBriefcase />,
      title: "Corporate Travel Management",
      description:
        "Efficient and cost-effective travel solutions tailored for business travelers and corporate clients.",
    },
  ];

  return (
    <div className="space-y-10">
      <div className="text-center mb-12">
        <h1 className="font-black text-3xl text-center"> Our Services</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
          At Jet Journey Travels LLC, we offer a wide range of travel solutions
          designed to make your journey seamless and enjoyable.
        </p>
      </div>
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
                className="object-cover aspect-square rounded-tr-[60px] rounded-bl-[60px] w-full h-auto"
              />
            </div>

            {/* Title */}
            <div className="flex items-center gap-2 mt-[-20px] px-6 py-2 rounded-lg text-white font-semibold text-lg shadow-md bg-gradient-to-r from-primary to-secondary">
              <Link href="/contact" className="flex items-center gap-2">
                {service.title}{" "}
                <ArrowRight className="group-hover:translate-x-2 transition-all" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 border rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="text-4xl text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
