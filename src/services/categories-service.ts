import MockQueryConstants from "@/constants/mock-queries-constants";
import AxiosService from "./axios-service";

export default class CategoriesService {
  public static async getAllCategories() {
    return await AxiosService.get(MockQueryConstants.categories)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
}
