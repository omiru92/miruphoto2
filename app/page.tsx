import PhotoGrid from "@/components/photo-grid";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <header className="mb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Portfolio</p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">MIRU PHOTO</h1>
        <p className="mt-3 text-zinc-400">인스타그램 느낌의 그리드 포트폴리오 · 모바일 최적화 · 다크 모드</p>
      </header>
      <PhotoGrid />
    </main>
  );
}
