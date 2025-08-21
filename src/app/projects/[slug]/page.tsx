import Image from "next/image";
import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import MDXContent from "@/components/MDXcontent";

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = allProjects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <article className="space-y-6">
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <h1 className="text-3xl font-semibold">{project.title}</h1>
      <p className="opacity-70">
        {project.location} · {project.year}
      </p>
      <p className="text-sm opacity-80">{project.summary}</p>
      <MDXContent code={project.body.code} />
    </article>
  );
}
