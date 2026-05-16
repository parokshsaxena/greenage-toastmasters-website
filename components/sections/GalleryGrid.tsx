"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import type { GalleryImage } from "@/lib/gallery";

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState(-1);

  const slides = images.map((img) => ({ src: img.src }));

  const open = useCallback((i: number) => setIndex(i), []);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <button
            key={img.filename}
            onClick={() => open(i)}
            className="block w-full rounded-lg overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 group"
          >
            <div className="relative w-full aspect-square">
              <Image
                src={img.src}
                alt={img.dateLabel || img.filename}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {img.dateLabel && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-2 py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-xs">{img.dateLabel}</p>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        on={{ view: ({ index: i }) => setIndex(i) }}
      />
    </>
  );
}
