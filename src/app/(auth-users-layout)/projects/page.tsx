import { Metadata } from "next";
import ProjectsTableProvider from "@/components/providers/projects-table-provider";

export const metadata: Metadata = {
  title: "Projects",
};

function Projects() {
  return (
    <div className="application">
      <main className="application-content">
        <ProjectsTableProvider />
      </main>
    </div>
  );
}

export default Projects;
