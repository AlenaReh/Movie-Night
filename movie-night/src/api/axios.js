import axios from "axios";
import apiCall from "./api";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: apiCall.url,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) =>
    queryString.stringify({ ...params, api_key: apiCall.apiKey }),
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
