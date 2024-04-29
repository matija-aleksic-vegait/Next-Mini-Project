import { Metadata } from "next";
import ProjectsTable from "../../../components/tables/project-table/projects-table";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import ErrorBoundaryTable from "../../../components/tables/project-table/error";
import AlphabetFilter from "@/components/navigation/alphabet-filter";

export const metadata: Metadata = {
  title: "Projects",
};

function Projects() {
  return (
    <div className="application">
      <main className="application-content">
        <section
          aria-label="Project Card"
          className="application-content__card"
        >
          <div className="application-content__card__action-container">
            <div className="heading-lg">Projects</div>
            <p className="text-lg">
              Here, you have full control over your project database, empowering
              you to efficiently organise and maintain your projects.
            </p>
            <button
              className="btn btn--secondary btn--secondary--icon-left js-toggle-create-modal"
              type="button"
              aria-label="New Project"
            >
              <img src="/icons/plus.svg" alt="add" />
              <span>New project</span>
            </button>
          </div>
          <form>
            <div className="input-box" role="search">
              <button
                type="submit"
                className="input-box__btn input-box__btn--left"
              >
                <img src="/icons/search.svg" alt="search" />
              </button>
              <label className="sr-only">Search Projects</label>{" "}
              {/* //for="project-search" */}
              <input
                id="project-search"
                className="input-box__input-field input-box__input-field--icon--left"
                type="search"
                placeholder="Search"
                aria-label="Search Projects"
              />
            </div>
          </form>
        </section>
        <ErrorBoundary errorComponent={ErrorBoundaryTable}>
          <ProjectsTable />
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default Projects;
