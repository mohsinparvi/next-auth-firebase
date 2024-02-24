import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Welcome to Next.js</h1>
      <Image src="/nextjs.svg" alt="Next.js logo" width={300} height={300} />
    </main>
  );
}
