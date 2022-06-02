import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { ProdutosProps } from "../types/Produto";
import { formatCurrency } from "../utils/formatCurrency";

export function useProdutosGatos() {
  const [produtosGatosMaisVendidos, setProdutosGatosMaisVendidos] = useState<
    ProdutosProps[]
  >([]);
  const [loading, setLoading] = useState(false);

  const getProdutosGatosMaisVendidos = useCallback(async () => {
    try {
      setLoading(true);

      const response = await api.get("/produto/maisvendidos/2");

      if (response) {
        if (response.status === 200) {
          const data = response.data.map((produto: ProdutosProps) => ({
            ...produto,
            preco: formatCurrency(produto.preco),
          }));

          setProdutosGatosMaisVendidos(data);
        }
      }
    } catch (error) {
      toast.error(
        "Não foi possível buscar os produtos mais vendidos para gatos."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    getProdutosGatosMaisVendidos,
    produtosGatosMaisVendidos,
    loading,
  };
}
