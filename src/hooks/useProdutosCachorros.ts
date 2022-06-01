import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { ProdutosProps } from "../types/Produto";

type ParamsProps = {
  tipo: number[];
  marcas: number[];
  porte: string[];
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
            setProdutosCachorros(response.data.produtos);
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
