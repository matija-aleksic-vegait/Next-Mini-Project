import WorkEntriesConstants from "../../constants/work-entries-constants";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";

function DaysEntryForm({
  workEntry,
  clients,
  categories,
}: {
  workEntry: any;
  clients: Array<any>;
  categories: Array<string>;
}) {
  const [availableProjects, setAvailableProjects] = useState<Array<any>>([]);

  useEffect(() => {
    if (workEntry) {
      var foundClient = clients.find(
        (client) => client.id === workEntry.clientId
      );
      console.log(foundClient);
      if (foundClient) setAvailableProjects(foundClient.projects);
    }
  }, [clients]);

  console.log(workEntry);

  const schema = Yup.object().shape({
    client: Yup.string().required(),
    project: Yup.string().required(),
    category: Yup.string().required(),
    description: Yup.string().max(
      WorkEntriesConstants.WORK_ENTRY_DESCRIPTION_MAX
    ),
    hours: Yup.number()
      .max(WorkEntriesConstants.WORK_ENTRY_HOURS_MAX)
      .min(WorkEntriesConstants.WORK_ENTRY_HOURS_MIN)
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      client: workEntry ? workEntry.clientId : "Select Client",
      project: workEntry ? workEntry.projectId : "Select Project",
      category: workEntry ? workEntry.category : "Select Category",
      description: workEntry ? workEntry.description : "",
      hours: workEntry ? workEntry.hours : 0,
    },
  });

  const setClientsAvailableProjects = (clientId: string) => {
    var foundClient = clients.find((client) => client.id === clientId);
    setAvailableProjects(foundClient.projects);
  };

  const onSubmit = async (data: any) => {
    console.log("SUBMIT WORK ENTRY");
  };

  return (
    <form>
      <div className="timesheet-entry__item">
        <div className="input-box">
          <label className="sr-only" htmlFor="client">
            Client
          </label>
          <select
            id="work-entry-client"
            className="input-box__input-field input-box__select"
            aria-label="Client"
            defaultValue={workEntry ? workEntry.clientId : "Select Client"}
            {...register("client")}
          >
            <option value="Select Client" disabled>
              Select Client
            </option>
            {clients.map((client, index) => (
              <option value={client.id} key={index}>
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
          <label className="sr-only" htmlFor="project">
            Project
          </label>
          <select
            id="work-entry-project"
            className="input-box__input-field input-box__select"
            aria-label="Project"
            disabled={availableProjects.length === 0}
            defaultValue={workEntry ? workEntry.projectId : "Select Project"}
            {...register("project")}
          >
            <option value="Select project" disabled>
              Select project
            </option>
            {availableProjects.map((project, index) => (
              <option value={project.id} key={index}>
                {project.name}
              </option>
            ))}
          </select>
          {errors.project && (
            <span className="validation-error-message">
              {errors.project.message?.toString()}
            </span>
          )}
        </div>
        <div className="input-box">
          <label className="sr-only" htmlFor="category">
            Category
          </label>
          <select
            id="work-entry-category"
            className="input-box__input-field input-box__select"
            aria-label="Category"
            defaultValue={workEntry ? workEntry.category : "Select Category"}
            {...register("category")}
          >
            <option value="Select Category" disabled>
              Select category
            </option>
            {categories.map((category: any, index) => (
              <option value={category.name} key={index}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.category && (
            <span className="validation-error-message">
              {errors.category.message?.toString()}
            </span>
          )}
        </div>
        <div className="input-box">
          <label className="sr-only" htmlFor="description">
            Description
          </label>
          <input
            id="work-entry-description"
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
        <div className="input-box input-box--sm">
          <label className=" sr-only" htmlFor="hours">
            Hours
          </label>
          <input
            id="hours"
            className="input-box__input-field"
            type="text"
            placeholder="Hours"
            aria-label="Hours"
            {...register("hours")}
          />
          {errors.hours && (
            <span className="validation-error-message">
              {errors.hours.message?.toString()}
            </span>
          )}
        </div>
      </div>
    </form>
  );
}

export default DaysEntryForm;
