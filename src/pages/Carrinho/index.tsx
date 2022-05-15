import { Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { Layout } from "../../components/Layout";

export default function Carrinho() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Layout>
      <Flex
        bg="white"
        w="100%"
        flexDir="column"
        my="10"
        p="5"
        borderRadius="md"
        boxShadow="0 0 10px rgba(0, 0, 0, 0.7)"
        border="1px solid rgba(200, 200, 200, 0.6)"
      >
        <Heading mb="10">Pedidos</Heading>
      </Flex>
    </Layout>
  );
}
