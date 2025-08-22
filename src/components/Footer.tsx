import React from "react";
import footerData from "@/content/footer.json";
import * as Icons from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur-md text-white py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
        {/* Links with icons */}
        <div className="flex flex-wrap justify-center gap-8">
          {footerData.links.map((link, idx) => {
            const Icon = (Icons as any)[link.icon];
            return (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-300 transition"
              >
                {Icon && <Icon size={18} strokeWidth={1.5} />}
                <span className="text-sm font-medium">{link.label}</span>
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-gray-600/50" />

        {/* Copyright */}
        <p className="text-xs text-gray-400 text-center tracking-wide">
          {footerData.copyright}
        </p>
      </div>
    </footer>
  );
}
