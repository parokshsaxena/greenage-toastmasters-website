import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import clubInfo from "@/data/club-info.json";

const FEATURES = [
  {
    icon: "🗣️",
    bg: "bg-rose-50",
    title: "Prepared Speeches",
    desc: "Grow through the Toastmasters Pathways curriculum with structured, goal-driven speech projects.",
  },
  {
    icon: "⚡",
    bg: "bg-orange-50",
    title: "Table Topics",
    desc: "Sharpen impromptu speaking with fun two-minute challenges on the spot — every single meeting.",
  },
  {
    icon: "🏆",
    bg: "bg-yellow-50",
    title: "Competitions",
    desc: "Represent the club at Area, Division, and District-level speech contests throughout the year.",
  },
  {
    icon: "🤝",
    bg: "bg-red-50",
    title: "Leadership Roles",
    desc: "Step into meeting roles and officer positions to build real, lasting leadership experience.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-rose-700 to-rose-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:28px_28px]" />
        <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-20 text-center">
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold tracking-widest uppercase border border-white/30">
            Toastmasters International
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight">
            Greenage<br />
            <span className="text-white">Toastmasters Club</span>
          </h1>
          <p className="text-lg md:text-xl text-rose-100 max-w-xl mx-auto mb-10 leading-relaxed">
            Where leaders are made and communicators are built.
            Join us every Saturday and unlock your potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white text-rose-700 font-bold text-base hover:bg-rose-50 transition-colors shadow-md"
            >
              Visit a Meeting →
            </Link>
            <Link
              href="/meetings"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-rose-800 text-white font-semibold text-base hover:bg-rose-900 transition-colors border border-rose-400"
            >
              Meeting History
            </Link>
          </div>
        </div>
      </section>

      {/* Meeting info strip */}
      <section className="bg-rose-50 border-y border-rose-100">
        <div className="mx-auto max-w-5xl px-6 py-4 flex flex-col md:flex-row gap-3 md:gap-10 text-sm justify-center items-center text-gray-600">
          <span className="flex items-center gap-2">
            <span>📅</span>
            <strong className="text-gray-900">{clubInfo.meetings.frequency}</strong>
          </span>
          <span className="hidden md:block text-gray-300">|</span>
          <span className="flex items-center gap-2">
            <span>🕙</span>
            <strong className="text-gray-900">{clubInfo.meetings.time}</strong>
          </span>
          <span className="hidden md:block text-gray-300">|</span>
          <span className="flex items-center gap-2">
            <span>📍</span>
            <strong className="text-gray-900">{clubInfo.venue.name}</strong>
          </span>
          <span className="hidden md:block text-gray-300">|</span>
          <Link href="/about" className="text-rose-600 font-semibold hover:text-rose-700 transition-colors">
            Get directions →
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">What We Do</h2>
          <p className="text-gray-500 text-lg">Every meeting is a structured opportunity to practise, grow, and connect.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map(({ icon, bg, title, desc }) => (
            <Card key={title} className="text-center hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border-gray-100">
              <CardContent className="pt-8 pb-7 px-5">
                <div className={`w-14 h-14 mx-auto mb-5 rounded-2xl ${bg} flex items-center justify-center text-2xl`}>
                  {icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-base">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rose-50 border-y border-rose-100">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Ready to find your voice?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto">
            Guests are always welcome. Come attend a meeting — no registration required.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-10 py-3 rounded-lg bg-rose-600 text-white font-bold text-base hover:bg-rose-700 transition-colors shadow-md"
          >
            Find Us →
          </Link>
        </div>
      </section>
    </>
  );
}
