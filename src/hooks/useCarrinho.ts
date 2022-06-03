/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";
import { api } from "../services/api";
import { ProdutosProps } from "../types/Produto";

type CarrinhoProps = {
  id: number;
  clienteId: number;
  produtoId: number;
  quantidade: number;
  produto: ProdutosProps;
};

type AtualizarParamsProps = {
  id: number;
  clienteId: number;
  produtoId: number;
  quantidade: number;
};

export function useCarrinho() {
  const { token } = useContext(AuthContext);
  const [itensCarrinho, setItensCarrinho] = useState<CarrinhoProps[]>([]);
  const [loading, setLoading] = useState(false);

  const getProdutosCarrinho = useCallback(async () => {
    try {
      setLoading(true);

      const response = await api.get("/carrinho", {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      });

      if (response) {
        if (response.status === 200) {
          setItensCarrinho(response.data);
        }
      }
    } catch (error) {
      toast.error("Não foi possível buscar os itens do carrinho.");
    } finally {
      setLoading(false);
    }
  }, []);

  const adicionarProdutosCarrinho = useCallback(async (produtoId: number) => {
    try {
      const response = await api.post(
        "/carrinho/adicionar",
        {
          produtoId,
        },
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        }
      );

      if (response) {
        if (response.status === 200) {
          toast.success("Produto adicionado ao carrinho.");
        }
      }
    } catch (error: any) {
      const { data } = error.response;
      toast.info(data.message);
    }
  }, []);

  const atualizaProdutosCarrinho = useCallback(
    async (params: AtualizarParamsProps) => {
      try {
        await api.patch(
          "/carrinho/atualizar",
          {
            ...params,
          },
          {
            headers: {
              Authorization: `Bearer ${token.token}`,
            },
          }
        );
      } catch (error) {
        toast.error("Não foi possível atualizar os itens do carrinho.");
      }
    },
    []
  );

  const removerProdutosCarrinho = useCallback(async (produtoId: number) => {
    try {
      await api.delete(`/carrinho/remover/${produtoId}`, {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      });
    } catch (error) {
      toast.error("Não foi possível remover o item do carrinho");
    }
  }, []);

  return {
    getProdutosCarrinho,
    adicionarProdutosCarrinho,
    atualizaProdutosCarrinho,
    removerProdutosCarrinho,
    itensCarrinho,
    loading,
  };
}
