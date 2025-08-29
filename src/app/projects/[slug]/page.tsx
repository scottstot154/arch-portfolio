import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import MDXContent from "@/components/MDXcontent";
import ProjectImagesCarousel from "@/components/ProjectImagesCarousel";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = allProjects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <article className="flex flex-col space-y-12 max-w-5xl mx-auto px-6 py-16">
      {/* Title + Meta */}
      <header className="space-y-3 text-center">
        <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
        <p className="text-gray-500">
          {project.location} · {project.year}
        </p>
      </header>

      {project.beforeImages?.[0] && project.images?.[0] ? (
        <div className="relative w-full max-w-5xl mx-auto">
          <BeforeAfterSlider
            before={project.beforeImages[0]}
            after={project.images[0]}
          />
        </div>
      ) : (
        <div className="relative w-full max-h-[70vh] overflow-hidden rounded-2xl shadow">
          <ProjectImagesCarousel
            images={project.images}
            beforeImages={project.beforeImages}
          />
        </div>
      )}

      {/* Carousel */}

      {/* Summary */}
      <section className="max-w-3xl mx-auto text-center space-y-4">
        <p className="text-lg text-gray-700 leading-relaxed">
          {project.summary}
        </p>
      </section>

      {/* Full Content */}
      <section className="prose prose-lg max-w-3xl mx-auto leading-relaxed">
        <MDXContent code={project.body.code} />
      </section>
    </article>
  );
}
