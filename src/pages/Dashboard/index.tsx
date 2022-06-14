import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Layout } from "../../components/Layout";
import { MainLayout } from "../../components/MainLayoutDashboard";
import { MenuTitle } from "../../components/MenuTitle";
import { AuthContext } from "../../contexts/AuthContext";

export default function Dashboard() {
  const { userData } = useContext(AuthContext);
  const user = userData ? userData.nomeCliente : "";

  return (
    <MainLayout>
      <MenuTitle title="Dashboard" />
      <Layout>
        <Flex w="100%" gap="30px">
          <Box
            bg="white"
            w="100%"
            display="flex"
            flexDir="column"
            mt="10"
            p="5"
            borderRadius="md"
          >
            <Text
              w="100%"
              pb="3"
              borderBottom="1px solid"
              borderColor="gray.300"
            >
              Kibexinhos Petshop
            </Text>
            <Box
              w="100%"
              h="100%"
              display="flex"
              flexDir="column"
              justifyContent="center"
              mt="5"
            >
              <Heading fontSize="1.5rem" mb="3" color="gray.600">
                Olá, {user}
              </Heading>
              <small>Seja bem vindo ao Dashboard da Kibexinhos Petshop.</small>
            </Box>
          </Box>
        </Flex>
      </Layout>
    </MainLayout>
  );
}
