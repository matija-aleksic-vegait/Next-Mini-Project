import { ValidationConstants } from "@/constants/validationConstants";
import {
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
    customer: Yup.string()
      .required()
      .oneOf(clientNames, "Please select a customer"),
    lead: Yup.string().required().oneOf(userNames, "Please select a lead"),
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
      customer: clientNames ? clientNames[0] : "Select Client",
      lead: userNames ? userNames[0] : "Select Lead",
    },
  });

  useEffect(() => {
    dispatch(getAllUserNames());
    dispatch(getAllClientNames());
  }, []);

  const onSubmit = async (data: any) => {
    console.log(data);
    // await ProjectService.update({ name: data.name, description: data.description, clientName: data.customer, leadId: data.lead, id: project.id })
    //     .then(() => setErrorMessage(""))
    //     .catch((error) => { setErrorMessage(UtilService.extractErrorMessages(error.response.data)); });
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
                      clientNames ? clientNames[0] : "Select Client"
                    }
                    {...register("customer")}
                  >
                    <option value="Select Client" disabled>
                      Select Client
                    </option>
                    {clientNames.map((name) => (
                      <option value={name} key={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                  {errors.customer && (
                    <span className="validation-error-message">
                      {errors.customer.message?.toString()}
                    </span>
                  )}
                </div>
                <div className="input-box">
                  <label className="sr-only">Lead</label>
                  <select
                    id="project-lead"
                    className="input-box__input-field input-box__select"
                    aria-label="Lead"
                    defaultValue={userNames ? userNames[0] : "Select Lead"}
                    {...register("lead")}
                  >
                    <option value="Select Lead" disabled>
                      Select Lead
                    </option>
                    {userNames.map((name) => (
                      <option value={name} key={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                  {errors.lead && (
                    <span className="validation-error-message">
                      {errors.lead.message?.toString()}
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
