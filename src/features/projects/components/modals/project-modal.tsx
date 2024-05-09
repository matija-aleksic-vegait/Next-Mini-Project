"use client";

import { ProjectValidationConstants } from "@/features/projects/constants/project-validation-constants";
import {
  closeModal,
  createNewProject,
  deleteProject,
  toggleCreateNewModal,
  updateProject,
} from "@/features/projects/redux/projects-slice";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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

  console.log(project);

  const schema = Yup.object().shape({
    name: Yup.string()
      .required()
      .min(ProjectValidationConstants.PROJECT_NAME_SIZE_MIN)
      .max(ProjectValidationConstants.PROJECT_NAME_SIZE_MAX),
    description: Yup.string()
      .nullable()
      .optional()
      .min(ProjectValidationConstants.PROJECT_DESCRIPTION_SIZE_MIN)
      .max(ProjectValidationConstants.PROJECT_DESCRIPTION_SIZE_MAX),
    client: Yup.string().required(),
    user: Yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: project ? project.name : "",
      description: project ? project.description : "",
      client: project
        ? project.clientId
        : clientNames.length !== 0
        ? clientNames[0].id
        : "Select Client",
      user: project
        ? project.userId
        : userNames.length !== 0
        ? userNames[0].id
        : "Select Lead",
    },
  });

  const onSubmit = async (data: any) => {
    if (isUpdate) dispatch(updateProject({ data: data, id: project.id }));
    else dispatch(createNewProject(data));
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
                dispatch(closeModal());
              }}
            ></div>
            <div
              className="modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <header className="modal__header">
                {!isUpdate && (
                  <h1
                    id="modal-title"
                    className="modal__header__title heading-lg"
                  >
                    New project
                  </h1>
                )}
                {isUpdate && (
                  <h1
                    id="modal-title"
                    className="modal__header__title heading-lg"
                  >
                    Project
                  </h1>
                )}

                <button
                  className="modal__header__close gray-hover"
                  type="button"
                  aria-label="Close Modal"
                  onClick={() => {
                    dispatch(toggleCreateNewModal());
                  }}
                >
                  <img src="/icons/cancel.svg" alt="close" />
                </button>
              </header>

              <form
                className="modal__content"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="input-box">
                  <label className="sr-only">Name</label>
                  <input
                    id="project-name"
                    className="input-box__input-field"
                    type="text"
                    placeholder="Name"
                    aria-label="Name"
                    {...register("name")}
                  />
                  {errors.name && (
                    <span className="validation-error-message">
                      {errors.name.message?.toString()}
                    </span>
                  )}
                </div>
                <div className="input-box">
                  <label className="sr-only">Name</label>
                  <input
                    id="project-description"
                    className="input-box__input-field"
                    type="text"
                    placeholder="Description"
                    aria-label="Description"
                    {...register("description")}
                  />
                  {errors.description && (
                    <span className="validation-error-message">
                      {errors.description.message?.toString()}
                    </span>
                  )}
                </div>
                <div className="input-box">
                  <label className="sr-only">Client</label>
                  <select
                    id="project-client"
                    className="input-box__input-field input-box__select"
                    aria-label="Client"
                    defaultValue={
                      project
                        ? project.clientId
                        : clientNames.length !== 0
                        ? clientNames[0].id
                        : "Select Client"
                    }
                    {...register("client")}
                  >
                    <option value="Select Client" disabled>
                      Select Client
                    </option>
                    {clientNames.map((client) => (
                      <option value={client.id} key={client.name}>
                        {client.name}
                      </option>
                    ))}
                  </select>
                  {errors.client && (
                    <span className="validation-error-message">
                      {errors.client.message?.toString()}
                    </span>
                  )}
                </div>
                <div className="input-box">
                  <label className="sr-only">Lead</label>
                  <select
                    id="project-lead"
                    className="input-box__input-field input-box__select"
                    aria-label="Lead"
                    defaultValue={
                      project
                        ? project.userId
                        : userNames.length !== 0
                        ? userNames[0].id
                        : "Select Lead"
                    }
                    {...register("user")}
                  >
                    <option value="Select Lead" disabled>
                      Select Lead
                    </option>
                    {userNames.map((user) => (
                      <option value={user.id} key={user.name}>
                        {user.name}
                      </option>
                    ))}
                  </select>
                  {errors.user && (
                    <span className="validation-error-message">
                      {errors.user.message?.toString()}
                    </span>
                  )}
                </div>
                <div className="modal__controls">
                  <button
                    type="submit"
                    className="btn btn--primary gray-hover"
                    aria-label="Save Project"
                  >
                    Save
                  </button>

                  {!isUpdate && (
                    <button
                      type="reset"
                      className="btn btn--secondary gray-hover"
                      aria-label="Reset Form"
                      onClick={() => reset()}
                    >
                      Reset
                    </button>
                  )}
                  {isUpdate && (
                    <button
                      type="button"
                      className="btn btn--secondary btn--secondary--danger gray-hover"
                      aria-label="Delete Project"
                      onClick={() => dispatch(deleteProject(project.id))}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default ProjectModal;
