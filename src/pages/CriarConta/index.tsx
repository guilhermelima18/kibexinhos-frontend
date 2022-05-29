import { Link } from "react-router-dom";
import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { Layout } from "../../components/Layout";
import { StepsForm } from "../../components/Steps/StepsCadastro";
import logoKibexinhosIcon from "../../assets/logo-kibexinhos.png";

export default function CriarConta() {
  return (
    <Flex w="100%" flexDir="column">
      <Box
        bg="orange.500"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px="5"
      >
        <HStack w="100%" h="35vh" display="flex" flexDir={["column", "row"]}>
          <Image w="200px" src={logoKibexinhosIcon} alt="Logo Kibexinhos" />
          <Box display="flex" flexDir="column" gap="20px">
            <Text
              color="white"
              fontWeight="bold"
              fontSize={["1.2rem", "1.3rem", "1.5rem"]}
            >
              Crie uma conta em nossa
              <br />
              loja e dê o melhor para seu PET.
            </Text>
            <Link to="/">
              <BsFillArrowLeftSquareFill size={25} color="white" />
            </Link>
          </Box>
        </HStack>
      </Box>
      <Layout>
        <StepsForm />
      </Layout>
    </Flex>
  );
}
