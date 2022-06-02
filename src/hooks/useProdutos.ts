import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { ProdutosProps } from "../types/Produto";

type ParamsProps = {
  tipo: number[];
  marcas: number[];
  porte: string[];
};

export function useProdutos() {
  const [produtos, setProdutos] = useState<ProdutosProps[]>([]);
  const [loading, setLoading] = useState(false);

  const getProdutos = useCallback(
    async (params: ParamsProps, page: number, petId: number) => {
      try {
        setLoading(true);

        let url = `/produto/tipopet/${petId}?pagina=${page}`;

        if (params.tipo.length > 0) {
          url += `&tipo=${params.tipo}`;
        }

        if (params.marcas.length > 0) {
          url += `&marca=${params.marcas}`;
        }

        if (params.porte.length > 0) {
          url += `&porte=${params.porte}`;
        }

        const response = await api.get(url);

        if (response) {
          if (response.status === 200) {
            setProdutos(response.data.produtos);
          }
        }
      } catch (error) {
        toast.error("Não foi possível buscar os produtos.");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return {
    getProdutos,
    produtos,
    loading,
  };
}
