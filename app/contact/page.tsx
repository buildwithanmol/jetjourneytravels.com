"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe2, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import sendMail from "@/lib/actions/mail";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      await sendMail({
        email: ["info@jetjourneytravels.com"],
        subject: "Service Request - Jet Journey Travels LLC",
        body: `
          <p>A new travel service request has been submitted:</p>
          <ul>
            <li><strong>Name:</strong> ${formData.name}</li>
            <li><strong>Email:</strong> ${formData.email || "N/A"}</li>
            <li><strong>Phone:</strong> ${formData.phone}</li>
            <li><strong>Message:</strong> ${formData.message}</li>
          </ul>
        `,
      });

      toast.success("Thank you! Your request has been sent successfully.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send your request. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-center">Contact Us</h1>

      <div className="mt-8 md:mt-12 bg-white rounded-2xl overflow-hidden border shadow-sm flex flex-col md:flex-row max-w-screen-lg mx-auto">
        {/* Left - Form */}
        <div className="w-full md:w-2/3 p-6 md:p-12 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-gray-600  mb-8">
            Fill in the form below and we’ll respond as soon as possible.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name *"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number *"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Inquiry / Message"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none resize-none"
            />

            <Button
              className="w-full hover:bg-primary"
              variant="main"
              disabled={loading}
              type="submit"
            >
              {loading ? "Sending..." : "Submit"}
            </Button>
          </form>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>P.O.Box 337289, Al Quoz, Dubai</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <a
                href="https://wa.me/+971561628595"
                target="_blank"
                className="hover:underline"
              >
                +971 56-1628595
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a
                href="mailto:info@jetjourneytravels.com"
                className="hover:underline"
              >
                info@jetjourneytravels.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-primary" />
              <Link href="/" className="hover:underline">
                jetjourneytravels.com
              </Link>
            </div>
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative w-full md:w-1/3 h-64 md:h-auto hidden md:flex">
          <Image
            src="/portfolio/pexels-alexazabache-3214995.jpg"
            alt="Contact Us"
            width={1200}
            height={1000}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
