import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAllMeetings } from "@/lib/meetings";

export const metadata = { title: "Meeting History – Greenage Toastmasters" };

const TYPE_COLORS: Record<string, string> = {
  Regular: "bg-blue-100 text-blue-800",
  Contest: "bg-yellow-100 text-yellow-800",
  Special: "bg-purple-100 text-purple-800",
};

export default function MeetingsPage() {
  const meetings = getAllMeetings();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Meeting History</h1>
        <p className="text-gray-500">Browse every session — roles, speeches, and highlights.</p>
      </div>

      <div className="space-y-4">
        {meetings.map((meeting) => (
          <Link key={meeting.slug} href={`/meetings/${meeting.slug}`}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge className={`border-0 text-xs ${TYPE_COLORS[meeting.type] ?? "bg-gray-100 text-gray-800"}`}>
                      {meeting.type}
                    </Badge>
                    <span className="text-xs text-gray-400">Meeting #{meeting.meetingNumber}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">{meeting.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{meeting.summary}</p>
                </div>
                <div className="text-sm text-gray-400 shrink-0">
                  {new Date(meeting.date).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
        {meetings.length === 0 && (
          <p className="text-center text-gray-400 py-16">No meetings recorded yet.</p>
        )}
      </div>
    </div>
  );
}
