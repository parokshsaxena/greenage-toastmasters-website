import { getGalleryImages } from "@/lib/gallery";
import GalleryGrid from "@/components/sections/GalleryGrid";

export const metadata = { title: "Gallery – Greenage Toastmasters" };

export default function GalleryPage() {
  const images = getGalleryImages();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Gallery</h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Moments captured from our meetings, contests, and celebrations.
        </p>
        <p className="text-sm text-gray-400 mt-2">{images.length} photos</p>
      </div>

      {images.length > 0 ? (
        <GalleryGrid images={images} />
      ) : (
        <div className="rounded-xl border bg-gray-50 p-16 text-center text-gray-400">
          <p className="text-lg mb-2">📸 No photos yet</p>
          <p className="text-sm">Add images to <code>public/images/gallery/</code> to display them here.</p>
        </div>
      )}
    </div>
  );
}
