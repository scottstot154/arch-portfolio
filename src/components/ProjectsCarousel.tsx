"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { allProjects } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: 1,
      spacing: 12, // tighter spacing for mobile
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
  });

  return (
    <div className="relative w-full max-w-6xl px-2 sm:px-4">
      {/* Carousel */}
      <div ref={sliderRef} className="keen-slider">
        {allProjects.map((project, idx) => (
          <div key={idx} className="keen-slider__slide">
            <Link href={`/projects/${project.slug}`}>
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition group bg-white">
                <div className="relative h-56 sm:h-64 md:h-72">
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg sm:text-xl mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {project.summary}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {loaded && instanceRef.current && (
        <>
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute top-1/2 -left-3 sm:-left-6 transform -translate-y-1/2 bg-white shadow-md hover:shadow-lg rounded-full p-2 z-10"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute top-1/2 -right-3 sm:-right-6 transform -translate-y-1/2 bg-white shadow-md hover:shadow-lg rounded-full p-2 z-10"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </>
      )}
    </div>
  );
}
