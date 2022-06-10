import { Flex, Switch, Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { Button } from "../../Button";
import { InputGroup } from "../../Input/InputGroup";
import { Layout } from "../../Layout";

export const StepTwo = () => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext();

  return (
    <Layout>
      <Flex w="100%" flexDir={["column", "column", "row"]} gap="10px" mt="10">
        <InputGroup
          variant="outline"
          inputName="nome"
          inputType="text"
          {...register("nome")}
          labelText="Nome"
          placeholder="Nome completo"
          borderWidth="2px"
        />
        <InputGroup
          variant="outline"
          inputName="apelido"
          inputType="text"
          {...register("apelido")}
          labelText="Apelido"
          placeholder="Apelido"
          borderWidth="2px"
        />
      </Flex>
      <Flex w="100%" flexDir={["column", "column", "row"]} gap="10px">
        <InputGroup
          variant="outline"
          inputName="celular1"
          inputType="text"
          mask="(99) 99999-9999"
          {...register("celular1")}
          labelText="Celular 1"
          placeholder="(xx) xxxxx-xxxx"
          borderWidth="2px"
        />
        <InputGroup
          variant="outline"
          inputName="celular2"
          mask="(99) 99999-9999"
          inputType="text"
          {...register("celular2")}
          labelText="Celular 2"
          placeholder="(xx) xxxxx-xxxx"
          borderWidth="2px"
        />
      </Flex>
      <Flex w="100%" flexDir={["column", "column", "row"]} gap="10px">
        <InputGroup
          variant="outline"
          inputName="dataNascimento"
          inputType="date"
          {...register("dataNascimento")}
          labelText="Data de Nascimento"
          borderWidth="2px"
        />
        <InputGroup
          variant="outline"
          inputName="cep"
          inputType="text"
          mask="99.999-999"
          labelText="CEP"
          {...register("cep")}
          placeholder="xxxxx-xxx"
          borderWidth="2px"
        />
      </Flex>
      <Flex flexDir="column">
        <InputGroup
          variant="outline"
          inputName="email"
          inputType="email"
          labelText="E-mail"
          {...register("email")}
          placeholder="exemplo@exemplo.com"
          borderWidth="2px"
        />
        <p style={{ fontSize: "0.75rem", color: "red" }}>
          {errors.email?.message}
        </p>
      </Flex>
      <Flex w="100%" flexDir="column">
        <InputGroup
          variant="outline"
          inputName="senha"
          inputType="password"
          maxLength={8}
          {...register("senha")}
          labelText="Senha"
          placeholder="Máximo 8 caractéres ou números"
          borderWidth="2px"
        />
        <p style={{ fontSize: "0.75rem", color: "red" }}>
          {errors.senha?.message}
        </p>
      </Flex>
      <Flex mt="8" alignItems="center" gap="20px">
        <Switch id="email-alerts" {...register("newsletter")} />
        <Text fontSize="0.9rem">Deseja receber promoções no E-mail?</Text>
      </Flex>
      <Flex my="3" alignItems="center" gap="20px">
        <Switch id="email-alerts" />
        <Text fontSize="0.9rem">Aceita os termos e condições de uso?</Text>
      </Flex>
      <Flex
        w="100%"
        alignItems="center"
        justifyContent={["center", "center", "flex-end"]}
        mt="10"
        mb="5"
      >
        <Button
          type="submit"
          w="250px"
          colorScheme="green"
          isLoading={isSubmitting}
        >
          Criar conta
        </Button>
      </Flex>
    </Layout>
  );
};
