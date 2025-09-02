"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export function AirwaysMarquee({ files }: { files: string }) {
  const fileArray = JSON.parse(files) as string[];
  return (
    <div>
      <h1 className="font-semibold text-xl pb-4"> Trusted Airline Partners: </h1>
      <Marquee>
        <div className="flex items-center justify-center gap-10">
          {fileArray.map((file, index) => (
            <div key={index} className="py-2">
              <Image
                width={120}
                height={120}
                src={`/logos/${file}`}
                alt={file}
                className="grayscale-0 cursor-pointer hover:grayscale"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
