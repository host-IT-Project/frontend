import { http } from "./http";

export const getUserInfo = () => {
  return http.get(`/api/article/user-info`).catch((error) => {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
    window.location.href = "/error";
    return {};
  });
};

export const getMyArticles = () => {
  return http.get(`/api/article/users-articles`).catch((error) => {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
    window.location.href = "/error";
    return {};
  });
};
