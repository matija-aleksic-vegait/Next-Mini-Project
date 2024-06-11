import { MockQueryConstants } from '@constants';
import { AxiosService } from './axios-service';

export class UserService {
  public static async getAllUsers() {
    return await AxiosService('get', MockQueryConstants.getAllUsers())
      .then((response: any) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
}
