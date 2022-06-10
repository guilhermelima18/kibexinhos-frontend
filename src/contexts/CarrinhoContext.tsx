/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { api } from "../services/api";
import { ProdutosProps } from "../types/Produto";

type CarrinhoProviderProps = {
  children: ReactNode;
};

type CarrinhoContextProps = {
  getProdutosCarrinho: () => Promise<void>;
  adicionarProdutosCarrinho: (produtoId: number) => Promise<void>;
  atualizaProdutosCarrinho: (params: AtualizarParamsProps) => Promise<void>;
  removerProdutosCarrinho: (produtoId: number) => Promise<void>;
  finalizarPedidoCarrinho: (pedidoParams: PedidoParamsProps) => Promise<void>;
  itensCarrinho: CarrinhoProps[];
  loading: boolean;
  hasAddProduto: boolean;
  setHasAddProduto: Dispatch<SetStateAction<boolean>>;
};

export type CarrinhoProps = {
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

type PedidoParamsProps = {
  frete: number;
  tipoPagamentoId: number;
  cupomId: number;
  desconto: number;
  cep: string;
  estado: string;
  bairro: string;
  endereco: string;
};

export const CarrinhoContext = createContext({} as CarrinhoContextProps);

export function CarrinhoProvider({ children }: CarrinhoProviderProps) {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const [itensCarrinho, setItensCarrinho] = useState<CarrinhoProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasAddProduto, setHasAddProduto] = useState(false);

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
  }, [token.token]);

  const adicionarProdutosCarrinho = useCallback(
    async (produtoId: number) => {
      try {
        setLoading(true);
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
      } finally {
        setLoading(false);
      }
    },
    [token.token]
  );

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
    [token.token]
  );

  const removerProdutosCarrinho = useCallback(
    async (produtoId: number) => {
      try {
        await api.delete(`/carrinho/remover/${produtoId}`, {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        });
      } catch (error) {
        toast.error("Não foi possível remover o item do carrinho");
      }
    },
    [token.token]
  );

  const finalizarPedidoCarrinho = useCallback(
    async (pedidoParams: PedidoParamsProps) => {
      try {
        setLoading(true);
        const response = await api.post(
          "/pedido/checkout",
          {
            ...pedidoParams,
          },
          {
            headers: {
              Authorization: `Bearer ${token.token}`,
            },
          }
        );

        if (response.status === 200) {
          await Swal.fire({
            icon: "success",
            title: "Sucesso",
            text: "Obrigado por comprar na Kibexinhos Petshop. Volte sempre!!!",
            timer: 5000,
          });

          setTimeout(() => {
            navigate("/");
          }, 2000);
        }

        console.log(response);
      } catch (error) {
        toast.error("Não foi possível finalizar o pedido.");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return (
    <CarrinhoContext.Provider
      value={{
        getProdutosCarrinho,
        adicionarProdutosCarrinho,
        atualizaProdutosCarrinho,
        removerProdutosCarrinho,
        finalizarPedidoCarrinho,
        itensCarrinho,
        loading,
        hasAddProduto,
        setHasAddProduto,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}
