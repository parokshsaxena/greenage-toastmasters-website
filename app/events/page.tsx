"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import eventsData from "@/data/events.json";

type Contact = { name: string; phone: string };
type FaqItem = { q: string; a: string };
type FaqCategory = { category: string; questions: FaqItem[] };

type Event = {
  id: string;
  title: string;
  tagline: string;
  date: string;
  time?: string;
  type: string;
  description: string;
  funLines?: string[];
  highlights?: string[];
  registrationLink?: string;
  contacts?: Contact[];
  faqs?: FaqCategory[];
};

function daysLeft(dateStr: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const event = new Date(dateStr);
  event.setHours(0, 0, 0, 0);
  return Math.round((event.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function FaqAccordion({ faqs }: { faqs: FaqCategory[] }) {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (key: string) => setOpenIndex(openIndex === key ? null : key);

  return (
    <div className="mt-10 border-t border-gray-100 pt-10">
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        ❓ Frequently Asked Questions
      </h3>
      <div className="space-y-8">
        {faqs.map((section) => (
          <div key={section.category}>
            <p className="text-sm font-semibold text-rose-600 uppercase tracking-wide mb-3">
              {section.category}
            </p>
            <div className="space-y-2">
              {section.questions.map((item, i) => {
                const key = `${section.category}-${i}`;
                const isOpen = openIndex === key;
                return (
                  <div
                    key={key}
                    className="rounded-xl border border-gray-100 overflow-hidden bg-gray-50"
                  >
                    <button
                      onClick={() => toggle(key)}
                      className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left hover:bg-gray-100 transition-colors"
                    >
                      <span className="font-medium text-gray-800 text-sm leading-snug">
                        {item.q}
                      </span>
                      <span className="flex-shrink-0 text-rose-500 font-bold text-lg leading-none mt-0.5">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5">
                        <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                          {item.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function UpcomingEventCard({ event }: { event: Event }) {
  const [days, setDays] = useState<number | null>(null);
  useEffect(() => { setDays(daysLeft(event.date)); }, [event.date]);

  return (
    <div className="relative rounded-2xl overflow-hidden border border-rose-100 shadow-lg bg-white">
      {/* Top accent bar */}
      <div className="h-2 bg-gradient-to-r from-rose-600 to-rose-400" />

      <div className="p-8 md:p-10">
        {/* Header row */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <span className="inline-block mb-3 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold tracking-wide uppercase">
              {event.type}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              {event.title}
            </h2>
            <p className="text-rose-600 font-semibold text-lg mt-1">{event.tagline}</p>
          </div>

          {/* Days left badge */}
          <div className="flex-shrink-0 text-center bg-rose-600 text-white rounded-2xl px-5 py-3 shadow-md min-w-[80px]">
            <p className="text-4xl font-extrabold leading-none">
              {days ?? "—"}
            </p>
            <p className="text-xs font-semibold tracking-wide uppercase mt-1 opacity-90">
              {days === 1 ? "Day Left" : "Days Left"}
            </p>
          </div>
        </div>

        
        {/* Date & Time */}
<div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
  <div className="flex items-center gap-2">
    <span className="text-lg">📅</span>
    <span className="font-semibold text-gray-800">{formatDate(event.date)}</span>
  </div>
  {event.time && (
    <div className="flex items-center gap-2">
      <span className="text-lg">🕙</span>
      <span className="font-semibold text-gray-800">{event.time}</span>
    </div>
  )}
</div>

        {/* Fun lines */}
        {event.funLines && event.funLines.length > 0 && (
          <div className="mb-6 bg-rose-50 rounded-xl p-5 border border-rose-100">
            <ul className="space-y-2">
              {event.funLines.map((line) => (
                <li key={line} className="text-gray-700 italic flex items-start gap-2">
                  <span className="text-rose-400 mt-0.5">✦</span>
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-gray-700 font-semibold">
              Well, it&apos;s time to step out of the shadows and into the spotlight!
            </p>
          </div>
        )}

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">{event.description}</p>

        {/* Highlights */}
        {event.highlights && event.highlights.length > 0 && (
          <div className="mb-8">
            <h3 className="font-bold text-gray-900 mb-3 uppercase tracking-wide text-sm">
              What to expect
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {event.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-rose-500 mt-0.5 flex-shrink-0">✓</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA + Contacts */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between border-t border-gray-100 pt-6">
          {event.registrationLink && (
            <Link
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-rose-600 text-white font-bold text-base hover:bg-rose-700 transition-colors shadow-md"
            >
              Register Now →
            </Link>
          )}

          {event.contacts && event.contacts.length > 0 && (
            <div className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700 block mb-1">Got questions? Call us:</span>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {event.contacts.map((c) => (
                  <a
                    key={c.name}
                    href={`tel:${c.phone}`}
                    className="hover:text-rose-600 transition-colors"
                  >
                    <span className="font-medium text-gray-800">{c.name}</span>{" "}
                    <span>{c.phone}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* FAQ */}
        {event.faqs && event.faqs.length > 0 && (
          <FaqAccordion faqs={event.faqs} />
        )}
      </div>
    </div>
  );
}

function PastEventCard({ event }: { event: Event }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-block mb-2 px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-500 text-xs font-semibold tracking-wide uppercase">
            {event.type}
          </span>
          <h3 className="font-bold text-gray-900 text-lg">{event.title}</h3>
          {event.tagline && (
            <p className="text-gray-500 text-sm mt-0.5">{event.tagline}</p>
          )}
        </div>
        <div className="flex-shrink-0 text-right text-sm text-gray-400">
          <span className="block font-medium text-gray-600">{formatDate(event.date)}</span>
        </div>
      </div>
    </div>
  );
}

export default function EventsPage() {
  const allEvents = eventsData.events as Event[];
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Defer date-based filtering to client to avoid SSR hydration mismatch
  const upcoming = useMemo(
    () => mounted ? allEvents.filter((e) => daysLeft(e.date) >= 0) : allEvents,
    [allEvents, mounted]
  );
  const past = useMemo(
    () => mounted ? allEvents.filter((e) => daysLeft(e.date) < 0) : [],
    [allEvents, mounted]
  );

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-rose-700 to-rose-500 text-white">
        <div className="mx-auto max-w-5xl px-6 py-14 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold tracking-widest uppercase border border-white/30">
            Events
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            Club Events
          </h1>
          <p className="text-rose-100 text-lg max-w-lg mx-auto">
            Contests, open mics, and special programmes — beyond the regular meeting.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-14 space-y-14">
        {/* Upcoming */}
        {upcoming.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
              Upcoming Events
            </h2>
            <div className="space-y-6">
              {upcoming.map((e) => (
                <UpcomingEventCard key={e.id} event={e} />
              ))}
            </div>
          </section>
        )}

        {/* Past */}
        {past.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gray-300 inline-block" />
              Past Events
            </h2>
            <div className="space-y-3">
              {past
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .map((e) => (
                  <PastEventCard key={e.id} event={e} />
                ))}
            </div>
          </section>
        )}

        {upcoming.length === 0 && past.length === 0 && (
          <p className="text-center text-gray-400 py-20">No events yet. Check back soon!</p>
        )}
      </div>
    </>
  );
}
