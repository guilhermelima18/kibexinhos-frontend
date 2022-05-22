/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  SkeletonCircle,
  SkeletonText,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { useMarcas } from "../../../hooks/useMarcas";
import { useProdutosCachorros } from "../../../hooks/useProdutosCachorros";
import { TiArrowUnsorted } from "react-icons/ti";
import { AsideSearch } from "../../../components/AsideSearch";
import { Layout } from "../../../components/Layout";
import { MainLayout } from "../../../components/MainLayout";
import { Pagination } from "../../../components/Pagination";
import { Select } from "../../../components/Select";
import { AsideSearchMobile } from "../../../components/AsideSearch/AsideSearchMobile";
import { CardProdutosCachorros } from "../../../components/Cards/CardProdutosCachorros";

export default function Cachorros() {
  const [isLessThan860] = useMediaQuery("(max-width: 860px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getProdutosCachorros, produtosCachorros, loading } =
    useProdutosCachorros();
  const { getMarcas, marcas } = useMarcas();
  const [page, setPage] = useState(1);
  const [marcasProdutos, setMarcasProdutos] = useState<number[]>([]);

  useEffect(() => {
    const params = {
      marcas: marcasProdutos,
    };
    getProdutosCachorros(params, page);

    window.scrollTo(0, 0);
  }, [page, marcasProdutos]);

  useEffect(() => {
    getMarcas();
  }, []);

  return (
    <MainLayout>
      <Layout>
        <Flex w="100%" py="5">
          {!isLessThan860 && (
            <AsideSearch
              marcas={marcas}
              marcasProdutos={marcasProdutos}
              setMarcasProdutos={setMarcasProdutos}
              size="25%"
            />
          )}
          <Flex w="100%" flexDir="column" px="8">
            <Heading fontWeight="semibold" fontSize="1.5rem">
              Departamento de Cachorros
            </Heading>
            <HStack w="100%" alignItems="center" justifyContent="space-between">
              <Text fontSize="0.9rem">
                Resultados encontrados: <strong>100</strong> produtos
              </Text>
              {!isLessThan860 && (
                <Flex alignItems="center" gap="5px">
                  <TiArrowUnsorted fontSize={24} />
                  <Select maxW="120px" value={1} setValue={() => {}}>
                    <option value="0">Padrão</option>
                    <option value="1">Descrição</option>
                  </Select>
                </Flex>
              )}
            </HStack>
            {isLessThan860 && (
              <Flex w="100%" justifyContent="space-between" my="5">
                <Flex alignItems="center" gap="5px">
                  <TiArrowUnsorted fontSize={24} />
                  <Select maxW="120px" value={1} setValue={() => {}}>
                    <option value="0">Padrão</option>
                    <option value="1">Descrição</option>
                  </Select>
                </Flex>
                <AsideSearchMobile
                  isOpen={isOpen}
                  onOpen={onOpen}
                  onClose={onClose}
                  marcas={marcas}
                  marcasProdutos={marcasProdutos}
                  setMarcasProdutos={setMarcasProdutos}
                />
              </Flex>
            )}
            {loading ? (
              <Box padding="6" boxShadow="lg" bg="white" my="10" py="10">
                <SkeletonCircle size="10" />
                <SkeletonText mt="4" noOfLines={4} spacing="4" />
              </Box>
            ) : (
              <SimpleGrid
                minChildWidth="250px"
                spacing={5}
                justifyItems="center"
                my="10"
              >
                {produtosCachorros &&
                  produtosCachorros.map((produto) => (
                    <CardProdutosCachorros produto={produto} />
                  ))}
              </SimpleGrid>
            )}
            <Pagination
              totalCountOfRegisters={100}
              currentPage={1}
              lastPage={10}
              onPageChange={setPage}
            />
          </Flex>
        </Flex>
      </Layout>
    </MainLayout>
  );
}
