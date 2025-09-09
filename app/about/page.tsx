import Image from "next/image";
import { Plane, Target, Eye } from "lucide-react";

export default function AboutPage() {
  const timeline = [
    {
      title: "Our Story",
      description:
        "Every great journey begins with a dream — a dream to explore, to connect, and to discover. At Jet Journey Travels LLC, based in the heart of Dubai, we bring those dreams to life. Inspired by Dubai’s spirit, we create travel experiences that go beyond itineraries and become stories worth telling.",
      icon: Plane,
    },
    {
      title: "Our Promise",
      description:
        "When you travel with Jet Journey Travels LLC, you don’t just visit destinations — you live them. Every journey is carefully curated to inspire, delight, and leave you with unforgettable stories.",
      icon: Target,
    },
    {
      title: "Our Vision",
      description:
        "We aspire to be more than a travel agency. We are your trusted companion, crafting journeys that reflect your passions, personality, and dreams — whether it’s a luxury escape, cultural adventure, or family getaway.",
      icon: Eye,
    },
  ];

  return (
    <section className="py-12">
      {/* Page Heading */}
      <h1 className="text-2xl md:mb-10 mb-5 md:text-3xl text-center font-bold">
        About
      </h1>

      {/* Hero Section */}
      <div className="relative pt-[15vh] md:py-[15vh] flex items-center flex-col justify-center">
        <Image
          src="/addons/flying-plane.png"
          width={400}
          height={400}
          alt="flying-plane"
          className="absolute top-0 left-0"
        />
        <Image
          src="/addons/line.png"
          width={300}
          height={300}
          alt="line-art"
          className="absolute bottom-0 right-0 hidden md:block"
        />
        <p className="font-semibold md:text-2xl text-lg mb-2 text-center">
          Your Trusted Travel Partner – Based in Dubai, Serving the World.
        </p>
        <p className="max-w-2xl md:text-md text-sm font-mono text-justify">
          Jet Journey Travels LLC is a leading travel agency based in Dubai,
          offering customized travel solutions for leisure and business
          travelers worldwide. With expertise in luxury vacations, family trips,
          corporate travel, and adventure tours, we create personalized
          itineraries tailored to your needs. <br /> <br /> Our services include flight
          bookings, hotel reservations, visa assistance, travel insurance, and
          airport transfers—ensuring a hassle-free travel experience from start
          to finish. <br /> <br /> Located in Dubai, the world’s travel hub, we leverage local
          knowledge and global partnerships to provide competitive rates and
          exclusive deals. <br /> <br /> You can count on us for reliable, efficient, and
          customer-focused travel planning. Your dream journey starts here.
        </p>
      </div>

      {/* Background Hero Image */}
      <Image
        width={1920}
        height={500}
        src="/background/hotel-image-services.jpg"
        alt="hero"
        className="rounded-xl w-full object-contain my-10"
      />

      {/* Timeline Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-primary">Journey</span>
          </h2>

          {/* Timeline Line */}
          <div className="relative border-l-4 border-gradient-to-b from-primary via-primary/70 to-primary/30">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="mb-12 ml-6">
                  {/* Icon Circle */}
                  <span className="absolute -left-5 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white ring-4 ring-white">
                    <Icon size={18} />
                  </span>

                  {/* Card Content */}
                  <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
