import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe2, Users, Handshake, Headphones } from "lucide-react";

export function WhyChooseUs() {
  return (
    <div className="space-y-10">
      <h1 className="font-black text-3xl text-center">
        {" "}
        Why Choose Us <span className="text-primary">?</span>{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          {
            icon: Globe2,
            title: "Dubai based global capabilities.",
          },
          {
            icon: Users,
            title: "Dedicated consultants for personal and corporate clients.",
          },
          {
            icon: Handshake,
            title: "Customized corporate packages & negotiated rates.",
          },
          {
            icon: Headphones,
            title: "Customer support, anywhere in the world.",
          },
        ].map((item) => {
          return (
            <Card
              key={item.title}
              className="gap-10 hover:bg-gradient-to-r from-primary to-secondary hover:text-white group transition-colors "
            >
              <CardHeader className="flex items-center flex-col  md:gap-5 justify-center">
                <item.icon
                  className="text-primary md:w-auto w-12 group-hover:text-white transition-colors"
                  size={60}
                />
                <CardTitle className="md:text-xl text-lg font-light text-center">
                  {" "}
                  {item.title}{" "}
                </CardTitle>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
