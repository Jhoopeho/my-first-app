import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Hope John Bagaipo",
  description: "A few projects and practice ideas by Hope John Bagaipo.",
};

const projects = [
  {
    id: 1,
    name: "Personal Portfolio",
    description: "A simple website introducing me and showcasing my work.",
  },
  {
    id: 2,
    name: "Campus Task Planner",
    description: "A practice concept for organizing assignments and deadlines.",
  },
  {
    id: 3,
    name: "Recipe Finder",
    description: "A small project idea for browsing meals by ingredient.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h1>
      <p className="mt-4 text-slate-600">
        A few projects and ideas I have worked on or would like to build.
      </p>

      <ul className="mt-8 grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.id}
            className="rounded-lg border border-slate-200 bg-white p-6"
          >
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="mt-2 leading-7 text-slate-600">
              {project.description}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}