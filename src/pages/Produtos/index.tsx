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
import { useMarcas } from "../../hooks/useMarcas";
import { TiArrowUnsorted } from "react-icons/ti";
import { AsideSearch } from "../../components/AsideSearch";
import { Layout } from "../../components/Layout";
import { MainLayout } from "../../components/MainLayout";
import { Pagination } from "../../components/Pagination";
import { Select } from "../../components/Select";
import { AsideSearchMobile } from "../../components/AsideSearch/AsideSearchMobile";
import { CardProdutosCachorros } from "../../components/Cards/CardProdutosCachorros";
import { useParams } from "react-router-dom";
import { useProdutos } from "../../hooks/useProdutos";

export default function Produtos() {
  const { id } = useParams();
  const [isLessThan860] = useMediaQuery("(max-width: 860px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getProdutos, produtos, loading } = useProdutos();
  const { getMarcas, marcas } = useMarcas();
  const [page, setPage] = useState(1);
  const [tipoProduto, setTipoProduto] = useState<number[]>([]);
  const [marcasProdutos, setMarcasProdutos] = useState<number[]>([]);
  const [porte, setPorte] = useState<string[]>([]);

  useEffect(() => {
    if (id) {
      const params = {
        tipo: tipoProduto,
        marcas: marcasProdutos,
        porte: porte,
      };

      getProdutos(params, page, Number(id));
    }

    window.scrollTo(0, 0);
  }, [page, tipoProduto, marcasProdutos, porte, id]);

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
              tipoProduto={tipoProduto}
              marcasProdutos={marcasProdutos}
              porte={porte}
              setTipoProduto={setTipoProduto}
              setPorte={setPorte}
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
                  tipoProduto={tipoProduto}
                  marcasProdutos={marcasProdutos}
                  porte={porte}
                  setTipoProduto={setTipoProduto}
                  setPorte={setPorte}
                  setMarcasProdutos={setMarcasProdutos}
                />
              </Flex>
            )}
            {loading ? (
              <Box padding="6" boxShadow="lg" bg="white" my="10" py="10">
                <SkeletonCircle size="10" />
                <SkeletonText mt="4" noOfLines={4} spacing="4" />
              </Box>
            ) : produtos && produtos.length === 0 ? (
              <Box padding="6" boxShadow="lg" bg="white" my="10" py="10">
                <Text>Não há produtos.</Text>
              </Box>
            ) : (
              <SimpleGrid
                columns={[1, 2, 3]}
                spacing={5}
                justifyItems="center"
                my="10"
              >
                {produtos &&
                  produtos.map((produto) => (
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
