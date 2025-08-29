"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectImagesProps = {
  images: string[];
  beforeImages?: string[];
};

function Carousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const hasImages = images && images.length > 0;
  if (!hasImages) return null;

  const prevIdx = (index - 1 + images.length) % images.length;
  const nextIdx = (index + 1) % images.length;

  const prev = () => setIndex(prevIdx);
  const next = () => setIndex(nextIdx);

  return (
    <div className="relative w-full">
      <div className="relative aspect-[16/9] overflow-visible">
        {/* LEFT (Previous) */}
        {images.length > 1 && (
          <div className="absolute top-1/2 -translate-y-1/2 left-[-2%] h-[65%] w-[50%] opacity-45 blur-[1px] pointer-events-none z-0">
            <Image
              src={images[prevIdx]}
              alt="Previous"
              fill
              className="object-contain"
              style={{
                transform: "scaleX(-1) perspective(1200px) rotateY(8deg)",
                filter: "saturate(0.9) brightness(0.9)",
              }}
              sizes="50vw"
            />
          </div>
        )}

        {/* RIGHT (Next) */}
        {images.length > 1 && (
          <div className="absolute top-1/2 -translate-y-1/2 right-[-2%] h-[65%] w-[50%] opacity-45 blur-[1px] pointer-events-none z-0">
            <Image
              src={images[nextIdx]}
              alt="Next"
              fill
              className="object-contain"
              style={{
                transform: "scaleX(-1) perspective(1200px) rotateY(-8deg)",
                filter: "saturate(0.9) brightness(0.9)",
              }}
              sizes="50vw"
            />
          </div>
        )}

        {/* CENTER (Current) */}
        <div className="absolute inset-0 z-10 rounded-xl">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={images[index]}
                alt={`Project image ${index + 1}`}
                fill
                className="object-contain rounded-2xl shadow-2xl"
                sizes="80vw"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}
    </div>
  );
}

export default function ProjectImagesCarousel({
  images,
  beforeImages,
}: ProjectImagesProps) {
  const hasBefore = beforeImages && beforeImages.length > 0;

  if (hasBefore) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        <div>
          <h3 className="text-center text-lg font-semibold mb-2">Before</h3>
          <Carousel images={beforeImages!} />
        </div>
        <div>
          <h3 className="text-center text-lg font-semibold mb-2">After</h3>
          <Carousel images={images} />
        </div>
      </div>
    );
  }

  // Single big carousel
  return (
    <div className="max-w-7xl mx-auto">
      <Carousel images={images} />
    </div>
  );
}
