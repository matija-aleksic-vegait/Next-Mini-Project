import MockQueryConstants from "@/constants/mock-queries-constants";
import AxiosService from "./axios-service";

export default class CountriesService {
  public static async getAllCountries() {
    return await AxiosService.get(MockQueryConstants.countries)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
}
