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
}
