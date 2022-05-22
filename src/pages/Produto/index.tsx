/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
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
} from "@chakra-ui/react";
import { useProduto } from "../../hooks/useProduto";
import { Layout } from "../../components/Layout";
import { MainLayout } from "../../components/MainLayout";

export default function Produto() {
  const { id } = useParams();
  const { getProduto, produto } = useProduto();
  const [isLessThan450] = useMediaQuery("(max-width: 450px)");
  const [isLessThan860] = useMediaQuery("(max-width: 860px)");

  useEffect(() => {
    if (id) {
      getProduto(Number(id));
    }
  }, [id]);

  if (produto === undefined || produto === null) return null;

  return (
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
          >
            <Flex
              w={["100%", "100%", "80%"]}
              flexDir={isLessThan860 ? "column-reverse" : "row"}
              justifyContent={isLessThan860 ? "flex-end" : ""}
            >
              <Box
                w="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  w="100%"
                  maxW="200px"
                  src={produto.imageProduto[0].imagem}
                  alt={produto.nomeProduto}
                />
              </Box>
            </Flex>
            <Flex w="100%" flexDir="column" py="5"></Flex>
          </SimpleGrid>

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

            <Tabs size="md" variant="enclosed" mt="10">
              <TabList>
                <Tab
                  _selected={{ color: "white", bg: "orange.500" }}
                  _focus={{ border: "none" }}
                >
                  Informações do Produto
                </Tab>
                <Tab
                  _selected={{ color: "white", bg: "orange.500" }}
                  _focus={{ border: "none" }}
                >
                  Informações Nutricionais
                </Tab>
              </TabList>
              <TabPanels border="1px solid" borderColor="gray.200">
                <TabPanel>
                  <Flex w="100%" flexDir="column" overflowX="auto">
                    <Table width="500px" variant="striped">
                      <Tbody>
                        <Tr>
                          <Td>Código</Td>
                          <Td>128738878</Td>
                        </Tr>
                        <Tr>
                          <Td>Código Fabricante</Td>
                          <Td>156767</Td>
                        </Tr>
                        <Tr>
                          <Td>Categoria</Td>
                          <Td>Ração para Cachorros</Td>
                        </Tr>
                        <Tr>
                          <Td>Marca</Td>
                          <Td>Pedigree</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Box w="100%" p="5" display="flex" flexDir="column">
                    <Text>{produto.informacaoNutricional}</Text>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </Flex>
      </Layout>
    </MainLayout>
  );
}
