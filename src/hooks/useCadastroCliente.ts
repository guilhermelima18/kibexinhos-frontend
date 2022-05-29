import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { api } from "../services/api";
import { ClienteProps } from "../types/Cliente";

export function useCadastroCliente() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const cadastrarCliente = async (cliente: ClienteProps) => {
    try {
      setLoading(true);

      const response = await api.post("/cliente/criar", {
        ...cliente,
      });

      if (response) {
        Swal.fire({
          icon: "success",
          title: "Cadastro efetuado com sucesso.",
          confirmButtonColor: "#DD6B20",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/");
          }
        });
      }
    } catch (error) {
      toast.error("Não foi possível criar uma conta.");
    } finally {
      setLoading(false);
    }
  };

  return {
    cadastrarCliente,
    loading,
  };
}
