import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-primary h-screen">
      <main className="flex flex-1 w-full max-w-3xl">
        <Image
          src="/home-image.svg"
          alt="logo grande com nome next ai genkit"
          width={700}
          height={150}
          priority
        />
      </main>
    </div>
  );
}
