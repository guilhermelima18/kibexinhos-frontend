import {
  Box,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  Text,
  Textarea,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { FaPeopleCarry, FaTruck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { CarrinhoItem } from "../../components/CarrinhoItem";
import { Layout } from "../../components/Layout";
import { MainLayout } from "../../components/MainLayout";
import { Select } from "../../components/Select";

export default function Carrinho() {
  const [isLessThan940] = useMediaQuery("(max-width: 940px)");
  const [isLessThan500] = useMediaQuery("(max-width: 500px)");

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
                <CarrinhoItem />
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
                <Text fontSize="1.5rem">Total: R$ 2.000,00</Text>
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
