import { allProjects } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
import ProjectsCarousel from "@/components/ProjectsCarousel";

export default function Home() {
  const featured = allProjects.sort((a, b) => b.year - a.year).slice(0, 4);
  return (
    <div className="space-y-8">
      <section className="grid lg:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-4xl font-semibold">
            Studio — architecture & interiors
          </h1>
          <p className="mt-2 opacity-75">
            Selected residential and civic projects.
          </p>
          <Link
            href="/projects"
            className="inline-block mt-4 rounded border px-4 py-2"
          >
            View Projects
          </Link>
        </div>
        <ProjectsCarousel />
      </section>
    </div>
  );
}
