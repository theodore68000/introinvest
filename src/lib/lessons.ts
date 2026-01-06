import { promises as fs } from "fs";
import path from "path";

export async function readLessonMarkdown(lessonPath: string) {
  // lessonPath ex: "comprendre/c1.md"
  const full = path.join(process.cwd(), "src", "content", "lessons", lessonPath);
  return await fs.readFile(full, "utf8");
}
