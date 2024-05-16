import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProjectsService, UserService, ClientService } from "@services";

export const fetchProjectsAsync = createAsyncThunk(
  "projectsSlice/fetchProjects",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return await ProjectsService.getAllProjects().then((response) => {
      return response;
    });
  }
);

export const getAllAvailableLettersAsync = createAsyncThunk(
  "projectsSlice/getAllProjectsAlphabet",
  async () => {
    return await ProjectsService.getAllProjectsAlphabet()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
);

export const getAllUserNames = createAsyncThunk(
  "projectsSlice/getAllUserNames",
  async () => {
    return await UserService.getAllUsers()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
);

export const getAllClientNames = createAsyncThunk(
  "projectsSlice/getAllClientNames",
  async () => {
    return await ClientService.getAllClients()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
);

export const createNewProject = createAsyncThunk(
  "projectsSlice/createNewProject",
  async (data: any) => {
    return await ProjectsService.createNewProject(data)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
);

export const updateProject = createAsyncThunk(
  "projectsSlice/updateProject",
  async (data: any) => {
    return await ProjectsService.updateProject(data.data, data.id)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
);

export const deleteProject = createAsyncThunk(
  "projectsSlice/deleteProject",
  async (id: string) => {
    return await ProjectsService.deleteProject(id)
      .then(() => {
        return id;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
);
