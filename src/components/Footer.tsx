"use client";

import Link from "next/link";
import footerData from "@/content/footer.json";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Company & Tagline */}
        <div className="mb-6 text-center">
          <h3 className="text-xl font-semibold">{footerData.company}</h3>
          <p className="text-gray-400">{footerData.tagline}</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          {footerData.socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              target="_blank"
              className="hover:text-blue-400 transition-colors"
            >
              {link.platform}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          {footerData.copyright}
        </div>
      </div>
    </footer>
  );
}
