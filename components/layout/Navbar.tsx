"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/toastmasters", label: "Toastmasters" },
  { href: "/officers", label: "Officers" },
  { href: "/about", label: "About & Venue" },
  { href: "/meetings", label: "Meetings" },
  { href: "/achievements", label: "Achievements" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-4 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-rose-700">
          <span className="text-2xl">🎤</span>
          <span>Greenage TM</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                pathname === href
                  ? "bg-rose-50 text-rose-700"
                  : "text-gray-600 hover:text-rose-700 hover:bg-rose-50"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white px-4 pb-4">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={cn(
                "block px-3 py-2 rounded-md text-sm font-medium mt-1 transition-colors",
                pathname === href
                  ? "bg-rose-50 text-rose-700"
                  : "text-gray-600 hover:text-rose-700 hover:bg-rose-50"
              )}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
