import { Flex, VStack, Heading, Text, Box, Image } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProdutosProps } from "../../../types/Produto";
import { formatCurrency } from "../../../utils/formatCurrency";
import { Button } from "../../Button";

type CardProdutosCachorrosProps = {
  produto: ProdutosProps;
};

export function CardProdutosCachorros({ produto }: CardProdutosCachorrosProps) {
  return (
    <Flex
      bg="white"
      w="100%"
      h="400px"
      flexDir="column"
      justifyContent="space-between"
      p="3"
      borderRadius="10px"
      _hover={{
        boxShadow: "0 0 10px rgba(200, 200, 200, 0.8)",
        border: "2px solid rgba(200, 200, 200, 0.5)",
      }}
    >
      <Flex
        w="100%"
        justifyContent="center"
        mb="3"
        borderBottom="1px solid"
        borderBottomColor="gray.200"
        pb="3"
      >
        <Image
          w="100%"
          maxW="200px"
          src={produto.imageProduto[0].imagem}
          alt={produto.nomeProduto}
        />
      </Flex>
      <VStack
        w="100%"
        display="flex"
        flexDir="column"
        alignItems="center"
        mb="5"
      >
        <Heading
          fontSize="0.9rem"
          textAlign="center"
          fontWeight="normal"
          lineHeight="20px"
          mb="2"
          noOfLines={2}
        >
          {produto.nomeProduto}
        </Heading>
        <Box
          w="100%"
          display="flex"
          flexDir="column"
          justifyContent="center"
          gap="10px"
        >
          <Text w="100%" textAlign="right" fontSize="0.9rem" fontWeight="bold">
            {formatCurrency(produto.preco)}
          </Text>
          <Link to={`/produto/${produto.id}`}>
            <Button fontSize="0.9rem" w="100%" gap="10px" colorScheme="orange">
              <FaShoppingCart fontSize={18} color="white" />
              Comprar
            </Button>
          </Link>
        </Box>
      </VStack>
    </Flex>
  );
}
