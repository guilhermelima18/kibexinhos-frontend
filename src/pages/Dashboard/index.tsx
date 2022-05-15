import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { MainLayout } from "../../components/MainLayoutDashboard";
import { MenuTitle } from "../../components/MenuTitle";

export default function Dashboard() {
  return (
    <MainLayout>
      <MenuTitle title="Dashboard" />
      <Layout>
        <Flex w="100%" gap="30px">
          <Box
            bg="white"
            w="70%"
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
                Olá, Cliente
              </Heading>
              <small>Seja bem vindo ao Dashboard da Kibexinhos Petshop.</small>
            </Box>
          </Box>
          <Box
            bg="white"
            w="30%"
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
              Aplicativos
            </Text>
            <Link to="/dashboard">
              <Box
                w="100%"
                h="100%"
                display="flex"
                alignItems="center"
                _hover={{ textDecoration: "underline" }}
                cursor="pointer"
              >
                <Flex w="100%" alignItems="center" gap="10px">
                  <FaChalkboardTeacher fontSize={26} color="gray" />
                  <Text>CRM</Text>
                </Flex>
                <Text fontSize="0.85rem">
                  Gerenciamento de Clientes, Pedidos...
                </Text>
              </Box>
            </Link>
          </Box>
        </Flex>
      </Layout>
    </MainLayout>
  );
}
