"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe2, Mail, MapPin, Phone, Pin } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner"; 
import sendMail from "@/lib/actions/mail";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.phone) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      await sendMail({
        email: ["info@jetjourneytravels.com"],
        subject: "Service Request - Jet Journey Travels LLC",
        body: `
          <p>A new request for travel service has been initiated.</p>
          <ul>
            <li>Name: ${formData.name}</li>
            <li>Email: ${formData.email || "N/A"}</li>
            <li>Phone: ${formData.phone}</li>
          </ul>
        `,
      });

      toast.success("Your request has been sent successfully!");
      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send the request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h1 className="text-2xl md:text-3xl text-center">Contact</h1>
      <div className="bg-white rounded-[2rem] overflow-hidden border mt-5 md:mt-10 flex flex-col md:flex-row">
        {/* Left div - Form */}
        <div className="w-full md:w-2/3 p-8 md:p-12">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-black mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Send us an email and we'll get back to you as soon as possible.
          </p>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name *"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number *"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <Button className="w-full" variant="main" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </Button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-8 mt-8 text-sm">
            <div className="flex items-center gap-2">
              <Phone />
              <a
                href="https://wa.me/+971561628595"
                target="_blank"
                className="text-blue-600"
              >
                +971 56-1628595
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 />
              <Link href="/" className="text-secondary">
                jetjourneytravels.com
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Mail />
              <a
                href="mailto:info@jetjourneytravels.com"
                className="text-blue-600"
              >
                info@jetjourneytravels.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin />
              <span className="text-blue-600">
                  P.O.Box 337289
              </span>
            </div>
          </div>
        </div>

        {/* Right div - Blue Accent */}
        <div className="w-full md:w-1/3 bg-gradient-to-br from-primary to-secondary"></div>
      </div>
    </section>
  );
}
