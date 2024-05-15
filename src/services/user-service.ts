import MockQueryConstants from "@/constants/mock-queries-constants";
import AxiosService from "./axios-service";

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
