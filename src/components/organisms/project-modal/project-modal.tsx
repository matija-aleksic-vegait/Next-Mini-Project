import { closeModal } from "@/redux/projects/projects-slice";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { ProjectForm } from "@/components/organisms/forms/project-form/project-form";
import { ModalHeader } from "@/components/molecules/modal-header/modal-header";
import { deleteProject } from "@/redux/projects/projects-async-methods";
import { Div } from "@/components/atoms/div/div";

interface ProjectModalProps {
  isOpenModal: boolean;
  isUpdate: boolean;
  deleteProjectFunction: Function;
  closeModalFunction: Function;
  project?: any;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpenModal,
  isUpdate,
  project,
}) => {
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
          <Div className="modal-wrapper">
            <Div
              id="create-project-modal-overlay"
              className="modal-overlay modal-overlay--background-shadow"
              onClick={() => {
                closeModalFunction();
              }}
            ></Div>
            <Div
              className="modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <ModalHeader
                name="Project"
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
            </Div>
          </Div>
        </>
      )}
    </>
  );
};
