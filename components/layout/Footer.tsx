import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600">
        <div>
          <p className="font-semibold text-gray-900 mb-2">Greenage Toastmasters Club</p>
          <p>A Toastmasters International chartered club.</p>
          <p className="mt-1">Meets every Saturday, 11 AM – 12:30 PM</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900 mb-2">Quick Links</p>
          <ul className="space-y-1">
            <li><Link href="/officers" className="hover:text-rose-700">Club Officers</Link></li>
            <li><Link href="/about" className="hover:text-rose-700">About & Venue</Link></li>
            <li><Link href="/meetings" className="hover:text-rose-700">Meeting History</Link></li>
            <li><Link href="/achievements" className="hover:text-rose-700">Achievements</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-gray-900 mb-2">Contact</p>
          <p>info@greenagetoastmasters.com</p>
          <p className="mt-3 text-xs text-gray-400">
            © {new Date().getFullYear()} Greenage Toastmasters Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
