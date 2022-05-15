import { Flex, Image, VStack, Heading, Text } from "@chakra-ui/react";

export function CardProdutosCachorros() {
  return (
    <Flex
      bg="white"
      w="100%"
      flexDir="column"
      justifyContent="space-between"
      border="1px solid"
      borderColor="orange.500"
      p="3"
      borderRadius="md"
    >
      <Flex bg="gray" w="100%" justifyContent="center" mb="5">
        <Image w="100%" src="" alt="" />
      </Flex>
      <VStack w="100%" alignItems="center">
        <Heading fontSize="xl" textAlign="center" lineHeight="32px" mb="5">
          Nome do Produto
        </Heading>
        <Text w="100%" fontSize="lg" textAlign="right" fontWeight="bold">
          Preço
        </Text>
      </VStack>
    </Flex>
  );
}
