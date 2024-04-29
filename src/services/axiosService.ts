import axios from "axios";

export default class AxiosService {
  public static get(urlPath: string) {
    return axios
      .get(urlPath)
      .then((res) => {
        return res;
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
}
