import { createContext, ReactNode, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { formatDate } from "../utils/formatDate";

type AuthContextProps = {
  signIn: (data: SignInProps) => Promise<void>;
  userData: UserProps;
  token: TokenProps;
};

type AuthProviderProps = {
  children: ReactNode;
};

type SignInProps = {
  email: string;
  password: string;
};

type UserProps =
  | {
      user?: {
        id: number;
        email: string;
        nomeCliente?: string;
        nomeFantasia?: string;
        razaoSocial?: string;
        dataNascimento: string;
        celular1?: string;
        celular2?: string;
        ativo: boolean;
        apelido?: string;
        rgie?: string;
      };
    }
  | undefined;

type TokenProps = {
  token: string;
  refreshToken: string;
};

export const AuthContext = createContext({} as AuthContextProps);

export const signOut = () => {
  localStorage.removeItem("kibexinhos.token");
  localStorage.removeItem("kibexinhos.refreshToken");
  localStorage.removeItem("kibexinhos.user");

  window.location.href = "/";
};

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserProps>(() => {
    const getUser = localStorage.getItem("kibexinhos.user");

    if (getUser) {
      return JSON.parse(getUser);
    }

    return {} as UserProps;
  });

  const [token, setToken] = useState<TokenProps>(() => {
    const getToken = localStorage.getItem("kibexinhos.token");
    const getRefreshToken = localStorage.getItem("kibexinhos.refreshToken");

    if (getToken && getRefreshToken) {
      return {
        token: getToken,
        refreshToken: getRefreshToken,
      };
    }

    return {} as TokenProps;
  });

  const signIn = useCallback(
    async ({ email, password }: SignInProps) => {
      try {
        const params = {
          email: email,
          senha: password,
        };

        const response = await api.post("/cliente/login", {
          ...params,
        });

        if (response) {
          if (response.status === 200) {
            const data = {
              ...response.data.user,
              dataNascimento: formatDate(response.data.user.dataNascimento),
            };

            localStorage.setItem("kibexinhos.user", JSON.stringify(data));

            localStorage.setItem("kibexinhos.token", response.data.token);

            localStorage.setItem(
              "kibexinhos.refreshToken",
              response.data.refreshToken
            );

            setUserData({ user: data });

            setToken({
              token: response.data.token,
              refreshToken: response.data.refreshToken,
            });

            toast.success("Bem-vindo(a) à Kibexinhos Petshop!");

            navigate("/");
          }
        }
      } catch (error) {
        toast.error("Não foi possível realizar o login.");
      }
    },
    [navigate]
  );

  return (
    <AuthContext.Provider value={{ signIn, userData, token }}>
      {children}
    </AuthContext.Provider>
  );
}
