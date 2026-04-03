@@ -20,65 +20,65 @@ const photos: Photo[] = [
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
            className="group relative aspect-square overflow-hidden rounded-md bg-zinc-200"
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
              className="absolute right-2 top-2 z-10 rounded-full bg-white/90 px-3 py-1 text-sm text-zinc-900"
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
