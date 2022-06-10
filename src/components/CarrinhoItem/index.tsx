/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useContext, useState } from "react";
import {
  Flex,
  HStack,
  Image,
  VStack,
  Text,
  Input,
  useMediaQuery,
} from "@chakra-ui/react";
import { CarrinhoContext } from "../../contexts/CarrinhoContext";
import { MdDelete } from "react-icons/md";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Button } from "../Button";
import { ProdutosProps } from "../../types/Produto";
import { formatCurrency } from "../../utils/formatCurrency";

type ItemsProps = {
  id: number;
  clienteId: number;
  produtoId: number;
  quantidade: number;
  produto: ProdutosProps;
};

type CarrinhoItemsProps = {
  item: ItemsProps;
  setReloadItens: (value: boolean) => void;
};

export const CarrinhoItem = ({ item, setReloadItens }: CarrinhoItemsProps) => {
  const [isLessThan900] = useMediaQuery("(max-width: 900px)");
  const [isLessThan520] = useMediaQuery("(max-width: 520px)");
  const { atualizaProdutosCarrinho, removerProdutosCarrinho } =
    useContext(CarrinhoContext);
  const [quantidade, setQuantidade] = useState<number>(item.quantidade);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setQuantidade(Number(e.target.value));
  }

  async function handleInputBlur(
    e: ChangeEvent<HTMLInputElement>,
    produto: ItemsProps
  ) {
    const qtde = Number(e.target.value);

    if (quantidade < 1) {
      toast.info("Quantidade mínima permitida.");
      setQuantidade(produto.quantidade);
      return;
    }

    if (quantidade > 100) {
      toast.info("Quantidade máxima permitida.");
      setQuantidade(produto.quantidade);
      return;
    }

    const params = {
      id: produto.id,
      clienteId: produto.clienteId,
      produtoId: produto.produtoId,
      quantidade: qtde,
    };

    if (params) {
      setReloadItens(true);
      await atualizaProdutosCarrinho(params);
    }

    setReloadItens(false);
  }

  async function changeQuantidade(produto: ItemsProps, acao: string) {
    if (acao === "decrementar" && quantidade <= 1) {
      toast.info("Quantidade mínima permitida.");
      return;
    }

    const params = {
      id: produto.id,
      clienteId: produto.clienteId,
      produtoId: produto.produtoId,
      quantidade:
        acao === "incrementar"
          ? produto.quantidade + 1
          : produto.quantidade - 1,
    };

    if (params) {
      setReloadItens(true);
      await atualizaProdutosCarrinho(params);
    }

    setReloadItens(false);
  }

  async function removerItem(produtoId: number) {
    if (produtoId) {
      const { isConfirmed } = await Swal.fire({
        icon: "warning",
        title: "Remover produto.",
        text: "Deseja realmente remover esse produto do carrinho?",
        confirmButtonColor: "#DD6B20",
        confirmButtonText: "Sim",
        cancelButtonText: "Não",
        focusCancel: true,
        showCancelButton: true,
        showCloseButton: true,
      });

      if (isConfirmed) {
        setReloadItens(true);
        await removerProdutosCarrinho(produtoId);
      }

      setReloadItens(false);
    }
  }

  if (item === undefined || item === null) return null;

  return (
    <Flex
      w="100%"
      flexDir={isLessThan520 ? "column" : "row"}
      borderBottom="1px solid"
      borderColor="gray.200"
      p="3"
    >
      <HStack justifyContent={isLessThan900 ? "center" : ""}>
        <Image
          width="200px"
          height="150px"
          src={item.produto.imageProduto[0].imagem}
          alt={item.produto.nomeProduto}
        />
      </HStack>
      <VStack
        w="100%"
        alignItems={isLessThan520 ? "center" : "flex-start"}
        ml={isLessThan520 ? "0" : "10"}
        mt={isLessThan520 ? "5" : "0"}
      >
        <small>Código do Produto: {item.produto.id}</small>
        <Text fontSize="0.85rem">{item.produto.nomeProduto}</Text>
        <Text>{formatCurrency(item.produto.preco)}</Text>
        <Flex
          w="100%"
          flexDir={isLessThan520 ? "column-reverse" : "row"}
          alignItems="center"
          justifyContent="space-between"
          mt="5"
          gap={isLessThan520 ? "15px" : "0"}
        >
          <Flex w="220px" h="40px" justifyContent="space-between" gap="5px">
            <Button
              w="60px"
              h="100%"
              variant="outline"
              fontWeight="normal"
              onClick={() => changeQuantidade(item, "decrementar")}
            >
              <GrFormSubtract fontSize={20} />
            </Button>
            <Input
              flex="1"
              minW="80px"
              textAlign="center"
              defaultValue={item.quantidade}
              value={quantidade}
              onChange={handleInputChange}
              onBlur={(e) => handleInputBlur(e, item)}
            />
            <Button
              w="60px"
              h="100%"
              variant="outline"
              fontWeight="normal"
              onClick={() => changeQuantidade(item, "incrementar")}
            >
              <GrFormAdd fontSize={20} />
            </Button>
          </Flex>
          <Flex alignItems="center">
            <Button
              bg="transparent"
              _hover={{
                backgroundColor: "transparent",
              }}
              onClick={() => removerItem(item.produtoId)}
            >
              <MdDelete fontSize={20} color="#555" />
            </Button>
          </Flex>
        </Flex>
      </VStack>
    </Flex>
  );
};
