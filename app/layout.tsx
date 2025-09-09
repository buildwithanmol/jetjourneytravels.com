import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/custom/header";
import { Footer } from "@/components/custom/footer";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

const primaryFont = localFont({
  src: "../public/fonts/typeunion-yoshida-sans-regular.otf",
  display: "swap",
  variable: "--font-geist-sans",
});

const inter = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jet Journey Travels",
  description: "Jet Journey Travels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`max-w-screen-xl md:px-16 px-5 mx-auto ${primaryFont.className} ${inter.variable} antialiased`}
      >
        <nav className="">
          <Header />
        </nav>
        <main>{children}</main>
        <Footer />
        <Toaster />
        <NextTopLoader />
        <Link target="_blank" className="bg-green-500 text-white p-4 rounded-full fixed bottom-10 right-10 md:bottom-16 md:right-16" href={"https://wa.me/+971561628595"}>
          <BsWhatsapp
            className="  cursor-pointer"
            size={20}
          />
        </Link>
      </body>
    </html>
  );
}
