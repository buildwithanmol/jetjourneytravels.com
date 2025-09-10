"use client";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { cn } from "@/lib/utils";

export function HotelsService({
  files,
  hotels,
  view = true,
}: {
  files: string;
  hotels: string;
  view?: boolean;
}) {
  const fileArray = JSON.parse(files) as string[];

  return (
    <div>
      <h1 className="font-semibold text-xl pb-4">Preferred Hotels</h1>

      {/* Partner logos marquee */}
      <Marquee gradient={false} speed={40} pauseOnHover>
        <div className="flex items-center">
          {fileArray.map((file, index) => (
            <div key={index} className="flex items-center justify-center px-4">
              <div className="h-20 w-32 flex items-center justify-center">
                <Image
                  width={200}
                  height={60}
                  src={`/hotels/${file}`}
                  alt={file}
                  className={cn(
                    "object-contain w-full max-h-12 hover:grayscale transition cursor-pointer",
                    file.includes("GlobalHotelAllianceLogo.png") && "ml-10"
                  )}
                />
              </div>
            </div>
          ))}
        </div>
      </Marquee>
        {/* Hotel images gallery */}
        <div className={cn(view ? "columns-2 md:columns-3  pt-10 gap-4" : "hidden")}>
          {JSON.parse(hotels).map((file: string, index: number) => (
            <div key={index} className="flex rounded-xl">
              <Zoom>
                <Image
                  width={500}
                  height={500}
                  src={`/hotels-images/${file}`}
                  alt={file}
                  className="w-full h-full pb-4 rounded-lg cursor-pointer hover:grayscale transition duration-300 object-cover"
                />
              </Zoom>
            </div>
          ))}
        </div>
    </div>
  );
}
