import fs from "fs";
import path from "path";
import matter from "gray-matter";

const MEETINGS_DIR = path.join(process.cwd(), "content/meetings");

export interface MeetingMeta {
  slug: string;
  title: string;
  date: string;
  meetingNumber: number;
  theme: string;
  type: string;
  toastmaster: string;
  summary: string;
}

export interface Meeting extends MeetingMeta {
  content: string;
}

export function getAllMeetings(): MeetingMeta[] {
  const files = fs.readdirSync(MEETINGS_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(MEETINGS_DIR, filename), "utf8");
      const { data } = matter(raw);
      return { slug, ...data } as MeetingMeta;
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getMeeting(slug: string): Meeting | null {
  const filePath = path.join(MEETINGS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { slug, content, ...data } as Meeting;
}
