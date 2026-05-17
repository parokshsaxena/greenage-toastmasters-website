import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import clubInfo from "@/data/club-info.json";

export const metadata = { title: "About & Venue – Greenage Toastmasters" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">About & Venue</h1>
        <p className="text-gray-500">Everything you need to know to join us.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card>
          <CardContent className="p-6">
            <h2 className="font-semibold text-lg mb-4">📅 Meeting Schedule</h2>
            <Separator className="mb-4" />
            <dl className="space-y-3 text-sm">
              <div><dt className="text-gray-500">Frequency</dt><dd className="font-medium">{clubInfo.meetings.frequency}</dd></div>
              <div><dt className="text-gray-500">Time</dt><dd className="font-medium">{clubInfo.meetings.time}</dd></div>
              <div><dt className="text-gray-500">Timezone</dt><dd className="font-medium">{clubInfo.meetings.timezone}</dd></div>
              <div><dt className="text-gray-500">Format</dt><dd className="font-medium">{clubInfo.online.platform}</dd></div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="font-semibold text-lg mb-4">📍 Venue</h2>
            <Separator className="mb-4" />
            <dl className="space-y-3 text-sm">
              <div><dt className="text-gray-500">Name</dt><dd className="font-medium">{clubInfo.venue.name}</dd></div>
              <div><dt className="text-gray-500">Address</dt><dd className="font-medium">{clubInfo.venue.address}</dd></div>
            </dl>
            <a
              href={clubInfo.venue.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-rose-700 font-medium hover:underline"
            >
              Open in Google Maps →
            </a>
          </CardContent>
        </Card>
      </div>

      {/* Map embed */}
      <div className="rounded-xl overflow-hidden border mb-10">
        <iframe
          src={clubInfo.venue.mapEmbed}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Greenage Toastmasters Venue Map"
        />
      </div>

      <Card>
        <CardContent className="p-6">
          <h2 className="font-semibold text-lg mb-4">✉️ Contact Us</h2>
          <Separator className="mb-4" />
          <dl className="space-y-3 text-sm">
            <div><dt className="text-gray-500">Email</dt><dd><a href={`mailto:${clubInfo.social.email}`} className="text-rose-700 hover:underline">{clubInfo.social.email}</a></dd></div>
            <div>
              <dt className="text-gray-500">WhatsApp Community</dt>
              <dd><a href={clubInfo.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-rose-700 hover:underline">Join for latest updates →</a></dd>
            </div>
            <div>
              <dt className="text-gray-500">Instagram</dt>
              <dd><a href={clubInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="text-rose-700 hover:underline">@greenage.toastmasters.club →</a></dd>
            </div>
            <div><dt className="text-gray-500">Club Number</dt><dd className="font-medium">{clubInfo.clubNumber}</dd></div>
            <div><dt className="text-gray-500">District / Division / Area</dt><dd className="font-medium">{clubInfo.district} · {clubInfo.division} · {clubInfo.area}</dd></div>
            <div><dt className="text-gray-500">Chartered</dt><dd className="font-medium">{clubInfo.charter}</dd></div>
          </dl>
        </CardContent>
      </Card>
    </div>
  );
}
