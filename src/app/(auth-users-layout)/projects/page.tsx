"use client";

import { Metadata } from "next";
import ProjectsTable from "../../../components/tables/project-table/projects-table";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import ProjectsHeaderCard from "@/components/cards/projects-header-card";

// export const metadata: Metadata = {
//   title: "Projects",
// };

function Projects() {
  return (
    <div className="application">
      <main className="application-content">
        <Provider store={store}>
          <ProjectsHeaderCard />
          <ProjectsTable />
        </Provider>
      </main>
    </div>
  );
}

export default Projects;
