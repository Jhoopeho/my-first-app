import Link from "next/link";
export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
        Student · Web developer in progress
      </p>
      <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
        Hello, my name is Hope John Bagaipo
      </h1>

      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
        I am a third-year BSIT student at MDC who enjoys learning new things.
        I am currently building my web development skills with Next.js and React.
      </p>

      <Link
        href="/projects"
        className="mt-8 inline-flex rounded-md bg-blue-700 px-5 py-3 font-medium text-white hover:bg-blue-800"
      >
        See my projects
      </Link>
    </main>
  );
}