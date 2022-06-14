import * as yup from "yup";

export const validarFormularioCadastro = yup.object().shape({
  nome: yup.string().required("Nome é um campo obrigatório"),
  apelido: yup.string().required("Apelido é um campo obrigatório"),
  email: yup
    .string()
    .email("E-mail inválido")
    .required("E-mail é um campo obrigatório"),
  senha: yup
    .string()
    .length(8, "No mínimo 8 letras ou números")
    .required("Senha obrigatória"),
  cep: yup
    .string()
    .length(9, "CEP contém 8 números")
    .required("CEP é um campo obrigatório"),
  celular1: yup
    .string()
    .length(15, "Celular deve conter 11 números")
    .required("Celular é um campo obrigatório"),
  celular2: yup
    .string()
    .length(15, "Celular deve conter 11 números")
    .required("Celular é um campo obrigatório"),
});
