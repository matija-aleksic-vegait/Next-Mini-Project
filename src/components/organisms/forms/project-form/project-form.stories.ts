import { ProjectForm } from "./project-form";

export default {
  title: "organisms/ProjectForm",
  component: ProjectForm,
  parameters: {},
  tags: ["autodocs"],
};

export const ProjectFormUpdate = {
  args: {
    isUpdate: false,
    clientNames: ["Client1", "Client2"],
    userNames: ["User1", "User2"],
    deleteProjectFunction: () => alert("Delete fucntion triggered"),
    project: {},
  },
};
