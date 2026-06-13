import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-primary h-screen">
      <main className="mx-auto max-w-2xl">
        <div className="py-8 text-center">
          <h3 className="text-4xl font-bold uppercase mt-8">
            Seja bem vindo!
          </h3>
          <p className="bg-white text-primary text-2xl font-bold uppercase mb-8 md:text-4xl">ao next IA genkit.</p>

          <span className="mt-4 block text-2xl text-gray-300 md:text-3xl">
            Aprenda inglês e espanhol de forma inteligente com IA generativa powered by Genkit.
          </span>
        </div>

        <Image
          src="/home-image.svg"
          alt="logo grande com nome next IA genkit"
          width={700}
          height={150}
          priority
          className="w-full mx-auto max-w-[250px] sm:max-w-[350px] md:max-w-[500px] lg:max-w-[700px] h-auto"
        />
      </main>
    </div >
  );
}
