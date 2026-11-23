import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        Hello, my name is Hope John Bagaipo
      </h1>

      <p className="at-2">
        I am a student who enjoys learning new things.
        I am currently learning how to create websites using Next.js.
      </p>

      <Link href="/projects" className="mt-4 inline-block underline">
        See my projects
      </Link>
    </main>
  );
}