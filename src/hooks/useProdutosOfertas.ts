import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { ProdutosProps } from "../types/Produto";
import { formatCurrency } from "../utils/formatCurrency";

export function useProdutosOfertas() {
  const [produtosOfertas, setProdutosOfertas] = useState<ProdutosProps[]>([]);
  const [loading, setLoading] = useState(false);

  const getOfertas = useCallback(async () => {
    try {
      setLoading(true);

      const response = await api.get("/produto/ofertas");

      if (response) {
        if (response.status === 200) {
          const data = response.data.map((produto: ProdutosProps) => ({
            ...produto,
            preco: formatCurrency(produto.preco),
          }));

          setProdutosOfertas(data);
        }
      }
    } catch (error) {
      toast.error("Não foi possível buscar os produtos em ofertas.");
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    getOfertas,
    produtosOfertas,
    loading,
  };
}
