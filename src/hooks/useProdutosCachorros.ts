import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { formatCurrency } from "../utils/formatCurrency";
import { ProdutosProps } from "../types/Produto";

type ParamsProps = {
  marcas: number[];
};

export function useProdutosCachorros() {
  const [produtosCachorros, setProdutosCachorros] = useState<ProdutosProps[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  const getProdutosCachorros = useCallback(
    async (params: ParamsProps, page: number) => {
      try {
        setLoading(true);

        let url = `/produto/tipopet/1?pagina=${page}`;

        if (params.marcas.length > 0) {
          url += `&marca=${params.marcas[0]}`;
        }

        const response = await api.get(url);

        if (response) {
          if (response.status === 200) {
            const data = response.data.produtos.map(
              (produto: ProdutosProps) => ({
                ...produto,
                preco: formatCurrency(produto.preco),
              })
            );

            setProdutosCachorros(data);
          }
        }
      } catch (error) {
        toast.error("Não foi possível buscar os produtos para cachorros.");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return {
    getProdutosCachorros,
    produtosCachorros,
    loading,
  };
}
