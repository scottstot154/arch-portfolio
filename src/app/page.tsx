import { allProjects } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";

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
        <div className="grid grid-cols-2 gap-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="block overflow-hidden rounded-lg border"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <div className="font-medium">{p.title}</div>
                <div className="text-sm opacity-70">
                  {p.location} · {p.year}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
