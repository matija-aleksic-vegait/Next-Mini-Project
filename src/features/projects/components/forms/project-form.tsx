import { useForm } from "react-hook-form";
import { ProjectValidationConstants } from "../../constants/project-validation-constants";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import {
  createNewProject,
  updateProject,
} from "../../redux/projects-async-methods";

function ProjectForm({
  isUpdate,
  project,
  clientNames,
  userNames,
  deleteProjectFunction,
}: {
  project: any;
  isUpdate: boolean;
  clientNames: Array<any>;
  userNames: Array<any>;
  deleteProjectFunction: any;
}) {
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

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = async (data: any) => {
    if (isUpdate) dispatch(updateProject({ data: data, id: project.id }));
    else dispatch(createNewProject(data));
  };

  return (
    <form className="modal__content" onSubmit={handleSubmit(onSubmit)}>
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
        <ResetOrDeleteButton
          isUpdate={isUpdate}
          resetFormFunction={reset}
          deleteProjectFunction={deleteProjectFunction}
        />
      </div>
    </form>
  );
}
export default ProjectForm;

function ResetOrDeleteButton({
  isUpdate,
  resetFormFunction,
  deleteProjectFunction,
}: {
  isUpdate: boolean;
  resetFormFunction: any;
  deleteProjectFunction: any;
}) {
  return (
    <>
      {!isUpdate && (
        <button
          type="reset"
          className="btn btn--secondary gray-hover"
          aria-label="Reset Form"
          onClick={() => resetFormFunction()}
        >
          Reset
        </button>
      )}
      {isUpdate && (
        <button
          type="button"
          className="btn btn--secondary btn--secondary--danger gray-hover"
          aria-label="Delete Project"
          onClick={() => deleteProjectFunction()}
        >
          Delete
        </button>
      )}
    </>
  );
}
