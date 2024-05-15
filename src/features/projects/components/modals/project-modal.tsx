import { closeModal } from "@/features/projects/redux/projects-slice";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject } from "../../redux/projects-async-methods";
import { ProjectForm } from "@/components/organisms/forms/project-form/project-form";

function ProjectModal({
  isOpenModal,
  isUpdate,
  project,
}: {
  isOpenModal: boolean;
  isUpdate: boolean;
  project?: any;
}) {
  const dispatch = useDispatch<AppDispatch>();

  const userNames = useSelector(
    (state: RootState) => state.projectsStore.userNames
  );
  const clientNames = useSelector(
    (state: RootState) => state.projectsStore.clientNames
  );

  const closeModalFunction = async () => {
    dispatch(closeModal());
  };

  const deleteProjectFunction = async () => {
    dispatch(deleteProject(project.id));
  };

  return (
    <>
      {isOpenModal && (
        <>
          <div className="modal-wrapper">
            <div
              id="create-project-modal-overlay"
              className="modal-overlay modal-overlay--background-shadow"
              onClick={() => {
                closeModalFunction();
              }}
            ></div>
            <div
              className="modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <ProjectModalHeader
                closeModalFunction={closeModalFunction}
                isUpdate={isUpdate}
              />

              <ProjectForm
                isUpdate={isUpdate}
                project={project}
                clientNames={clientNames}
                userNames={userNames}
                deleteProjectFunction={deleteProjectFunction}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default ProjectModal;

function ProjectModalHeader({
  isUpdate,
  closeModalFunction,
}: {
  isUpdate: boolean;
  closeModalFunction: any;
}) {
  return (
    <header className="modal__header">
      {!isUpdate && (
        <h1 id="modal-title" className="modal__header__title heading-lg">
          New project
        </h1>
      )}
      {isUpdate && (
        <h1 id="modal-title" className="modal__header__title heading-lg">
          Project
        </h1>
      )}

      <button
        className="modal__header__close gray-hover"
        type="button"
        aria-label="Close Modal"
        onClick={() => {
          closeModalFunction();
        }}
      >
        <img src="/icons/cancel.svg" alt="close" />
      </button>
    </header>
  );
}
