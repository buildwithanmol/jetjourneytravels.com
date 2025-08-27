import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/custom/header";
import { Footer } from "@/components/custom/footer";
import { Toaster } from "sonner";

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
        <nav className="py-10">
          <Header />
        </nav>
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
