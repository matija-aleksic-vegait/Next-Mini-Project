import MockQueryConstants from "@/constants/mock-queries-constants";
import AxiosService from "@/services/axios-service";

export default class TimesheetService {
  public static async getAllWorkEntriesForUserForGivenDateSpan(
    userId: string,
    startDate: Date,
    endDate: Date
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
