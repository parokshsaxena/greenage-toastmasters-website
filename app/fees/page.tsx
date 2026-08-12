import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fee Structure – Greenage Toastmasters Club",
  description:
    "Membership fee details for Greenage Toastmasters Club — Toastmasters International fees and local club fees.",
};

const TERMS = [
  { label: "Term 1", months: "April – September" },
  { label: "Term 2", months: "October – March" },
];

export default function FeesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-rose-700 to-rose-500 text-white">
        <div className="mx-auto max-w-5xl px-6 py-14 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold tracking-widest uppercase border border-white/30">
            Membership
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            Fee Structure
          </h1>
          <p className="text-rose-100 text-lg max-w-lg mx-auto">
            Transparent pricing — know exactly what you pay and when.
          </p>
        </div>
      </section>

      {/* Term strip */}
      <section className="bg-rose-50 border-y border-rose-100">
        <div className="mx-auto max-w-5xl px-6 py-4 flex flex-col sm:flex-row gap-3 justify-center items-center text-sm text-gray-600">
          <span className="font-semibold text-gray-700">📆 Membership Terms:</span>
          {TERMS.map((t, i) => (
            <span key={t.label} className="flex items-center gap-2">
              {i > 0 && <span className="hidden sm:inline text-gray-300">|</span>}
              <span className="font-semibold text-gray-900">{t.label}:</span>
              <span>{t.months}</span>
            </span>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-16 space-y-10">

        {/* TI Fees */}
        <div className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden bg-white">
          <div className="bg-gray-900 text-white px-7 py-5">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌐</span>
              <div>
                <h2 className="text-xl font-bold">Toastmasters International Fee</h2>
                <p className="text-gray-400 text-sm mt-0.5">Paid to Toastmasters International · GST applicable</p>
              </div>
            </div>
          </div>
          <div className="divide-y divide-gray-50">
            {/* New member fee */}
            <div className="px-7 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-gray-900">New Member Fee</p>
                <p className="text-sm text-gray-500 mt-0.5">One-time charge when you first join</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-2xl font-extrabold text-gray-900">$25</p>
                <p className="text-xs text-gray-400 mt-0.5">+ 18% GST</p>
              </div>
            </div>
            {/* Semi annual fee */}
            <div className="px-7 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-gray-900">Semi-Annual Membership Fee</p>
                <p className="text-sm text-gray-500 mt-0.5">Due at the start of each term (Apr & Oct)</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-2xl font-extrabold text-gray-900">$72</p>
                <p className="text-xs text-gray-400 mt-0.5">$12 / month · + 18% GST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Local Club Fees */}
        <div className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden bg-white">
          <div className="bg-rose-700 text-white px-7 py-5">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏛️</span>
              <div>
                <h2 className="text-xl font-bold">Local Club Fee</h2>
                <p className="text-rose-200 text-sm mt-0.5">Paid to Greenage Toastmasters Club · No GST</p>
              </div>
            </div>
          </div>
          <div className="divide-y divide-gray-50">
            {/* Joining fee */}
            <div className="px-7 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-gray-900">Joining Fee</p>
                <p className="text-sm text-gray-500 mt-0.5">One-time charge when you first join the club</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-2xl font-extrabold text-gray-900">₹600</p>
                <p className="text-xs text-gray-400 mt-0.5">One-time only</p>
              </div>
            </div>
            {/* Semi annual fee */}
            <div className="px-7 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-gray-900">Semi-Annual Club Fee</p>
                <p className="text-sm text-gray-500 mt-0.5">Due at the start of each term (Apr & Oct)</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-2xl font-extrabold text-gray-900">₹1,800</p>
                <p className="text-xs text-gray-400 mt-0.5">₹300 / month</p>
              </div>
            </div>
          </div>
        </div>

        {/* First term summary */}
        <div className="rounded-2xl bg-rose-50 border border-rose-100 px-7 py-6">
          <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
            <span>💡</span> What does a new member pay in their first term?
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mt-2">
            When joining for the first time, you pay the <strong>one-time new member fee</strong> ($25 + GST)
            and the <strong>one-time joining fee</strong> (₹600) — both charged just once, ever.
            From the very next term, you only pay the recurring semi-annual fees.
          </p>
          <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
            <div className="bg-white rounded-xl border border-rose-100 px-5 py-4">
              <p className="text-gray-500 mb-1">First term total (one-time)</p>
              <p className="font-bold text-gray-900">$25 + $72 (+ 18% GST each) &nbsp;+&nbsp; ₹600 + ₹1,800</p>
            </div>
            <div className="bg-white rounded-xl border border-rose-100 px-5 py-4">
              <p className="text-gray-500 mb-1">Every subsequent term</p>
              <p className="font-bold text-gray-900">$72 (+ 18% GST) &nbsp;+&nbsp; ₹1,800</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <p className="text-gray-500 text-sm mb-4">
            Have questions about fees? Reach out to us at{" "}
            <a href="mailto:greenage.toastmastersclub@gmail.com" className="text-rose-600 hover:underline">
              greenage.toastmastersclub@gmail.com
            </a>
          </p>
        </div>

      </div>
    </>
  );
}
