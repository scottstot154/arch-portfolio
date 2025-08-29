import Link from "next/link";
import Image from "next/image";
import ProjectsCarousel from "@/components/ProjectsCarousel";

export default function Home() {
  return (
    <main className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center">
        <Image
          src="/images/hero.jpg"
          alt="Architectural sketch"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* dark overlay */}
        <div className="relative z-10 max-w-2xl px-4">
          <h1 className="text-5xl md:text-6xl font-semibold text-white">
            Studio — Architecture & Interiors
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Designing timeless spaces across India.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/projects"
              className="rounded bg-white text-black px-6 py-3 font-medium hover:bg-gray-200 transition"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded border border-white px-6 py-3 font-medium text-white hover:bg-white hover:text-black transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto px-4 space-y-6">
        <h2 className="text-3xl font-semibold">Featured Projects</h2>
        <ProjectsCarousel />
        <div className="flex justify-end">
          <Link
            href="/projects"
            className="mt-2 inline-block text-600 underline hover:text-bold"
          >
            See all projects →
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/images/hero.jpg"
            alt="About our studio"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
          <div>
            <h2 className="text-3xl font-semibold">About Our Studio</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We are a multidisciplinary design studio specializing in
              residential, civic, and interior projects. Our work blends modern
              aesthetics with traditional Indian craftsmanship, creating
              timeless and functional spaces.
            </p>
            <Link
              href="/about"
              className="inline-block mt-6 rounded border px-5 py-2 font-medium hover:bg-black hover:text-white transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center py-20 px-4">
        <h2 className="text-3xl font-semibold">Let’s Work Together</h2>
        <p className="mt-3 text-gray-600">
          Have a project in mind? We’d love to hear from you.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded bg-black px-8 py-3 text-white font-medium hover:bg-gray-800 transition"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
