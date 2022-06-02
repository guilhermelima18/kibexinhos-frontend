import * as yup from "yup";

export const validationFormLogin = yup.object({
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  password: yup
    .string()
    .length(8, "No mínimo 8 letras ou números")
    .required("Senha obrigatória"),
});
