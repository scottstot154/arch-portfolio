import type { Metadata } from "next";
import Footer from "@/components/Footer";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Studio — Architecture Portfolio",
  description: "Selected works and ongoing projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans antialiased text-gray-800">
        {/* Header */}
        <header className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
          <Navbar />
        </header>

        {/* Main Content */}
        <main className="flex-grow mx-auto w-full max-w-6xl p-6 pt-24">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
