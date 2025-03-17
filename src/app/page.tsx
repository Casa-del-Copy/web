import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="hidden">
          <h1 className="text-5xl"> Casa del Copy </h1>
          <p> Content, ne sapunica. </p>
        </div>

        <Image
          src="/logo-with-bg.jpg"
          alt="Casa del Copy"
          width={600}
          height={300}
        />
      </main>
    </div>
  );
}
