import TableUtil from "@/utils/tableUtil";
import MockQueryConstants from "../constants/mockQueriesConstants";
import AxiosService from "./axiosService";

export default class ProjectsService {
  public static async getAllProjectsForTable(
    pageIndex: number,
    pageSize: number
  ) {
    return await AxiosService.get(
      MockQueryConstants.getAllProjectsPagination(pageIndex, pageSize)
    )
      .then((response: any) => {
        return {
          count: response.headers["x-total-count"],
          projects: response.data,
        };
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }

  public static async getAllProjectsAlphabet() {
    return await AxiosService.get(MockQueryConstants.projects)
      .then((response) => {
        var foundLetters: string[] = [];
        response.data.forEach((element: any) => {
          if (
            !TableUtil.letterExistsInList(element.name.charAt(0), foundLetters)
          ) {
            foundLetters.push(element.name.charAt(0).toUpperCase());
          }
        });
        return foundLetters;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }

  public static async getAllProjects() {
    return await AxiosService.get(MockQueryConstants.projects + "?_sort=name")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }

  public static async createNewProject(data: any) {
    return await AxiosService.post(MockQueryConstants.projects, {
      id: Date.now().toString(),
      name: data.name,
      description: data.description,
      clientId: data.client,
      userId: data.user,
    });
  }

  public static async updateProject(data: any, id: string) {
    return await AxiosService.put(MockQueryConstants.projects + `/${id}`, {
      name: data.name,
      description: data.description,
      clientId: data.client,
      userId: data.user,
    });
  }
}
