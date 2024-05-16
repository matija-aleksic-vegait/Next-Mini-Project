import { MockQueryConstants } from "@constants";
import { AxiosService } from "@services";

export class UserService {
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
