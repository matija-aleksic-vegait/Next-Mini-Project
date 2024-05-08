import { ValidationConstants } from "@/constants/validationConstants";
import {
  createNewProject,
  getAllClientNames,
  getAllUserNames,
  toggleCreateNewModal,
} from "@/redux/state/projectsSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

function ProjectModal({ isOpenModal }: { isOpenModal: boolean }) {
  const dispatch = useDispatch<AppDispatch>();

  const userNames = useSelector(
    (state: RootState) => state.projectsStore.userNames
  );
  const clientNames = useSelector(
    (state: RootState) => state.projectsStore.clientNames
  );

  const schema = Yup.object().shape({
    name: Yup.string()
      .required()
      .min(ValidationConstants.PROJECT_NAME_SIZE_MIN)
      .max(ValidationConstants.PROJECT_NAME_SIZE_MAX),
    description: Yup.string()
      .nullable()
      .optional()
      .min(ValidationConstants.PROJECT_DESCRIPTION_SIZE_MIN)
      .max(ValidationConstants.PROJECT_DESCRIPTION_SIZE_MAX),
    clientId: Yup.string().required(),
    userId: Yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      description: "",
      clientId: clientNames.length !== 0 ? clientNames[0].id : "Select Client",
      userId: userNames.length !== 0 ? userNames[0].id : "Select Lead",
    },
  });

  useEffect(() => {
    dispatch(getAllUserNames());
    dispatch(getAllClientNames());
  }, []);

  const onSubmit = async (data: any) => {
    console.log(data);
    dispatch(createNewProject(data));
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
                dispatch(toggleCreateNewModal());
              }}
            ></div>
            <div
              className="modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <header className="modal__header">
                <h1
                  id="modal-title"
                  className="modal__header__title heading-lg"
                >
                  New project
                </h1>
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
                      clientNames ? clientNames[0].id : "Select Client"
                    }
                    {...register("clientId")}
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
                  {errors.clientId && (
                    <span className="validation-error-message">
                      {errors.clientId.message?.toString()}
                    </span>
                  )}
                </div>
                <div className="input-box">
                  <label className="sr-only">Lead</label>
                  <select
                    id="project-lead"
                    className="input-box__input-field input-box__select"
                    aria-label="Lead"
                    defaultValue={userNames ? userNames[0].id : "Select Lead"}
                    {...register("userId")}
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
                  {errors.userId && (
                    <span className="validation-error-message">
                      {errors.userId.message?.toString()}
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
                  <button
                    type="reset"
                    className="btn btn--secondary gray-hover"
                    aria-label="Reset Form"
                    onClick={() => reset()}
                  >
                    Reset
                  </button>
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
