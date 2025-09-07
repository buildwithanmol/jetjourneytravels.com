"use client";

import { Briefcase, Globe2, Headphones, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CorporateTravelSection() {
  return (
    <section
      className="px-6 lg:px-20 bg-cover bg-center bg-no-repeat relative rounded-2xl"
      style={{ backgroundImage: "url('/background/corporate-travel.jpg')" }}
    >
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50 rounded-2xl z-0"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Corporate & Business Travel Support
        </h2>
        <p className="text-gray-100 mb-10 max-w-2xl mx-auto">
          From skilled workers traveling for opportunities to executives flying
          for high-profile meetings, we ensure seamless and reliable travel
          arrangements worldwide.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          <FeatureCard
            icon={<Plane size={50} />}
            title="Worker Deployment"
            description="Streamlined planning for overseas workforce travel."
          />
          <FeatureCard
            icon={<Briefcase size={50} />}
            title="Corporate Partnerships"
            description="Exclusive deals on flights, hotels, and logistics."
          />
          <FeatureCard
            icon={<Globe2 size={50} />}
            title="Tailored Itineraries"
            description="Customized travel plans for executives and teams."
          />
          <FeatureCard
            icon={<Headphones size={50} />}
            title="24/7 Assistance"
            description="Round-the-clock support for smooth business trips."
          />
        </div>

        <Button
          asChild
          className="px-8 py-4 text-lg font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg transition"
        >
          <Link href="/contact">Plan Your Next Business Trip</Link>
        </Button>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center flex-col bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-105">
      <div className="text-blue-600 mb-4 relative w-16 h-16 flex items-center justify-center">
        <div className="absolute w-16 h-16 bg-blue-100/30 rounded-full"></div>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
}
