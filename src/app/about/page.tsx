import { getContent } from "@/lib/getContent";

export default async function AboutPage() {
  const content = await getContent("about.md");

  return (
    <main className="max-w-4xl mx-auto p-6 prose prose-lg">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  );
}
