import axios, { AxiosError } from "axios";

let isRefreshing = false;
let failedRequestsQueue: {
  onSuccess: (token: string) => void;
  onFailure: (err: AxiosError<unknown, any>) => void;
}[] = [];

let token = localStorage.getItem("kibexinhos.token");

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_KIBEXINHOS}`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<any>) => {
    if (error.response && error.response.status === 401) {
      console.log(error);
      if (
        error.response.data &&
        error.response.data?.code === "token.expired"
      ) {
        token = localStorage.getItem("kibexinhos.token");

        const refreshToken = localStorage.getItem("kibexinhos.refreshToken");

        const originalConfig = error.config;

        if (!isRefreshing) {
          isRefreshing = true;

          api
            .post("/cliente/refresh", {
              token,
              refreshToken,
            })
            .then((response) => {
              const { token, refreshToken } = response.data;

              localStorage.setItem("kibexinhos.token", token);
              localStorage.setItem("kibexinhos.refreshToken", refreshToken);

              axios.defaults.headers.common[
                "Authorization"
              ] = `Bearer ${token}`;

              failedRequestsQueue.forEach((request) =>
                request.onSuccess(token)
              );
              failedRequestsQueue = [];
            })
            .catch((err) => {
              failedRequestsQueue.forEach((request) => request.onFailure(err));
              failedRequestsQueue = [];
            })
            .finally(() => {
              isRefreshing = false;
            });
        }

        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            onSuccess: (token: string) => {
              originalConfig.headers!["Authorization"] = `Bearer ${token}`;

              resolve(api(originalConfig));
            },
            onFailure: (err: AxiosError) => {
              reject(err);
            },
          });
        });
      }
    }

    return Promise.reject(error);
  }
);
