import MockQueryConstants from "@/constants/mock-queries-constants";
import AxiosService from "../../../services/axios-service";
import TableUtil from "@/utils/table-util";

export default class ClientsService {
  public static async getAllClients() {
    return await AxiosService.get(MockQueryConstants.clients)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }

  public static async getAllClientsAlphabet() {
    return await AxiosService.get(MockQueryConstants.clients)
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

  public static async createNewClient(data: any) {
    return await AxiosService.post(MockQueryConstants.clients, {
      id: Date.now().toString(),
      name: data.name,
      address: data.address,
      city: data.city,
      zipCode: data.zipCode,
      country: data.country,
    });
  }

  public static async updateClient(data: any, id: string) {
    return await AxiosService.put(MockQueryConstants.clients + `/${id}`, {
      name: data.name,
      address: data.address,
      city: data.city,
      zipCode: data.zipCode,
      country: data.country,
    });
  }

  public static async deleteClient(id: string) {
    return await AxiosService.delete(MockQueryConstants.clients + `/${id}`);
  }
}
