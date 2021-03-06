import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { ProdutosProps } from "../types/Produto";
import { formatCurrency } from "../utils/formatCurrency";

export function useProdutosCachorros() {
  const [produtosCachorrosMaisVendidos, setProdutosCachorrosMaisVendidos] =
    useState<ProdutosProps[]>([]);
  const [loading, setLoading] = useState(false);

  const getProdutosCachorrosMaisVendidos = useCallback(async () => {
    try {
      setLoading(true);

      const response = await api.get("/produto/maisvendidos/1");

      if (response) {
        if (response.status === 200) {
          const data = response.data.map((produto: ProdutosProps) => ({
            ...produto,
            preco: formatCurrency(produto.preco),
          }));

          setProdutosCachorrosMaisVendidos(data);
        }
      }
    } catch (error) {
      toast.error(
        "Não foi possível buscar os produtos mais vendidos para cachorros."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    getProdutosCachorrosMaisVendidos,
    produtosCachorrosMaisVendidos,
    loading,
  };
}
