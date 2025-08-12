"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export function Testimonials() {
  const carouselNext = useRef<HTMLButtonElement | null>(null);
  const carouselPrevios = useRef<HTMLButtonElement | null>(null);

  const handlePrev = () => {
    carouselPrevios.current?.click();
  };

  const handleNext = () => {
    carouselNext.current?.click();
  };

  return (
    <div>
      {/* Heading + Custom Buttons */}
      <div className="flex items-center gap-5 justify-center">
        <button onClick={handlePrev} className="p-2 rounded-full bg-gray-100">
          <ChevronLeftIcon />
        </button>
        <h1 className="font-black text-3xl text-center">Testimonials</h1>
        <button onClick={handleNext} className="p-2 rounded-full bg-gray-100">
          <ChevronRightIcon />
        </button>
      </div>

      {/* Carousel */}
      <Carousel className="mt-10">
        <CarouselNext ref={carouselNext} className="hidden"/>
        <CarouselPrevious ref={carouselPrevios} className="hidden" />
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Image
                src="/testimonials/1.png"
                width={400}
                height={400}
                alt={`testimonial-${index}`}
                className="w-full object-contain aspect-square"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
