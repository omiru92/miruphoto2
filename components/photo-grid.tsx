"use client";

import { useEffect, useState } from "react";

type Photo = {
  id: number;
  src: string;
  alt: string;
};

const photos: Photo[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80", alt: "산 위 일출" },
  { id: 2, src: "https://images.unsplash.com/photo-1493244040629-496f6d136cc3?auto=format&fit=crop&w=1200&q=80", alt: "호수와 숲" },
  { id: 3, src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=1200&q=80", alt: "사막의 노을" },
  { id: 4, src: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80", alt: "도시 야경" },
  { id: 5, src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80", alt: "파도와 바다" },
  { id: 6, src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80", alt: "안개 낀 산맥" },
  { id: 7, src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80", alt: "하이킹 트레일" },
  { id: 8, src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1200&q=80", alt: "숲 속 햇살" },
  { id: 9, src: "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?auto=format&fit=crop&w=1200&q=80", alt: "구름과 산" }
];

export default function PhotoGrid() {
  const [selected, setSelected] = useState<Photo | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <section className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {photos.map((photo) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setSelected(photo)}
            className="group relative aspect-square overflow-hidden rounded-md bg-zinc-900"
            aria-label={`${photo.alt} 크게 보기`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </button>
        ))}
      </section>

      {selected ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label="확대 이미지"
        >
          <div className="relative max-h-[90vh] w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-2 top-2 z-10 rounded-full bg-zinc-900/80 px-3 py-1 text-sm text-zinc-100"
            >
              닫기
            </button>
            <img
              src={selected.src}
              alt={selected.alt}
              className="max-h-[90vh] w-full rounded-lg object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
