import { FormEvent, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { Button } from "../../Button";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { Form } from "../../Form";
import { useCadastroCliente } from "../../../hooks/useCadastroCliente";
import { ClienteProps } from "../../../types/Cliente";

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
  const { nextStep, prevStep, activeStep } = useSteps({
    initialStep: 0,
  });
  const [cpfOrCnpj, setCpfOrCnpj] = useState("");
  const defaultValues = {
    inscricaoEstadual: "",
    nomeFantasia: "",
    razaoSocial: "",
    rg: "",
    email: "",
    senha: "",
    nome: "",
    apelido: "",
    celular1: "",
    celular2: "",
    dataNascimento: "",
    cep: "",
    newsletter: false,
  };
  const [formCadastro, setFormCadastro] =
    useState<FormCadastroProps>(defaultValues);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    let params = {
      nomeCliente: formCadastro.nome,
      dataNascimento: formCadastro.dataNascimento,
      apelido: formCadastro.apelido,
      cpfcnpj: cpfOrCnpj,
      email: formCadastro.email,
      senha: formCadastro.senha,
      cep: formCadastro.cep,
      celular1: formCadastro.celular1,
      celular2: formCadastro.celular2,
      ativo: true,
      newsletter: formCadastro.newsletter,
    } as ClienteProps;

    if (formCadastro.rg !== "") {
      params.rgie = `${formCadastro.rg}`;
    }

    if (formCadastro.inscricaoEstadual !== "") {
      params.rgie = `${formCadastro.inscricaoEstadual}`;
    }

    if (formCadastro.razaoSocial !== "") {
      params.razaoSocial = `${formCadastro.inscricaoEstadual}`;
    }

    if (formCadastro.nomeFantasia !== "") {
      params.nomeFantasia = `${formCadastro.nomeFantasia}`;
    }

    cadastrarCliente(params);
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
      <Form onSubmit={handleSubmit}>
        <Steps activeStep={activeStep} responsive colorScheme="orange">
          <Step label="CPF ou CNPJ" key={0}>
            <StepOne
              cpfOrCnpj={cpfOrCnpj}
              setCpfOrCnpj={setCpfOrCnpj}
              formCadastro={formCadastro}
              setFormCadastro={setFormCadastro}
            />
          </Step>
          <Step label="Dados do Cliente" key={1}>
            <StepTwo
              formCadastro={formCadastro}
              setFormCadastro={setFormCadastro}
            />
          </Step>
        </Steps>
      </Form>
      <Flex width="100%" flexDir="column" justifyContent="center">
        {activeStep < 1 && (
          <Flex w="100%" justifyContent="flex-end">
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
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
