import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Flex, Heading, Box, Text } from "@chakra-ui/react";
import { MarcasProps } from "../../types/Marcas";

type AsideSearchProps = {
  marcas: MarcasProps[];
  size: string;
  marcasProdutos: number[];
  setMarcasProdutos: Dispatch<SetStateAction<number[]>>;
};

export const AsideSearch = ({
  marcas,
  marcasProdutos,
  setMarcasProdutos,
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

  return (
    <Flex w={size} flexDir="column" gap="20px">
      <Flex
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
          <input type="checkbox" />
          <Text as="span" fontSize="0.9rem">
            Ração
          </Text>
        </Box>
        <Box display="flex" alignItems="center" gap="5px">
          <input type="checkbox" />
          <Text as="span" fontSize="0.9rem">
            Brinquedos
          </Text>
        </Box>
        <Box display="flex" alignItems="center" gap="5px">
          <input type="checkbox" />
          <Text as="span" fontSize="0.9rem">
            Casinha
          </Text>
        </Box>
        <Box display="flex" alignItems="center" gap="5px">
          <input type="checkbox" />
          <Text as="span" fontSize="0.9rem">
            Remédio
          </Text>
        </Box>
        <Box display="flex" alignItems="center" gap="5px">
          <input type="checkbox" />
          <Text as="span" fontSize="0.9rem">
            Acessórios
          </Text>
        </Box>
      </Flex>
      <Flex
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
          <input type="checkbox" />
          <Text as="span" fontSize="0.9rem">
            Pequeno
          </Text>
        </Box>
        <Box display="flex" alignItems="center" gap="5px">
          <input type="checkbox" />
          <Text as="span" fontSize="0.9rem">
            Médio
          </Text>
        </Box>
        <Box display="flex" alignItems="center" gap="5px">
          <input type="checkbox" />
          <Text as="span" fontSize="0.9rem">
            Grande
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};
