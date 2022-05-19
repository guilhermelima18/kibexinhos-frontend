import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Layout } from "../../components/Layout";
import { StepsForm } from "../../components/Steps/StepsCadastro";
import logoKibexinhosIcon from "../../assets/logo-kibexinhos.png";

export default function CriarConta() {
  return (
    <Flex w="100%" flexDir="column">
      <HStack
        bg="orange.500"
        w="100%"
        h="35vh"
        display="flex"
        flexDir={["column", "row"]}
        px="5"
      >
        <Image w="200px" src={logoKibexinhosIcon} alt="Logo Kibexinhos" />
        <Text
          color="white"
          fontWeight="bold"
          fontSize={["1.2rem", "1.3rem", "1.5rem"]}
        >
          Crie uma conta em nossa
          <br />
          loja e dê o melhor para seu PET.
        </Text>
      </HStack>
      <Layout>
        <StepsForm />
      </Layout>
    </Flex>
  );
}
