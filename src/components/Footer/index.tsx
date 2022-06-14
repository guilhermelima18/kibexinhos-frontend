import { Link } from "react-router-dom";
import {
  Link as ChakraLink,
  Flex,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import bandeirasCartaoImg from "../../assets/bandeiras-cartao.jpg";
import seloGoogleIcon from "../../assets/selo_google.png";

export function Footer() {
  const [isLessThan470] = useMediaQuery("(max-width: 470px)");

  return (
    <Flex
      w="100%"
      flexDir="column"
      px="5"
      mt="10"
      borderTop="10px solid"
      borderColor="gray.200"
      pt="5"
    >
      <Flex w="100%" maxW="1200px" mx="auto">
        <SimpleGrid
          w="100%"
          minChildWidth="200px"
          justifyItems="center"
          spacing={5}
        >
          <Flex width={isLessThan470 ? "100%" : "150px"} flexDir="column">
            <Heading fontSize="1.1rem" color="gray.700" fontWeight="semibold">
              Institucional
            </Heading>
            <Flex flexDir="column" gap="5px" mt="3" fontSize="0.85rem">
              <Text _hover={{ textDecoration: "underline" }}>
                <Link to="/quem-somos">Quem Somos</Link>
              </Text>
              <Text _hover={{ textDecoration: "underline" }}>
                <Link to="/nossas-lojas">Nossas Lojas</Link>
              </Text>
              <Text _hover={{ textDecoration: "underline" }}>
                <Link to="/treinamentos">Treinamentos</Link>
              </Text>
              <Text _hover={{ textDecoration: "underline" }}>
                <Link to="/marcas">Marcas</Link>
              </Text>
              <Text _hover={{ textDecoration: "underline" }}>
                <Link to="/ofertas">Ofertas</Link>
              </Text>
              <Text _hover={{ textDecoration: "underline" }}>
                <Link to="/trabalhe-conosco">Trabalhe Conosco</Link>
              </Text>
              <Text _hover={{ textDecoration: "underline" }}>
                <Link to="/fale-conosco">Fale Conosco</Link>
              </Text>
            </Flex>
          </Flex>

          <Flex width={isLessThan470 ? "100%" : "150px"} flexDir="column">
            <Heading
              fontSize="1.1rem"
              mb="3"
              color="gray.700"
              fontWeight="semibold"
            >
              Serviços
            </Heading>
            <Flex flexDir="column" gap="5px">
              <Text _hover={{ textDecoration: "underline" }} fontSize="0.85rem">
                <Link to="/dashboard">Minha Conta</Link>
              </Text>
              <Text _hover={{ textDecoration: "underline" }} fontSize="0.85rem">
                <Link to="/politica-de-privacidade">
                  Política de Privacidade
                </Link>
              </Text>
              <Text _hover={{ textDecoration: "underline" }} fontSize="0.85rem">
                <Link to="/politica-de-uso">Política de Uso</Link>
              </Text>
            </Flex>
          </Flex>
          <Flex width={isLessThan470 ? "100%" : "150px"} flexDir="column">
            <Heading
              fontSize="1.1rem"
              mb="3"
              color="gray.700"
              fontWeight="semibold"
            >
              Siga-nos
            </Heading>
            <HStack w="100%">
              <Text
                p="3"
                borderRadius="50%"
                border="1px solid gray"
                cursor="pointer"
              >
                <ChakraLink href="/" isExternal>
                  <FaFacebookF fontSize="16" color="gray" />
                </ChakraLink>
              </Text>
              <Text
                p="3"
                borderRadius="50%"
                border="1px solid gray"
                cursor="pointer"
              >
                <ChakraLink href="/" isExternal>
                  <FaInstagram fontSize="16" color="gray" />
                </ChakraLink>
              </Text>
              <Text
                p="3"
                borderRadius="50%"
                border="1px solid gray"
                cursor="pointer"
              >
                <ChakraLink href="/" isExternal>
                  <FaYoutube fontSize="16" color="gray" />
                </ChakraLink>
              </Text>
            </HStack>
            <VStack w="100%" alignItems="flex-start" mt="5" cursor="pointer">
              <Heading fontSize="1.1rem" color="gray.700" fontWeight="semibold">
                Segurança
              </Heading>
              <Image src={seloGoogleIcon} alt="Selo de Segurança do Google" />
            </VStack>
          </Flex>

          <Flex width={isLessThan470 ? "100%" : "200px"} flexDir="column">
            <Heading
              fontSize="1.1rem"
              mb="3"
              color="gray.700"
              fontWeight="semibold"
            >
              Centrais de Atendimento
            </Heading>

            <HStack mt="3">
              <Text fontSize="0.85rem">Jaú</Text>
              <Text fontSize="0.85rem">(14) 3626-5960</Text>
            </HStack>
            <HStack mt="5" cursor="pointer">
              <Image src={bandeirasCartaoImg} alt="Bandeiras de Cartão" />
            </HStack>
          </Flex>
        </SimpleGrid>
      </Flex>

      <Flex w="100%" alignItems="center" justifyContent="center" mt="10" mb="3">
        <Text fontSize="0.8rem" textAlign="center">
          Kibexinhos Petshop | Copyright © 2022 | Todos os direitos reservados
        </Text>
      </Flex>
    </Flex>
  );
}
