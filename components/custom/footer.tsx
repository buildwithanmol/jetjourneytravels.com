"use client";

import sendMail from "@/lib/actions/mail";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

export function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      await sendMail({
        email: ["info@jetjourneytravels.com"],
        subject: "Service Request - Jet Journey Travels LLC",
        body: `
          <p>A new service request has been initiated.</p>
          <ul>
            <li>Email: ${email}</li>
          </ul>
        `,
      });

      toast.success("Thank you for contacting us!");
      setEmail("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send your message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="border-t mt-10 py-12 text-gray-800">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & About */}
        <div className="flex flex-col gap-4">
          <Image src="/logo.png" alt="Company Logo" width={150} height={50} />
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            Your trusted travel partner for flights, hotels, and corporate
            journeys.
          </p>
        </div>

        {/* Footer Menu */}
        <div className="flex flex-col items-start ">
          <h3 className="font-semibold text-left text-lg mb-3">Quick Links</h3>
          <div className="flex flex-col gap-2 text-md text-gray-600">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Portfolio", href: "/portfolio" },
              { name: "Services", href: "/services" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Email Form */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg text-gray-600">
            Connect with Us
          </h3>
          <form
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={handleSubmit}
          >
            
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 px-3 py-2 border-b border-gray-400 focus:border-primary text-gray-800 focus:outline-none"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-primary hover:bg-secondary text-white px-5 py-2 rounded-md transition-colors disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-300 mt-10 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Jet Journey Travels LLC. All rights
        reserved.
      </div>
    </footer>
  );
}
