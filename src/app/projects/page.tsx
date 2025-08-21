import Link from "next/link";
import Image from "next/image";
import { allProjects } from "contentlayer/generated";

export default function ProjectsPage() {
  const projects = allProjects.sort((a, b) => b.year - a.year);
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Projects</h1>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <li key={p.slug} className="rounded-xl border overflow-hidden">
            <Link href={`/projects/${p.slug}`}>
              <div className="relative h-48 w-full">
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="font-medium">{p.title}</div>
                <div className="text-sm opacity-70">
                  {p.location} · {p.year}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
