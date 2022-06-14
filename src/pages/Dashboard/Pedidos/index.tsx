/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { usePedidos } from "../../../hooks/usePedidos";
import { Layout } from "../../../components/Layout";
import { MainLayout } from "../../../components/MainLayoutDashboard";
import { MenuTitle } from "../../../components/MenuTitle";
import { TablePedidos } from "../../../components/TablePedidos";
import { AuthContext } from "../../../contexts/AuthContext";

export default function Pedidos() {
  const { userData } = useContext(AuthContext);
  const { getPedidosCliente, todosPedidosCliente, loading } = usePedidos();
  const user = userData ? userData.nomeCliente : "";

  useEffect(() => {
    getPedidosCliente();
  }, []);

  return (
    <MainLayout>
      <MenuTitle title="Pedidos" />
      <Layout>
        <Flex bg="white" w="100%" p="5" mt="5" borderRadius="md">
          <Heading fontSize="1.5rem">Seus Pedidos, {user}</Heading>
        </Flex>

        {loading ? (
          <Box padding="6" boxShadow="lg" bg="white" mt="5" mb="10" py="10">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
        ) : todosPedidosCliente.length === 0 ? (
          <Flex bg="white" w="100%" p="5" my="5" borderRadius="md">
            <Text fontSize="1.5rem">Não há pedidos para esse cliente!</Text>
          </Flex>
        ) : (
          <Flex bg="white" w="100%" p="10" my="5" borderRadius="md">
            <TablePedidos pedidos={todosPedidosCliente} />
          </Flex>
        )}
      </Layout>
    </MainLayout>
  );
}
