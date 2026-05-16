import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import clubInfo from "@/data/club-info.json";

const FEATURES = [
  { icon: "🗣️", title: "Prepared Speeches", desc: "Grow through Toastmasters' Pathways curriculum with structured speech projects." },
  { icon: "⚡", title: "Table Topics", desc: "Sharpen impromptu speaking skills with fun, two-minute challenges every meeting." },
  { icon: "🏆", title: "Competitions", desc: "Represent the club at Area, Division, and District-level speech contests." },
  { icon: "🤝", title: "Leadership Roles", desc: "Take on meeting roles and officer positions to build real leadership experience." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-rose-700 to-rose-500 text-white">
        <div className="mx-auto max-w-6xl px-4 py-24 text-center">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 border-0">
            Toastmasters International
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Greenage<br />Toastmasters Club
          </h1>
          <p className="text-lg md:text-xl text-rose-100 max-w-2xl mx-auto mb-8">
            Where leaders are made and communicators are built.
            Join us every alternate Saturday and unlock your potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/about" className={buttonVariants({ size: "lg", className: "bg-white text-rose-700 hover:bg-rose-50" })}>
              Visit a Meeting
            </Link>
            <Link href="/meetings" className={buttonVariants({ variant: "outline", size: "lg", className: "border-white text-white bg-white/10 hover:bg-white/20" })}>
              Meeting History
            </Link>
          </div>
        </div>
      </section>

      {/* Meeting info strip */}
      <section className="bg-gray-50 border-y">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col md:flex-row gap-4 md:gap-12 text-sm text-gray-600 justify-center items-center">
          <span>📅 <strong>{clubInfo.meetings.frequency}</strong></span>
          <span>🕙 <strong>{clubInfo.meetings.time}</strong></span>
          <span>📍 <strong>{clubInfo.venue.name}</strong></span>
          <Link href="/about" className="text-rose-700 font-medium hover:underline">Get directions →</Link>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-2">What We Do</h2>
        <p className="text-center text-gray-500 mb-12">Every meeting is a structured opportunity to learn and grow.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map(({ icon, title, desc }) => (
            <Card key={title} className="text-center hover:shadow-md transition-shadow">
              <CardContent className="pt-8 pb-6 px-6">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rose-50 border-y">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to find your voice?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Guests are always welcome. Come attend a meeting — no registration required.
          </p>
          <Link href="/about" className={buttonVariants({ size: "lg", className: "bg-rose-700 hover:bg-rose-800 text-white" })}>
            Find Us
          </Link>
        </div>
      </section>
    </>
  );
}
