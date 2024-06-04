import axios, { AxiosResponse } from 'axios';

type Method = 'get' | 'post' | 'put' | 'delete' | 'patch';

export const AxiosService = async (
  method: Method,
  urlPath: string,
  data: any = null
): Promise<AxiosResponse<any>> => {
  return axios[method](urlPath, data)
    .then((response: AxiosResponse<any>) => {
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
};
