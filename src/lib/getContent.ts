import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function getContent(filename: string) {
  const filePath = path.join(process.cwd(), "content", filename);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);

  return processedContent.toString();
}
