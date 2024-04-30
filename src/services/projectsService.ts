import TableUtil from "@/utils/helpers/tableUtil";
import MockQueryConstants from "../utils/constants/mockQueriesConstants";
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
        return response.data;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }

  public static async getAllProjectsAlphabet() {
    return await AxiosService.get(MockQueryConstants.getAllProjects())
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
}
