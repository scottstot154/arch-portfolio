import React from "react";
import footerData from "@/content/footer.json";
import * as Icons from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-6">
        {/* Links with icons */}
        <div className="flex flex-wrap justify-center gap-6">
          {footerData.links.map((link, idx) => {
            const Icon = (Icons as any)[link.icon];
            return (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 transition"
              >
                {Icon && <Icon size={18} strokeWidth={1.5} />}
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 text-center">
          {footerData.copyright}
        </p>
      </div>
    </footer>
  );
}
