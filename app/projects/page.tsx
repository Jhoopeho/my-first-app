import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Hope John Bagaipo",
  description: "A few projects and practice ideas by Hope John Bagaipo.",
};

const projects = [
  {id: 1,name: "Personal Portfolio", description: "A simple website introducing me and showcasing my work.",},
  {id: 2,name: "Campus Task Planner", description: "A practice concept for organizing assignments and deadlines.",},
  {id: 3,name: "Recipe Finder", description: "A small project idea for browsing meals by ingredient.",},
];

export default function ProjectsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="mt-2">
        A few projects and ideas I have worked on or would like to build.
      </p>

      <ul className="mt-4 list-disc space-y-2 pl-6">
        {projects.map((project) => (
          <li key={project.id}>
            <h2 className="font-semibold">{project.name}</h2>
            <p className="mt-1">
              {project.description}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}