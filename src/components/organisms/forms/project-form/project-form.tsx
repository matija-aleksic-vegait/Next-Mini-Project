import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { AppDispatch, createNewProject, updateProject } from "@redux";
import { ProjectValidationConstants } from "@constants";
import { Form, Div, Span, Option, Button } from "@atoms";
import { FormInputField, FormSelect } from "@molecules";
import { useForm } from "react-hook-form";

interface ProjectFormProps {
  project: any;
  isUpdate: boolean;
  clientNames: Array<any>;
  userNames: Array<any>;
  deleteProjectFunction: any;
}

export const ProjectForm: React.FC<ProjectFormProps> = ({
  isUpdate,
  project,
  clientNames,
  userNames,
  deleteProjectFunction,
}) => {
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
    <Form className="modal__content" onSubmit={handleSubmit(onSubmit)}>
      <Div className="input-box">
        <FormInputField
          id="project-name"
          type="text"
          placeholder="Name"
          aria-label="Name"
          formRegistrationOptions={{ ...register("name") }}
        />
        {errors.name && (
          <Span className="validation-error-message">
            {errors.name.message?.toString()}
          </Span>
        )}
      </Div>
      <Div className="input-box">
        <FormInputField
          id="project-description"
          type="text"
          placeholder="Description"
          aria-label="Description"
          formRegistrationOptions={{ ...register("description") }}
        />
        {errors.description && (
          <Span className="validation-error-message">
            {errors.description.message?.toString()}
          </Span>
        )}
      </Div>
      <Div className="input-box">
        <FormSelect
          label="Client"
          id="project-client"
          aria-label="Client"
          defaultValue={
            project
              ? project.clientId
              : clientNames.length !== 0
                ? clientNames[0].id
                : "Select Client"
          }
          formRegistrationOptions={{ ...register("client") }}
        >
          <Option value="Select Client" label="Select Client" disabled={true} />
          {clientNames.map((client) => (
            <Option value={client.id} label={client.name} key={client.name} />
          ))}
        </FormSelect>
        {errors.client && (
          <Span className="validation-error-message">
            {errors.client.message?.toString()}
          </Span>
        )}
      </Div>
      <Div className="input-box">
        <FormSelect
          label="Lead"
          id="project-lead"
          aria-label="Lead"
          defaultValue={
            project
              ? project.userId
              : userNames.length !== 0
                ? userNames[0].id
                : "Select Lead"
          }
          formRegistrationOptions={{ ...register("user") }}
        >
          <Option value="Select Lead" label="Select Lead" disabled={true} />
          {userNames.map((user) => (
            <Option value={user.id} label={user.name} key={user.name} />
          ))}
        </FormSelect>
        {errors.user && (
          <Span className="validation-error-message">
            {errors.user.message?.toString()}
          </Span>
        )}
      </Div>
      <Div className="modal__controls">
        <Button
          type="submit"
          className="btn btn--primary gray-hover"
          aria-label="Save Project"
          label={"Save"}
        />
        <ResetOrDeleteButton
          project={project}
          isUpdate={isUpdate}
          resetFormFunction={reset}
          deleteProjectFunction={deleteProjectFunction}
        />
      </Div>
    </Form>
  );
};

function ResetOrDeleteButton({
  project,
  isUpdate,
  resetFormFunction,
  deleteProjectFunction,
}: {
  project: any;
  isUpdate: boolean;
  resetFormFunction: any;
  deleteProjectFunction: any;
}) {
  return (
    <>
      {!isUpdate && (
        <Button
          type="reset"
          className="btn btn--secondary gray-hover"
          aria-label="Reset Form"
          onClick={() => resetFormFunction()}
          label="Reset"
        />
      )}
      {isUpdate && (
        <Button
          type="button"
          className="btn btn--secondary btn--secondary--danger gray-hover"
          aria-label="Delete Project"
          onClick={() => {
            deleteProjectFunction(project.id);
          }}
          label="Delete"
        />
      )}
    </>
  );
}
