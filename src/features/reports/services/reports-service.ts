import MockQueryConstants from "@/constants/mock-queries-constants";
import AxiosService from "@/services/axios-service";

export default class ReportsService {
  public static async getAllWorkEntriesForReport(
    startDate: Date,
    endDate: Date,
    userId: string,
    clientId: string,
    projectId: string,
    category: string
  ) {
    return await AxiosService.get(
      MockQueryConstants.getAllWorkEntriesForUser(userId, startDate, endDate)
    )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
}
