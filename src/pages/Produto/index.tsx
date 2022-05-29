/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Flex,
  SimpleGrid,
  Image,
  Heading,
  Text,
  VStack,
  Box,
  useMediaQuery,
  TabPanels,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  Table,
  Tbody,
  Tr,
  Td,
  Input,
  useDisclosure,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import { useProduto } from "../../hooks/useProduto";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import Zoom from "react-medium-image-zoom";
import { Layout } from "../../components/Layout";
import { MainLayout } from "../../components/MainLayout";
import { Button } from "../../components/Button";
import { formatCurrency } from "../../utils/formatCurrency";
import "react-medium-image-zoom/dist/styles.css";
import { ModalParcelas } from "../../components/Modal/ModalParcelas";
import { CardProdutosRelacionados } from "../../components/Cards/CardProdutosRelacionados";
import { useCarrinho } from "../../hooks/useCarrinho";

export default function Produto() {
  const { adicionarProdutosCarrinho } = useCarrinho();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id } = useParams();
  const {
    getProduto,
    getProdutosRelacionados,
    produto,
    produtosRelacionados,
    loading,
  } = useProduto();
  const [isLessThan450] = useMediaQuery("(max-width: 450px)");
  const [isLessThan860] = useMediaQuery("(max-width: 860px)");
  const [image, setImage] = useState("");
  const [precoParcelas, setPrecoParcelas] = useState<number>(0);

  useEffect(() => {
    if (id) {
      getProduto(Number(id));
    }
  }, [id]);

  useEffect(() => {
    if (produto) {
      getProdutosRelacionados(produto.tipoProdutoId, produto.petId);
    }
  }, [produto]);

  useEffect(() => {
    let parcelasValor = 0;

    if (produto) {
      parcelasValor = produto.preco / 12;
      setPrecoParcelas(parcelasValor);
    }
  }, [produto]);

  function handleImageChange(imgSrc: string) {
    if (imgSrc === produto?.imageProduto[0].imagem) {
      setImage(produto.imageProduto[0].imagem);
    } else {
      setImage(imgSrc);
    }
  }

  useEffect(() => {
    if (produto) {
      setImage(produto?.imageProduto[0].imagem);
    }
  }, [produto]);

  const parcelas = useMemo(() => {
    let valorPorParcela: number[] = [];

    if (produto) {
      for (var i = 1; i <= 12; i++) {
        valorPorParcela.push(produto.preco / i);
      }
    }

    return valorPorParcela;
  }, [produto]);

  const stars: number[] = [1, 2, 3, 4, 5];

  async function handleAdicionarCarrinho(produtoId: number) {
    if (produtoId) {
      await adicionarProdutosCarrinho(produtoId);
    }
  }

  if (produto === undefined || produto === null) return null;

  return (
    <>
      <MainLayout>
        <Layout>
          <Flex
            bg="white"
            as="main"
            w="100%"
            flexDir="column"
            my="5"
            p="5"
            borderRadius="md"
          >
            <VStack w="100%" my="10">
              <Heading
                fontWeight="semibold"
                fontSize={["1.2rem", "1.6rem", "1.8rem"]}
                textAlign="center"
              >
                {produto.nomeProduto}
              </Heading>
            </VStack>

            <SimpleGrid
              justifyItems={isLessThan450 ? "center" : ""}
              minChildWidth="280px"
              spacing={5}
              px="5"
              mb="10"
            >
              <Flex
                w={["100%", "100%", "80%"]}
                flexDir={isLessThan860 ? "column-reverse" : "row"}
                justifyContent={isLessThan860 ? "flex-end" : ""}
              >
                <Box w="45px" display="flex" flexDir="column" gap="5px">
                  {produto.imageProduto.map(({ id, imagem }, index) => (
                    <Image
                      key={id}
                      w="100%"
                      src={imagem}
                      alt={produto.nomeProduto[index]}
                      border="1px solid"
                      borderColor="gray.300"
                      onClick={() => handleImageChange(imagem)}
                      p="2"
                      borderRadius="md"
                      cursor="pointer"
                    />
                  ))}
                </Box>
                <Box
                  w="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Zoom>
                    <Image
                      w="100%"
                      maxW="300px"
                      src={image}
                      alt={produto.nomeProduto}
                    />
                  </Zoom>
                </Box>
              </Flex>
              <Flex w="100%" flexDir="column" py="5">
                <Text>
                  Vendido e entregue por <strong>Kibexinhos</strong> |{" "}
                  {produto.estoque > 0 ? (
                    <strong style={{ color: "green" }}>Em estoque</strong>
                  ) : (
                    <strong style={{ color: "red" }}>Indisponível</strong>
                  )}
                </Text>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  my="5"
                >
                  <Heading color="orange.500" fontSize="2rem">
                    {formatCurrency(produto.preco)}
                  </Heading>
                  <Button
                    colorScheme="orange"
                    display="flex"
                    alignItems="center"
                    gap="10px"
                    onClick={() => handleAdicionarCarrinho(produto.id)}
                  >
                    <FaShoppingCart color="white" size={20} />
                    Adicionar ao carrinho
                  </Button>
                </Box>
                <Box w="100%" display="flex" flexDir="column">
                  <Text>
                    Em até 12x de{" "}
                    <strong>{formatCurrency(precoParcelas)}</strong> sem juros
                    no cartão
                  </Text>
                  <Text
                    textDecoration="underline"
                    cursor="pointer"
                    fontSize="0.9rem"
                    onClick={onOpen}
                  >
                    Ver valores das parcelas
                  </Text>
                </Box>
                <Box w="100%" display="flex" flexDir="column" mt="10">
                  <small>Avaliação</small>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginTop: "5px",
                    }}
                  >
                    {stars.map((star, index) => (
                      <Box onClick={() => console.log(star, index)}>
                        <FaStar size={20} color="#F9B628" />
                      </Box>
                    ))}
                  </span>
                </Box>
                <Box w="60%" display="flex" flexDir="column" mt="10">
                  <strong>Consultar frete e prazo de entrega</strong>
                  <Box display="flex" alignItems="center" gap="5px">
                    <Input
                      type="number"
                      variant="flushed"
                      _focus={{
                        borderBottom: "1px solid",
                        borderColor: "orange.500",
                      }}
                    />
                    <Button colorScheme="orange" variant="outline">
                      OK
                    </Button>
                  </Box>
                </Box>
              </Flex>
            </SimpleGrid>

            <Flex w="100%" flexDir="column" my="10">
              <Heading fontSize="1.5rem" my="10">
                Produtos Relacionados
              </Heading>
              {loading ? (
                <Box padding="6" boxShadow="lg" bg="white" my="10" py="10">
                  <SkeletonCircle size="10" />
                  <SkeletonText mt="4" noOfLines={4} spacing="4" />
                </Box>
              ) : (
                <CardProdutosRelacionados produtos={produtosRelacionados} />
              )}
            </Flex>

            <Flex w="100%" flexDir="column" my="10">
              <VStack
                w="100%"
                alignItems="flex-start"
                border="1px solid"
                borderColor="gray.300"
                p="5"
                borderRadius="5px"
              >
                <Heading fontSize="1.5rem" fontWeight="semibold" mb="3">
                  Informações do Produto
                </Heading>
                <div dangerouslySetInnerHTML={{ __html: produto.descricao }} />
              </VStack>

              <Tabs isFitted variant="enclosed" mt="10">
                <TabList>
                  <Tab
                    _selected={{ color: "white", bg: "orange.500" }}
                    _focus={{ border: "none" }}
                  >
                    Informações Nutricionais
                  </Tab>
                  <Tab
                    _selected={{ color: "white", bg: "orange.500" }}
                    _focus={{ border: "none" }}
                  >
                    Informações do Produto
                  </Tab>
                </TabList>
                <TabPanels border="1px solid" borderColor="gray.200">
                  <TabPanel>
                    <Box w="100%" p="5" display="flex" flexDir="column">
                      <Text>{produto.informacaoNutricional}</Text>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Flex w="100%" flexDir="column" overflowX="auto">
                      <Table width="100%" variant="striped">
                        <Tbody>
                          <Tr>
                            <Td>Código</Td>
                            <Td>{produto.id}</Td>
                          </Tr>
                          <Tr>
                            <Td>Código Fabricante</Td>
                            <Td>{produto.petId}</Td>
                          </Tr>
                          <Tr>
                            <Td>Categoria</Td>
                            <Td>
                              {produto.tipoProdutoId === 1
                                ? "Ração para Cachorros"
                                : produto.tipoProdutoId === 2
                                ? "Brinquedos"
                                : produto.tipoProdutoId === 3
                                ? "Casinhas"
                                : produto.tipoProdutoId === 4
                                ? "Remédios"
                                : "Acessórios"}
                            </Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </Flex>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Flex>
          </Flex>
        </Layout>
      </MainLayout>
      {isOpen && (
        <ModalParcelas isOpen={isOpen} onClose={onClose} parcelas={parcelas} />
      )}
    </>
  );
}
