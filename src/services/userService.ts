import MockQueryConstants from "@/constants/mockQueriesConstants";
import AxiosService from "./axiosService";

export default class UserService {
  public static async getAllUsers() {
    return await AxiosService.get(MockQueryConstants.getAllUsers())
      .then((response: any) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
}
