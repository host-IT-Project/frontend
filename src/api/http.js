import Axios from "axios";
import { getItemFromLS } from "../util/localstorage";

const axios = Axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

const appendAuth = (config) => {
  const accessToken = getItemFromLS("accessToken");
  if (accessToken) {
    if (!config) config = { headers: {} };
    if (!config.headers) config.headers = {};
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
};

export const http = {
  get: function get(url, config) {
    return axios.get(url, appendAuth(config)).then((res) => res.data);
  },
  post: function post(url, data, config) {
    return axios.post(url, data, appendAuth(config)).then((res) => res.data);
  },
  delete: function del(url, config) {
    return axios.delete(url, appendAuth(config)).then((res) => res.data);
  },
  patch: function patch(url, data, config) {
    return axios.patch(url, data, appendAuth(config)).then((res) => res.data);
  },
};
