import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import MDXContent from "@/components/MDXcontent";
import ProjectImagesCarousel from "@/components/ProjectImagesCarousel";

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = allProjects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <article className="space-y-6 flex flex-col ">
      <h1 className="text-3xl font-semibold">{project.title}</h1>
      <p className="opacity-70">
        {project.location} · {project.year}
      </p>
      <div className="relative max-h-[70vh] w-full overflow-hidden">
        <ProjectImagesCarousel
          images={project.images}
          beforeImages={project.beforeImages}
        />
      </div>
      <p className="text-sm opacity-80">{project.summary}</p>
      <MDXContent code={project.body.code} />
    </article>
  );
}
