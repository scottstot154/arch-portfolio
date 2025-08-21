import Link from "next/link";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <div className="max-w-6xl mx-auto px-4">
        <Hero
          title="Studio"
          subtitle="architecture & interiors"
          imageSrc="/images/hero.jpg"
          heightClass="h-[50vh] md:h-[65vh]"
          align="center"
        />
      </div>

      {/* CTA + Carousel */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold">
              Selected projects
            </h2>
            <p className="text-gray-600">Residential and civic works</p>
          </div>
          <Link
            href="/projects"
            className="hidden sm:inline-block rounded border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-100 transition"
          >
            View all
          </Link>
        </div>

        <div className="mt-6">
          <ProjectsCarousel />
        </div>

        {/* Mobile CTA */}
        <div className="sm:hidden mt-6">
          <Link
            href="/projects"
            className="block w-full text-center rounded border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-100 transition"
          >
            View all projects
          </Link>
        </div>
      </section>
    </div>
  );
}
