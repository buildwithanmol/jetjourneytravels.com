import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HomeAbout() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
      <div className="order-2 md:order-1">
        <Image
          src="/background/home-about.png"
          width={400}
          height={400}
          alt="hero"
          className="w-full object-contain aspect-square"
        />
      </div>
      <div className="order-1 md:order-2 flex flex-col gap-5 md:px-10 justify-center">
        <h1 className="md:text-4xl text-2xl font-bold"> About</h1>
        <p className="md:text-xl text-lg font-bold">
          {" "}
          Welcome to Jet Journey Travels LLC{" "}
        </p>
        <p className="max-w-sm font-mono">
          With over 15 years of experience, you can depend on JET JOURNEY TRAVELS LLC to provide you with the right advice and products to meet your specific needs.
        </p>
        <Button variant={"main"} className="max-w-min">
          <Link href="/about" className="flex items-center gap-2 ">
            {" "}
            Learn more <ArrowRight />{" "}
          </Link>
        </Button>
      </div>
    </div>
  );
}
