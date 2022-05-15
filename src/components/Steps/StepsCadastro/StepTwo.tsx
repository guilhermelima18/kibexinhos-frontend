import { Flex, Switch, Text } from "@chakra-ui/react";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { FormCadastroProps } from ".";
import { Button } from "../../Button";
import { InputGroup } from "../../Input/InputGroup";
import { Layout } from "../../Layout";

type StepTwoProps = {
  formCadastro: FormCadastroProps;
  setFormCadastro: Dispatch<SetStateAction<FormCadastroProps>>;
};

export const StepTwo = ({ formCadastro, setFormCadastro }: StepTwoProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name !== "newsletter") {
      setFormCadastro({
        ...formCadastro,
        [event.target.name]: event.target.value,
      });
    } else {
      setFormCadastro({
        ...formCadastro,
        [event.target.name]: event.target.checked,
      });
    }
  };

  return (
    <Layout>
      <Flex w="100%" gap="10px" mt="10">
        <InputGroup
          variant="outline"
          inputName="nome"
          inputType="text"
          value={formCadastro.nome}
          onChange={handleChange}
          labelText="Nome"
          placeholder="Nome completo"
          borderWidth="2px"
        />
        <InputGroup
          variant="outline"
          inputName="apelido"
          inputType="text"
          value={formCadastro.apelido}
          onChange={handleChange}
          labelText="Apelido"
          placeholder="Apelido"
          borderWidth="2px"
        />
      </Flex>
      <Flex w="100%" gap="10px">
        <InputGroup
          variant="outline"
          inputName="celular1"
          inputType="text"
          value={formCadastro.celular1}
          onChange={handleChange}
          labelText="Celular"
          placeholder="(xx)xxxxx-xxxx"
          borderWidth="2px"
        />
        <InputGroup
          variant="outline"
          inputName="celular2"
          inputType="text"
          value={formCadastro.celular2}
          onChange={handleChange}
          labelText="Outro Celular"
          placeholder="(xx)xxxxx-xxxx"
          borderWidth="2px"
        />
      </Flex>
      <Flex w="100%" gap="10px">
        <InputGroup
          variant="outline"
          inputName="dataNascimento"
          inputType="date"
          value={formCadastro.dataNascimento}
          onChange={handleChange}
          labelText="Data de Nascimento"
          borderWidth="2px"
        />
        <InputGroup
          variant="outline"
          inputName="cep"
          inputType="text"
          labelText="CEP"
          value={formCadastro.cep}
          onChange={handleChange}
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
          value={formCadastro.email}
          onChange={handleChange}
          placeholder="exemplo@exemplo.com"
          borderWidth="2px"
        />
      </Flex>
      <Flex w="100%" gap="10px">
        <InputGroup
          variant="outline"
          inputName="senha"
          inputType="password"
          value={formCadastro.senha}
          onChange={handleChange}
          labelText="Senha"
          placeholder="Máximo 8 caractéres ou números"
          borderWidth="2px"
        />
      </Flex>
      <Flex mt="8" alignItems="center" gap="20px">
        <Switch id="email-alerts" name="newsletter" onChange={handleChange} />
        <Text fontSize="0.9rem">Deseja receber promoções no E-mail?</Text>
      </Flex>
      <Flex my="3" alignItems="center" gap="20px">
        <Switch id="email-alerts" />
        <Text fontSize="0.9rem">Aceita os termos e condições de uso?</Text>
      </Flex>
      <Flex mt="5" mb="10">
        <Button type="submit" w="250px" colorScheme="green">
          Criar conta
        </Button>
      </Flex>
    </Layout>
  );
};
