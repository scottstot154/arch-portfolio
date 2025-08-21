import Image from "next/image";
import React from "react";

type HeroProps = {
  title: string;
  subtitle?: string;
  imageSrc: string; // e.g. "/images/hero.jpg"
  heightClass?: string; // override height if needed: "h-[60vh]" etc.
  align?: "center" | "left";
};

export default function Hero({
  title,
  subtitle,
  imageSrc,
  heightClass = "h-[60vh] md:h-[70vh]",
  align = "center",
}: HeroProps) {
  return (
    <section
      className={`relative w-full ${heightClass} overflow-hidden rounded-xl`}
    >
      {/* Background image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Subtle gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

      {/* Content */}
      <div
        className={`relative z-10 flex h-full ${
          align === "center"
            ? "items-center justify-center text-center"
            : "items-center justify-start"
        } px-4 sm:px-6 lg:px-8`}
      >
        <div
          className={`${
            align === "left" ? "max-w-3xl" : "max-w-4xl"
          } text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]`}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-2xl opacity-90">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
