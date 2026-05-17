import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events – Greenage Toastmasters Club",
  description: "Upcoming and past events at Greenage Toastmasters Club — contests, open mics, and special programmes.",
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
