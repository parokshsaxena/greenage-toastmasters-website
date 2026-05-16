"use client";

import { useState } from "react";
// metadata is exported from layout.tsx (client components can't export metadata)
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import officers from "@/data/officers.json";

function OfficerAvatar({
  name, photo, photoFit, photoPosition,
}: {
  name: string;
  photo: string;
  photoFit?: string;
  photoPosition?: string;
}) {
  const [failed, setFailed] = useState(false);
  const initials = name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

  if (failed) {
    return (
      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-rose-100 flex items-center justify-center">
        <span className="text-rose-700 text-xl font-bold">{initials}</span>
      </div>
    );
  }

  const fitClass = photoFit === "contain" ? "object-contain" : "object-cover";
  const posStyle = photoPosition ? { objectPosition: photoPosition } : undefined;

  return (
    <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-rose-100">
      <Image
        src={photo}
        alt={name}
        fill
        className={fitClass}
        style={posStyle}
        onError={() => setFailed(true)}
        sizes="96px"
      />
    </div>
  );
}

export default function OfficersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Club Officers</h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Meet the dedicated team leading Greenage Toastmasters Club for the 2025–26 term.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {officers.map((officer) => (
          <Card key={officer.id} className="text-center hover:shadow-md transition-shadow">
            <CardContent className="pt-8 pb-6 px-6">
              <OfficerAvatar
                name={officer.name}
                photo={officer.photo}
                photoFit={"photoFit" in officer ? officer.photoFit : undefined}
                photoPosition={"photoPosition" in officer ? officer.photoPosition : undefined}
              />
              <Badge className="mb-2 bg-rose-100 text-rose-700 hover:bg-rose-100 border-0 text-xs">
                {officer.role}
              </Badge>
              <h3 className="font-semibold text-gray-900 mt-1">{officer.name}</h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">{officer.bio}</p>
              <p className="mt-3 text-xs text-gray-400">
                Member since {new Date(officer.joined).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
              </p>
              {officer.email && (
                <a href={`mailto:${officer.email}`} className="mt-1 text-xs text-rose-700 hover:underline block">
                  {officer.email}
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
