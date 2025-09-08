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
import { FaFacebookSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

function Menus({ styles }: { styles: string }) {
  return (
    <nav className={styles}>
      {[
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Services", href: "/services" },
        { name: "Blog", href: "/blog" },
      ].map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="border-b-2 border-transparent hover:border-secondary transition-colors duration-300"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}

export function Header() {
  return (
    <>
      {/* Top bar */}
      <div className="hidden md:flex justify-between items-center py-3 px-6 text-sm md:text-base border-b">
        <div className="flex items-center gap-4 text-primary">
          <Link href="https://www.instagram.com/jetjourneytravels/">
            <FaSquareInstagram className="w-5 h-5 hover:text-secondary transition" />
          </Link>
          <Link href="https://www.facebook.com/jetjourneytravels/">
            <FaFacebookSquare className="w-5 h-5 hover:text-secondary transition" />
          </Link>
          <Link href="https://www.linkedin.com/company/jetjourneytravels/">
            <FaLinkedin className="w-5 h-5 hover:text-secondary transition" />
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/contact"
            className="flex items-center gap-2 hover:text-secondary transition"
          >
            <IoMdMail className="w-5 h-5 text-primary" />
            info@jetjourneytravels.com
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 hover:text-secondary transition"
          >
            <FaPhoneAlt className="w-5 h-5 text-primary" />
            +971561628595
          </Link>
        </div>
      </div>

      {/* Main header */}
      <header className="flex items-center justify-between py-4 px-6 md:py-6 border-b">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={150}
              height={150}
              priority
            />
          </Link>
        </div>

        {/* Desktop menus */}
        <Menus styles="hidden md:flex items-center font-light gap-6" />

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button asChild variant="main" className="cursor-pointer">
            <Link href="https://wa.me/+971561628595">Book Now</Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className="p-2">
              <AlignRight className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetHeader>
                <SheetTitle className="border-b pb-4 mb-4 text-lg font-medium">
                  Your Journey, Our Expertise.
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4">
                <Menus styles="flex flex-col gap-4" />
                <Button asChild variant="main" className="mt-4 cursor-pointer">
                  <Link href="https://wa.me/+971561628595">Book Now</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
