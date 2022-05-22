import { Box, Flex, VStack, Text } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { ProdutosProps } from "../../../types/Produto";
import { Button } from "../../Button";
import { OwlCarouselReact } from "../../Carousel/OwlCarousel";

type CardOfertasProps = {
  produtos: ProdutosProps[];
};

export const CardOfertas = ({ produtos }: CardOfertasProps) => {
  if (produtos === undefined || produtos === null) return null;

  return (
    <OwlCarouselReact>
      {produtos &&
        produtos.map((produto) => (
          <div
            key={produto.id}
            className="item"
            style={{ borderRadius: "10px" }}
          >
            <Flex
              bg="white"
              maxW="300px"
              h="400px"
              flexDir="column"
              justifyContent="space-between"
              p="1"
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
                position="relative"
                pb="3"
              >
                <img
                  src={produto.imageProduto[0].imagem}
                  alt={produto.nomeProduto}
                  style={{ width: "100%", maxWidth: "100px" }}
                />
                <Text
                  bg="orange.500"
                  color="white"
                  p="1"
                  position="absolute"
                  top="5px"
                  right="5px"
                  fontSize="0.8rem"
                >
                  {produto.desconto ? produto.desconto : 10}%
                </Text>
              </Flex>
              <VStack
                w="100%"
                display="flex"
                flexDir="column"
                alignItems="center"
                mb="5"
              >
                <Box
                  fontSize="0.9rem"
                  textAlign="center"
                  fontWeight="normal"
                  lineHeight="20px"
                  mb="2"
                  noOfLines={2}
                >
                  {produto.nomeProduto}
                </Box>
                <Box
                  w="100%"
                  maxW="220px"
                  display="flex"
                  flexDir="column"
                  alignItems="center"
                  justifyContent="center"
                  gap="10px"
                >
                  <Text
                    w="100%"
                    textAlign="right"
                    fontSize="0.9rem"
                    fontWeight="bold"
                  >
                    {produto.preco}
                  </Text>
                  <Button
                    fontSize="0.9rem"
                    w="100%"
                    gap="10px"
                    colorScheme="orange"
                  >
                    <FaShoppingCart fontSize={18} color="white" />
                    Comprar
                  </Button>
                </Box>
              </VStack>
            </Flex>
          </div>
        ))}
    </OwlCarouselReact>
  );
};
