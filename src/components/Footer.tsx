import React from "react";
import footerData from "@/content/footer.json"; // adjust path if needed
import * as Icons from "lucide-react"; // import all icons

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-10">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-4">
        <div className="flex gap-6">
          {footerData.links.map((link, idx) => {
            const Icon = (Icons as any)[link.icon]; // pick icon dynamically
            return (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 transition"
              >
                {Icon && <Icon size={18} />}
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>
        <p className="text-sm text-gray-500">{footerData.copyright}</p>
      </div>
    </footer>
  );
}
