import { MockQueryConstants } from '@constants';
import { AxiosService } from './axios-service';

export class ClientService {
  public static async getAllClients() {
    return await AxiosService('get', MockQueryConstants.clients)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
}