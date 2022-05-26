import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Flex } from "@chakra-ui/react";
import { cnpjMask, cpfMask } from "../../../utils/mask";
import { InputGroup } from "../../Input/InputGroup";
import { FormCadastroProps } from ".";

type StepOneProps = {
  cpfOrCnpj: string;
  setCpfOrCnpj: Dispatch<SetStateAction<string>>;
  formCadastro: FormCadastroProps;
  setFormCadastro: Dispatch<SetStateAction<FormCadastroProps>>;
};

export const StepOne = ({
  cpfOrCnpj,
  setCpfOrCnpj,
  formCadastro,
  setFormCadastro,
}: StepOneProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormCadastro({
      ...formCadastro,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Flex w="100%" flexDir="column" alignItems="center" my="10">
      {cpfOrCnpj.length <= 14 ? (
        <Flex
          w="100%"
          flexDir={["column", "column", "row"]}
          alignItems="center"
          gap="10px"
        >
          <InputGroup
            variant="outline"
            inputName="cpf"
            inputType="text"
            labelText="CPF"
            autoFocus
            placeholder="000.000.000-00"
            value={cpfOrCnpj}
            onChange={(e) => setCpfOrCnpj(cpfMask(e.target.value))}
            borderWidth="2px"
          />
          <InputGroup
            variant="outline"
            inputName="rg"
            inputType="text"
            labelText="RG"
            maxLength={9}
            placeholder="00.000.000-0"
            value={formCadastro.rg}
            onChange={handleChange}
            borderWidth="2px"
          />
        </Flex>
      ) : (
        <>
          <Flex
            w="100%"
            flexDir={["column", "column", "row"]}
            alignItems="center"
            gap="10px"
          >
            <InputGroup
              variant="outline"
              inputName="cnpj"
              inputType="text"
              labelText="CNPJ"
              autoFocus
              placeholder="00.000.000/0000-00"
              value={cpfOrCnpj}
              onChange={(e) => setCpfOrCnpj(cnpjMask(e.target.value))}
              borderWidth="2px"
            />
            <InputGroup
              variant="outline"
              inputName="inscricaoEstadual"
              inputType="text"
              labelText="Inscrição Estadual"
              value={formCadastro.inscricaoEstadual}
              onChange={handleChange}
              placeholder="000.000.000.000"
              borderWidth="2px"
            />
          </Flex>

          <Flex
            w="100%"
            flexDir={["column", "column", "row"]}
            alignItems="center"
            gap="10px"
          >
            <InputGroup
              variant="outline"
              inputName="nomeFantasia"
              inputType="text"
              labelText="Nome Fantasia"
              value={formCadastro.nomeFantasia}
              onChange={handleChange}
              placeholder="Nome fantasia da empresa"
              borderWidth="2px"
            />
            <InputGroup
              variant="outline"
              inputName="razaoSocial"
              inputType="text"
              labelText="Razão Social"
              value={formCadastro.razaoSocial}
              onChange={handleChange}
              placeholder="Razão social da empresa"
              borderWidth="2px"
            />
          </Flex>
        </>
      )}
    </Flex>
  );
};
