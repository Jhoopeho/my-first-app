import Link from "next/link";
export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        Hello, my name is Hope John Bagaipo
      </h1>

      <p className="mt-2">
        I am a third-year BSIT student at MDC who enjoys learning new things.
        I am currently building my web development skills with Next.js and React.
      </p>

      <Link href="/projects"
        className="mt-4 inline-block underline"
      >
        See my projects
      </Link>
    </main>
  );
}