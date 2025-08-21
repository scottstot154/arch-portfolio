import type { Metadata } from "next";
import Footer from "@/components/Footer";
import "./globals.css";
import Link from "next/link";

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
          <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              Studio
            </Link>
            <div className="flex gap-6 text-sm font-medium">
              <Link
                href="/projects"
                className="hover:text-blue-600 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="hover:text-blue-600 transition-colors"
              >
                About
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow mx-auto w-full max-w-6xl p-6">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
