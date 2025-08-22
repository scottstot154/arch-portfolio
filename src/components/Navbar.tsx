"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/50 backdrop-blur-md text-black">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide">
          Studio
        </Link>

        {/* Links */}
        <div className="flex items-center space-x-6">
          <Link
            href="/projects"
            className="hover:text-gray-700 transition-colors"
          >
            Projects
          </Link>
          <Link href="/about" className="hover:text-gray-700 transition-colors">
            About
          </Link>

          {/* Contact Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              Contact
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-md bg-white/95 backdrop-blur-lg shadow-lg">
                <a
                  href="tel:+919876543210"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Call Us
                </a>
                <a
                  href="mailto:studio@email.com"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Email Us
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
