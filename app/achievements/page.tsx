import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import achievements from "@/data/achievements.json";

export const metadata = { title: "Achievements – Greenage Toastmasters" };

const CATEGORY_COLORS: Record<string, string> = {
  Competition: "bg-yellow-100 text-yellow-800",
  Education:   "bg-blue-100 text-blue-800",
  Meeting:     "bg-green-100 text-green-800",
};

const ICONS: Record<string, string> = {
  trophy:     "🏆",
  graduation: "🎓",
  star:       "⭐",
  globe:      "🌍",
};

const SECTIONS = ["Competition", "Education", "Meeting"] as const;
const SECTION_LABELS: Record<string, string> = {
  Competition: "Competitions",
  Education:   "Education & Pathways",
  Meeting:     "Special Meetings",
};
const SECTION_ICONS: Record<string, string> = {
  Competition: "🏆",
  Education:   "🎓",
  Meeting:     "⭐",
};

type Achievement = typeof achievements[number];

function AchievementCard({ item }: { item: Achievement }) {
  const hasPhoto = "photo" in item && item.photo;
  const isPhotoCard = "photo" in item;
  const highlights = "highlights" in item ? (item.highlights as string[]) : [];
  const subtitle = "subtitle" in item ? item.subtitle : null;

  return (
    <Card className="hover:shadow-md transition-shadow flex flex-col overflow-hidden">
      {isPhotoCard && (
        <div className="relative w-full h-44 bg-gray-100">
          {hasPhoto ? (
            <Image src={String((item as Record<string, unknown>).photo)} alt={String((item as Record<string, unknown>).title)} fill className="object-cover" />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-300 gap-2">
              <span className="text-4xl">📷</span>
              <span className="text-xs">Photo coming soon</span>
            </div>
          )}
        </div>
      )}

      <CardContent className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-3">
          <span className="text-2xl">{ICONS[item.icon] ?? "⭐"}</span>
          <Badge className={`border-0 text-xs shrink-0 ${CATEGORY_COLORS[item.category] ?? "bg-gray-100 text-gray-800"}`}>
            {item.category}
          </Badge>
        </div>

        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
        {subtitle && <p className="text-xs font-medium text-gray-400 mb-2">{subtitle}</p>}
        <p className="text-sm text-gray-500">{item.description}</p>

        {highlights.length > 0 && (
          <ul className="mt-4 space-y-1.5 border-t pt-3">
            {highlights.map((h, i) => (
              <li key={i} className="text-sm text-gray-700">{h}</li>
            ))}
          </ul>
        )}

        <p className="text-xs text-gray-400 mt-auto pt-3 border-t mt-4">
          {new Date(item.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
        </p>
      </CardContent>
    </Card>
  );
}

export default function AchievementsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold mb-3">Achievements</h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Celebrating our members' competition wins, education milestones, and special meetings.
        </p>
      </div>

      {SECTIONS.map((section) => {
        const items = achievements.filter((a) => a.category === section);
        if (items.length === 0) return null;
        return (
          <div key={section} className="mb-14">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span>{SECTION_ICONS[section]}</span>
              {SECTION_LABELS[section]}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <AchievementCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
