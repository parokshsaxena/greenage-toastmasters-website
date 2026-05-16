import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import achievements from "@/data/achievements.json";

export const metadata = { title: "Achievements – Greenage Toastmasters" };

const CATEGORY_COLORS: Record<string, string> = {
  Competition: "bg-yellow-100 text-yellow-800",
  Education: "bg-blue-100 text-blue-800",
  Meeting: "bg-green-100 text-green-800",
};

const CATEGORY_ICONS: Record<string, string> = {
  trophy: "🏆",
  graduation: "🎓",
  globe: "🌍",
};

export default function AchievementsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Achievements</h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Celebrating our members' growth, competition wins, education milestones, and special meetings.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item) => (
          <Card key={item.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="text-3xl mb-3">{CATEGORY_ICONS[item.icon] ?? "⭐"}</div>
              <Badge className={`mb-3 border-0 text-xs ${CATEGORY_COLORS[item.category] ?? "bg-gray-100 text-gray-800"}`}>
                {item.category}
              </Badge>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{item.description}</p>
              <p className="text-xs text-gray-400">{new Date(item.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
