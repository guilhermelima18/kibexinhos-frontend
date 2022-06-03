import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Flex, Heading, Box, Text } from "@chakra-ui/react";
import { MarcasProps } from "../../types/Marcas";

type AsideSearchProps = {
  marcas: MarcasProps[];
  size: string;
  tipoProduto: number[];
  marcasProdutos: number[];
  porte: string[];
  setTipoProduto: Dispatch<SetStateAction<number[]>>;
  setMarcasProdutos: Dispatch<SetStateAction<number[]>>;
  setPorte: Dispatch<SetStateAction<string[]>>;
};

export const AsideSearch = ({
  marcas,
  tipoProduto,
  marcasProdutos,
  porte,
  setTipoProduto,
  setMarcasProdutos,
  setPorte,
  size = "25%",
}: AsideSearchProps) => {
  if (marcas === undefined || marcas === null) return null;

  function handleMarcasChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      setMarcasProdutos([...marcasProdutos, Number(e.target.value)]);
    } else {
      const newArr = marcasProdutos.filter(
        (marca) => marca !== Number(e.target.value)
      );
      setMarcasProdutos(newArr);
    }
  }

  function handlePorteChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      setPorte([...porte, e.target.value]);
    } else {
      const newArr = porte.filter((porte) => porte !== e.target.value);
      setPorte(newArr);
    }
  }

  function handleTipoProdutoChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      setTipoProduto([...tipoProduto, Number(e.target.value)]);
    } else {
      const newArr = tipoProduto.filter(
        (tipo) => tipo !== Number(e.target.value)
      );
      setTipoProduto(newArr);
    }
  }

  return (
    <Flex w={size} flexDir="column" gap="20px">
      <Flex
        bg="white"
        w="100%"
        flexDir="column"
        p="5"
        borderRadius="5px"
        border="1px solid"
        borderColor="gray.300"
      >
        <Heading fontWeight="semibold" fontSize="1.2rem" mb="2">
          Tipo de Produto
        </Heading>
        <Box display="flex" alignItems="center" gap="5px">
          <input
            type="checkbox"
            value={1}
            checked={tipoProduto.includes(1)}
            onChange={handleTipoProdutoChange}
          />
          <Text as="span" fontSize="0.9rem">
            Ração
          </Text>
        </Box>
        <Box display="flex" alignItems="center" gap="5px">
          <input
            type="checkbox"
            value={2}
            checked={tipoProduto.includes(2)}
            onChange={handleTipoProdutoChange}
          />
          <Text as="span" fontSize="0.9rem">
            Brinquedos
          </Text>
        </Box>
        <Box display="flex" alignItems="center" gap="5px">
          <input
            type="checkbox"
            value={3}
            checked={tipoProduto.includes(3)}
            onChange={handleTipoProdutoChange}
          />
          <Text as="span" fontSize="0.9rem">
            Casinha
          </Text>
        </Box>
        <Box display="flex" alignItems="center" gap="5px">
          <input
            type="checkbox"
            value={4}
            checked={tipoProduto.includes(4)}
            onChange={handleTipoProdutoChange}
          />
          <Text as="span" fontSize="0.9rem">
            Remédio
          </Text>
        </Box>
        <Box display="flex" alignItems="center" gap="5px">
          <input
            type="checkbox"
            value={5}
            checked={tipoProduto.includes(5)}
            onChange={handleTipoProdutoChange}
          />
          <Text as="span" fontSize="0.9rem">
            Acessórios
          </Text>
        </Box>
      </Flex>
      <Flex
        bg="white"
        w="100%"
        flexDir="column"
        p="5"
        borderRadius="5px"
        border="1px solid"
        borderColor="gray.300"
      >
        <Heading fontWeight="semibold" fontSize="1.2rem" mb="2">
          Marcas
        </Heading>
        {marcas &&
          marcas.map(({ id, marca }) => (
            <Box key={id} display="flex" alignItems="center" gap="5px">
              <input
                type="checkbox"
                value={id}
                checked={marcasProdutos.includes(id)}
                onChange={handleMarcasChange}
              />
              <Text as="span" fontSize="0.9rem">
                {marca}
              </Text>
            </Box>
          ))}
      </Flex>
      <Flex
        bg="white"
        w="100%"
        flexDir="column"
        p="5"
        borderRadius="5px"
        border="1px solid"
        borderColor="gray.300"
      >
        <Heading fontWeight="semibold" fontSize="1.2rem" mb="2">
          Porte do PET
        </Heading>
        <Box display="flex" alignItems="center" gap="5px">
          <input
            type="checkbox"
            value="pequeno"
            checked={porte.includes("pequeno")}
            onChange={handlePorteChange}
          />
          <Text as="span" fontSize="0.9rem">
            Pequeno
          </Text>
        </Box>
        <Box display="flex" alignItems="center" gap="5px">
          <input
            type="checkbox"
            value="medio"
            checked={porte.includes("medio")}
            onChange={handlePorteChange}
          />
          <Text as="span" fontSize="0.9rem">
            Médio
          </Text>
        </Box>
        <Box display="flex" alignItems="center" gap="5px">
          <input
            type="checkbox"
            value="grande"
            checked={porte.includes("grande")}
            onChange={handlePorteChange}
          />
          <Text as="span" fontSize="0.9rem">
            Grande
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};
