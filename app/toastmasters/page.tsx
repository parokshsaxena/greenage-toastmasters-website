import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is Toastmasters? – Greenage Toastmasters Club",
  description:
    "Learn how Toastmasters International helps people build communication and leadership skills through a worldwide network of clubs.",
};

const BENEFITS = [
  { icon: "🎤", text: "Improve public speaking skills" },
  { icon: "🏆", text: "Build leadership skills" },
  { icon: "✍️", text: "Practice writing speeches and presenting in a group setting" },
  { icon: "💼", text: "Gain a competitive advantage in the workplace" },
  { icon: "🤝", text: "Networking opportunities in a small and supportive environment" },
  { icon: "💪", text: "Build self-confidence and self-awareness" },
  { icon: "🌱", text: "Allows for unlimited personal growth" },
  { icon: "🚀", text: "Ability to maximize your potential" },
];

const HOW_IT_WORKS = [
  {
    title: "Conduct Meetings",
    desc: "Members learn how to plan and conduct meetings.",
  },
  {
    title: "Give Impromptu Speeches",
    desc: "Members present one- to two-minute, impromptu speeches about assigned topics.",
  },
  {
    title: "Present Prepared Speeches",
    desc: "Members present speeches based on projects from the Pathways learning experience — Toastmasters' education program. Projects cover topics such as speech organization, vocal variety, language, gestures, and persuasion.",
  },
  {
    title: "Offer Constructive Evaluation",
    desc: "Every speaker is assigned an evaluator who points out speech strengths and offers suggestions for improvement.",
  },
  {
    title: "Pathways Learning Experience",
    desc: "Pathways is Toastmasters' exciting, interactive and flexible education program. With 6 paths to choose from, you have the option to pick which skills you want to focus on.",
  },
];

export default function ToastmastersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-700 to-rose-500 text-white">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold tracking-widest uppercase border border-white/30">
            Since 1924
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            What is Toastmasters?
          </h1>
          <p className="text-rose-100 text-lg max-w-2xl mx-auto leading-relaxed">
            A nonprofit educational organization that helps people build communication
            and leadership skills through a worldwide network of clubs.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-rose-50 border-y border-rose-100">
        <div className="mx-auto max-w-5xl px-6 py-5 flex flex-wrap gap-6 justify-center text-center text-sm">
          {[
            { value: "270,000+", label: "Members worldwide" },
            { value: "14,000+", label: "Clubs globally" },
            { value: "150", label: "Countries" },
            { value: "100+", label: "Years of impact" },
          ].map(({ value, label }) => (
            <div key={label} className="px-6">
              <p className="text-2xl font-extrabold text-rose-700">{value}</p>
              <p className="text-gray-500 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-16 space-y-20">

        {/* About TM */}
        <section className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 text-lg leading-relaxed">
            Toastmasters International is a nonprofit educational organization that offers
            a proven education program that helps improve communication and build leadership
            skills through a worldwide network of clubs. Since 1924, Toastmasters International
            has helped people of all backgrounds build confidence as speakers and leaders.
          </p>
        </section>

        {/* What's in it for you */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              What&apos;s in it for you?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-2xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Improved Communication</h3>
              <p className="text-gray-600 leading-relaxed">
                Toastmasters will give you the skills and confidence you need to effectively
                express yourself in any situation. Whether you are a mature manager, student,
                young professional, career advancer or looking to make an impact in your
                community, Toastmasters is the most efficient, supportive, enjoyable and
                affordable way of gaining great communication skills. You&apos;ll improve your
                interpersonal communication and be more persuasive and confident when giving speeches.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-2xl mb-4">🏅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Build Leadership Skills</h3>
              <p className="text-gray-600 leading-relaxed">
                While some are born confident, charismatic leaders, others must work to develop
                their leadership skills. Through Toastmasters, you&apos;ll gain the practice to
                become the leader and speaker you want to be. You will also sharpen your
                management skills, become a better negotiator, gain trust and inspire your team.
                Learn to be decisive!
              </p>
            </div>
          </div>
        </section>

        {/* Build a Better You */}
        <section className="bg-rose-50 rounded-3xl border border-rose-100 px-8 py-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Build a Better You!
            </h2>
            <p className="text-gray-500 text-lg">With Toastmasters, you will:</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BENEFITS.map(({ icon, text }) => (
              <div
                key={text}
                className="bg-white rounded-xl p-5 border border-rose-100 shadow-sm flex flex-col items-center text-center gap-3"
              >
                <span className="text-2xl">{icon}</span>
                <p className="text-sm text-gray-700 font-medium leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              How Toastmasters Works
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              A typical club is made up of approximately 20 people who meet once a week
              for about an hour. Each meeting gives members several opportunities:
            </p>
          </div>
          <div className="space-y-4">
            {HOW_IT_WORKS.map(({ title, desc }, i) => (
              <div
                key={title}
                className="flex gap-5 bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-8">
            For more information, visit{" "}
            <a
              href="https://www.toastmasters.org/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-600 hover:underline"
            >
              toastmasters.org/About
            </a>
          </p>
        </section>

        {/* CTA */}
        <section className="text-center border-t border-gray-100 pt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Ready to experience it yourself?
          </h2>
          <p className="text-gray-500 mb-8">
            Guests are always welcome at Greenage Toastmasters Club — no registration required.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-rose-600 text-white font-bold text-base hover:bg-rose-700 transition-colors shadow-md"
          >
            Find Us →
          </Link>
        </section>
      </div>
    </>
  );
}
