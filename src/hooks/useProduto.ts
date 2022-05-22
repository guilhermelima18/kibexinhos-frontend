import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { ProdutosProps } from "../types/Produto";
import { formatCurrency } from "../utils/formatCurrency";

export function useProduto() {
  const [produto, setProduto] = useState<ProdutosProps>();
  const [loading, setLoading] = useState(false);

  const getProduto = useCallback(async (id: number) => {
    try {
      setLoading(true);

      const response = await api.get(`/produto/${id}`);

      if (response) {
        if (response.status === 200) {
          const data = {
            ...response.data,
            preco: formatCurrency(response.data.preco),
          };

          setProduto(data);
        }
      }
    } catch (error) {
      toast.error("Não foi possível buscar o produto.");
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    getProduto,
    produto,
    loading,
  };
}
