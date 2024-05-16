import axios from "axios";

export class AxiosService {
  public static get(urlPath: string) {
    return axios
      .get(urlPath)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        if (error.message) {
          throw new Error(error.message);
        } else if (error.request) {
          throw new Error(error.request);
        } else {
          throw new Error(error.response);
        }
      });
  }

  public static post(urlPath: string, data: any) {
    return axios
      .post(urlPath, data)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }

  public static put(urlPath: string, data: any) {
    return axios
      .put(urlPath, data)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }

  public static delete(urlPath: string) {
    return axios
      .delete(urlPath)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
}
