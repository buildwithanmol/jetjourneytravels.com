"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export function AirwaysMarquee({ files }: { files: string }) {
  const fileArray = JSON.parse(files) as string[];

  return (
    <div>
      <h1 className="font-semibold text-xl pb-4">Trusted Airline Partners:</h1>
      <Marquee gradient={false} speed={40} pauseOnHover>
        <div className="flex items-center">
          {fileArray.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-8 py-2"
            >
              <Image
                width={120}
                height={60}
                src={`/logos/${file}`}
                alt={file}
                className={cn(
                  "object-contain grayscale-0 cursor-pointer hover:grayscale transition",
                  file.includes("SpiceJet-Logo.jpg") && "mx-8"
                )}
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
