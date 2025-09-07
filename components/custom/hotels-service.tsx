"use client";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { cn } from "@/lib/utils";

export function HotelsService({
  files,
  hotels,
  view = true
}: {
  files: string;
  hotels: string;
  view?: boolean
}) {
  const fileArray = JSON.parse(files) as string[];
  return (
    <div>
      <h1 className="font-semibold text-xl pb-4"> Trusted Hotel Partners: </h1>
      <Marquee>
        <div className="flex items-center justify-center space-x-10">
          {fileArray.map((file, index) => (
            <div key={index} className="py-2">
              <Image
                width={120}
                height={120}
                src={`/hotels/${file}`}
                alt={file}
                className={cn("grayscale-0 cursor-pointer hover:grayscale aspect-square object-contain", file.includes("GlobalHotelAllianceLogo.png") && "ml-10")}
              />
            </div>
          ))}
        </div>
      </Marquee>
      <div className={cn( view ? "columns-2 md:columns-3 pt-10 gap-4" : "hidden")}>
        {JSON.parse(hotels).map((file: string, index: number) => (
          <div key={index} className="mb-4 break-inside-avoid">
            <Zoom>
              <Image
                width={500}
                height={500}
                src={`/hotels-images/${file}`}
                alt={file}
                className="w-full rounded-lg cursor-pointer hover:opacity-90 transition duration-300 object-cover"
              />
            </Zoom>
          </div>
        ))}
      </div>
    </div>
  );
}
