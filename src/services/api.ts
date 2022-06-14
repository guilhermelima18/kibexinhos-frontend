import axios, { AxiosError } from "axios";
import Swal from "sweetalert2";

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
      Swal.fire({
        icon: "warning",
        title: "Token expirado",
        text: "Faça o login novamente... Aguarde, estamos te redirecionando!",
        confirmButtonColor: "#DD6B20",
        confirmButtonText: "Sim",
      }).then((result) => {
        if (result.isConfirmed) {
          setInterval(() => {
            window.location.href = "/login";
          }, 2000);
        }
      });
    }
  }
);
