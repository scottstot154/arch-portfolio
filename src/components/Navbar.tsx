"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm relative">
      {/* Logo */}
      <Link href="/" className="text-xl font-semibold">
        Studio
      </Link>

      {/* Links */}
      <div className="flex items-center gap-6">
        <Link href="/projects" className="hover:opacity-75">
          Projects
        </Link>
        <Link href="/about" className="hover:opacity-75">
          About
        </Link>

        {/* Contact Us Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
          >
            Contact Us
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg p-2 space-y-2 z-50">
              <a
                href="tel:+919876543210"
                className="block px-3 py-2 rounded hover:bg-gray-100"
              >
                📞 Call
              </a>
              <a
                href="mailto:studio@example.com"
                className="block px-3 py-2 rounded hover:bg-gray-100"
              >
                ✉️ Email
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
