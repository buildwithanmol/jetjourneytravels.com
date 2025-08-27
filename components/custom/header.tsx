import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";

function Menus({ styles }: { styles: string }) {
  return (
    <div className={styles}>
      {[
        {
          name: "Home",
          href: "/",
        },
        {
          name: "About",
          href: "/about",
        },
        {
          name: "Contact",
          href: "/contact",
        },
        {
          name: "Portfolio",
          href: "/portfolio",
        },
        {
          name: "Services",
          href: "/services",
        },
      ].map((item) => {
        return (
          <Link
            key={item.name}
            href={item.href}
            className="border-b-2 border-transparent hover:border-secondary transition-colors duration-500"
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}

export function Header() {
  return (
    <header className="flex items-center justify-between border-b pb-6 md:pb-10">
      <div>
        <Image src="/logo.png" alt="logo" width={150} height={150} />
      </div>

      <Menus styles="md:flex hidden font-light gap-5" />

      <div className="md:block hidden">
        <Button asChild variant={"main"} className="cursor-pointer">
          <Link href="https://wa.me/+971561628595">
                  Book Now
                </Link>
        </Button>
      </div>

      <Sheet>
        <SheetTrigger className="md:hidden block">
          <AlignRight />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="border-b pb-5 mb-5">
              Your Journey, Our Expertise.
            </SheetTitle>
            <div>
              <Menus styles="flex flex-col gap-4 mb-5" />
              <Button asChild variant={"main"} className="cursor-pointer">
                <Link href="https://wa.me/+971561628595">
                  Book Now
                </Link>
              </Button>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
}
