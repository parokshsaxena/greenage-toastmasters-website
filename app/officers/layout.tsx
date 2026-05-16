import type { Metadata } from "next";

export const metadata: Metadata = { title: "Club Officers – Greenage Toastmasters" };

export default function OfficersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
