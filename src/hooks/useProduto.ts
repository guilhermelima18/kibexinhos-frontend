import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { ProdutosProps } from "../types/Produto";

export function useProduto() {
  const [produto, setProduto] = useState<ProdutosProps>();
  const [produtosRelacionados, setProdutosRelacionados] = useState<
    ProdutosProps[]
  >([]);
  const [loading, setLoading] = useState(false);

  const getProduto = useCallback(async (id: number) => {
    try {
      setLoading(true);

      const response = await api.get(`/produto/${id}`);

      if (response) {
        if (response.status === 200) {
          setProduto(response.data);
        }
      }
    } catch (error) {
      toast.error("Não foi possível buscar o produto.");
    } finally {
      setLoading(false);
    }
  }, []);

  const getProdutosRelacionados = useCallback(
    async (tipoId: number, petId: number) => {
      try {
        setLoading(true);

        const response = await api.get(
          `/produto/relacionados/${tipoId}/${petId}`
        );

        if (response) {
          if (response.status === 200) {
            setProdutosRelacionados(response.data);
          }
        }
      } catch (error) {
        toast.error("Não foi possível buscar os produtos relacionados.");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return {
    getProduto,
    getProdutosRelacionados,
    produto,
    produtosRelacionados,
    loading,
  };
}
