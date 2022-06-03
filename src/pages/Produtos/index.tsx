/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
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
    setPage(1);
  }, [id]);

  useEffect(() => {
    getMarcas();
  }, []);

  const verificaIdAnimal = useCallback(() => {
    let tipoAnimal;
    switch (id) {
      case "1": {
        tipoAnimal = "Cachorros";
        break;
      }
      case "2": {
        tipoAnimal = "Gatos";
        break;
      }
      case "3": {
        tipoAnimal = "Peixes";
        break;
      }
      case "4": {
        tipoAnimal = "Roedores";
        break;
      }
      case "5": {
        tipoAnimal = "Aves";
        break;
      }
      default: {
        tipoAnimal = "";
      }
    }

    return tipoAnimal;
  }, [id]);

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
              Departamento de {verificaIdAnimal()}
            </Heading>
            <HStack
              bg="white"
              w="100%"
              alignItems="center"
              justifyContent="space-between"
              border="1px solid"
              borderColor="gray.300"
              p="3"
              mt="3"
              borderRadius="md"
            >
              <Text fontSize="0.9rem">
                Resultados encontrados:{" "}
                <strong>{produtos && produtos.meta.total}</strong> produtos
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
            ) : produtos && produtos.produtos.length === 0 ? (
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
                  produtos.produtos.map((produto) => (
                    <CardProdutosCachorros key={produto.id} produto={produto} />
                  ))}
              </SimpleGrid>
            )}
            <Pagination
              totalCountOfRegisters={produtos! && produtos?.meta.total}
              currentPage={produtos! && produtos?.meta.current_page}
              registerPerPage={produtos! && produtos?.meta.per_page}
              lastPage={produtos! && produtos?.meta.last_page}
              onPageChange={setPage}
            />
          </Flex>
        </Flex>
      </Layout>
    </MainLayout>
  );
}
