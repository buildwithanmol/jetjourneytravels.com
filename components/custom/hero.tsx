import { Phone } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-10 md:gap-5">
      <div className="space-y-3 flex flex-col justify-center">
        <h1 className="md:text-4xl text-2xl font-bold "> Your Journey, Our Experties. </h1>
        <p className="font-mono text-sm md:text-lg md:max-w-sm">
          Seamless bookings for flights, hotels, and corporate travel crafted
          with care.
        </p>
        <Button variant={"main"} className="max-w-min">
          <Link href={"https://wa.me/+971561628595"} className="flex items-center gap-2 "><Phone /> Get a Quote</Link>
        </Button>
        <Image
          src={"/addons/flying-plane.png"}
          width={400}
          height={400}
          alt="flying-plane"
        />
      </div>
      <div>
        <Image
          src={"/background/hero.png"}
          width={500}
          height={500}
          alt="hero"
          className="w-full object-contain aspect-square"
        />
      </div>
    </div>
  );
}
