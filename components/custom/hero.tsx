import Image from "next/image";
import { GetQuote } from "./get-quote";

export function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-10 md:gap-5 py-12">
      <div className="relative space-y-3 flex flex-col justify-center">
        <h1 className="md:text-4xl text-2xl font-bold "> Your Journey, Our Expertise. </h1>
        <p className="font-mono text-sm md:text-lg md:max-w-sm">
          
          Seamless bookings for flights, hotels, and corporate travel crafted
          with care.
        </p>
        <GetQuote />
        <Image
          src={"/addons/flying-plane.png"}
          width={400}
          height={400}
          alt="flying-plane"
        className="bottom-16 absolute md:block hidden "
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
