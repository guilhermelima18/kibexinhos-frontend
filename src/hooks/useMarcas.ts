import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { MarcasProps } from "../types/Marcas";

export function useMarcas() {
  const [marcas, setMarcas] = useState<MarcasProps[]>([]);
  const [loading, setLoading] = useState(false);

  const getMarcas = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get("/marca");

      if (response) {
        if (response.status === 200) {
          setMarcas(response.data);
        }
      }
    } catch (error) {
      toast.error("Não foi possível buscar as marcas dos produtos.");
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    getMarcas,
    marcas,
    loading,
  };
}
