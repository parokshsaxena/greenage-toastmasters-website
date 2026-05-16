import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Badge } from "@/components/ui/badge";
import { getAllMeetings, getMeeting } from "@/lib/meetings";

export async function generateStaticParams() {
  return getAllMeetings().map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meeting = getMeeting(slug);
  if (!meeting) return {};
  return { title: `${meeting.title} – Greenage Toastmasters` };
}

export default async function MeetingDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meeting = getMeeting(slug);
  if (!meeting) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="border-0 bg-blue-100 text-blue-800 text-xs">{meeting.type}</Badge>
          <span className="text-sm text-gray-400">Meeting #{meeting.meetingNumber}</span>
          <span className="text-sm text-gray-400">·</span>
          <span className="text-sm text-gray-400">
            {new Date(meeting.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{meeting.title}</h1>
        <p className="text-gray-500">{meeting.summary}</p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
          <span>🎤 <strong>Toastmaster:</strong> {meeting.toastmaster}</span>
          <span>📖 <strong>Theme:</strong> {meeting.theme}</span>
        </div>
      </div>

      <div className="prose prose-gray max-w-none prose-headings:font-semibold prose-a:text-rose-700 prose-table:text-sm">
        <MDXRemote source={meeting.content} />
      </div>
    </div>
  );
}
