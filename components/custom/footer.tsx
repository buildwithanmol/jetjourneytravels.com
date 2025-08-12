import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t mt-10  text-white py-10">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div className="flex flex-col items-start gap-4">
          <Image
            src="/logo.png" // Replace with your logo path
            alt="Company Logo"
            width={150}
            height={50}
          />
          <p className="text-gray-400 text-sm">
            Your trusted travel partner for flights, hotels, and corporate
            journeys.
          </p>
        </div>

        {/* Footer Menu */}
        <div className="flex flex-col gap-2 md:items-center text-gray-500">
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link
            href="/portfolio"
            className="hover:text-primary transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/services"
            className="hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Email Form */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg text-gray-500">
            Connect with Us
          </h3>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-2 border-b focus:border-primary text-black focus:outline-none "
              required
            />
            <button
              type="submit"
              className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-md transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t mt-8 pt-5 text-center text-sm text-gray-500 font-sans">
        © {new Date().getFullYear()} Jet Journey Travels LLC. All rights
        reserved.
      </div>
    </footer>
  );
}
