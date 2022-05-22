import {
  Flex,
  HStack,
  Image,
  VStack,
  Text,
  Input,
  useMediaQuery,
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { Button } from "../Button";

export const CarrinhoItem = () => {
  const [isLessThan900] = useMediaQuery("(max-width: 900px)");
  const [isLessThan520] = useMediaQuery("(max-width: 520px)");

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
          width="120px"
          height="150px"
          src="https://i.imgur.com/SotQn4t.jpg"
          alt="Imagem"
        />
      </HStack>
      <VStack
        w="100%"
        alignItems={isLessThan520 ? "center" : "flex-start"}
        ml={isLessThan520 ? "0" : "10"}
        mt={isLessThan520 ? "5" : "0"}
      >
        <small>Código do Produto: 200158</small>
        <Text fontSize="0.85rem">Ração Pedigree</Text>
        <Text>R$ 2.000,00</Text>
        <Flex
          w="100%"
          flexDir={isLessThan520 ? "column-reverse" : "row"}
          alignItems="center"
          justifyContent="space-between"
          mt="5"
          gap={isLessThan520 ? "15px" : "0"}
        >
          <Flex w="220px" h="40px" justifyContent="space-between" gap="5px">
            <Button w="60px" h="100%" variant="outline" fontWeight="normal">
              <GrFormSubtract fontSize={20} />
            </Button>
            <Input flex="1" minW="80px" textAlign="center" defaultValue={0} />
            <Button w="60px" h="100%" variant="outline" fontWeight="normal">
              <GrFormAdd fontSize={20} />
            </Button>
          </Flex>
          <Flex alignItems="center">
            <Button
              bg="transparent"
              _hover={{
                backgroundColor: "transparent",
              }}
            >
              <MdDelete fontSize={20} color="#555" />
            </Button>
          </Flex>
        </Flex>
      </VStack>
    </Flex>
  );
};
