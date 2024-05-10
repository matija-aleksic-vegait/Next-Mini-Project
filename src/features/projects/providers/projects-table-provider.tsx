"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import ProjectsTable from "../components/tables/projects-table";

function ProjectsTableProvider() {
  return (
    <Provider store={store}>
      <ProjectsTable />
    </Provider>
  );
}

export default ProjectsTableProvider;
