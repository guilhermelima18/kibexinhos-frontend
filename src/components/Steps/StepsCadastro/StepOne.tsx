import { Dispatch, SetStateAction } from "react";
import { Flex } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { InputGroup } from "../../Input/InputGroup";
import { cnpjMask, cpfMask } from "../../../utils/mask";

type StepOneProps = {
  cpfOrCnpj: string;
  setCpfOrCnpj: Dispatch<SetStateAction<string>>;
};

export const StepOne = ({ cpfOrCnpj, setCpfOrCnpj }: StepOneProps) => {
  const { register } = useFormContext();

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
            mask="999999999"
            inputName="rg"
            inputType="text"
            labelText="RG"
            placeholder="00.000.000-0"
            {...register("rg")}
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
              mask="999999999999"
              inputName="inscricaoEstadual"
              inputType="text"
              labelText="Inscrição Estadual"
              {...register("inscricaoEstadual")}
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
              {...register("nomeFantasia")}
              placeholder="Nome fantasia da empresa"
              borderWidth="2px"
            />
            <InputGroup
              variant="outline"
              inputName="razaoSocial"
              inputType="text"
              labelText="Razão Social"
              {...register("razaoSocial")}
              placeholder="Razão social da empresa"
              borderWidth="2px"
            />
          </Flex>
        </>
      )}
    </Flex>
  );
};
