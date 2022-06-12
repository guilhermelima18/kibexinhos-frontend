import { useCallback, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";
import { api } from "../services/api";

type AvaliarProdutoParams = {
  produtoId: number;
  avaliacao: number;
};

export function useProdutoAvaliacao() {
  const { token } = useContext(AuthContext);

  const avaliarProduto = useCallback(
    async (params: AvaliarProdutoParams) => {
      try {
        const response = await api.post(
          "/produto/avaliacao",
          {
            ...params,
          },
          {
            headers: {
              Authorization: `Bearer ${token.token}`,
            },
          }
        );

        console.log(response);
      } catch (error) {
        toast.error("Não foi possível dar uma avaliação ao produto.");
      }
    },
    [token.token]
  );

  return {
    avaliarProduto,
  };
}
