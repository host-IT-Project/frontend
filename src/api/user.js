import { getItemFromLS } from "../util/localstorage";
import { http } from "./http";

export const getUserInfo = () => {
  if (!getItemFromLS("accessToken")) return;
  return http.get(`/api/user-info`).catch((error) => {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
    window.location.href = "/error";
    return {};
  });
};

export const getMyArticles = () => {
  if (!getItemFromLS("accessToken")) return;
  return http.get(`/api/article/users-articles`).catch((error) => {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
    window.location.href = "/error";
    return {};
  });
};
