import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { api } from "../services/api";

export type ClienteProps = {
  nomeCliente: string;
  dataNascimento: string;
  apelido: string;
  cpfcnpj: string;
  rgie?: string;
  nomeFantasia?: string;
  razaoSocial?: string;
  email: string;
  senha: string;
  cep: string;
  celular1: string;
  celular2: string;
  ativo: boolean;
  newsletter: boolean;
};

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

      console.log(response);
    } catch (error) {
      toast.error("Não foi possível criar uma conta.");
    }
  };

  return {
    cadastrarCliente,
  };
}
