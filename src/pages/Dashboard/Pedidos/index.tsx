import { Flex, useMediaQuery } from "@chakra-ui/react";
import { CardResumoClientes } from "../../../components/Cards/CardResumoClientes";
import { Layout } from "../../../components/Layout";
import { MainLayout } from "../../../components/MainLayoutDashboard";
import { MenuTitle } from "../../../components/MenuTitle";
import { TablePedidos } from "../../../components/TablePedidos";

export default function Pedidos() {
  const [isLessThan500] = useMediaQuery("(max-width: 500px)");

  return (
    <MainLayout>
      <MenuTitle title="Pedidos" />
      <Layout>
        <Flex w="100%" my="5" px={isLessThan500 ? "3" : "0"}>
          <CardResumoClientes />
        </Flex>

        <Flex bg="white" w="100%" p="10" my="10" borderRadius="md">
          <TablePedidos />
        </Flex>
      </Layout>
    </MainLayout>
  );
}
