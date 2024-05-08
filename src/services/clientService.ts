import MockQueryConstants from "@/constants/mockQueriesConstants";
import AxiosService from "./axiosService";

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
