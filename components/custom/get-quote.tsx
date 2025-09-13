"use client";

import { useState, useRef, useEffect } from "react";
import { Phone, Mail, MessageSquare, User } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export function GetQuote() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={menuRef}>
      <Button
        variant="main"
        className="px-10 w-screen max-w-[200px] cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Phone className="h-4 w-4" />
        Get a Quote
      </Button>

      {open && (
        <div className="absolute left-0 mt-2 w-48 rounded-tr-lg rounded-bl-lg border bg-white shadow-lg z-50">
          <Link
            href="https://wa.me/+971561628595"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 text-xs rounded-tr-lg"
          >
            <MessageSquare className="h-4 w-4" />
            Whatsapp Us
          </Link>
          <Link
            href="mailto:info@jetjourneytravels.com"
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 text-xs"
          >
            <Mail className="h-4 w-4" />
            Email Us
          </Link>
          <Link
            href="tel:+971561628595"
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 text-xs rounded-bl-lg"
          >
            <Phone className="h-4 w-4" />
            Call Us
          </Link>
        </div>
      )}
    </div>
  );
}
