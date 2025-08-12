import { Button } from "@/components/ui/button";
import { Globe2, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default async function Contact() {
  return (
    <section>
      <h1 className="text-2xl md:text-3xl  text-center"> Contact </h1>
      <div className="bg-white rounded-[2rem] overflow-hidden border  mt-5 md:mt-10 flex flex-col md:flex-row">
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
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name *"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="tel"
              placeholder="Phone number *"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <select className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
              <option>How did you find us?</option>
              <option>Google</option>
              <option>Facebook</option>
              <option>Instagram</option>
              <option>Referral</option>
            </select>

            <Button className="w-full" variant="main">
              Submit
            </Button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-8 mt-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="">
                {" "}
                <Phone />{" "}
              </span>
              <a href="tel:+971043332637" className="text-blue-600">
                +971-04-3332637
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 />
              <Link href="/" className="text-secondary">
                {" "}
                <span>jetjourneytravels.com</span>{" "}
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
          </div>
        </div>

        {/* Right div - Blue Accent */}
        <div className="w-full md:w-1/3 bg-gradient-to-br from-primary to-secondary"></div>
      </div>
    </section>
  );
}
