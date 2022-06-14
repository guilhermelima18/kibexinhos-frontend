import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCadastroCliente } from "../../../hooks/useCadastroCliente";
import { toast } from "react-toastify";
import { Button } from "../../Button";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { Form } from "../../Form";
import { ClienteProps } from "../../../types/Cliente";
import { validarFormularioCadastro } from "../../../validations/CadastroClientes";

const steps = 2;

export type FormCadastroProps = {
  inscricaoEstadual: string;
  nomeFantasia: string;
  razaoSocial: string;
  rg: string;
  email: string;
  senha: string;
  nome: string;
  apelido: string;
  celular1: string;
  celular2: string;
  dataNascimento: string;
  cep: string;
  newsletter: boolean;
};

export const StepsForm = () => {
  const { cadastrarCliente } = useCadastroCliente();
  const methods = useForm<FormCadastroProps>({
    resolver: yupResolver(validarFormularioCadastro),
  });
  const { nextStep, prevStep, activeStep } = useSteps({
    initialStep: 0,
  });
  const [cpfOrCnpj, setCpfOrCnpj] = useState("");

  const handleCadastroSubmit: SubmitHandler<FormCadastroProps> = async (
    data: FormCadastroProps
  ) => {
    let params = {
      nomeCliente: data.nome,
      dataNascimento: data.dataNascimento,
      apelido: data.apelido,
      cpfcnpj: cpfOrCnpj,
      email: data.email,
      senha: data.senha,
      cep: data.cep,
      celular1: data.celular1,
      celular2: data.celular2,
      ativo: true,
      newsletter: data.newsletter,
    } as ClienteProps;

    if (data.rg !== "" && data.rg !== undefined) {
      params.rgie = `${data.rg}`;
    }

    if (data.inscricaoEstadual !== "" && data.inscricaoEstadual !== undefined) {
      params.rgie = `${data.inscricaoEstadual}`;
    }

    if (data.razaoSocial !== "" && data.razaoSocial !== undefined) {
      params.razaoSocial = `${data.razaoSocial}`;
    }

    if (data.nomeFantasia !== "" && data.nomeFantasia !== undefined) {
      params.nomeFantasia = `${data.nomeFantasia}`;
    }

    if (cpfOrCnpj.length < 14) {
      toast.info("Campo CPF e/ou CNPJ é um campo obrigatório");
      return;
    }

    await cadastrarCliente(params);
  };

  return (
    <Flex
      width="100%"
      maxW="600px"
      mx="auto"
      flexDir="column"
      alignItems="center"
      py="10"
    >
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(handleCadastroSubmit)}>
          <Steps activeStep={activeStep} responsive colorScheme="orange">
            <Step label="CPF ou CNPJ" key={0}>
              <StepOne cpfOrCnpj={cpfOrCnpj} setCpfOrCnpj={setCpfOrCnpj} />
            </Step>
            <Step label="Dados do Cliente" key={1}>
              <StepTwo />
            </Step>
          </Steps>
        </Form>
      </FormProvider>
      <Flex width="100%" flexDir="column" justifyContent="center">
        <Flex w="100%" justifyContent="space-between">
          <Button
            isDisabled={activeStep === 0}
            mr={4}
            onClick={prevStep}
            size="md"
            variant="outline"
            fontWeight="normal"
            fontSize="0.9rem"
          >
            Anterior
          </Button>

          {activeStep < 1 && (
            <Button
              size="md"
              colorScheme="orange"
              fontWeight="normal"
              fontSize="0.9rem"
              onClick={() => {
                nextStep();
                window.scrollTo(0, 0);
              }}
            >
              {activeStep === steps - 1 ? "Finalizar" : "Próxima"}
            </Button>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
