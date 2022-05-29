/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  SkeletonCircle,
  SkeletonText,
  Text,
  Textarea,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { FaPeopleCarry, FaTruck } from "react-icons/fa";
import { useCarrinho } from "../../hooks/useCarrinho";
import { Button } from "../../components/Button";
import { CarrinhoItem } from "../../components/CarrinhoItem";
import { Layout } from "../../components/Layout";
import { MainLayout } from "../../components/MainLayout";
import { Select } from "../../components/Select";
import { formatCurrency } from "../../utils/formatCurrency";

export default function Carrinho() {
  const [isLessThan940] = useMediaQuery("(max-width: 940px)");
  const [isLessThan500] = useMediaQuery("(max-width: 500px)");
  const { getProdutosCarrinho, itensCarrinho, loading } = useCarrinho();
  const [reloadItens, setReloadItens] = useState(false);

  console.log(reloadItens);

  useEffect(() => {
    getProdutosCarrinho();
  }, [reloadItens]);

  const total = useMemo(() => {
    const totalPedido = itensCarrinho.reduce((prev, item) => {
      prev += item.produto.preco * item.quantidade;

      return prev;
    }, 0);

    return totalPedido;
  }, [itensCarrinho]);

  return (
    <MainLayout>
      <Layout>
        <Flex
          bg="white"
          w="100%"
          flexDir="column"
          mt="5"
          p="5"
          borderRadius="md"
        >
          <Heading fontSize={["1.3rem", "1.7rem", "2rem"]}>
            Carrinho de Compras
          </Heading>

          <Flex
            w="100%"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
            border="1px solid"
            borderColor="gray.200"
            mt="5"
          >
            <Heading
              w="100%"
              borderBottom="1px solid"
              borderColor="gray.200"
              p="3"
              textAlign="left"
              fontSize="0.9rem"
            >
              Selecione o tipo de entrega
            </Heading>
            <Flex w="100%" justifyContent="space-between" p="10">
              <RadioGroup
                w="100%"
                display="flex"
                flexDir={["column", "column", "row"]}
                justifyContent="space-between"
                gap="20px"
              >
                <Flex
                  w={["100%", "100%", "40%"]}
                  flexDir={["column", "row", "row"]}
                  alignItems="center"
                  gap={["10px", "0"]}
                >
                  <Box mr={["0", "10", "10"]}>
                    <FaPeopleCarry fontSize={60} />
                  </Box>
                  <VStack w="100%" alignItems="flex-start">
                    <Radio value="1">
                      <Text fontSize="0.85rem">Retirada em Loja</Text>
                    </Radio>
                    <Select fontSize="0.85rem" value={1} setValue={() => {}}>
                      <option value="1">Jaú / SP</option>
                    </Select>
                  </VStack>
                </Flex>
                <Flex
                  w={["100%", "100%", "40%"]}
                  flexDir={["column", "row", "row"]}
                  alignItems="center"
                  gap={["10px", "0"]}
                >
                  <Box mr={["0", "10", "10"]}>
                    <FaTruck fontSize={60} />
                  </Box>
                  <VStack w="100%" alignItems="flex-start">
                    <Radio value="2">
                      <Text fontSize="0.85rem">Enviar no meu endereço</Text>
                    </Radio>
                    <Select fontSize="0.85rem" value={1} setValue={() => {}}>
                      <option value="1">Transportadora</option>
                    </Select>
                  </VStack>
                </Flex>
              </RadioGroup>
            </Flex>
          </Flex>

          <Flex w="100%" flexDir={isLessThan940 ? "column" : "row"} gap="20px">
            <Flex w={isLessThan940 ? "100%" : "60%"} flexDir="column">
              <Flex
                flexDir="column"
                border="1px solid"
                borderColor="gray.200"
                mt="5"
              >
                {loading ? (
                  <Box padding="6" boxShadow="lg" bg="white" my="10" py="10">
                    <SkeletonCircle size="10" />
                    <SkeletonText mt="4" noOfLines={4} spacing="4" />
                  </Box>
                ) : (
                  itensCarrinho &&
                  itensCarrinho.map((item) => (
                    <CarrinhoItem item={item} setReloadItens={setReloadItens} />
                  ))
                )}
              </Flex>
            </Flex>

            <Flex
              w={isLessThan940 ? "100%" : "40%"}
              flexDir="column"
              mt="5"
              gap="30px"
            >
              <Flex
                w="100%"
                flexDir="column"
                border="1px solid"
                borderColor="gray.200"
                pb="10"
              >
                <Heading
                  w="100%"
                  borderBottom="1px solid"
                  borderColor="gray.200"
                  p="3"
                  fontSize="0.9rem"
                >
                  Forma de Pagamento
                </Heading>
                <Flex
                  w="100%"
                  flexDir={isLessThan500 ? "column" : "row"}
                  gap="30px"
                  mt="5"
                  p="3"
                >
                  <VStack w="100%" alignItems="flex-start">
                    <Text fontSize="0.85rem">Método de Pagamento</Text>
                    <Select fontSize="0.85rem" value={1} setValue={() => {}}>
                      <option value="1">Cartão de Crédito</option>
                      <option value="2">Boleto</option>
                    </Select>
                  </VStack>

                  <VStack w="100%" alignItems="flex-start">
                    <Text fontSize="0.85rem">Parcelas</Text>
                    <Select fontSize="0.85rem" value={1} setValue={() => {}}>
                      <option value="">Selecione uma parcela</option>
                    </Select>
                  </VStack>
                </Flex>
              </Flex>
              <Flex
                w="100%"
                alignItems="center"
                justifyContent="flex-end"
                border="1px solid"
                borderColor="gray.200"
                p="5"
              >
                <Text fontSize="1.5rem">Total: {formatCurrency(total)}</Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex
            w="100%"
            flexDir="column"
            mt="10"
            border="1px solid"
            borderColor="gray.200"
          >
            <Heading
              w="100%"
              borderBottom="1px solid"
              borderColor="gray.200"
              p="3"
              fontSize="0.9rem"
            >
              Observações
            </Heading>
            <Flex alignItems="center" justifyContent="center" p="5">
              <Textarea w="100%" fontSize="0.85rem"></Textarea>
            </Flex>
          </Flex>

          <Flex
            w="100%"
            flexDir={["column", "row", "row"]}
            alignItems="center"
            justifyContent="space-between"
            mt="10"
            gap={["10px", "0"]}
          >
            <Link to="/">
              <Button
                w={["100%", "200px"]}
                colorScheme="blue"
                fontSize="0.9rem"
                fontWeight="normal"
              >
                Continuar comprando
              </Button>
            </Link>
            <Button
              w={["100%", "200px"]}
              colorScheme="green"
              fontSize="0.9rem"
              fontWeight="normal"
            >
              Finalizar Pedido
            </Button>
          </Flex>
        </Flex>
      </Layout>
    </MainLayout>
  );
}
