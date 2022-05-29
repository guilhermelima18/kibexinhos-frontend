import { Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { OwlCarouselReact } from "../../Carousel/OwlCarousel";
import { formatCurrency } from "../../../utils/formatCurrency";
import { ProdutosProps } from "../../../types/Produto";

type CardOfertasProps = {
  produtos: ProdutosProps[];
};

export const CardProdutosRelacionados = ({ produtos }: CardOfertasProps) => {
  return (
    <OwlCarouselReact>
      {produtos &&
        produtos.map((produto) => (
          <div
            key={produto.id}
            className="item"
            style={{ borderRadius: "10px" }}
          >
            <Link to={`/produto/${produto.id}`}>
              <Flex
                bg="white"
                maxW="200px"
                h="220px"
                flexDir="column"
                alignItems="center"
                justifyContent="space-between"
                p="1"
                gap="10px"
                cursor="pointer"
                border="1px solid rgba(200, 200, 200, 0.4)"
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
                  <Image
                    w="100%"
                    maxW="120px"
                    src={produto.imageProduto[0].imagem}
                    alt={produto.nomeProduto}
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
                <Text
                  w="100%"
                  textAlign="center"
                  fontSize="1.5rem"
                  fontWeight="bold"
                  color="orange.500"
                >
                  {formatCurrency(produto.preco)}
                </Text>
              </Flex>
            </Link>
          </div>
        ))}
    </OwlCarouselReact>
  );
};
