import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { api } from "../services/api";
import { ClienteProps } from "../types/Cliente";

export function useCadastroCliente() {
  const cadastrarCliente = async (cliente: ClienteProps) => {
    try {
      const response = await api.post("/cliente/criar", {
        ...cliente,
      });

      if (response) {
        Swal.fire({
          icon: "success",
          title: "Cadastro efetuado com sucesso.",
          showConfirmButton: true,
        });
      }
    } catch (error) {
      toast.error("Não foi possível criar uma conta.");
    }
  };

  return {
    cadastrarCliente,
  };
}
