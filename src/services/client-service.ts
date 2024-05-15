import MockQueryConstants from "@/constants/mock-queries-constants";
import AxiosService from "./axios-service";

export default class ClientService {
  public static async getAllClients() {
    return await AxiosService.get(MockQueryConstants.clients)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
}
