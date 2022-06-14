/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Flex,
  Heading,
  Image,
  Input,
  Radio,
  RadioGroup,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text,
  Textarea,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { FaPeopleCarry, FaTruck } from "react-icons/fa";
import { toast } from "react-toastify";
import { CarrinhoContext, CarrinhoProps } from "../../contexts/CarrinhoContext";
import { Button } from "../../components/Button";
import { CarrinhoItem } from "../../components/CarrinhoItem";
import { Layout } from "../../components/Layout";
import { MainLayout } from "../../components/MainLayout";
import { Select } from "../../components/Select";
import { formatCurrency } from "../../utils/formatCurrency";
import { CotacaoFreteProps } from "../../types/Frete";
import dogsCarrinhoImg from "../../assets/dogs-carrinho.png";

type EnderecoClienteProps = {
  bairro: string;
  cep: string;
  complemento: string;
  logradouro: string;
  uf: string;
};

export default function Carrinho() {
  const [isLessThan940] = useMediaQuery("(max-width: 940px)");
  const [isLessThan500] = useMediaQuery("(max-width: 500px)");
  const {
    getProdutosCarrinho,
    finalizarPedidoCarrinho,
    itensCarrinho,
    loading,
  } = useContext(CarrinhoContext);
  const [reloadItens, setReloadItens] = useState(false);
  const [tipoEntrega, setTipoEntrega] = useState("1");
  const [cepCotacao, setCepCotacao] = useState<string>("");
  const [freteEscolhido, setFreteEscolhido] = useState<string>("");
  const [cotacao, setCotacao] = useState<CotacaoFreteProps[]>([]);
  const [formaPagamento, setFormaPagamento] = useState<number>(1);
  const [parcelaEscolhida, setParcelaEscolhida] = useState<number>(0);
  const [enderecoCliente, setEnderecoCliente] =
    useState<EnderecoClienteProps>();
  const [isLoading, setIsLoading] = useState(false);

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

  const cotacaoFrete = useCallback(
    async (produtos: CarrinhoProps[], cep: string) => {
      const data = produtos.map((item) => ({
        id: item.produtoId,
        width: item.produto.largura,
        height: item.produto.altura,
        weight: item.produto.peso,
        insurance_value: item.produto.preco,
        quantity: item.quantidade,
      }));

      const params = {
        from: {
          postal_code: "17201320",
        },
        to: {
          postal_code: cep,
        },
        products: [...data],
      };

      try {
        setIsLoading(true);
        const calcularFrete = axios.post(
          "https://www.melhorenvio.com.br/api/v2/me/shipment/calculate",
          {
            ...params,
          },
          {
            headers: {
              Accept: "application/json",
              "User-Agent": "kibexinhos kibexinhos-etec-tcc@hotmail.com",
              Authorization: `Bearer ${process.env.REACT_APP_MELHOR_ENVIO_TOKEN}`,
            },
          }
        );

        const buscarEndereco = axios.get(
          `https://viacep.com.br/ws/${cep}/json/`
        );

        const [data1, data2] = await Promise.all([
          calcularFrete,
          buscarEndereco,
        ]);

        if (data1.status === 200 || data2.status === 200) {
          setCotacao(data1.data);
          setEnderecoCliente(data2.data);
          setCepCotacao("");
        }
      } catch (error) {
        toast.warning("Não foi possível realizar a cotação do frete.");
      } finally {
        setIsLoading(false);
      }
    },
    [itensCarrinho]
  );

  const parcelas = useMemo(() => {
    let totalParcelas: number[] = [];

    if (total) {
      for (var i = 1; i <= 12; i++) {
        if (freteEscolhido && Number(freteEscolhido) > 0) {
          const itemTotal = (total + Number(freteEscolhido)) / i;
          totalParcelas.push(itemTotal);
        } else {
          const itemTotal = total / i;
          totalParcelas.push(itemTotal);
        }
      }
    }

    return totalParcelas;
  }, [total, freteEscolhido]);

  const finalizarPedido = async (
    freteEscolhido: number,
    formaPagamento: number,
    enderecoCliente: EnderecoClienteProps | undefined
  ) => {
    let finalizarParams = {
      frete: freteEscolhido || 0,
      tipoPagamentoId: formaPagamento,
      cupomId: 2,
      desconto: 0,
      cep: enderecoCliente?.cep || "",
      estado: enderecoCliente?.uf || "",
      bairro: enderecoCliente?.bairro || "",
      endereco: enderecoCliente?.logradouro || "",
    };

    if (finalizarParams) {
      await finalizarPedidoCarrinho(finalizarParams);
    }
  };

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
                value={tipoEntrega}
                onChange={setTipoEntrega}
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
                    <Select
                      fontSize="0.85rem"
                      value={1}
                      setValue={() => {}}
                      isDisabled={tipoEntrega !== "1"}
                    >
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
                    <Select
                      fontSize="0.85rem"
                      value={1}
                      setValue={() => {}}
                      isDisabled={tipoEntrega !== "2"}
                    >
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
                ) : itensCarrinho.length === 0 ? (
                  <Box
                    w="100%"
                    display="flex"
                    flexDir="column"
                    alignItems="center"
                    justifyContent="center"
                    py="10"
                  >
                    <Image
                      w="150px"
                      src={dogsCarrinhoImg}
                      alt="Cachorro com a pata no fucinho."
                    />
                    <Text fontSize="1.2rem" mt="5">
                      Não há itens no carrinho
                    </Text>
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
                    <Select
                      fontSize="0.85rem"
                      value={formaPagamento}
                      setValue={setFormaPagamento}
                    >
                      <option value={1}>Cartão de Crédito</option>
                      <option value={2}>Boleto</option>
                    </Select>
                  </VStack>

                  {formaPagamento === 1 && parcelas.length > 0 && (
                    <VStack w="100%" alignItems="flex-start">
                      <Text fontSize="0.85rem">Parcelas</Text>
                      <Select
                        fontSize="0.85rem"
                        value={parcelaEscolhida}
                        setValue={setParcelaEscolhida}
                      >
                        {parcelas &&
                          parcelas.map((parc, i) => (
                            <option value={parc}>{`${
                              i + 1
                            }x de ${formatCurrency(parc)}`}</option>
                          ))}
                      </Select>
                    </VStack>
                  )}
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

          {tipoEntrega === "2" && (
            <Flex w="100%" flexDir="column" mt="10">
              <Text display="flex" alignItems="center" gap="5px">
                <FaTruck fontSize={20} />
                Frete
              </Text>
              <Box
                w="100%"
                maxW="350px"
                display="flex"
                alignItems="center"
                gap="5px"
                mt="3"
                mb="8"
              >
                <Input
                  type="text"
                  _focus={{
                    borderBottom: "1px solid",
                    borderColor: "orange.500",
                  }}
                  value={cepCotacao}
                  onChange={(e) => setCepCotacao(e.target.value)}
                />
                <Button
                  colorScheme="orange"
                  variant="outline"
                  onClick={() => cotacaoFrete(itensCarrinho, cepCotacao)}
                >
                  OK
                </Button>
              </Box>
              {isLoading ? (
                <Box padding="6" boxShadow="lg" bg="white" my="10" py="10">
                  <SkeletonCircle size="10" />
                  <SkeletonText mt="4" noOfLines={4} spacing="4" />
                </Box>
              ) : (
                <Box w="100%" maxW="350px" display="flex" alignItems="center">
                  <RadioGroup
                    value={Number(freteEscolhido)}
                    onChange={setFreteEscolhido}
                  >
                    <Stack direction="column">
                      {cotacao &&
                        cotacao.map(
                          ({
                            id,
                            name,
                            company,
                            delivery_time,
                            discount,
                            price,
                            error,
                          }) => {
                            const totalFrete = Number(price) - Number(discount);

                            return (
                              <Radio key={id} value={totalFrete}>
                                {company.name} <strong>{name}</strong> -{" "}
                                {error
                                  ? error
                                  : `até ${delivery_time} dias úteis | ${formatCurrency(
                                      totalFrete
                                    )}`}
                              </Radio>
                            );
                          }
                        )}
                    </Stack>
                  </RadioGroup>
                </Box>
              )}
            </Flex>
          )}

          <Box
            w="100%"
            maxW="350px"
            display="flex"
            flexDir="column"
            gap="5px"
            mt="8"
          >
            <Text display="flex" alignItems="center" gap="5px">
              Cupom
            </Text>
            <Box w="100%" display="flex" alignItems="center" gap="5px">
              <Input
                type="text"
                _focus={{
                  borderBottom: "1px solid",
                  borderColor: "orange.500",
                }}
                placeholder="Cupom de desconto"
                /* value={cepCotacao}
                      onChange={(e) => setCepCotacao(e.target.value)} */
              />
              <Button
                w="200px"
                colorScheme="orange"
                /* onClick={() => cotacaoFrete(produto, cepCotacao)} */
              >
                Aplicar Cupom
              </Button>
            </Box>
          </Box>

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
              onClick={() =>
                finalizarPedido(
                  Number(freteEscolhido),
                  formaPagamento,
                  enderecoCliente
                )
              }
              isLoading={loading}
              isDisabled={itensCarrinho.length === 0}
            >
              Finalizar Pedido
            </Button>
          </Flex>
        </Flex>
      </Layout>
    </MainLayout>
  );
}
