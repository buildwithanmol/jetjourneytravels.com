import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Map, Sparkles } from "lucide-react";

export function WhyChooseUs() {
  return (
    <div className="space-y-10">
      <h1 className="font-black text-3xl text-center">
        Why Choose <span className="text-primary">Jet Journey Travels LLC</span>
        <span className="text-primary">?</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          {
            icon: Plane,
            title:
              "Dubai Roots, Global Reach: From one of the world’s busiest travel hubs, we connect you to every corner of the globe.",
          },
          {
            icon: Map,
            title:
              "Tailor-Made Experiences: Personalized itineraries designed to fit your style of travel.",
          },
          {
            icon: Sparkles,
            title:
              "Seamless Service: We take care of the details, so you can focus on making memories.",
          },
        ].map((item) => (
          <Card
            key={item.title}
            className="gap-10 hover:bg-gradient-to-r from-primary to-secondary hover:text-white group transition-colors"
          >
            <CardHeader className="flex items-center flex-col md:gap-5 justify-center text-center">
              <item.icon
                className="text-primary md:w-auto w-12 group-hover:text-white transition-colors"
                size={60}
              />
              <CardTitle className="md:text-lg text-base font-light">
                {item.title}
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
