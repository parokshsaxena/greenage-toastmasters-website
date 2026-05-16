import galleryData from "@/data/gallery.json";

export interface GalleryImage {
  src: string;
  filename: string;
  date: string | null;
  dateLabel: string;
}

function extractDate(src: string): string | null {
  const match = src.match(/(\d{8})/);
  if (!match) return null;
  const raw = match[1];
  return `${raw.slice(0, 4)}-${raw.slice(4, 6)}-${raw.slice(6, 8)}`;
}

export function getGalleryImages(): GalleryImage[] {
  return galleryData
    .map(({ src }) => {
      const filename = src.split("/").pop() ?? src;
      const date = extractDate(filename);
      const dateLabel = date
        ? new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })
        : "";
      return { src, filename, date, dateLabel };
    })
    .sort((a, b) => {
      if (!a.date && !b.date) return 0;
      if (!a.date) return 1;
      if (!b.date) return -1;
      return b.date.localeCompare(a.date);
    });
}
