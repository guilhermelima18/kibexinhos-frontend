import { useCallback, useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";
import { api } from "../services/api";
import { PedidosProps } from "../types/Pedidos";
import { formatCurrency } from "../utils/formatCurrency";
import { formatDate } from "../utils/formatDate";

export function usePedidos() {
  const { token, userData } = useContext(AuthContext);
  const [todosPedidosCliente, setTodosPedidosCliente] = useState<
    PedidosProps[]
  >([]);
  const [loading, setLoading] = useState(false);
  const clienteId = userData ? userData.id : 0;

  const getPedidosCliente = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get(
        `/pedido/dashboard?clienteId=${clienteId}`,
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        }
      );

      if (response) {
        if (response.status === 200) {
          const data = response.data.pedidos.map((pedido: PedidosProps) => ({
            ...pedido,
            criadoEm: formatDate(pedido.criadoEm),
            frete: formatCurrency(pedido.frete),
            total: formatCurrency(pedido.total),
          }));

          setTodosPedidosCliente(data);
        }
      }
    } catch (error) {
      toast.error("Não foi possível buscar os pedidos.");
    } finally {
      setLoading(false);
    }
  }, [token.token, clienteId]);

  return {
    getPedidosCliente,
    todosPedidosCliente,
    loading,
  };
}
