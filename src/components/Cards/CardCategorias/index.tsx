import { Link } from "react-router-dom";
import {
  Flex,
  Image,
  Heading,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { Button } from "../../Button";

type CardCategoriasProps = {
  urlImage: string;
  title: string;
  subtitle: string;
  urlLink: string;
};

export function CardCategorias({
  urlImage,
  urlLink,
  subtitle,
  title,
}: CardCategoriasProps) {
  const [isLessThan560] = useMediaQuery("(max-width: 560px)");

  return (
    <Flex
      w="100%"
      maxW="800px"
      flexDir={isLessThan560 ? "column" : "row"}
      alignItems="center"
      p="2"
      mx="auto"
      gap="20px"
      boxShadow="0 0 5px gray"
      borderRadius="md"
    >
      <Image
        w="100%"
        maxW={isLessThan560 ? "300px" : "200px"}
        src={urlImage}
        alt={title}
        borderRadius="md"
      />
      <VStack
        maxW={isLessThan560 ? "300px" : "400px"}
        display="flex"
        alignItems="flex-start"
        my="3"
      >
        <Heading fontSize="1.3rem">{title}</Heading>
        <Text fontSize="0.8rem">{subtitle}</Text>
        <Link to={urlLink}>
          <Button colorScheme="orange" size="sm" fontSize="0.8rem">
            Ver mais
          </Button>
        </Link>
      </VStack>
    </Flex>
  );
}
